import Image from "next/image"
import LOGO from "../../public/logo.png"

function Navbar() {
    return (
        <header>
            <div>
                <Image src={LOGO} alt="logo" layout="fill"
                    objectFit="contain" objectPosition="left" />
            </div>
        </header>
    )
}

export default Navbar
