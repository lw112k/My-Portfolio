

import { Button } from "@/components/ui/button";
import Link from "next/link";
import NavBar from "./nav-bar";


export default function Header() {
    return (
        <div className="py-8 xl-py-12">
            <nav className="container mx-auto flex justify-between items-center text-white">
                <Link href={"/"}>
                    <h1 className="text-4xl">Lucas<span className="text-blue-200">.wlh( )</span></h1>
                </Link>
                <div className="flex xl-flex items-center gap-8">
                    <NavBar />
                    <Link href={"/contact"}>    
                        <Button>Hire Me</Button>
                    </Link>
                </div>

            </nav>
        </div>
    );
}