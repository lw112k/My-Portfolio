'use client'
//Shadcn Ui
import {
    Card,
}from '@/components/ui/card';
import { DATA } from '@/Data/profile';
import { ExternalLink, Folder, Github } from 'lucide-react';


export default function Project() {
    return (
        <section className="min-h-screen w-full py-20 flex flex-col items-center justify-center scroll-mt-20">
            <div className="container mx-auto px-6">

                {/*Section Header*/}
                <h1 className='text-3xl md:text-4xl font-semibold mb-10 text-cape-cod-700'>
                    Things That I`ve Built
                </h1>
                {/* Grid Layout */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {DATA.projects.map((project, index) => (
                        <Card 
                            className='p-6 flex flex-col h-full bg-white/50 backdrop-blur-sm border-cape-cod-100 hover:-translate-y-2 transition-transform duration-300' 
                            key={index}
                        >
                            {/* Icons Row */}
                            <div className='flex justify-between items-center mb-6'>
                                <Folder className='w-10 h-10 text-cornflower-500' />
                                <div className='flex gap-4 text-cape-cod-400'>
                                    {project.github && (
                                        <a href={project.github} target="_blank" className='hover:text-cornflower-500 transition-colors'>
                                            <Github className='w-5 h-5' />
                                        </a>
                                    )}
                                    {project.link && (
                                        <a href={project.link} target="_blank" className='hover:text-cornflower-500 transition-colors'>
                                            <ExternalLink className='w-5 h-5' />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Content Row */}
                            <div className='flex-grow'>
                                <h3 className='text-2xl font-bold mb-2 text-cape-cod-800'>{project.title}</h3>                  
                                <p className='text-cape-cod-600 font-normal mb-4 line-clamp-3'>
                                    {project.description}
                                </p>
                            </div>

                            {/* Tech Tags */}
                            <ul className="flex flex-wrap gap-x-4 gap-y-2 mt-4 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                                {project.tech.map((tech) => (
                                    <li key={tech} className="bg-zinc-100 px-2 py-1 rounded">
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    ))} 
                </div>
            </div>
        </section>        
    );
}