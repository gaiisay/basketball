import { type Table } from '@tanstack/react-table'

import { DataTableFacetedFilter } from './DataTableFacetedFilter'
import { DataTableViewOptions } from './DataTableViewOptions'
import { type LigaList } from '@/zod/ligaList'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import {
  getAltersklassenAtom,
  getGebieteAtom,
  getGeschlechterAtom,
  getLigatypenAtom,
  getSpielklassenAtom,
  getVerbaendeAtom,
  altersklassenInputAtom,
  gebieteInputAtom,
  geschlechterInputAtom,
  ligatypenInputAtom,
  spielklassenInputAtom,
  verbaendeInputAtom,
} from '@/atoms'

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const verbaende = useAtomValue(getVerbaendeAtom)
  const gebiete = useAtomValue(getGebieteAtom)
  const ligatypen = useAtomValue(getLigatypenAtom)
  const geschlechter = useAtomValue(getGeschlechterAtom)
  const altersklassen = useAtomValue(getAltersklassenAtom)
  const spielklassen = useAtomValue(getSpielklassenAtom)

  const [verbaendeInput, setVerbaendeInput] = useAtom(verbaendeInputAtom)
  const [gebieteInput, setGebieteInput] = useAtom(gebieteInputAtom)
  const [ligatypenInput, setLigatypenInput] = useAtom(ligatypenInputAtom)
  const [geschlechterInput, setGeschlechterInput] = useAtom(
    geschlechterInputAtom
  )
  const [altersklassenInput, setAltersklassenInput] = useAtom(
    altersklassenInputAtom
  )
  const [spielklassenInput, setSpielklassenInput] = useAtom(
    spielklassenInputAtom
  )

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        {/* <Input
          placeholder="Filter tasks..."
          value={(table.getColumn('title')?.getFilterValue() as string) ?? ''}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            table.getColumn('title')?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        /> */}
        <DataTableFacetedFilter
          title="Verband"
          options={verbaende}
          selectedValues={verbaendeInput}
          setSelectedValues={setVerbaendeInput}
        />
        <DataTableFacetedFilter
          title="Gebiet"
          options={gebiete}
          selectedValues={gebieteInput}
          setSelectedValues={setGebieteInput}
        />
        <DataTableFacetedFilter
          title="Ligatyp"
          options={ligatypen}
          selectedValues={ligatypenInput}
          setSelectedValues={setLigatypenInput}
        />
        <DataTableFacetedFilter
          title="Geschlecht"
          options={geschlechter}
          selectedValues={geschlechterInput}
          setSelectedValues={setGeschlechterInput}
        />
        <DataTableFacetedFilter
          title="Altersklasse"
          options={altersklassen}
          selectedValues={altersklassenInput}
          setSelectedValues={setAltersklassenInput}
        />
        <DataTableFacetedFilter
          title="Spielklasse"
          options={spielklassen}
          selectedValues={spielklassenInput}
          setSelectedValues={setSpielklassenInput}
        />
        {/* {isFiltered && (
          <Button
            variant="ghost"
            // onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )} */}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  )
}
