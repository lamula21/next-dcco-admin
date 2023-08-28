import { ApiAlert } from '@/components/ApiAlert'
import { useRouter } from 'next/router'
import { useOrigin } from '@/hooks/UseOrigin'

export const ApiList = ({ entityName, entityIdName }) => {
	const router = useRouter()
	const origin = useOrigin()
	const baseUrl = `${origin}/api`

	return (
		<>
			<ApiAlert
				title="GET | Retrieve All"
				variant="public"
				description={`${baseUrl}/${entityName}`}
			/>
			<ApiAlert
				title="GET | Retrieve One"
				variant="public"
				description={`${baseUrl}/${entityName}?id={${entityIdName}}`}
			/>
			<ApiAlert
				title="POST | Create"
				variant="admin"
				description={`${baseUrl}/${entityName}`}
			/>
			<ApiAlert
				title="PUT | Edit "
				variant="admin"
				description={`${baseUrl}/${entityName}`}
			/>
			<ApiAlert
				title="DELETE"
				variant="admin"
				description={`${baseUrl}/${entityName}?id={${entityIdName}}`}
			/>
		</>
	)
}
