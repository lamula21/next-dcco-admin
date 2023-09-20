import { Skeleton } from './ui/skeleton'

export function SkeletonEditEvent() {
	return (
		<div className="flex flex-col gap-10">
			<div className="md:grid md:grid-cols-3 gap-8">
				<div className="flex flex-col gap-1">
					<Skeleton className="h-5 w-[60px] bg-gray-300" />
					<Skeleton className="h-8 w-full bg-gray-200" />
				</div>

				<div className="flex flex-col gap-1">
					<Skeleton className="h-5 w-[60px] bg-gray-300" />
					<Skeleton className="h-20 w-full bg-gray-200" />
				</div>

				<div className="flex flex-col gap-1">
					<Skeleton className="h-5 w-[60px] bg-gray-300" />
					<Skeleton className="h-8 w-full bg-gray-200" />
				</div>

				<div className="flex flex-col gap-1">
					<Skeleton className="h-5 w-[60px] bg-gray-300" />
					<Skeleton className="h-8 w-full bg-gray-200" />
				</div>

				<div className="flex flex-col gap-1">
					<Skeleton className="h-5 w-[60px] bg-gray-300" />
					<Skeleton className="h-8 w-full bg-gray-200" />
				</div>

				<div className="flex flex-col gap-1">
					<Skeleton className="h-5 w-[60px] bg-gray-300" />
					<Skeleton className="h-8 w-full bg-gray-200" />
				</div>
			</div>

			<div className="flex flex-col mt-4 gap-6">
				<div className="flex flex-col gap-2">
					<Skeleton className="h-5 w-[60px] bg-gray-300" />
					<Skeleton className="w-[200px] h-[200px] bg-gray-200" />
				</div>

				<Skeleton className="h-8 w-[120px] rounded-md bg-gray-200" />
			</div>
		</div>
	)
}

export function SkeletonEditProduct() {
	return (
		<div className="flex flex-col gap-10">
			<div className="md:grid md:grid-cols-3 gap-8">
				<div className="flex flex-col gap-1">
					<Skeleton className="h-5 w-[60px] bg-gray-300" />
					<Skeleton className="h-8 w-full bg-gray-200" />
				</div>

				<div className="flex flex-col gap-1">
					<Skeleton className="h-5 w-[60px] bg-gray-300" />
					<Skeleton className="h-20 w-full bg-gray-200" />
				</div>

				<div className="flex flex-col gap-1">
					<Skeleton className="h-5 w-[60px] bg-gray-300" />
					<Skeleton className="h-8 w-full bg-gray-200" />
				</div>

				<div className="flex flex-col gap-1">
					<Skeleton className="h-5 w-[60px] bg-gray-300" />
					<Skeleton className="h-8 w-full bg-gray-200" />
				</div>

				<div className="flex flex-col gap-1">
					<Skeleton className="h-5 w-[60px] bg-gray-300" />
					<Skeleton className="h-8 w-full bg-gray-200" />
				</div>

				<div className="flex flex-col gap-1">
					<Skeleton className="h-5 w-[60px] bg-gray-300" />
					<Skeleton className="h-8 w-full bg-gray-200" />
				</div>
			</div>

			<div className="flex flex-col mt-4 gap-6">
				<div className="flex flex-col gap-2">
					<Skeleton className="h-5 w-[60px] bg-gray-300" />
					<Skeleton className="w-[200px] h-[200px] bg-gray-200" />
				</div>

				<Skeleton className="h-8 w-[120px] rounded-md bg-gray-200" />
			</div>
		</div>
	)
}
