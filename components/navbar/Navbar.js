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
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar
