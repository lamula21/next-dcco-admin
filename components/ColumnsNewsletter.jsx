import { CellAction } from './CellAction'
import { CellActionNewsletter } from './CellActionNewsLetter'

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
		cell: ({ row }) => <CellActionNewsletter data={row.original}/>,
	},
	{
		id: 'actions',
		cell: ({ row }) => <CellAction data={row.original} route="newsletters" />,
	},
]
