'use client'

import * as React from 'react'
import { format } from 'date-fns'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'

export function DatePicker({
	value,
	onChange,
}: {
	value?: Date
	onChange: (date: Date | undefined) => void
}) {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant={'outline'}
					className={cn(
						'flex justify-between w-[240px] text-left font-normal',
						!value && 'text-muted-foreground'
					)}
				>
					{value ? value.toString() : <span>Pick a date</span>}
					<i className="bx bx-calendar"></i>
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0" align="start">
				<Calendar
					mode="single"
					selected={value}
					onSelect={onChange}
					initialFocus
				/>
			</PopoverContent>
		</Popover>
	)
}
