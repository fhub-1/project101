import React from "react"
import Link from "next/link";
import Image from "next/image"
import Logo from "../../public/logo.png";

function Navbar() {
    return (
        <header className="bg-white shadow-md">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        {/* logo of the company */}
                        <div>
                            <ul className="flex items-center py-4 px-2">
                                <li>
                                    <Link href="/">
                                        <Image src={Logo} alt="Logo" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* primary navbar Items */}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
