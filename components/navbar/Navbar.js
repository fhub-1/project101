import Image from "next/image"
import LOGO from "../../public/logo.png"
import Link from 'next/link'

function Navbar() {
    return (
        <header className="sticky top-0 z-50 gride grid-cols-3 bg-white shadow-md py-5 p-5 md:px-10 ">
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image src={LOGO} alt="logo" layout="fill"
                    objectFit="contain" objectPosition="left" />
            </div>
            {/* navitems */}
            <nav class="flex px-8  justify-between">

                <div class="flex items-center space-x-3">
                    <a class="block p-3">Logo</a>
                    <a class="block p-3">Features</a>
                    <a class="block p-3">Pricing</a>
                </div>


                <div class="flex items-center space-x-3">
                    <a class="block p-3">Sign Up</a>
                    <a class="block p-3">Login</a>
                </div>
            </nav>

        </header>
    )
}

export default Navbar
