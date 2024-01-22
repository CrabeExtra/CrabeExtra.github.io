import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nodejs,
    react,
    redux,
    sass,
    tailwindcss,
    typescript,
    goeIcon,
    ruby,
    solidity,
    utas
} from "../../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: ruby,
        name: "Ruby on Rails",
        type: "Full stack"
    },
    {
        imageUrl: solidity,
        name: "Solidity",
        type: "Blockchain"
    }
];

export const experiences = [
    {
        title: "Computer Science",
        company_name: "University of Tasmania",
        icon: utas,
        iconBg: "#e42313",
        date: "2017 - 2021",
        points: [
            "Gained a strong and wide education in software engineering, mathematics, and related fields.",
            "Graduated with a Bachelor of Computer Science.",
        ],
    },
    {
        title: "Full stack engineer",
        company_name: "Guardians of Earth",
        icon: goeIcon,
        iconBg: "#17240f",
        date: "December 2021 - January 2024",
        points: [
            "Constructing, building on and maintaining site backend and frontend deployment for multiple sites. Extensive experience with the following here: ReactJS, react & bootstrap 5, javascript. typescript, SQL, postgres, MongoDB, ExpressJS (NodeJS),  Ruby on Rails, Docker, Puma, AWS (Amplify, EC2, Cloudfront, S3 and more)",
            "Collaborating with cross-functional teams including designers, executives and other developers to create high-quality products.",
            "Gitlab/github safe deployment flow, CI/CD automated deployment pipelines.",
            "DiscordJS (creating maintaining Discord bots to engage the website user base in activities that made end-user to dev support approachable)",
            "Working with many embeds and APIs such as for google maps, reverse geolocation, geojson/KML handling, Unity Engine WebGL embeds. ",
            "Constructing, developing automated tests, deploying and maintaining smart contracts (Solidity, Rust, Jest automated tests). ",
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/CrabeExtra',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/JudebBradbury',
    }
];

export const projects = [
    {
        iconUrl: goeIcon,
        theme: 'btn-back-green',
        name: 'Guardians of Earth website',
        description: 'Developed a web application that people can use to tell if their business is eco-friendly based on citizen science.',
        link: 'https://www.guardiansofearth.io',
    },
    {
        iconUrl: goeIcon,
        theme: 'btn-back-green',
        name: 'Biosmart website',
        description: 'Built onto and architected much of frontend and backend that precedes the Guardians of Earth website. A lot of associated data handling.',
        link: 'https://portal.biosmart.life/',
    }
];