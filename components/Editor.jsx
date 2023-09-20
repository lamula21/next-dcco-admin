import { useEffect, useRef, useState } from 'react'

export default function Editor({ value, onChange }) {
	const [isMounted, setIsMounted] = useState(false)
	const ref = useRef()

	const initializeEditor = async () => {
		const EditorJS = (await import('@editorjs/editorjs')).default
		const Header = (await import('@editorjs/header')).default
		const ImageTool = (await import('@editorjs/image')).default

		if (!ref.current) {
			const editor = new EditorJS({
				holder: 'editorjs',
				tools: {
					header: Header,
					image: {
						class: ImageTool,
						config: {
							uploader: {
								async uploadByFile(file) {
									const formData = new FormData()
									formData.append('file', file)
									formData.append('upload_preset', 'unewhn6p')

									const URL = process.env.NEXT_PUBLIC_CLOUDINARY_URL
									try {
										const response = await fetch(URL, {
											method: 'POST',
											body: formData,
										})
										const data = await response.json()
										return {
											success: 1,
											file: {
												url: data.secure_url,
											},
										}
									} catch (error) {
										{
											success: 0
										}
									}
								},
							},
						},
					},
				},
				data: value,
				placeholder: 'Let`s write an awesome story!',
				onChange: (api, event) => {
					api.saver.save().then((outputData) => {
						onChange(outputData)
					})
				},
			})

			ref.current = editor
		}
	}

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setIsMounted(true)
		}
	}, [])

	useEffect(() => {
		const init = async () => {
			await initializeEditor()
		}

		if (isMounted) {
			init()
			return () => {
				if (ref.current) {
					ref.current.destroy()
				}
			}
		}
	}, [isMounted])

	const save = () => {
		if (ref.current) {
			ref.current.save().then((outputData) => {
				onChange(outputData)
			})
		}
	}

	return (
		<>
			<div id="editorjs" className=""></div>
		</>
	)
}
