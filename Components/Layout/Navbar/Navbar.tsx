import { Links } from '../Links/Links'

export const Navbar = () => {
  return (
    <nav className="flex h-20 items-center bg-white">
      <div className="mx-auto max-w-[1170px]">
        <Links />
      </div>
    </nav>
  )
}
