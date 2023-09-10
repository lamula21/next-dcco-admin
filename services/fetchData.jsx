import axios from 'axios'

export const fetchData = async (url) => {
	const data = await axios
		.get(`http://localhost:3000${url}`)
		.then((res) => res.data)

	return data
}
