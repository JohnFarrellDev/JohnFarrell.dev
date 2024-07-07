import { Underline } from '../Underline/Underline'
import { cn } from '../../../Utilities/cn'

interface TitleProps {
  title: string
  className?: string
}

export const Title = ({ title, className }: TitleProps) => {
  return (
    <div className={cn('mb-8 text-center', className)}>
      <h2>{title}</h2>
      <Underline className="mx-auto" />
    </div>
  )
}
