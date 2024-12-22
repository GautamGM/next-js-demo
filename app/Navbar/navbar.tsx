"use client"

import Link from "next/link"
const Navbar=()=>{
    const navOption=[
        {
        id:"1",
        navLink:"Home",
        to:"/"
        },
        {
            id:"2",
            navLink:"profile",
            to:"/profile"
        },
        {
            id:3,
            navLink:"about",
            to:"/about"
        },
        {
            id:4,
            navLink:"product",
            to:"/product"
        }

    ]
    return(
        <>
        <nav className="flex justify-between bg-black text-white w-[100%] text-2xl">
            {navOption.map((nav)=>{
                return(
                    <Link href={nav.to}>
                        {nav.navLink}
                    </Link>
                )
            })}
        </nav>
        </>
    )
}
export default Navbar