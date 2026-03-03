"use client"
import Image from "next/image";
import profilePic from '@/public/images/headshot.jpg';
import { DATA } from '@/Data/profile';
import { Button } from "./ui/button";
import Link from 'next/link';


export default function About() {
    const cv = "Lucas-Wong-Li-Hong-CV.pdf";
    const href = "/components/file";    

    return (
        <section className="min-h-screen w-full flex items-center justify-center scroll-mt-20 py-20">
            {/*Grid split 2, left & right side*/}
            <div className="container items-center mx-auto px-20 grid grid-cols-2">
                {/*Left side Image Box*/}
                <div className="order-2 md:order-1">
                    <div className="relative group w-100 h-100 lg:w-[450px] lg:h-[450px]">
                        <div className="absolute inset-0 bg-cornflower-500 rounded-md translate-x-10 -translate-y-5">
                            {/*Insert Image*/}
                        </div>
                            <div className="relative w-80 h-80 rounded-md overflow-hidden translate-y-50 -translate-x-5">
                                {/*Insert Image*/}
                                <Image src={profilePic} alt={DATA.name} fill className="object-cover" />
                            <div/>
                        </div>
                    </div>
                </div>

                {/*Right side Image Box*/}
                <div className="order-1">
                    <div className="justify-center align-middle">
                        <h1 className="text-5xl font-bold">Who Am I ?</h1>
                        <p className="mt-4 text-justify">{DATA.bio}</p>
                        <Link href={"/Lucas-Wong-Li-Hong-CV.pdf"} download="Lucas Wong Li Hong CV"><Button className="mt-4">Download My CV</Button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
}