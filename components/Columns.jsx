import { CellAction } from './CellAction'

export const columns = [
	{
		accessorKey: 'title',
		header: 'Name',
	},
	{
		accessorKey: 'price',
		header: 'Price',
	},
	{
		accessorKey: 'category',
		header: 'Category',
	},
	{
		accessorKey: 'size',
		header: 'Size',
	},
	{
		accessorKey: 'color',
		header: 'Color',
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
