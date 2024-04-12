'use client'

import { DataTable } from '@/src/components/data-table'
import { ligaListAction } from '@/src/lib/actions'
import { useEffect } from 'react'
import { useLigaStore } from '../zustand/ligaStore'
import TableSkeleton from './TableSkeleton'
import { columns } from './columns'

export default function LigaTable() {
  const ligaList = useLigaStore((state) => state.ligaList)
  const setLigaList = useLigaStore((state) => state.setLigaList)
  const ligaListInput = useLigaStore((state) => state.ligaListInput)

  useEffect(() => {
    ligaListAction(ligaListInput).then((data) => {
      setLigaList(data)
    })
  }, [ligaListInput])

  // TODO: This is not the best solution. Handle it later
  if (!ligaList) return <TableSkeleton />

  const data = ligaList.data.ligaListe.ligen.map((liga) => ({
    id: liga.ligaId,
    liganame: liga.liganame,
    verband: liga.verbandName,
    akgGeschlecht: liga.geschlecht,
    altersklasse: liga.akName,
    spielklasse: liga.skName,
  }))

  return <DataTable columns={columns} data={data} isLigaTable />
}
