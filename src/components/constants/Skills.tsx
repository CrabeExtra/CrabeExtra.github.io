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
    utas,
    dematic
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
        title: "Software Engineer",
        company_name: "Dematic",
        icon: dematic,
        iconBg: "#fff",
        date: "April 2024 - Present",
        points: [
            "Building vast proportions or the entirety of warehouse optimisation projects from the ground up as well as by building upon legacy code.",

            "This includes using a variety of the following technologies, techniques, languages and frameworks: C#, ASPNET Core, LINQ, Moq, Javascript, Nodejs, ExpressJs, Typescript, React, Bootstrap, VueJs, Python, Java (Legacy Springboot, custom libraries), MS SQL Server, SQLite, Docker, .NET EF Core, Gitlab, Azure, RDP, Windows FTP, Windows Scheduler, Windows Services, Hyper-V, Jira, Intellij suite.",

            "Building APIs, service logic and repository/entity logic.",

            "Soldering, wiring and programming microprocessors in C.",

            "Multithreaded programming, thread pool handling, resource allocation, validation, verification and encryption (build encryption systems and environment machine serial verification from scratch).",

            "Managed server health with resource monitor and alert scripts as well as quarterly reviews on server resource metrics, sending any relevant information to clients with actionable descriptions.",

            "Supporting several clients on an on-call schedule to maintain up-time and manage issues.",

            "Handling the development as the sole developer for some projects as well as co-developer on some. Often as the go-to developer for customers.",

            "Mentoring and inducting Jr/graduate software engineers and engineering interns.",

            "Planning and leading sprints.",

            "Assisted in recruitment interviews and wrote interview tests for new engineers."
        ],
    },
    {
        title: "Full stack engineer",
        company_name: "Guardians of Earth",
        icon: goeIcon,
        iconBg: "#17240f",
        date: "December 2021 - February 2024",
        points: [
            "Constructing, building on and maintaining site backend and frontend deployment for multiple sites. Extensive experience with the following here: ReactJS, react & bootstrap 5, javascript. typescript, SQL, postgres, MongoDB, ExpressJS (NodeJS),  Ruby on Rails, Docker, Puma, AWS (Amplify, EC2, Cloudfront, S3 and more)",
            "Collaborating with cross-functional teams including designers, executives and other developers to create high-quality products.",
            "Gitlab/github safe deployment flow, CI/CD automated deployment pipelines.",
            "DiscordJS (creating maintaining Discord bots to engage the website user base in activities that made end-user to dev support approachable)",
            "Working with many embeds and APIs such as for google maps, reverse geolocation, geojson/KML handling, Unity Engine WebGL embeds. ",
            "Constructing, developing automated tests, deploying and maintaining smart contracts (Solidity, Rust, Jest automated tests). ",
        ],
    },
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