import { Info, OctagonAlert } from 'lucide-react'
import { cn } from '../Utilities/cn'

interface BannerProps {
  type: 'information' | 'warning'
  message: React.ReactNode
}

export function Banner({ type, message }: BannerProps) {
  return (
    <div className="flex w-full justify-center">
      <div
        className={cn(
          'bg-muted w-full max-w-2xl rounded-md px-4 py-3',
          'border-border border shadow-sm',
          'text-muted-foreground text-sm'
        )}
        role={type === 'information' ? 'status' : 'alert'}
      >
        <div className="flex items-center gap-3">
          {type === 'information' ? (
            <Info className="text-primary h-5 w-5 flex-shrink-0" />
          ) : (
            <OctagonAlert className="text-primary h-5 w-5 flex-shrink-0" />
          )}
          <p className="mb-0">{message}</p>
        </div>
      </div>
    </div>
  )
}
