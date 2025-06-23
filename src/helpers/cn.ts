import { clsx, type ClassValue } from 'clsx' // clsx is coming from cva dependency not installed in package.json
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
