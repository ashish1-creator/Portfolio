const navLinks = [
    {
        name: "About me",
        link: "#about-me",
    },
    {
        name: " Skills",
        link: "#experience",
    },
    // {
    //     name: "Experience",
    //     link: "#experience",
    // },
    {
        name:  "Work",
        link: "#work",
    },
];

const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
    { value: "Fresher", suffix: " ", label: "Career Stage" },
    { value: 100, suffix: "%", label: "Learning Enthusiasm" },
    { value: 10, suffix: "+", label: "Technologies learned" },
    { value: 5, suffix: "+", label: "Projects && Mini-Projects" },
];

const logoIconsList = [
    {
        imgPath: "/images/logos/company-logo-1.png",
    },
    {
        imgPath: "/images/logos/company-logo-2.png",
    },
    {
        imgPath: "/images/logos/company-logo-3.png",
    },
    {
        imgPath: "/images/logos/company-logo-4.png",
    },
    {
        imgPath: "/images/logos/company-logo-5.png",
    },
    {
        imgPath: "/images/logos/company-logo-6.png",
    },
    {
        imgPath: "/images/logos/company-logo-7.png",
    },
    {
        imgPath: "/images/logos/company-logo-8.png",
    },
    {
        imgPath: "/images/logos/company-logo-9.png",
    },
    {
        imgPath: "/images/logos/company-logo-10.png",
    },
    {
        imgPath: "/images/logos/company-logo-11.png",
    },
];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Quick Learner",
        desc: "Able to grasp new technologies and concepts quickly through consistent and curiosity.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Team Collabaration",
        desc: "Enjoys working with others,sharing ideas, and contributing to achieve common project goals.",
    },
    {
        imgPath: "/images/time.png",
        title: "Problem-Solving Mindset",
        desc: "Approaches challenges logically and works towards efficient and creative solutions.",
    },
];

const techStackImgs = [
    {
        name: "React Developer",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "Python Developer",
        imgPath: "/images/logos/python.svg",
    },
    {
        name: "Backend Developer",
        imgPath: "/images/logos/node.png",
    },
    {
        name: "Interactive Developer",
        imgPath: "/images/logos/three.png",
    },
    {
        name: "Project Manager",
        imgPath: "/images/logos/git.svg",
    },
];

const techStackIcons = [
    {
        name: "React Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Python Developer",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend Developer",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Interactive Developer",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Manager",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        review: "Frameworks & Libraries: " +
            " React.js ⚛️ ,  Bootstrap / Tailwind CSS ,       "

            + "    \n       Tools & Concepts:\n " +
            "\n" +
            "  Responsive Web Design ,  \n" +
            "\n" +
            "\n" +
            "Version Control (Git, GitHub) ",
        imgPath: "/images/exp1.png",
        logoPath: "/images/logo1.png",
        title: "Frontend Developer",
        date: "January 2023 - Present",
        responsibilities: [
            "HTML5 ( Hyper Text MarkUp Language )",
            "CSS3 ( Cascading Style Sheet )",
            "JavaScript (ES6+)",
        ],
    },
    {
        review:"Frameworks & Tools: Spring Framework , Spring Boot ,"+
            "\n Server & API Development: Creating REST APIs ,  JSON Data Handling",
        imgPath: "/images/exp2.png",
        logoPath: "/images/logo2.png",
        title: "Backend(Java) Developer",
        date: "June 2020 - December 2023",
        responsibilities: [
            "OOPs            ,  Exception Handling  ",
            "Multithreading  ,  Collections Framework ",
            " File Handling  ,  Generics & Streams",
        ],
    },
    {
        review: "Additional Tools:\n" +
            "\n" +
            "Postman (API Testing)\n" +
            "\n" +
            "VS Code / IntelliJ IDEA\n" +
            "\n" +
            "Git & GitHub",
        imgPath: "/images/exp3.png",
        logoPath: "/images/logo3.png",
        title: "Tools & Database Management",
        date: "March 2019 - May 2020",
        responsibilities: [
            "MySQL",
            "MongoDB",
            "Postman API",


        ],
    },
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];

const testimonials = [
    {
        name: "Who I Am",
        review:
           "I’m an MCA graduate passionate about Full Stack Development using Java and React."+" I love exploring new technologies and turning ideas into real-world applications.",
        imgPath: "/images/client1.png",
    },
    {
        name: "Academic Qualifications",
        review:
                       "   Bachelor’s Degree – B.com(Tax) - 2023  "+ " Master of Computer Applications (MCA) – JNTUH, 2025",
        imgPath: "/images/client3.png",
    },
    {
        name: "Strengths",
        review:
            "Quick Learner -   " +
            "Problem Solver -  " +
            "Team Player  -  " +
            "Adaptable - " +
            "Detail-Oriented  ",
        imgPath: "/images/client2.png",
    },
    {
        name: "Hobbies",
        review:
            "Coding personal projects and exploring new technologies.  \n" +
            "Listening to music and reading about tech innovations.  \n" +
            "Practicing meditation to stay focused and creative.  \n" +
            "Learning through online tutorials and blogs.\n",
        imgPath: "/images/client5.png",
    },
    {
        name: "Career Objective",
        review:
            "To start my career as a Java Full Stack Developer.  \n" +
            "To contribute to real-world projects while continuously learning.  \n" +
            "To grow both technically and personally through hands-on experience.  \n" +
            "To become a valuable part of a dynamic development team.\n",
        imgPath: "/images/client4.png",
    },
    {
        name: "Technical Tools",
        review:
            "VS Code – Code editor for frontend and backend development.  \n" +
            "Git & GitHub – Version control and collaboration.  \n" +
            "Postman – API testing and debugging tool.  \n" +
            "IntelliJ IDEA – Java development environment.  \n" +
            "Eclipse – Additional IDE for Java applications.\n",
        imgPath: "/images/client6.png",
    },
];

const socialImgs = [
    {
        name: "insta",
        imgPath: "/images/insta.png",
    },
    {
        name: "fb",
        imgPath: "/images/fb.png",
    },
    {
        name: "x",
        imgPath: "/images/x.png",
    },
    {
        name: "linkedin",
        imgPath: "/images/linkedin.png",
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};
