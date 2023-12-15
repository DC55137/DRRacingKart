import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import { BsFacebook, BsInstagram } from 'react-icons/bs'

export function Footer() {
  return (
    <footer className="relative bg-slate-50">
      <Container>
        <div className="py-16">
          <Logo className="w-auto h-10 mx-auto" />
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="flex flex-col justify-center -my-1 text-center gap-x-6 sm:flex-row">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/shop">Shop</NavLink>
              <NavLink href="/support">Support</NavLink>
              <NavLink href="/drivers">Drivers</NavLink>
              <NavLink href="/gallery">Gallery</NavLink>
              <NavLink href="/about">About</NavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center py-10 border-t border-slate-400/10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <Link
              href="https://www.facebook.com/profile.php?id=100085597207506"
              className="group"
              aria-label="CBMR on Facebook"
            >
              <BsFacebook className="w-6 h-6 fill-slate-500" />
            </Link>
            <Link
              href="https://www.instagram.com/dr_kart_australia/"
              className="group"
              aria-label="CBMR on Instagram"
            >
              <BsInstagram className="w-6 h-6 fill-slate-500" />
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} CBMR. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
