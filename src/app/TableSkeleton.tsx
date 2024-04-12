import { DataTableColumnHeader } from '@/components/DataTableColumnHeader'
import { DataTable } from '@/components/data-table'
import { Skeleton } from '@/components/ui/skeleton'
import { Liga } from '@/types/zod/liga'
import { ColumnDef } from '@tanstack/react-table'

export default function TableSkeleton() {
  const columns: ColumnDef<Liga>[] = [
    {
      accessorKey: 'id',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="ID" />
      ),
      cell: () => <Skeleton className="h-5 w-5" />,
    },
    {
      accessorKey: 'liganame',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Liga" />
      ),
      cell: () => <Skeleton className="h-5 w-24" />,
    },
    {
      accessorKey: 'verband',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Verband" />
      ),
      cell: () => <Skeleton className="h-5 w-24" />,
    },
    {
      accessorKey: 'akgGeschlecht',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Geschlecht" />
      ),
      cell: () => <Skeleton className="h-5 w-24" />,
    },
    {
      accessorKey: 'altersklasse',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Altersklasse" />
      ),
      cell: () => <Skeleton className="h-5 w-24" />,
    },
    {
      accessorKey: 'spielklasse',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Spielklasse" />
      ),
      cell: () => <Skeleton className="h-5 w-24" />,
    },
  ]

  const data = Array.from({ length: 10 }).map((_, index) => ({
    id: index,
    liganame: 'asdfasdf',
    verband: 'asdfasdf',
    akgGeschlecht: 'asdfsadf',
    altersklasse: 'asfdsadf',
    spielklasse: 'asdfasdf',
  }))

  return <DataTable columns={columns} data={data} isLigaTable />
}
