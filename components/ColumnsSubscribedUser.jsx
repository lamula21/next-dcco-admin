import { CellAction } from './CellAction'

export const columnsSubscribedUser = [
	{
		accessorKey: 'email',
		header: 'Email',
	},
	{
		accessorKey: 'created_at',
		header: 'Subscribed at',
	},
	{
		id: 'actions',
		cell: ({ row }) => <CellAction data={row.original} route="subscribed_users"/>,
	},
]
