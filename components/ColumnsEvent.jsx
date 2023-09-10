import { CellAction } from './CellAction'

export const columnsEvent = [
	{
		accessorKey: 'title',
		header: 'Name',
	},
	{
		accessorKey: 'description',
		header: 'Description',
	},
	{
		accessorKey: 'date',
		header: 'Date',
	},
	{
		accessorKey: 'hour',
		header: 'Hour',
	},

	{
		id: 'actions',
		cell: ({ row }) => <CellAction data={row.original} route="events"/>,
	},
]
