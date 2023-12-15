import Image from 'next/image'

import LogoImage from '@/images/DRLogo.svg'

export function Logo(props) {
  return <Image src={LogoImage} alt={'Logo'} {...props} loading="eager" />
}

