import { type Table } from '@tanstack/react-table'

import { useLigaInputStore, useLigaStore } from '@/zustand'
import { DataTableFacetedFilter } from './DataTableFacetedFilter'
import { DataTableViewOptions } from './DataTableViewOptions'

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const verbaende = useLigaStore((state) => state.getVerbaende())
  const gebiete = useLigaStore((state) => state.getGebiete())
  const ligatypen = useLigaStore((state) => state.getLigatypen())
  const geschlechter = useLigaStore((state) => state.getGeschlechter())
  const altersklassen = useLigaStore((state) => state.getAltersklassen())
  const spielklassen = useLigaStore((state) => state.getSpielklassen())

  const ligaListInput = useLigaInputStore((state) => state.ligaListInput)
  const setVerbaendeInput = useLigaInputStore(
    (state) => state.setVerbaendeInput
  )
  const setGebieteInput = useLigaInputStore((state) => state.setGebieteInput)
  const setLigatypenInput = useLigaInputStore(
    (state) => state.setLigatypenInput
  )
  const setGeschlechterInput = useLigaInputStore(
    (state) => state.setGeschlechterInput
  )
  const setAltersklassenInput = useLigaInputStore(
    (state) => state.setAltersklassenInput
  )
  const setSpielklassenInput = useLigaInputStore(
    (state) => state.setSpielklassenInput
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
          selectedValues={ligaListInput.verbandIds}
          setSelectedValues={setVerbaendeInput}
        />
        <DataTableFacetedFilter
          title="Gebiet"
          options={gebiete}
          selectedValues={ligaListInput.gebietIds}
          setSelectedValues={setGebieteInput}
        />
        <DataTableFacetedFilter
          title="Ligatyp"
          options={ligatypen}
          selectedValues={ligaListInput.ligatypIds}
          setSelectedValues={setLigatypenInput}
        />
        <DataTableFacetedFilter
          title="Geschlecht"
          options={geschlechter}
          selectedValues={ligaListInput.akgGeschlechtIds}
          setSelectedValues={setGeschlechterInput}
        />
        <DataTableFacetedFilter
          title="Altersklasse"
          options={altersklassen}
          selectedValues={ligaListInput.altersklasseIds}
          setSelectedValues={setAltersklassenInput}
        />
        <DataTableFacetedFilter
          title="Spielklasse"
          options={spielklassen}
          selectedValues={ligaListInput.gebietIds}
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
