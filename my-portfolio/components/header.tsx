

import { Button } from "@/components/ui/button";
import Link from "next/link";
import NavBar from "./nav-bar";


export default function Header() {
    return (
        <div className="py-3 rounded-md mx-15 mt-5">
            <nav className="container mx-auto flex justify-between items-center text-white">
                <Link href={"/"}>
                    <h1 className="text-4xl text-cape-cod-700 font-semibold">Lucas.wlh( )</h1>
                </Link>
                <div className="flex xl-flex items-center gap-8">
                    <NavBar />
                    <Link href={"/contact"}>    
                        <Button className="bg-cornflower-400 rounded-sm">Hire Me</Button>
                    </Link>
                </div>

            </nav>
        </div>
    );
}