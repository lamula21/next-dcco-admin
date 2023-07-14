'use client'

import { Trash } from 'lucide-react'
import { Button } from './ui/button'
import { Dropzone } from './Dropzone'
import Image from 'next/image'
import { toast } from 'sonner'
import { useState } from 'react'
import SyncLoader from 'react-spinners/SyncLoader'

export const ImageUpload = ({ onChange, onRemove, value }) => {
	const [loading, SetLoading] = useState(false)

	return (
		<>
			<div className="mb-4 flex flex-wrap items-center gap-8">
				{value.map((url) => (
					<div
						key={url}
						className="relative w-[200px] h-[200px] rounded-md overflow-hidden"
					>
						<div className="z-10 absolute top-2 right-2">
							<Button
								type="button"
								onClick={() => {
									onRemove(url)
									toast.message('1 image was removed.')
								}}
								variant="destructive"
								size="sm"
							>
								<Trash className="h-4 w-4" />
							</Button>
						</div>

						<Image
							fill
							className="object-cover"
							alt="Image"
							src={url}
							// rid off warnings
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					</div>
				))}

				{loading && (
					<div className="w-[200px] h-[200px] flex items-center justify-center">
						<SyncLoader
							color="#11101d"
							size={15}
							speedMultiplier="1"
							aria-label="Loading Spinner"
							data-testid="loader"
						/>
					</div>
				)}

				<Dropzone
					className="shadow-2xl border-dashed border-2 border-gray-300 rounded-lg w-[200px] h-[200px] flex flex-col items-center justify-center text-sm gap-4 text-gray-500 cursor-pointer hover:bg-zinc-200"
					onChange={onChange}
					SetLoading={SetLoading}
				/>
			</div>
		</>
	)
}
