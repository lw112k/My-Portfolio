"use client";
import { DATA } from '@/Data/profile';
import Image from 'next/image';
import profilePic from '@/components/image/headshot.jpg';
import { Linkedin, Mail} from 'lucide-react';
import { Button } from './ui/button';


export default function Hero() {
    const linkedinURL = "www.linkedin.com/in/lucaswlh1103";
    return (
        <section id="hero" className="min-h-screen w-full flex items-center justify-center scroll-mt-20 py-20">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                
                {/* Left Side: Text Content */}
                <div className="order-2 md:order-1">
                    <h1 className="text-6xl md:text-8xl font-bold text-cornflower-500 tracking-tighter">
                        {DATA.name}
                    </h1>
                    <p className="text-xl md:text-2xl text-cape-cod-500 mt-4 font-medium">
                        {DATA.role}
                    </p>
                    <a href="#contact"><Button className='mt-3 '>Contact Me</Button></a>
                </div>

                {/* Right Side: Image Placeholder/Container */}
                <div className="order-1 md:order-2 flex justify-center md:justify-end">
                    <div className="relative group w-80 h-80 lg:w-[450px] lg:h-[450px]">
                        {/* Decorative Background Square */}
                        <div className="absolute inset-0 bg-cornflower-500 rounded-md translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                        
                        {/* Main Image Container */}
                        <div className="relative w-full h-full bg-zinc-800 rounded-md overflow-hidden">
                            <div className="w-full h-full bg-zinc-700 flex flex-col items-center justify-center text-zinc-500 font-mono text-xs">
                                <Image src={profilePic} alt={DATA.name} fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}