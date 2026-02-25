'use client'
//Shadcn Ui
import {
    Card,
}from '@/components/ui/card';
import { DATA } from '@/Data/profile';
import { ExternalLink, Folder, Github } from 'lucide-react';


export default function Project() {
    return (
        <div className='py-3 mx-15'>
            <h1 className='container mx-auto text-3xl font-medium mb-5'>Things That I`ve Built</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-10'>
                {DATA.projects.map((project,index) =>(
                    <Card className='container mx-auto p-5' key={index}>
                        <div className='flex justify-between items-center'>
                            <Folder className='w-10 h-10'/>
                            <div className='gap-4 flex'>
                                <a href={project.github}><Github className='w-5 h-5 '/></a>
                                <a href={project.link}><ExternalLink className='w-5 h-5'/></a>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-2xl font-medium mb-1'>{project.title}</h1>                  
                            <p className= 'font-normal mb-3'>{project.description}</p>
                            <ul className="flex flex-wrap gap-3 mt-auto font-mono text-xs text-zinc-500">
                                {project.tech.map((tech) => (
                                    <li key={tech}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                    </Card>
                ))} 
            </div>
        </div>
        
    );
}