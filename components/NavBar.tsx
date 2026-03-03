"use client"

import Link from "next/link";
import {usePathname} from "next/navigation";


export default function NavBar() {
    const links = [
        {name:'About',path:'#about'},
        {name:'Experience',path:'#experience'},
        {name:'Project',path:'#project'},
        {name:'Contact',path:'#contact'},
    ];

    const pathname = usePathname();
    return (
        <nav className="flex gap-8"> 
            {links.map((link, index) => {
                const isActive = false;
            
                return (
                    <Link 
                        href={link.path} 
                        key={index} 
                        className={`
                            ${isActive ? "text-cornflower-500 border-b-2" : "text-cape-cod-700"}
                            capitalize font-medium hover:text-cornflower-500 transition-all
                        `}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
}