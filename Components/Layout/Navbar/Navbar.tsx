import { Links } from '../Links/Links'

export const Navbar = () => {
  return (
    <nav className="flex h-20 items-center bg-white px-4">
      <div className="mx-auto flex w-full max-w-[1170px] justify-end">
        <Links />
      </div>
    </nav>
  )
}
