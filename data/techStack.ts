import { TechStackCategory, TechStackItem } from '@/types'

export const techStackCategories: TechStackCategory[] = [
    {
        title: 'Front-End',
        description: 'Interactive pages, responsive layouts, and client-side logic.',
        accent: 'from-orange-500/50 via-amber-500/30 to-rose-500/30',
        items: [
            { name: 'HTML5', img: 'https://myporfolio-orcin.vercel.app/static/media/5352-html5_102567%20(1).df69503917a05a968e58.png' },
            { name: 'CSS3', img: 'https://camo.githubusercontent.com/a6235befad0fb967caacfe667932c71409a8823eb5120586fa028dc534ba84da/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f6373732d332e737667' },
            { name: 'JavaScript', img: 'https://static.vecteezy.com/system/resources/previews/027/127/560/non_2x/javascript-logo-javascript-icon-transparent-free-png.png' },
            { name: 'TypeScript', img: 'https://cdn-icons-png.flaticon.com/256/5968/5968381.png' },
            { name: 'React', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png' },
            { name: 'Next.js', img: 'https://images-cdn.openxcell.com/wp-content/uploads/2024/07/24154156/dango-inner-2.webp' },
            { name: 'Tailwind', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
            { name: 'Daisy Ui', img: 'https://img.daisyui.com/images/daisyui/daisyui-logo-192.png' },
            { name: 'Ant Design', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKBKbgGZthcVsW4vVOTAZOKzOpXDLfC8PMrw&s' },
        ],
    },
    {
        title: 'Back-End',
        description: 'APIs, business logic, and server orchestration.',
        accent: 'from-sky-500/50 via-blue-500/30 to-indigo-500/40',
        items: [
            { name: 'Node.js', img: 'https://bizidea.co.th/uploads/media/8d5e51c2c64f0014c503eb38568480ce.png' },
            { name: 'Express', img: 'https://miro.medium.com/v2/resize:fit:1400/1*XP-mZOrIqX7OsFInN2ngRQ.png' },
            { name: 'SQL', img: 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2019/07/image2-1.png?fit=600%2C315&ssl=1' },
            { name: 'Sequelize', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbaa90od4jPrZxQ_Rbo721GYTiR3ESbwZinQ&s' },
            // { name: 'GraphQL', img: 'https://upload.wikimedia.org/wikipedia/commons/0/05/GraphQL_Logo.svg' },
            // { name: 'API Design', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/API-logo.svg/768px-API-logo.svg.png' },
        ],
    },
    {
        title: 'Databases',
        description: 'Structured and unstructured persistence.',
        accent: 'from-amber-500/50 via-orange-500/30 to-red-500/40',
        items: [
            { name: 'PostgreSQL', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/960px-Postgresql_elephant.svg.png' },
            { name: 'MongoDB', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSITHn_TgjDyhdWvePNw0mveDrTUr00GLfv_Q&s' },
            { name: 'MySQL', img: 'https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png' },
        ],
    },
    {
        title: 'UI / Design',
        description: 'Mockups, prototyping, and micro-interactions.',
        accent: 'from-fuchsia-500/60 via-pink-500/30 to-rose-500/30',
        items: [
            { name: 'Figma', img: 'https://cdn.sanity.io/images/599r6htc/regionalized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png' },
            { name: 'Google Stitch', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ8lqH3YtA8Ne6VLVXSkP1JlwB5XZ3kBvhJQ&s' },
            // { name: 'Framer', img: 'https://cdn.worldvectorlogo.com/logos/framer-2.svg' },
            // { name: 'Accessibility', img: 'https://img.icons8.com/ios/512/accessibility.png' },
        ],
    },
    {
        title: 'Tools & Ops',
        description: 'Deployment routines, collaboration, and telemetry.',
        accent: 'from-emerald-500/50 via-lime-500/30 to-cyan-500/40',
        items: [
            { name: 'Git', img: 'https://avatars.githubusercontent.com/u/18133?s=280&v=4' },
            { name: 'Docker', img: 'https://www.opc-router.de/wp-content/uploads/2023/07/Docker_150x150px-01-01-01.png' },
            { name: 'Vercel', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqwNwDUq_S0U6wDzS60c45kVK5zpxF-03wsQ&s' },
            { name: 'Railway', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROhOqtIwKwqkbTYqQ4lTST_hdBHKTT8baWKg&s' },
        ],
    },

]