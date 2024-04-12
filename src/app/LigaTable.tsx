'use client'

import { useEffect } from 'react'

import { DataTable } from '@/components/data-table'
import { ligaListAction } from '@/lib/actions'
import { useLigaInputStore, useLigaStore } from '@/zustand'
import TableSkeleton from './TableSkeleton'
import { columns } from './columns'

export default function LigaTable() {
  const ligaList = useLigaStore((state) => state.ligaList)
  const setLigaList = useLigaStore((state) => state.setLigaList)
  const ligaListInput = useLigaInputStore((state) => state.ligaListInput)
  const hasHydrated = useLigaInputStore((state) => state._hasHydrated)

  useEffect(() => {
    if (!hasHydrated) return

    ligaListAction(ligaListInput).then((data) => {
      setLigaList(data)
    })
  }, [ligaListInput, hasHydrated])

  if (!hasHydrated) return <TableSkeleton />

  if (!ligaList) return null

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
