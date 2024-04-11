'use client'

import { DataTable } from '@/components/data-table'
import { columns } from './columns'
import { useAtom, useAtomValue } from 'jotai'
import { ligaListAtom, ligaListInputAtom } from '@/atoms'
import { ligaListAction } from '@/lib/actions'
import { Suspense, useEffect } from 'react'
import TableSkeleton from './TableSkeleton'

export default function LigaTable() {
  const [ligaList, setLigaList] = useAtom(ligaListAtom)
  const ligaListInput = useAtomValue(ligaListInputAtom)

  useEffect(() => {
    ligaListAction(ligaListInput).then((data) => {
      setLigaList(data)
    })
  }, [])

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
