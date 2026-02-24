import Link from "next/link";
import NavBar from "./NavBar";


export default function Header() {
    return (
                <div className="py-3 rounded-md mx-15 mt-5">
            <nav className="container mx-auto flex justify-between items-center text-white">
                <Link href={"/"}>
                    <h1 className="text-4xl text-cape-cod-700 font-semibold border-3 rounded-full w-15 h-15 items-center justify-center flex">LW</h1>
                </Link>
                <div className="flex xl-flex items-center gap-8">
                    <NavBar />
                </div>

            </nav>
        </div>
    );
}