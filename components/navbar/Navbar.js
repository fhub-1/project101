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
            <div className="hidden md:flex items-center space-x-1">
                <ul>
                    <li className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold">
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold ">
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold ">
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold">
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                </ul>

                <div class="hidden md:flex items-center space-x-3 ">
                    <a
                        href="/"
                        class="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"
                    >Log In</a
                    >
                    <a
                        href="/"
                        class="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300"
                    >Sign Up</a
                    >
                </div>
            </div>
        </header>
    )
}

export default Navbar
