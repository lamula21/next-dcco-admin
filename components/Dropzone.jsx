import React, { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { UploadIcon } from './Icons/UploadIcon'
import { toast } from 'sonner'

export const Dropzone = ({ onChange, className }) => {
	const [files, SetFiles] = useState([])

	const onDrop = useCallback((acceptedFiles) => {
		if (acceptedFiles?.length) {
			SetFiles(acceptedFiles)
		}
	}, [])

	async function postToCloudinary() {
		// Create a form ready to be sent thru HTTPS to Cloudinary
		const formData = new FormData()
		files.forEach((file) => formData.append('file', file))
		formData.append('upload_preset', 'unewhn6p')

		const URL = process.env.NEXT_PUBLIC_CLOUDINARY_URL
		try {
			const response = await fetch(URL, {
				method: 'POST',
				body: formData,
			})
			const data = await response.json()
			onChange(data.secure_url)
			toast.message('1 image was added.')
		} catch (error) {
			toast.error('Something went wrong.')
		}
	}

	useEffect(() => {
		if (files?.length) {
			// Upload Files to Cloudinary
			postToCloudinary()
		}
	}, [files])

	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

	return (
		<div {...getRootProps({ className: className })}>
			<input {...getInputProps()} />
			{isDragActive ? (
				<p>Drop the Images here ...</p>
			) : (
				<>
					<UploadIcon className="w-12 h-12" />
					<p>Upload Images</p>
				</>
			)}
		</div>
	)
}
