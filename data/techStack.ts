import { TechStackCategory } from '@/types'

export const techStackCategories: TechStackCategory[] = [
    {
        title: {
            th: 'Front-End',
            en: 'Front-End',
        },
        description: {
            th: 'พัฒนาอินเทอร์เฟซที่ตอบสนองรวดเร็ว รองรับการแสดงผลทุกหน้าจอ (Responsive) และสร้างประสบการณ์ผู้ใช้ที่ลื่นไหล',
            en: 'Interactive user interfaces, responsive layouts, and rich client-side experiences.',
        },
        accent: 'from-primary/50 via-primary/25 to-primary-400/20',
        items: [
            { name: 'HTML', img: 'https://myporfolio-orcin.vercel.app/static/media/5352-html5_102567%20(1).df69503917a05a968e58.png' },
            { name: 'CSS', img: 'https://camo.githubusercontent.com/a6235befad0fb967caacfe667932c71409a8823eb5120586fa028dc534ba84da/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f6373732d332e737667' },
            { name: 'JavaScript', img: 'https://static.vecteezy.com/system/resources/previews/027/127/560/non_2x/javascript-logo-javascript-icon-transparent-free-png.png' },
            { name: 'TypeScript', img: 'https://cdn-icons-png.flaticon.com/256/5968/5968381.png' },
            { name: 'React', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s' },
            { name: 'Next.js', img: 'https://images-cdn.openxcell.com/wp-content/uploads/2024/07/24154156/dango-inner-2.webp' },
            { name: 'Tailwind CSS', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
            // { name: 'DaisyUI', img: 'https://img.daisyui.com/images/daisyui/daisyui-logo-192.png' },
            // { name: 'Ant Design', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKBKbgGZthcVsW4vVOTAZOKzOpXDLfC8PMrw&s' },
        ],
    },
    {
        title: {
            th: 'Back-End',
            en: 'Back-End',
        },
        description: {
            th: 'ออกแบบ API, พัฒนาตรรกะการประมวลผล (Business Logic) และจัดการระบบฝั่งเซิร์ฟเวอร์อย่างมีประสิทธิภาพ',
            en: 'API design, business logic, and server-side orchestration.',
        },
        accent: 'from-primary/50 via-primary/25 to-primary-400/20',
        items: [
            { name: 'Node.js', img: 'https://bizidea.co.th/uploads/media/8d5e51c2c64f0014c503eb38568480ce.png' },
            { name: 'Express.js', img: 'https://miro.medium.com/v2/resize:fit:1400/1*XP-mZOrIqX7OsFInN2ngRQ.png' },
        ],
    },
    {
        title: {
            th: 'การจัดการฐานข้อมูล',
            en: 'Database Management',
        },
        description: {
            th: 'จัดการระบบฐานข้อมูลทั้งแบบเชิงสัมพันธ์ (Relational) และแบบ In-Memory เพื่อประสิทธิภาพสูงสุดของระบบ',
            en: 'Relational and in-memory data storage systems.',
        },
        accent: 'from-primary/50 via-primary/25 to-primary-400/20',
        items: [
            { name: 'PostgreSQL', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/960px-Postgresql_elephant.svg.png' },
            { name: 'MySQL', img: 'https://www.techtalkthai.com/wp-content/uploads/2024/01/mysql-banner-2024.png' },
            { name: 'Redis', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv_x7ZXhCnf9Nng3sCvAZWBZ5nWWSbhzp-2A&s' },
            { name: 'Prisma', img: 'https://miro.medium.com/0*VRlI0n8V_zvnoKpB.jpg' },
        ],
    },
    {
        title: {
            th: 'UI / ดีไซน์',
            en: 'UI / Design',
        },
        description: {
            th: 'ออกแบบโครงร่าง (Wireframe), สร้างต้นแบบจำลอง (Prototype) และดีไซน์การโต้ตอบเพื่อประสบการณ์ผู้ใช้ที่ดีเยี่ยม',
            en: 'Wireframing, prototyping, and polished user interactions.',
        },
        accent: 'from-primary/50 via-primary/25 to-primary-400/20',
        items: [
            { name: 'Figma', img: 'https://cdn.sanity.io/images/599r6htc/regionalized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png' },
            // { name: 'Google Stitch', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ8lqH3YtA8Ne6VLVXSkP1JlwB5XZ3kBvhJQ&s' },
            // { name: 'Framer', img: 'https://cdn.worldvectorlogo.com/logos/framer-2.svg' },
            // { name: 'Accessibility', img: 'https://img.icons8.com/ios/512/accessibility.png' },
        ],
    },
    {
        title: {
            th: 'เครื่องมือพัฒนา',
            en: 'Tools',
        },
        description: {
            th: 'ควบคุมเวอร์ชันของโค้ด (Version Control) และจัดการ Workflow แบบ Container เพื่อการทำงานร่วมกันที่ราบรื่น',
            en: 'Version control and containerized workflows.',
        },
        accent: 'from-primary/50 via-primary/25 to-primary-400/20',
        items: [
            { name: 'Git', img: 'https://avatars.githubusercontent.com/u/18133?s=280&v=4' },
            { name: 'Docker', img: 'https://www.opc-router.de/wp-content/uploads/2023/07/Docker_150x150px-01-01-01.png' },
        ],
    },
    {
        title: {
            th: 'คลาวด์และการดีพลอย',
            en: 'Cloud & Deployment',
        },
        description: {
            th: 'โฮสต์แอปพลิเคชันบนคลาวด์, จัดการระบบแบบ Serverless และกระจายข้อมูลผ่าน Edge Network เพื่อการเข้าถึงที่รวดเร็ว',
            en: 'Cloud hosting, serverless workloads, and edge delivery.',
        },
        accent: 'from-primary/50 via-primary/25 to-primary-400/20',
        items: [
            { name: 'Vercel', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqwNwDUq_S0U6wDzS60c45kVK5zpxF-03wsQ&s' },
            { name: 'Railway', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROhOqtIwKwqkbTYqQ4lTST_hdBHKTT8baWKg&s' },
            { name: 'Supabase', img: 'https://i.pinimg.com/474x/cb/03/e4/cb03e4961860f0271e6ac73e663f26fa.jpg' },
            { name: 'Upstash', img: 'https://upstash.com/icons/apple-touch-icon.png' },
            { name: 'Cloudinary', img: 'https://avatars.githubusercontent.com/u/1460763?s=280&v=4' },
            { name: 'Render', img: 'https://cdn.pulse2.com/cdn/2025/01/Render-Logo.jpg' },
        ],
    },

]
