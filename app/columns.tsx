'use client'

import { DataTableColumnHeader } from '@/components/DataTableColumnHeader'
import { Liga } from '@/zod/liga'
import { type ColumnDef } from '@tanstack/react-table'

export const columns: ColumnDef<Liga>[] = [
  {
    accessorKey: 'id',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
  },
  {
    accessorKey: 'liganame',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Liga" />
    ),
  },
  {
    accessorKey: 'verband',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Verband" />
    ),
  },
  {
    accessorKey: 'akgGeschlecht',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Geschlecht" />
    ),
  },
  {
    accessorKey: 'altersklasse',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Altersklasse" />
    ),
  },
  {
    accessorKey: 'spielklasse',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Spielklasse" />
    ),
  },
]
