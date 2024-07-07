import { Underline } from '../Underline/Underline'

interface TitleProps {
  title: string
}

export const Title = ({ title }: TitleProps) => {
  return (
    <div className="mb-4 text-center">
      <h2>{title}</h2>
      <Underline className="mx-auto" />
    </div>
  )
}
