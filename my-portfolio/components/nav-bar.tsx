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
                return <Link href={link.path} key={index} className={`${link.path === pathname && "text-cape-cod-700 border-b-3 border-cape-cod-700"}capitalize border-cape-cod-700 text-cape-cod-700 font-medium hover:text-cornflower-500 transition-all`}>{link.name}</Link>
            })}
        </nav>

    );
}