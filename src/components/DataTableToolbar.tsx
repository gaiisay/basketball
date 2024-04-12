import { type Table } from '@tanstack/react-table'

import { useLigaStore } from '../zustand/ligaStore'
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

  const ligaListInput = useLigaStore((state) => state.ligaListInput)
  const setVerbaendeInput = useLigaStore((state) => state.setVerbaendeInput)
  const setGebieteInput = useLigaStore((state) => state.setGebieteInput)
  const setLigatypenInput = useLigaStore((state) => state.setLigatypenInput)
  const setGeschlechterInput = useLigaStore(
    (state) => state.setGeschlechterInput
  )
  const setAltersklassenInput = useLigaStore(
    (state) => state.setAltersklassenInput
  )
  const setSpielklassenInput = useLigaStore(
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
