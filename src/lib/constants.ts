export const SOCIAL_LINKS = {
  github: "https://github.com/millythedev",
  linkedin: "https://www.linkedin.com/in/emilio-cleveland",
  instagram: "https://www.instagram.com",
};

export const NAV_ITEMS = [
  { label: "home", href: "#home" },
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];

export const SKILLS = {
  technicalSkills: [
    "C/C++",
    "Python",
    "HTML5",
    "JavaScript",
    "Web Design",
    "Adobe Creative Cloud",
    "3D Printing/Designing",
    "Computer Technician",
    "Microsoft Office Applications",
    "ReactJS",
    "API",
    "NodeJS",
    "TypeScript",
    "Tailwind CSS",
  ],
  softSkills: [
    {
      id: "01",
      title: "non-stop learning",
      description: "Technology never stops updating, that's why those who work with technology should not stop updating themselves either."
    },
    {
      id: "02",
      title: "communicative",
      description: "No matter your profession, communication is always a need in any field."
    },
    {
      id: "03",
      title: "open-minded",
      description: "When you work for people, you need to accept new ideas from clients or team members and be able to work on them."
    }
  ]
};

export const PROJECTS: {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  link?: string;
}[] = [
  {
    title: "Better Weather",
    description: "A weather app where you can search any city or use your location to see the current weather, the next 24 hours and a 7 day forecast. The background changes with the weather and time of day.",
    image: import.meta.env.BASE_URL + "images/projects/better-weather.jpg",
    tags: ["React", "TypeScript", "API"],
    github: "https://github.com/millythedev/betterWeather",
    link: "https://millythedev.github.io/betterWeather/"
  },
  {
    title: "BetterJungle",
    description: "My League of Legends jungle tool with builds, runes, counters and an item calculator for my favorite jungle champs. I made it because the live apps eat up way too much CPU while in game.",
    image: import.meta.env.BASE_URL + "images/projects/better-jungle.jpg",
    tags: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/millythedev/betterJungle",
    link: "https://millythedev.github.io/betterJungle/"
  },
  {
    title: "Milly's Pokédex",
    description: "A Pokédex for all 386 Pokémon from Gen 1-3. Search by name or number, filter by type or region, and check stats at any level.",
    image: import.meta.env.BASE_URL + "images/projects/millydex.jpg",
    tags: ["React", "TypeScript", "API"],
    github: "https://github.com/millythedev/millydex",
    link: "https://millythedev.github.io/millydex/"
  },
  {
    title: "PriorityQ",
    description: "A command line task manager in C++. Add tasks with due dates and color coded priorities, sort and filter them, and track progress. Tasks save to a file between sessions.",
    image: import.meta.env.BASE_URL + "images/projects/priorityq.gif",
    tags: ["C++", "CLI"],
    github: "https://github.com/millythedev/PriorityQ",
    link: "https://millythedev.github.io/PriorityQ/"
  },
];
