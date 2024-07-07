import { Underline } from '../Underline/Underline'
import { cn } from '../../../Utilities/cn'

interface TitleProps {
  title: string
  extraStyles?: string
}

export const Title = ({ title, extraStyles }: TitleProps) => {
  return (
    <div className={cn('mb-16 text-center', extraStyles)}>
      <h2>{title}</h2>
      <Underline className="mx-auto" />
    </div>
  )
}
