import React from "react";
export default function Navbar() {
    return (
        <div class="hidden md:flex items-center space-x-1">
            <a
                href=""
                class="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold "
            >Home</a
            >
            <a
                href=""
                class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
            >Services</a
            >
            <a
                href=""
                class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
            >About</a
            >
            <a
                href=""
                class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
            >Contact Us</a
            >
        </div>
    )
}
