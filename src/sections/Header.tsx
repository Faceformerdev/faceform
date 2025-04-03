import Logo from '@/assets/logofixed.png'
import Image from 'next/image'
import MenuIcon from '@/assets/menu.svg'

export const Header2 = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white h-5">
        <div className="inline-flex gap-1 items-center"></div>
        <p>Gesundheit braucht Verstand </p>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Saas Logo" height={50} width={160}></Image>
            <Image src={MenuIcon} alt="Menu" className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="Therapie">Therapie</a>
              <a href="Training">Training</a>
              <a href="Wissen">Wissen</a>
              <a href="Feedback">Feedback</a>
              <a href="Fortbildung">Fortbildung</a>
              <button className="bg-[#97bf0c] text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
                Shop
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
