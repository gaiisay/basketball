'use client'

import { CheckIcon, PlusCircledIcon } from '@radix-ui/react-icons'

import { ligaListAction } from '@/src/lib/actions'
import { cn } from '@/src/lib/utils'
import { useLigaStore } from '../zustand/ligaStore'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from './ui/command'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Separator } from './ui/separator'

interface DataTableFacetedFilterProps {
  title?: string
  selectedValues: number[]
  setSelectedValues: (update: number[]) => void
  options: {
    label: string
    value: string
    hits?: number
    icon?: React.ComponentType<{ className?: string }>
  }[]
}

export function DataTableFacetedFilter({
  title,
  selectedValues,
  setSelectedValues,
  options,
}: DataTableFacetedFilterProps) {
  const ligaListInput = useLigaStore((state) => state.ligaListInput)

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 border-dashed">
          <PlusCircledIcon className="mr-2 h-4 w-4" />
          {title}
          {selectedValues?.length > 0 && (
            <>
              <Separator orientation="vertical" className="mx-2 h-4" />
              <Badge
                variant="secondary"
                className="rounded-sm px-1 font-normal lg:hidden"
              >
                {selectedValues.length}
              </Badge>
              <div className="hidden space-x-1 lg:flex">
                {selectedValues.length > 2 ? (
                  <Badge
                    variant="secondary"
                    className="rounded-sm px-1 font-normal"
                  >
                    {selectedValues.length} selected
                  </Badge>
                ) : (
                  options
                    .filter((option) =>
                      selectedValues
                        .map((s) => s.toString())
                        .includes(option.value)
                    )
                    .map((option) => (
                      <Badge
                        variant="secondary"
                        key={option.value}
                        className="rounded-sm px-1 font-normal"
                      >
                        {option.label}
                      </Badge>
                    ))
                )}
              </div>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        <Command>
          <CommandInput placeholder={title} />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => {
                const isSelected = selectedValues
                  .map((s) => s.toString())
                  .includes(option.value)
                return (
                  <CommandItem
                    key={option.value}
                    onSelect={async () => {
                      if (isSelected) {
                        setSelectedValues([
                          ...selectedValues.filter(
                            (value) => value.toString() !== option.value
                          ),
                        ])
                        console.log(ligaListInput)
                        ligaListAction(ligaListInput)
                      } else {
                        setSelectedValues([
                          ...selectedValues,
                          parseInt(option.value),
                        ])
                        console.log(ligaListInput)
                        ligaListAction(ligaListInput)
                      }
                    }}
                  >
                    <div
                      className={cn(
                        'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary',
                        isSelected
                          ? 'bg-primary text-primary-foreground'
                          : 'opacity-50 [&_svg]:invisible'
                      )}
                    >
                      <CheckIcon className={cn('h-4 w-4')} />
                    </div>
                    {option.icon && (
                      <option.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                    )}
                    <span>{option.label}</span>
                    {option.hits && (
                      <span className="ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs">
                        {option.hits}
                      </span>
                    )}
                  </CommandItem>
                )
              })}
            </CommandGroup>
            {selectedValues.length > 0 && (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem
                    // onSelect={() => column?.setFilterValue(undefined)}
                    className="justify-center text-center"
                  >
                    Clear filters
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
