import { twMerge as twMergeOriginal } from 'tailwind-merge'
import { clsx, ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return twMergeOriginal(clsx(inputs))
}
