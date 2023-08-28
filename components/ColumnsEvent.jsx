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
		accessorKey: 'category',
		header: 'Category',
	},
	{
		accessorKey: 'address',
		header: 'Address',
	},
	{
		accessorKey: 'createdAt',
		header: 'Date',
	},

	{
		id: 'actions',
		cell: ({ row }) => <CellAction data={row.original} />,
	},
]
