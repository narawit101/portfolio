import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 1,
    head: "Web Application แพลตฟอร์มการจองสนามกีฬาออนไลน์",
    description: `ระบบจองสนามกีฬาออนไลน์ที่พัฒนาขึ้นเพื่อแก้ไขปัญหาการจัดการจองแบบดั้งเดิม เช่น การจองผ่านโทรศัพท์หรือการบันทึกข้อมูลด้วยมือ ซึ่งมักก่อให้เกิดความล่าช้า ความผิดพลาด และการจองซ้ำซ้อน ส่งผลต่อประสบการณ์ของผู้ใช้งานและประสิทธิภาพในการบริหารจัดการของผู้ให้บริการ

โปรเจคนี้มีวัตถุประสงค์เพื่อยกระดับกระบวนการจองสนามกีฬาให้มีความสะดวก รวดเร็ว และแม่นยำมากยิ่งขึ้น โดยพัฒนาระบบในรูปแบบ Web Application ที่ช่วยให้ผู้ใช้งานสามารถตรวจสอบตารางเวลาว่างแบบเรียลไทม์ เลือกสนาม และทำการจองได้อย่างมีประสิทธิภาพ ขณะเดียวกัน ผู้ให้บริการสามารถจัดการข้อมูลสนาม ตรวจสอบรายการจอง และสื่อสารข่าวสารหรือโปรโมชั่นผ่านระบบได้อย่างสะดวก

ระบบรองรับผู้ใช้งาน 3 กลุ่มหลัก ได้แก่ ลูกค้า เจ้าของสนามกีฬา และผู้ดูแลระบบ โดยมีฟีเจอร์สำคัญ เช่น การแสดงตารางเวลาว่าง การจองและยกเลิกการจอง การจัดการข้อมูลสนามกีฬา และการตรวจสอบสถานะการจอง นอกจากนี้ยังมีระบบอัปโหลดหลักฐานการชำระเงินผ่าน QR Code เพื่อใช้ยืนยันการจอง

(Production-Ready) โดย Deploy Frontend บน Vercel และ Backend บน Railway พร้อมระบบจัดการรูปภาพประสิทธิภาพสูงผ่าน Cloudinary และการสื่อสารแบบเรียลไทม์ผ่าน Socket.IO เพื่ออัปเดตสถานะการจองแบบทันที นอกจากนี้ยังมีการออกแบบฐานข้อมูลด้วย PostgreSQL เพื่อรองรับการจัดเก็บข้อมูลที่มีความสัมพันธ์ซับซ้อน เช่น ข้อมูลผู้ใช้งาน สนามกีฬา และรายการจองต่างๆ

ผลลัพธ์ที่ได้คือแพลตฟอร์มที่ช่วยลดความผิดพลาดจากกระบวนการเดิม เพิ่มประสิทธิภาพในการบริหารจัดการ และยกระดับประสบการณ์ของผู้ใช้งาน โดยจากการทดสอบกับผู้ใช้งานจริง ระบบได้รับคะแนนประเมินด้านประสิทธิภาพและการใช้งานเฉลี่ยสูงถึง 4.8/5.0 ซึ่งยืนยันความสามารถในการรองรับการบริหารจัดการสนามกีฬาหลายแห่งพร้อมกันได้อย่างมีเสถียรภาพ นอกจากนี้ ด้านโครงสร้างพื้นฐานยังได้รับการออกแบบให้รองรับการใช้งานจริง `,
    pictures: ["https://res.cloudinary.com/do6xlqizt/image/upload/v1773920996/project4_zqcb7j.png",
      "https://res.cloudinary.com/do6xlqizt/image/upload/v1773923908/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E1_kvtyag.png",
      "https://res.cloudinary.com/do6xlqizt/image/upload/v1773923900/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E11_cdj0f5.png",
      "https://res.cloudinary.com/do6xlqizt/image/upload/v1773923900/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E10_tdlncf.png",
    ],
    tags: ["TEAMWORK", "Next.js", "Node.js", "Express.js", "PostgreSQL", "Socket.IO", "Railway", "vercel", "cloudinary"]
  },
  // {
  //   id: 2,
  //   head: "E-Commerce Web Application",
  //   description: "ระบบร้านค้าออนไลน์ครบวงจร รองรับการจัดการตะกร้าสินค้า ระบบชำระเงิน และการติดตามสถานะการจัดส่ง พัฒนาขึ้นมาเพื่อให้ผู้ใช้งานสามารถเลือกซื้อสินค้าได้สะดวก พร้อมระบบจัดการหลังบ้าน (Admin Dashboard) สำหรับจัดการสต็อกและดูรายงานยอดขาย",
  //   pictures: ["https://res.cloudinary.com/do6xlqizt/image/upload/v1773920996/project4_zqcb7j.png",
  //     "https://res.cloudinary.com/do6xlqizt/image/upload/v1773923908/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E1_kvtyag.png",
  //     "https://res-console.cloudinary.com/do6xlqizt/thumbnails/v1/image/upload/v1773923912/4Lij4Li54Lib4Lig4Liy4LieMl9zeHp0Yms=/preview",
  //     "https://res-console.cloudinary.com/do6xlqizt/thumbnails/v1/image/upload/v1773923905/4Lij4Li54Lib4Lig4Liy4LieM19jZTRyOXA=/preview",
  //     "https://res-console.cloudinary.com/do6xlqizt/thumbnails/v1/image/upload/v1773923904/4Lij4Li54Lib4Lig4Liy4LieNV9hYTk4MGQ=/preview",
  //     "https://res-console.cloudinary.com/do6xlqizt/thumbnails/v1/image/upload/v1773923902/4Lij4Li54Lib4Lig4Liy4LieN191M2MydGk=/preview",
  //     "https://res.cloudinary.com/do6xlqizt/image/upload/v1773923900/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E11_cdj0f5.png",
  //     "https://res.cloudinary.com/do6xlqizt/image/upload/v1773923900/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E10_tdlncf.png",
  //   ],
  //   tags: ["Next.js", "Tailwind CSS", "Stripe", "Prisma"]
  // },
  // {
  //   id: 3,
  //   head: "Task Management Dashboard",
  //   description: "แอปพลิเคชันจัดการตารางงานและโปรเจคสไตล์ Kanban Board คล้าย Trello รองรับการลากวาง (Drag & Drop) การมอบหมายงานให้สมาชิกในทีม ปรับสถานะงาน และมีระบบแจ้งเตือนเมื่อมีการอัปเดตงาน",
  //   pictures: ["https://res.cloudinary.com/do6xlqizt/image/upload/v1773920996/project4_zqcb7j.png",
  //     "https://res.cloudinary.com/do6xlqizt/image/upload/v1773923908/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E1_kvtyag.png",
  //     "https://res-console.cloudinary.com/do6xlqizt/thumbnails/v1/image/upload/v1773923912/4Lij4Li54Lib4Lig4Liy4LieMl9zeHp0Yms=/preview",
  //     "https://res-console.cloudinary.com/do6xlqizt/thumbnails/v1/image/upload/v1773923905/4Lij4Li54Lib4Lig4Liy4LieM19jZTRyOXA=/preview",
  //     "https://res-console.cloudinary.com/do6xlqizt/thumbnails/v1/image/upload/v1773923904/4Lij4Li54Lib4Lig4Liy4LieNV9hYTk4MGQ=/preview",
  //     "https://res-console.cloudinary.com/do6xlqizt/thumbnails/v1/image/upload/v1773923902/4Lij4Li54Lib4Lig4Liy4LieN191M2MydGk=/preview",
  //     "https://res.cloudinary.com/do6xlqizt/image/upload/v1773923900/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E11_cdj0f5.png",
  //     "https://res.cloudinary.com/do6xlqizt/image/upload/v1773923900/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E10_tdlncf.png",
  //   ],
  //   tags: ["React", "TypeScript", "Firebase", "Redux"]
  // },
  // {
  //   id: 4,
  //   head: "Personal Expense Tracker",
  //   description: "ระบบบันทึกรายรับ-รายจ่ายส่วนบุคคล พร้อมแดชบอร์ดสรุปผลการใช้จ่ายในแต่ละเดือน แสดงผลข้อมูลในรูปแบบกราฟ (Pie Chart, Bar Chart) แยกตามหมวดหมู่ ช่วยให้ผูัใช้สามารถวางแผนการเงินได้มีประสิทธิภาพมากขึ้น",
  //   pictures: ["https://res.cloudinary.com/do6xlqizt/image/upload/v1773920996/project4_zqcb7j.png",
  //     "https://res.cloudinary.com/do6xlqizt/image/upload/v1773923908/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E1_kvtyag.png",
  //     "https://res-console.cloudinary.com/do6xlqizt/thumbnails/v1/image/upload/v1773923912/4Lij4Li54Lib4Lig4Liy4LieMl9zeHp0Yms=/preview",
  //     "https://res-console.cloudinary.com/do6xlqizt/thumbnails/v1/image/upload/v1773923905/4Lij4Li54Lib4Lig4Liy4LieM19jZTRyOXA=/preview",
  //     "https://res-console.cloudinary.com/do6xlqizt/thumbnails/v1/image/upload/v1773923904/4Lij4Li54Lib4Lig4Liy4LieNV9hYTk4MGQ=/preview",
  //     "https://res-console.cloudinary.com/do6xlqizt/thumbnails/v1/image/upload/v1773923902/4Lij4Li54Lib4Lig4Liy4LieN191M2MydGk=/preview",
  //     "https://res.cloudinary.com/do6xlqizt/image/upload/v1773923900/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E11_cdj0f5.png",
  //     "https://res.cloudinary.com/do6xlqizt/image/upload/v1773923900/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E10_tdlncf.png",
  //   ],
  //   tags: ["Vue.js", "Chart.js", "Express.js", "MongoDB"]
  // },
  // {
  //   id: 5,
  //   head: "Real Estate Listing Platform",
  //   description: "เว็บไซต์สำหรับค้นหาและลงประกาศขาย-เช่าอสังหาริมทรัพย์ มีระบบค้นหาด้วยแผนที่แบบ Interactive มีระบบตัวกรองระยะลึก (Advanced Filter) ตามราคา ทำเล หรือประเภทบ้าน และมีระบบจำลองการผ่อนชำระเบื้องต้น",
  //   pictures: ["https://res.cloudinary.com/do6xlqizt/image/upload/v1773920996/project4_zqcb7j.png",
  //     "https://res.cloudinary.com/do6xlqizt/image/upload/v1773923908/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E1_kvtyag.png",
  //     "https://res-console.cloudinary.com/do6xlqizt/thumbnails/v1/image/upload/v1773923912/4Lij4Li54Lib4Lig4Liy4LieMl9zeHp0Yms=/preview",
  //     "https://res-console.cloudinary.com/do6xlqizt/thumbnails/v1/image/upload/v1773923905/4Lij4Li54Lib4Lig4Liy4LieM19jZTRyOXA=/preview",
  //     "https://res-console.cloudinary.com/do6xlqizt/thumbnails/v1/image/upload/v1773923904/4Lij4Li54Lib4Lig4Liy4LieNV9hYTk4MGQ=/preview",
  //     "https://res-console.cloudinary.com/do6xlqizt/thumbnails/v1/image/upload/v1773923902/4Lij4Li54Lib4Lig4Liy4LieN191M2MydGk=/preview",
  //     "https://res.cloudinary.com/do6xlqizt/image/upload/v1773923900/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E11_cdj0f5.png",
  //     "https://res.cloudinary.com/do6xlqizt/image/upload/v1773923900/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E10_tdlncf.png",
  //   ],
  //   tags: ["Next.js", "Google Maps API", "PostgreSQL", "GraphQL"]
  // },
  // {
  //   id: 6,
  //   head: "Healthcare Appointment System",
  //   description: "แพลตฟอร์มนัดหมายคิวแพทย์แพทย์สำหรับคลินิกและโรงพยาบาล ลดความแออัดในพื้นที่ ผู้ป่วยสามารถเลือกเวลา แจ้งอาการเบื้องต้น และรับ QR Code สำหรับเช็คอินเมื่อถึงโรงพยาบาล พร้อมแจ้งเตือนผ่าน SMS",
  //   pictures: ["https://res.cloudinary.com/do6xlqizt/image/upload/v1773920996/project4_zqcb7j.png",
  //     "https://res.cloudinary.com/do6xlqizt/image/upload/v1773923908/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E1_kvtyag.png",
  //     "https://res-console.cloudinary.com/do6xlqizt/thumbnails/v1/image/upload/v1773923912/4Lij4Li54Lib4Lig4Liy4LieMl9zeHp0Yms=/preview",
  //     "https://res-console.cloudinary.com/do6xlqizt/thumbnails/v1/image/upload/v1773923905/4Lij4Li54Lib4Lig4Liy4LieM19jZTRyOXA=/preview",
  //     "https://res-console.cloudinary.com/do6xlqizt/thumbnails/v1/image/upload/v1773923904/4Lij4Li54Lib4Lig4Liy4LieNV9hYTk4MGQ=/preview",
  //     "https://res-console.cloudinary.com/do6xlqizt/thumbnails/v1/image/upload/v1773923902/4Lij4Li54Lib4Lig4Liy4LieN191M2MydGk=/preview",
  //     "https://res.cloudinary.com/do6xlqizt/image/upload/v1773923900/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E11_cdj0f5.png",
  //     "https://res.cloudinary.com/do6xlqizt/image/upload/v1773923900/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E10_tdlncf.png",
  //   ],
  //   tags: ["Angular", "Tailwind CSS", "Node.js", "MySQL"]
  // },
  // {
  //   id: 7,
  //   head: "Social Media Analytics",
  //   description: "แดชบอร์ดวิเคราะห์ข้อมูลและสถิติจากแพลตฟอร์มโซเชียลมีเดียต่างๆ รวบรวมไว้ในที่เดียว ดึงข้อมูลผ่าน API เพื่อแสดง Engagement, Reach, และ Follower Growth แบบ Real-time เหมาะสำหรับนักการตลาด",
  //   pictures: ["https://res.cloudinary.com/do6xlqizt/image/upload/v1773920996/project4_zqcb7j.png",
  //     "https://res.cloudinary.com/do6xlqizt/image/upload/v1773923908/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E1_kvtyag.png",
  //     "https://res-console.cloudinary.com/do6xlqizt/thumbnails/v1/image/upload/v1773923912/4Lij4Li54Lib4Lig4Liy4LieMl9zeHp0Yms=/preview",
  //     "https://res-console.cloudinary.com/do6xlqizt/thumbnails/v1/image/upload/v1773923905/4Lij4Li54Lib4Lig4Liy4LieM19jZTRyOXA=/preview",
  //     "https://res-console.cloudinary.com/do6xlqizt/thumbnails/v1/image/upload/v1773923904/4Lij4Li54Lib4Lig4Liy4LieNV9hYTk4MGQ=/preview",
  //     "https://res-console.cloudinary.com/do6xlqizt/thumbnails/v1/image/upload/v1773923902/4Lij4Li54Lib4Lig4Liy4LieN191M2MydGk=/preview",
  //     "https://res.cloudinary.com/do6xlqizt/image/upload/v1773923900/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E11_cdj0f5.png",
  //     "https://res.cloudinary.com/do6xlqizt/image/upload/v1773923900/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E10_tdlncf.png",
  //   ],
  //   tags: ["React", "D3.js", "Python", "Django"]
  // },
  // {
  //   id: 8,
  //   head: "Smart Home IoT Controller",
  //   description: "เว็บแอปพลิเคชันสำหรับควบคุมอุปกรณ์ Smart Home ภายในบ้านผ่านอินเทอร์เน็ต รองรับการสั่งเปิด-ปิดไฟ เครื่องปรับอากาศ และดูกล้องวงจรปิด รวมถึงดูสถานะเซ็นเซอร์วัดอุณหภูมิและความชื้นได้ตลอดเวลา",
  //   pictures: ["https://res.cloudinary.com/do6xlqizt/image/upload/v1773920996/project4_zqcb7j.png",
  //     "https://res.cloudinary.com/do6xlqizt/image/upload/v1773923908/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E1_kvtyag.png",
  //     "https://res-console.cloudinary.com/do6xlqizt/thumbnails/v1/image/upload/v1773923912/4Lij4Li54Lib4Lig4Liy4LieMl9zeHp0Yms=/preview",
  //     "https://res-console.cloudinary.com/do6xlqizt/thumbnails/v1/image/upload/v1773923905/4Lij4Li54Lib4Lig4Liy4LieM19jZTRyOXA=/preview",
  //     "https://res-console.cloudinary.com/do6xlqizt/thumbnails/v1/image/upload/v1773923904/4Lij4Li54Lib4Lig4Liy4LieNV9hYTk4MGQ=/preview",
  //     "https://res-console.cloudinary.com/do6xlqizt/thumbnails/v1/image/upload/v1773923902/4Lij4Li54Lib4Lig4Liy4LieN191M2MydGk=/preview",
  //     "https://res.cloudinary.com/do6xlqizt/image/upload/v1773923900/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E11_cdj0f5.png",
  //     "https://res.cloudinary.com/do6xlqizt/image/upload/v1773923900/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E10_tdlncf.png",
  //   ],
  //   tags: ["Svelte", "MQTT", "Node.js", "IoT"]
  // }
]
