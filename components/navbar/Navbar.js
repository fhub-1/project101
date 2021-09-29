import Image from "next/image"
import LOGO from "../../public/logo.png"

function Navbar() {
    return (
        <header className="sticky top-0 z-50 gride grid-cols-3 bg-white shadow-md py-5 px-5">
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image src={LOGO} alt="logo" layout="fill"
                    objectFit="contain" objectPosition="left" />
            </div>

            {/* navitems part  */}
            <div className="hidden md:flex items-center space-x-1">
                <a
                    href="/"
                    className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold "
                >Home</a
                >
                <a
                    href="/"
                    className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                >Services</a
                >
                <a
                    href="/"
                    className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                >About</a
                >
                <a
                    href="/"
                    className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                >Contact Us</a
                >
            </div>
        </header>
    )
}

export default Navbar
