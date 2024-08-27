import { Info, OctagonAlert } from 'lucide-react'
import { cn } from '../Utilities/cn'

interface BannerProps {
  type: 'information' | 'warning'
  message: React.ReactNode
}

export function Banner({ type, message }: BannerProps) {
  return (
    <div className="my-4 flex w-full justify-center">
      <div
        className={cn(
          'w-full max-w-2xl rounded-md px-4 py-3',
          'border shadow-sm',
          'text-sm',
          type === 'information'
            ? 'border-blue-200 bg-blue-50 text-blue-800'
            : 'border-yellow-200 bg-yellow-50 text-yellow-800'
        )}
        role={type === 'information' ? 'status' : 'alert'}
      >
        <div className="flex items-center gap-3">
          {type === 'information' ? (
            <Info className="h-5 w-5 flex-shrink-0 text-blue-600" />
          ) : (
            <OctagonAlert className="h-5 w-5 flex-shrink-0 text-yellow-600" />
          )}
          <p className="mb-0">{message}</p>
        </div>
      </div>
    </div>
  )
}
