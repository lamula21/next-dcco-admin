import { CellAction } from './CellAction'

export const columnsNewsletter = [
	{
		accessorKey: 'title',
		header: 'Name',
	},
	{
		accessorKey: 'author',
		header: 'Author',
	},
	{
		accessorKey: 'sendDate',
		header: 'Send At',
	},
	{
		id: 'actions',
		cell: ({ row }) => <CellAction data={row.original} route="newsletters" />,
	},
]
