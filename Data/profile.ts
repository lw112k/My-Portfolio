export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
}

export const DATA = {
    //Profile 
    name:'Lucas Wong Li Hong',
    role:'Junior Software Engineer',
    bio:'Software engineer who loves creating meaningful digital experiences. I work across frontend and backend systems, enjoy tackling challenging problems, and constantly look for ways to improve performance, code quality, and team workflows. Whether it`s designing APIs, optimizing UI experiences, or experimenting with new tools, I`m happiest when I`m building something that makes people`s lives easier.',
    skills:["Next.Js"],
    //Project
    projects:[
        {
            title: "KL Transit Web App",
            description: "A web app that allows user to search for fastest and shortest route in KL public transport.",
            tech: ["Next.js", "TypeScript"],
            link: "#",
            github: "https://github.com/lw112k/KL-Transit"
        },
        {
            title: "TaskMaster AI",
            description: "An intelligent task management application that uses NLP to automatically categorize and prioritize to-dos based on context.",
            tech: ["React", "Python", "FastAPI", "OpenAI API"],
            link: "#",
            github: "#"
        },
        {
            title: "EcoQuest: Campus Green Initiatives Web App",
            description: "An App that promotes eco-friendly activities in campus life. Encourage students and staff to take part in sustainability campaigns to earn rewards through weekly quests.",
            tech: ["HTML", "CSS", "JavaScript", "PHP","MySql"],
            link: "#",
            github: "https://github.com/lw112k/Group7_EcoQuest"
        },
        {
            title: "Nebula UI",
            description: "A lightweight, accessible component library built with React and Tailwind CSS, designed for rapid prototyping.",
            tech: ["TypeScript", "React", "Storybook", "NPM"],
            link: "#",
            github: "#"
        }
    ],
}