import Image from "next/image"
import LOGO from "../../public/logo.png"

function Navbar() {
    return (
        <header className="sticky top-0 z-50 gride grid-cols-3 bg-white shadow-md py-5 px-5">
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image src={LOGO} alt="logo" layout="fill"
                    objectFit="contain" objectPosition="left" />
            </div>
        </header>
    )
}

export default Navbar
