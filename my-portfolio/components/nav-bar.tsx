"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';


const links = [
    {
        name:"Home",
        path:"/"
    },
    {
        name:"About",
        path:"/about"
    },
    {
        name:"Services",
        path:"/services"
    },
    {
        name:"Portfolio",
        path:"/portfolio"
    },
];

export default function NavBar() {
    const pathname = usePathname()
    return (
        <nav className="flex gap-8"> 
            {links.map((link,index) => {
                return <Link href={link.path} key={index} className={`${link.path === pathname && "text-blue-200 border-b-2 border-blue-300 "} capitalize font-medium hover:text-blue-200 transition-all`}>{link.name}</Link>
            })}
        </nav>

    );
}