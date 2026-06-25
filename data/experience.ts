import { Lang } from '@/types'

export type ExperienceItem = {
    role: string
    company: string
    period: string
    responsibilities: string[]
}

export type EducationItem = {
    school: string
    degree: string
    period: string
    gpa?: string
}

export type ExperienceSectionContent = {
    title: string
    subtitle: string
    experienceTitle: string
    educationTitle: string
    gpaLabel: string
    experiences: ExperienceItem[]
    educations: EducationItem[]
}

export const experienceContent: Record<Lang, ExperienceSectionContent> = {
    th: {
        title: 'ประวัติ',
        subtitle: 'ประสบการณ์และการศึกษา',
        experienceTitle: 'ประสบการณ์การทำงาน',
        educationTitle: 'การศึกษา',
        gpaLabel: 'เกรดเฉลี่ย',
        experiences: [
            {
                role: 'Junior Developer (สหกิจศึกษา)',
                company: 'บริษัท อีสานดอทคอม จำกัด',
                period: 'พ.ย. 2025 - ก.พ. 2026',
                responsibilities: [
                    'พัฒนา Web Application และ Mobile Application ในส่วน Frontend ตาม Requirements ที่ได้รับมอบหมาย โดยรับผิดชอบทั้งการพัฒนาฟีเจอร์ใหม่ การปรับปรุงระบบเดิม และการแก้ไขปัญหาที่พบระหว่างการใช้งาน นอกจากนี้ยังทำงานร่วมกับทีม Backend เพื่อเชื่อมต่อ RESTful APIs และทดสอบการทำงานของระบบให้เป็นไปตามความต้องการของผู้ใช้งาน'
                ]
            }
        ],
        educations: [
            {
                school: 'มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน วิทยาเขตขอนแก่น',
                degree: 'ปริญญาตรี คณะวิศวกรรมศาสตร์ สาขาวิศวกรรมคอมพิวเตอร์',
                period: 'มิ.ย. 2023 - มี.ค. 2026',
                gpa: '3.32'
            },
            // {
            //     school: 'วิทยาลัยเทคนิคร้อยเอ็ด',
            //     degree: 'ประกาศนียบัตรวิชาชีพชั้นสูง สาขาเทคโนโลยีคอมพิวเตอร์',
            //     period: 'มิ.ย. 2021 - มี.ค. 2023',
            //     gpa: '3.71'
            // },
            // {
            //     school: 'วิทยาลัยเทคนิคร้อยเอ็ด',
            //     degree: 'ประกาศนียบัตรวิชาชีพ สาขาคอมพิวเตอร์ธุรกิจ',
            //     period: 'พ.ค. 2018 - มี.ค. 2021',
            //     gpa: '3.45'
            // }
        ]
    },
    en: {
        title: 'Resume',
        subtitle: 'Experience & Education',
        experienceTitle: 'Work Experience',
        educationTitle: 'Education',
        gpaLabel: 'GPA',
        experiences: [
            {
                role: 'Junior Developer (Cooperative Education)',
                company: 'Esarndotcom Co., Ltd.',
                period: 'Nov 2025 - Feb 2026',
                responsibilities: [
                    'Developed frontend web applications using Next.js based on client requirements, including feature development and issue resolution as assigned.',
                    'Developed mobile applications using React Native with Expo and adapted selected features to support web application usage.',
                    'Collaborated with the backend team to integrate RESTful APIs and ensure seamless system functionality across applications.'
                ]
            }
        ],
        educations: [
            {
                school: 'Rajamangala University of Technology Isan, Khon Kaen Campus',
                degree: 'Bachelor of Engineering Computer Engineering',
                period: 'Jun 2023 - Mar 2026',
                gpa: '3.32'
            },
            // {
            //     school: 'Roi Et Technical College',
            //     degree: 'High Vocational Certificate in Computer Technology',
            //     period: 'Jun 2021 - Mar 2023',
            //     gpa: '3.71'
            // },
            // {
            //     school: 'Roi Et Technical College',
            //     degree: 'Vocational Certificate in Business Computer',
            //     period: 'May 2018 - Mar 2021',
            //     gpa: '3.45'
            // }
        ]
    }
}
