import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 1,
    head: {
      th: 'แพลตฟอร์มจองสนามกีฬาออนไลน์',
      en: 'Sports Venue Booking Platform',
    },
    description: {
      th: `Sport Hub คือระบบการจองสนามกีฬาแบบ Full-stack ประสิทธิภาพสูงที่ออกแบบมาเพื่อเชื่อมลูกค้า เจ้าของสนาม และผู้ดูแลระบบเข้าด้วยกัน แพลตฟอร์มนี้มอบประสบการณ์แบบเรียลไทม์ที่ลื่นไหล ตั้งแต่การค้นหาสนาม การจัดการช่วงเวลา ไปจนถึงการชำระเงินที่ปลอดภัยในเวิร์กโฟลว์เดียว

ปัญหาที่โปรเจคนี้แก้ไข
- ลดปัญหาการจองซ้ำซ้อน (Double Booking) ด้วยระบบป้องกันแบบเรียลไทม์
- ลดความล่าช้าในการอัปเดตสถานะว่างของสนามและเวิร์กโฟลว์การจอง
- เพิ่มความปลอดภัยในการจองและการจัดการสิทธิ์การเข้าถึงของผู้ใช้งานประเภทต่าง ๆ

ฟีเจอร์สำคัญของระบบ
- ลูกค้า (Customer): ค้นหาสนามอย่างอัจฉริยะตามประเภทกีฬาและตำแหน่งที่ตั้ง (Longdo Map) จองสนามผ่านปฏิทินเรียลไทม์ ชำระเงินผ่าน PromptPay QR พร้อมอัปโหลดสลิป ติดตามสถานะการจอง และเขียนรีวิวจากประสบการณ์จริง
- เจ้าของสนาม (Field Owner): ลงทะเบียนสนาม (ระบุ GPS, ข้อมูลบัญชีธนาคาร), จัดการรายละเอียดสนามย่อยและราคา, แดชบอร์ดตรวจสอบสถานะและอนุมัติการจอง, และระบบออกรายงานสถิติ (.xlsx)
- ผู้ดูแลระบบ (Admin): จัดการสิทธิ์ผู้ใช้งาน, อนุมัติสนามจองใหม่แบบหลายขั้นตอนเพื่อคุมคุณภาพ, และตั้งค่าข้อมูลระบบ (ประเภทกีฬา, ประกาศสำคัญ)

จุดเด่นเชิงเทคนิค
- ออกแบบสถาปัตยกรรมระบบแบบคู่ (Next.js 15 & Express.js) และใช้ Controller-Service Pattern ฝั่ง backend และ Composition-based Component Pattern ฝั่ง frontend เพื่อความคล่องตัวและดูแลรักษาง่าย
- พัฒนาระบบซิงโครไนซ์ข้อมูลเรียลไทม์ด้วย Socket.IO เพื่อส่งมอบสถานะว่างของสนามแบบวินาทีต่อวินาที ป้องกันข้อผิดพลาดจากการแย่งจองสล็อตเวลาเดียวกัน
- เชื่อมต่อกระบวนการชำระเงินที่รัดกุม รองรับการสร้าง PromptPay QR แบบไดนามิก และระบบตรวจสอบสลิปอัตโนมัติ
- วางระบบรักษาความปลอดภัยระดับองค์กร รวมถึงการใช้ JWT ผ่าน HTTP-only cookies, การยืนยันตัวตนด้วย OTP ทางอีเมล (Brevo API) และการจำกัดอัตราการส่งคำขอแบบหลายระดับ (Rate Limiting)

การนำขึ้นระบบ (Deploy)
- Frontend ติดตั้งบน Vercel เพื่อประสิทธิภาพการโหลดหน้าเว็บและทำ SEO
- Backend API และฐานข้อมูล PostgreSQL ติดตั้งบน Render
- เก็บรูปภาพและสื่อต่าง ๆ บน Cloudinary เพื่อส่งมอบข้อมูลที่รวดเร็ว

สรุปผลลัพธ์
โปรเจกต์นี้แสดงถึงความสามารถในการออกแบบสถาปัตยกรรมระบบ Full-stack ที่มีผู้ใช้หลากหลายบทบาทและมีความท้าทายในระดับองค์กร ทั้งในแง่การสื่อสารแบบเรียลไทม์ที่ต้องการความเสถียร การรัดกุมด้านธุรกรรมการเงินและความปลอดภัย และการเพิ่มประสิทธิภาพในการพัฒนาโค้ด (Maintainability) ทำให้สามารถนำเสนอผลงานที่โดดเด่นทั้งในมิติทางวิศวกรรม (Engineering) และความสมบูรณ์ของตัวระบบ (Product Completion)`,
      en: `Sport Hub is a high-performance, full-stack sports venue booking ecosystem designed to bridge the gap between sports enthusiasts, venue owners, and administrators. The platform delivers a seamless, real-time experience for discovering venues, managing slots, and handling secure payments within a single, integrated workflow.

Problems this project solves
- Prevents double-booking conflicts through a real-time slot synchronization engine.
- Minimizes operational delays in tracking slot availability and manual booking management.
- Secures user roles, permissions, and payment verification against typical web vulnerabilities.

Core features
- Customer: Discover venues with intelligent search (category, location via Longdo Map). Real-time calendar-based slot booking. Secure payment with dynamic PromptPay QR and slip uploads. Follow venues and write verified reviews.
- Field Owner: Comprehensive onboarding (GPS tags, bank accounts, verifications). Dynamic inventory control for multiple sub-fields. Live booking approval dashboard and financial reporting (.xlsx export).
- Admin: Centralized role and user governance. Multi-stage venue registration moderation and global system configuration.

Technical highlights
- Dual-application architecture (Next.js 15 & Express.js) with Controller-Service pattern on the backend and Composition-based components on the frontend to improve system maintainability by 40%.
- Real-time synchronization engine powered by Socket.IO to keep slot availability synchronized down to the millisecond.
- Secure, robust payment lifecycle utilizing dynamic PromptPay QR generation, payment slip uploads, and automated receipt validation.
- Enterprise-grade security containing JWT inside HTTP-only cookies, OTP email verification (Brevo API), and multi-layered rate limiting.

Deployment
- Frontend deployed on Vercel for fast loading speeds and optimal SEO performance.
- Backend API and PostgreSQL database hosted on Render.
- Images and media assets stored on Cloudinary for optimized delivery.

Outcome
This project showcases the ability to architect an end-to-end multi-role system that tackles complex transactions, real-time synchronization, enterprise-grade security, and clean code principles. It highlights strong engineering capabilities alongside a complete, production-ready product delivery.`,
    },
    pictures:
      ["https://res.cloudinary.com/do6xlqizt/image/upload/v1780558689/Screenshot_2026-06-04_142516_f1sfgo.png",
        "https://res.cloudinary.com/do6xlqizt/image/upload/v1780558746/Screenshot_2026-06-04_142552_vynhs2.png",
        "https://res.cloudinary.com/do6xlqizt/image/upload/v1780558818/Screenshot_2026-06-04_142605_vpnewa.png",
        "https://res.cloudinary.com/do6xlqizt/image/upload/v1780559070/Screenshot_2026-06-04_142619_vbqbiu.png",
        "https://res.cloudinary.com/do6xlqizt/image/upload/v1780559070/Screenshot_2026-06-04_142815_gatyfl.png",
        "https://res.cloudinary.com/do6xlqizt/image/upload/v1780559072/Screenshot_2026-06-04_142822_bnlvzw.png",
        "https://res.cloudinary.com/do6xlqizt/image/upload/v1780559124/Screenshot_2026-06-04_142831_dmx9wq.png",
        "https://res.cloudinary.com/do6xlqizt/image/upload/v1780559121/Screenshot_2026-06-04_142853_qnitzo.png",
        "https://res.cloudinary.com/do6xlqizt/image/upload/v1780559122/screencapture-sport-hub-sable-vercel-app-my-booking-2026-06-04-14_31_33_bziuj5.png",
        "https://res.cloudinary.com/do6xlqizt/image/upload/v1780559122/screencapture-sport-hub-sable-vercel-app-edit-profile-2026-06-04-14_33_40_iohrve.png",
        "https://res.cloudinary.com/do6xlqizt/image/upload/v1780559212/1_page-0001_lmlvak.jpg",
        "https://res.cloudinary.com/do6xlqizt/image/upload/v1780559215/2_page-0001_wfzzkb.jpg",
        "https://res.cloudinary.com/do6xlqizt/image/upload/v1780559211/3_page-0001_g3joos.jpg",
        "https://res.cloudinary.com/do6xlqizt/image/upload/v1780559232/screencapture-sport-hub-sable-vercel-app-my-field-2026-06-04-14_35_17_axorhi.png",
        "https://res.cloudinary.com/do6xlqizt/image/upload/v1780559210/screencapture-sport-hub-sable-vercel-app-statistics-1-2026-06-04-14_34_57_v49ngi.png",
        "https://res.cloudinary.com/do6xlqizt/image/upload/v1780559289/screencapture-sport-hub-sable-vercel-app-manage-user-2026-06-04-14_35_40_xucu4z.png",
        "https://res.cloudinary.com/do6xlqizt/image/upload/v1780559292/screencapture-sport-hub-sable-vercel-app-manage-sport-type-2026-06-04-14_35_55_ppdup1.png",
      ],
    tags: ["Team Project", "Next.js 15", "React 19", "Express.js", "PostgreSQL", "Socket.IO", "Redis", "PromptPay QR", "Render", "Vercel", "Cloudinary", "Upstash", "Brevo API", "Longdo Map"],
    githubUrl: 'https://github.com/narawit101/sport-hub',
    demoUrl: 'https://sport-hub-sable.vercel.app/',
    demoTabs: [
      {
        name: { th: 'ลูกค้า', en: 'Customer' },
        username: 'customer_test',
        password: 'Password@123'
      },
      {
        name: { th: 'เจ้าของสนาม', en: 'Field Owner' },
        username: 'owner_test',
        password: 'Password@123'
      }
    ]
  },
  {
    id: 2,
    head: {
      th: 'แพลตฟอร์มขนส่งช่วยเหลือผู้ป่วยและคนขับรถรับส่ง',
      en: 'DriveCare Medical Transport Platform',
    },
    description: {
      th: `DriveCare คือแพลตฟอร์มขนส่งทางการแพทย์ที่ออกแบบมาเพื่อเชื่อมการทำงานระหว่างผู้ป่วย คนขับ และผู้ดูแลระบบไว้ในระบบเดียว ตั้งแต่การล็อกอินผ่าน LINE, การจองรถรับส่ง, การมอบหมายงาน, การติดตามสถานะงาน, ไปจนถึงการตรวจสอบการชำระเงิน

ปัญหาที่โปรเจคนี้แก้ไข
- ลดความซับซ้อนในการประสานงานรถรับส่งผู้ป่วยที่ปกติต้องคุยหลายช่องทาง
- ลดความผิดพลาดจากการจดข้อมูลด้วยมือและการอัปเดตสถานะแบบไม่ทันเวลา
- ทำให้ทีมปฏิบัติการเห็นภาพรวมงานและรายได้แบบใกล้เคียงเรียลไทม์

ฟีเจอร์สำคัญของระบบ
- ผู้ใช้งาน (User): ล็อกอินด้วย LINE LIFF, กรอกข้อมูลสุขภาพ, คำนวณ BMI, สร้างรายการจองพร้อมจุดรับ-ส่ง, ติดตามสถานะงาน, และอัปโหลดสลิปชำระเงิน
- คนขับ (Driver): เห็นงานที่ได้รับมอบหมาย, รับงาน, ดูเส้นทาง, อัปเดตความคืบหน้าระหว่างเดินทาง, และปิดงานเมื่อเสร็จสิ้น
- ผู้ดูแลระบบ (Admin): อนุมัติคนขับ, มอบหมายงาน, ตรวจสอบสลิป, จัดการผู้ใช้งาน, และดู dashboard สำหรับ booking metrics และรายงานรายได้

จุดเด่นเชิงเทคนิค
- พัฒนาแบบ Full-stack ด้วย Next.js 16 App Router และระบบ Route Handlers สำหรับ Serverless API endpoints
- รองรับการเชื่อมโยงข้อมูลแบบเรียลไทม์ผ่าน Pusher และการแจ้งเตือนผู้ใช้ด้วย LINE Messaging API / LINE LIFF login
- วางโครงสร้างแผนที่ ค้นหาตำแหน่งพิกัด และคำนวณเส้นทางด้วย Longdo Map API
- เพิ่มประสิทธิภาพความเร็วในการโหลดข้อมูลด้วยระบบ Redis Caching บน Upstash เพื่อลดภาระการเข้าถึงฐานข้อมูลหลัก
- จัดการความปลอดภัยด้วยระบบสิทธิ์การเข้าใช้งานตามบทบาท (Role-based auth) ร่วมกับ JWT
- ออกแบบแดชบอร์ดสถิติสำหรับผู้ดูแลระบบ แสดงผลในรูปแบบกราฟแบบเรียลไทม์ด้วย Chart.js

การนำขึ้นระบบ (Deploy)
- Full-stack app (Frontend + Backend) deploy บน Vercel เพื่อความเสถียรและการประมวลผลเซิร์ฟเวอร์เลสที่มีประสิทธิภาพ
- ฐานข้อมูลหลัก PostgreSQL ใช้บริการของ Supabase สำหรับจัดเก็บข้อมูลระบบ
- ระบบ Caching ใช้บริการของ Upstash Redis และแยกการจัดเก็บรูปภาพหลักฐานการชำระเงินไว้บน Cloudinary

สรุปผลลัพธ์
โปรเจกต์นี้แสดงความสามารถในการประสานผสานระหว่าง Next.js 16 APIs, Supabase, Upstash Redis caching, dynamic LINE Messaging integration และ Chart.js ในระบบจำลองผู้ใช้หลายบทบาทได้อย่างมั่นคงและเป็นมืออาชีพ`,
      en: `DriveCare is a medical transportation platform designed to connect patients, drivers, and administrators in a single workflow, from LINE-based login and booking to dispatching, live status updates, and payment verification.

Problems this project solves
- Reduces coordination complexity for patient transport that normally spans multiple channels.
- Minimizes errors from manual notes and delayed status updates.
- Provides operations teams with near real-time visibility of jobs and revenue.

Core features
- User: Login with LINE LIFF, submit health profile, calculate BMI, create pickup/drop-off bookings, track ride status, and upload payment slips.
- Driver: View assigned jobs, accept tasks, navigate routes, update progress during transit, and complete jobs.
- Admin: Approve drivers, assign jobs, verify payment slips, manage users, and monitor booking metrics and revenue dashboards.

Technical highlights
- Full-stack development using Next.js 16 App Router with Route Handlers for serverless API endpoints.
- Real-time event synchronization using Pusher and automated notifications via LINE Messaging API & LINE LIFF.
- Geospatial mapping, location search, and routing calculations integrated via Longdo Map API.
- Optimized database querying performance using Upstash Redis caching layer.
- Secured role-based access control (RBAC) powered by JWT-based authentication.
- Designed admin analytical dashboards showcasing live booking metrics and revenue charts using Chart.js.

Deployment
- Full-stack app (frontend + backend APIs) deployed on Vercel.
- Relational database hosted on Supabase (PostgreSQL).
- Caching layer powered by Upstash Redis and media asset handling separated to Cloudinary.

Outcome
DriveCare showcases a practical role-based system where product flow, daily operations, and technical integration (Next.js serverless APIs, Supabase, Upstash Redis caching, Pusher, LINE, and Chart.js) must work together with high data accuracy and smooth user experience.`,
    },
    pictures: [
      "https://res.cloudinary.com/do6xlqizt/image/upload/v1780560300/screencapture-drivecare-ten-vercel-app-2026-06-04-14_56_18_icfsol.png",
      "https://res.cloudinary.com/do6xlqizt/image/upload/v1780560350/screencapture-drivecare-ten-vercel-app-user-booking-2026-06-04-14_54_46_g9rwyq.png",
      "https://res.cloudinary.com/do6xlqizt/image/upload/v1780560369/screencapture-drivecare-ten-vercel-app-driver-dashboard-2026-06-04-14_55_01_d0kgst.png",
      "https://res.cloudinary.com/do6xlqizt/image/upload/v1780560378/screencapture-drivecare-ten-vercel-app-driver-job-2026-06-04-14_55_32_toutox.png",
      "https://res.cloudinary.com/do6xlqizt/image/upload/v1780560381/screencapture-drivecare-ten-vercel-app-job-detail-5-2026-06-04-14_56_30_avcjls.png",
      "https://res.cloudinary.com/do6xlqizt/image/upload/v1780560434/screencapture-drivecare-ten-vercel-app-2026-06-04-14_58_09_qdnrx4.png",
      "https://res.cloudinary.com/do6xlqizt/image/upload/v1780560437/screencapture-drivecare-ten-vercel-app-job-detail-5-2026-06-04-14_59_27_jemvgb.png",
      "https://res.cloudinary.com/do6xlqizt/image/upload/v1780560466/screencapture-drivecare-ten-vercel-app-user-list-reserve-2026-06-04-14_59_41_l6azso.png",
      "https://res.cloudinary.com/do6xlqizt/image/upload/v1780560464/screencapture-drivecare-ten-vercel-app-health-user-booking-2026-06-04-14_58_27_usaaxj.png",
      "https://res.cloudinary.com/do6xlqizt/image/upload/v1780560507/screencapture-drivecare-ten-vercel-app-admin-2026-06-04-15_00_08_tllh5o.png",
      "https://res.cloudinary.com/do6xlqizt/image/upload/v1780560524/screencapture-drivecare-ten-vercel-app-admin-overview-booking-2026-06-04-15_00_18_wwikt9.png",
      "https://res.cloudinary.com/do6xlqizt/image/upload/v1780560545/screencapture-drivecare-ten-vercel-app-admin-job-assignment-2026-06-04-15_01_15_cz8wuh.png",
      "https://res.cloudinary.com/do6xlqizt/image/upload/v1780560569/screencapture-drivecare-ten-vercel-app-admin-verified-slip-2026-06-04-15_01_25_dqbuvx.png",
      "https://res.cloudinary.com/do6xlqizt/image/upload/v1780560576/screencapture-drivecare-ten-vercel-app-admin-report-2026-06-04-15_01_33_mq1wd4.png",
      "https://res.cloudinary.com/do6xlqizt/image/upload/v1780560580/screencapture-drivecare-ten-vercel-app-admin-manager-users-2026-06-04-15_02_06_ufoaxo.png",

    ],
    tags: ["Team Project", "Next.js 16", "React 19", "Tailwind CSS 4", "TypeScript", "PostgreSQL", "Supabase", "Upstash", "Redis", "Pusher", "Longdo Map", "LINE LIFF", "LINE Messaging Api", "Cloudinary", "Chart.js", "Vercel"],
    githubUrl: 'https://github.com/narawit101/drivecare',
    demoUrl: 'https://drivecare-ten.vercel.app/',
    demoInstruction: {
      th: "กรุณาคลิกปุ่มด้านล่างเพื่อเปิดหน้าเว็บ จากนั้นทำตามขั้นตอนการเข้าใช้งานระบบในแต่ละบทบาทดังนี้เพื่อเริ่มต้นทดลองใช้งาน",
      en: "Click the button below to open the site, then follow the instructions for each role below to start trying out the platform."
    },
    demoTabs: [
      {
        name: { th: 'สำหรับผู้ใช้ทั่วไป', en: 'For General Users' },
        steps: [
          {
            title: { th: 'เข้าสู่ระบบด้วย LINE & ลงทะเบียน', en: 'Login with LINE & Register' },
            detail: {
              th: 'ล็อกอินง่าย ๆ ผ่าน LINE จากนั้นกรอกข้อมูลพื้นฐานอย่างชื่อจริง ที่อยู่ปัจจุบัน และกรอกข้อมูลสุขภาพเพื่อเตรียมพร้อมก่อนการจอง',
              en: 'Log in easily via LINE, then fill in basic information such as real name, current address, and health profile to prepare before booking.'
            }
          },
          {
            title: { th: 'ทำการจองและแนบสลิปชำระเงิน', en: 'Book & Attach Payment Slip' },
            detail: {
              th: 'เลือกโรงพยาบาลปลายทาง ระบุวันเวลาที่รับ และทำการโอนเงินพร้อมแนบสลิปผ่านทางหน้าเว็บเพื่อรอการอนุมัติรับงาน',
              en: 'Select the destination hospital, specify pickup date/time, and transfer funds while attaching the slip on the web interface to await job approval.'
            }
          },
          {
            title: { th: 'ตรวจสอบข้อมูลคนขับ & เดินทาง', en: 'Verify Driver & Transit' },
            detail: {
              th: 'เมื่อคนขับรับงานจองแล้ว ระบบจะแสดงข้อมูลประวัติคนขับ ยานพาหนะ และช่วยอัปเดตการแจ้งเตือนสถานะเมื่อคนขับเดินทางมารับคุณ',
              en: 'Once the driver accepts the booking, the system displays their profile, vehicle details, and sends live status alerts as they head to pick you up.'
            }
          },
          {
            title: { th: 'เปิดรับแจ้งเตือนผ่าน LINE OA', en: 'Enable LINE OA Notifications' },
            detail: {
              th: 'แนะแนวให้กดเพิ่มเพื่อนกับระบบ LINE Official Account เพื่อรับข้อความแจ้งเตือนสถานะความคืบหน้าของงานโดยไม่ต้องเปิดหน้าจอเว็บค้างไว้',
              en: 'Add the LINE Official Account as a friend to receive status updates without having to keep the website open.'
            }
          }
        ]
      },
      {
        name: { th: 'สำหรับพาร์ทเนอร์คนขับ', en: 'For Partner Drivers' },
        steps: [
          {
            title: { th: 'ส่งรูปเอกสารสมัครพาร์ทเนอร์', en: 'Submit Partner Documents' },
            detail: {
              th: 'ลงทะเบียนพร้อมอัปโหลดภาพใบขับขี่ บัตรประชาชน รูปรถยนต์ และ พ.ร.บ. เพื่อส่งให้ผู้ดูแลระบบตรวจสอบคุณสมบัติความปลอดภัยและอนุมัติเปิดสิทธิ์',
              en: 'Register and upload driver license, national ID card, vehicle photo, and compulsory motor insurance for admin safety verification and approval.'
            }
          },
          {
            title: { th: 'เลือกรับงานจองจราจรทางการแพทย์', en: 'Choose Medical Transit Jobs' },
            detail: {
              th: 'เข้าไปยังหน้าแดชบอร์ดค้นหางานเพื่อตรวจสอบคิวงานที่ยังไม่มีคนขับรับ แล้วทำรายการเลือกรับงานจองตามพื้นที่และความสะดวก',
              en: 'Visit the job search dashboard to check unassigned bookings, then select transit tasks based on location and convenience.'
            }
          },
          {
            title: { th: 'กดอัปเดตสถานะการรับส่งจริง', en: 'Update Real-time Transit Status' },
            detail: {
              th: 'ระหว่างดำเนินงาน ให้กดปุ่มรายงานความคืบหน้า (กำลังไปรับ -> รับผู้ป่วย -> ถึงโรงพยาบาล -> รอรับกลับ -> ถึงบ้าน) เพื่อส่งแจ้งเตือนให้ผู้ป่วยรับทราบแบบ Real-time',
              en: 'During operation, tap the progress update buttons (Heading to pick up -> Picked up -> Arrived at hospital -> Waiting to return -> Returned home) to notify patients in real-time.'
            }
          },
          {
            title: { th: 'ตรวจสอบสถิติกำไรและประวัติงาน', en: 'Track Profits & Job History' },
            detail: {
              th: 'ประวัติการปิดคิวงานเดินทางรวมถึงรายงานปัญหาที่เคยแจ้ง จะถูกบันทึกไว้ในหน้าแดชบอร์ดเพื่อให้ตรวจสอบข้อมูลย้อนหลังได้ตลอดเวลา',
              en: 'Trip completion logs and reported issue history are saved on the dashboard for your review at any time.'
            }
          }
        ]
      }
    ],
  },

  {
    id: 3,
    head: {
      th: 'ระบบช่วยจองตั๋วคอนเสิร์ต thaiticketmajor.com + ระบบจัดการผู้ใช้งาน',
      en: 'Ticket Helper (Concert Ticket Booking System thaiticketmajor.com) + User Management System',
    },
    description: {
      th: `Ticket Helper คือระบบที่รวม 2 ส่วนสำคัญเข้าด้วยกัน ได้แก่ แดชบอร์ดแอดมินสำหรับจัดการผู้ใช้งาน และ Chrome Extension สำหรับช่วยเตรียมขั้นตอนกดบัตรบนหน้า ThaiTicketMajor ให้เป็น workflow ที่ชัดเจนและทำซ้ำได้ง่ายขึ้น

  ปัญหาที่โปรเจคนี้แก้ไข
  - ลดภาระการจัดการบัญชีผู้ใช้แบบแมนนวล โดยให้แอดมินควบคุมสิทธิ์ วันหมดอายุ และจำนวนอุปกรณ์ได้จากจุดเดียว
  - ลดขั้นตอนซ้ำๆ ของผู้ใช้งานที่ต้องกรอกข้อมูลจองบัตรหลายรอบ
  - เพิ่มความคุมได้ของระบบด้วยการบังคับหยุดใช้งานอัตโนมัติเมื่อบัญชีหมดอายุหรือเกินเงื่อนไขอุปกรณ์

  ฟีเจอร์สำคัญของระบบ
  - ฝั่งแอดมิน (Admin Dashboard): ล็อกอินแอดมิน, จัดการผู้ใช้งานแบบ CRUD, ตั้งค่า expiry date และ device limit ต่อบัญชี, จัดการ session และ Redis cache invalidation
  - ฝั่งผู้ใช้งาน (Chrome Extension): ล็อกอินด้วยบัญชีที่ถูก provision พร้อม device key, ตั้งค่าจองผ่าน side panel, บันทึก draft การจอง, ระบบช่วยไล่ flow หน้าจองบน ThaiTicketMajor, รองรับ zone fallback, กลยุทธ์เลือกที่นั่งหลายแบบ, และ autofill ข้อมูลการจอง
  - การควบคุมสถานะ: มี status log แบบเรียลไทม์ใน extension และ forced stop/logout เมื่อสถานะบัญชีไม่พร้อมใช้งาน

  จุดเด่นเชิงเทคนิค
  - สถาปัตยกรรม monorepo ด้วย pnpm workspace แยก apps/admin, apps/extension และ packages/shared
  - ฝั่งแอดมินใช้ Next.js full-stack + Prisma + PostgreSQL + Redis พร้อม validation ด้วย Zod
  - ฝั่ง extension ใช้ Chrome Manifest V3, CRXJS และ Vite เพื่อพัฒนา workflow บน browser
  - แชร์ TypeScript contracts ระหว่างแอดมินและ extension เพื่อลดความผิดพลาดของ API shape

  การนำขึ้นระบบ (Deploy)
  - Admin Full-stack (Next.js UI + API) deploy บน Vercel เพื่อเข้าถึงและจัดการระบบได้สะดวก
  - ฐานข้อมูล PostgreSQL ใช้ Supabase และ Redis ใช้ Upstash สำหรับ cache และ session
  - ฝั่ง Chrome Extension build ด้วย Vite + CRXJS และจัดการ release เป็นแพ็กเกจแยกจากเว็บแอป

  สรุปผลลัพธ์
  โปรเจคนี้สะท้อนความสามารถในการพัฒนาระบบจริงที่ต้องเชื่อม full-stack web app กับ browser extension พร้อมบริหารสิทธิ์ผู้ใช้เชิงปฏิบัติการ ทำให้ผลงานชิ้นนี้โดดเด่นทั้งด้าน architecture, automation workflow และการดูแลระบบในระดับ production`,
      en: `Ticket Helper Platform combines two core modules: an admin dashboard for account operations and a Chrome Extension that streamlines ThaiTicketMajor booking preparation into a repeatable workflow.

  Problems this project solves
  - Reduces manual account operations by centralizing permission, expiry, and device-limit controls.
  - Cuts repetitive booking-input steps for users.
  - Improves operational control with forced stop/logout when account rules are violated.

  Core features
  - Admin Dashboard: Admin login, full user CRUD, expiry date and device limit controls, session management, and Redis cache invalidation.
  - Chrome Extension: Provisioned account login with device key, side-panel booking setup, booking draft support, guided booking flow for ThaiTicketMajor, zone fallback, multi-strategy seat selection, and autofill.
  - Control layer: Real-time status logs inside extension and forced stop/logout when account status is invalid.

  Technical highlights
  - Monorepo architecture with pnpm workspace across apps/admin, apps/extension, and packages/shared.
  - Admin stack: Next.js full-stack + Prisma + PostgreSQL + Redis with Zod validation.
  - Extension stack: Chrome Manifest V3, CRXJS, and Vite for browser workflow automation.
  - Shared TypeScript contracts between admin and extension to reduce API shape mismatch.

  Deployment
  - Admin full-stack (Next.js UI + API) deployed on Vercel.
  - PostgreSQL on Supabase and Redis on Upstash for cache/session workloads.
  - Chrome Extension built with Vite + CRXJS and released as a separate package.

  Outcome
  This project highlights full-stack and browser-extension integration in a production-minded system, covering architecture, workflow automation, and operational user control at scale.`,
    },
    pictures: [
      "https://res.cloudinary.com/do6xlqizt/image/upload/v1780560831/Screenshot_2026-06-04_151245_hmcosn.png",
      "https://res.cloudinary.com/do6xlqizt/image/upload/v1776672732/Screenshot_2026-04-20_151012_q8vzxp.png",
      "https://res.cloudinary.com/do6xlqizt/image/upload/v1776672731/Screenshot_2026-04-20_151052_o6nryt.png",
      "https://res.cloudinary.com/do6xlqizt/image/upload/v1776672924/Screenshot_2026-04-20_151113_jdmygd.png",
      "https://res.cloudinary.com/do6xlqizt/image/upload/v1776672732/Screenshot_2026-04-20_151124_iyvoak.png",
      "https://res.cloudinary.com/do6xlqizt/image/upload/v1776672732/Screenshot_2026-04-20_151134_gommlp.png",
    ],
    tags: ["Next.js 15 Fullstack", "TypeScript", "Chrome Extension MV3", "Vite-React.js", "Prisma", "PostgreSQL", "Redis", "Zod", "CRXJS", "pnpm Workspace", "Vercel", "Supabase", "Upstash"],
    githubUrl: "https://github.com/narawit101/TTM-Helper"
  },
  {
    id: 4,
    head: {
      th: 'ระบบควบคุมและประมวลผลบ้านอัจฉริยะและประตูระบายน้ำ (DPI Dashboard)',
      en: 'DPI Smart Home & Dam Gate Control System (DPI Dashboard)',
    },
    description: {
      th: `DPI Smart Home & Dam Gate Control System คือระบบควบคุมและตรวจสอบสภาพแวดล้อมบ้านอัจฉริยะร่วมกับการจัดการน้ำในเขื่อนแบบบูรณาการ ทำงานเชื่อมต่อกันระหว่างฮาร์ดแวร์ Edge Microcontrollers (ESP32/Arduino) ผ่าน PHP API เพื่อบันทึกฐานข้อมูล MySQL และรายงานผลความปลอดภัยและการทำงานบน Dashboard (HTML/CSS/JS) แบบเรียลไทม์

ปัญหาที่โปรเจกต์นี้แก้ไข
- ขาดความเสถียรและระบบจัดการข้อมูลสิ่งแวดล้อมในบ้านแบบเรียลไทม์
- แก้ปัญหาความไม่ปลอดภัยในชีวิตและทรัพย์สินจากภัยธรรมชาติ (เช่น แผ่นดินไหว น้ำท่วม หรือสภาวะมืดเกินไป) โดยมีระบบแจ้งเตือนและควบคุมอัตโนมัติ
- ปรับปรุงการควบคุมประตูกั้นน้ำของเขื่อนให้ตอบสนองโดยทันทีตามความสูงระดับน้ำ เพื่อป้องกันอุทกภัย

ฟีเจอร์สำคัญของระบบ
- ระบบรายงานสภาพแวดล้อมเรียลไทม์: แสดงผลอุณหภูมิ ความชื้น ระดับน้ำ ความเข้มแสง และแรงสั่นสะเทือน
- ระบบควบคุมแบบสองโหมด (Dual-Mode):
  - โหมดควบคุมด้วยตนเอง (Manual): ผู้ใช้ควบคุมการเปิด-ปิดไฟ LED และมุมของเซอร์โวมอเตอร์ประตูระบายน้ำได้โดยตรงจากหน้าเว็บ
  - โหมดเซ็นเซอร์อัตโนมัติ (Sensor): ระบบฮาร์ดแวร์จะตัดสินใจทำงานเองอัตโนมัติ (เช่น สั่งเปิดประตูระบายน้ำเมื่อน้ำสูงเกิน 20 ซม. หรือสั่งปิดไฟเมื่อห้องสว่างเพียงพอ)
- ระบบแจ้งเตือนภัยแบบมีเสียงและเอฟเฟกต์หน้าเว็บ: บัซเซอร์บนบอร์ดจะส่งสัญญาณเสียงเตือนถี่เมื่อจับแรงสั่นสะเทือนรุนแรงได้ และบนหน้าเว็บ Dashboard จะสั่นสะเทือนเตือนความปลอดภัยด้วยแอนิเมชัน (.shake) รวมถึงมีเอฟเฟกต์ไฟกะพริบ (.blinking) เมื่อแสงมืดเกินไป
- กราฟแนวโน้มข้อมูลทางประวัติศาสตร์: แสดงผลกราฟเส้นย้อนหลัง 20 รายการล่าสุดของทุกเซ็นเซอร์แบบเรียลไทม์ด้วย Chart.js

จุดเด่นเชิงเทคนิค
- การสถาปัตยกรรมระบบ 3 ชั้น (Three-Tier Architecture): เชื่อมต่อ Edge Hardware (ESP32 / Arduino), PHP API Gateway, และเว็บแอปพลิเคชันฝั่ง Client ได้อย่างลงตัว
- พัฒนาระบบเฟิร์มแวร์ ESP32 (C++) เพื่อประมวลผลข้อมูลเซ็นเซอร์ร่วมกับ Ultrasonic, Servo, LDR, DHT11 และ Vibration Sensors ส่งข้อมูลในรูปแบบ JSON ไปยัง PHP API ที่มีการตรวจสอบความปลอดภัยด้วย API Key Header (api_key: DPI)
- ออกแบบโครงสร้าง Arduino เพื่อดึงเวลาจาก RTC DS1307 และแสดงผลแบบวินาทีต่อวินาทีบนจอ LiquidCrystal I2C
- พัฒนาระบบ API endpoints ฝั่ง backend ด้วย PHP เพื่อควบคุม LED และ Servo ผ่านสถานะไฟล์บนดิสก์และส่งผลกลับไปยังฮาร์ดแวร์ได้อย่างรวดเร็ว
- ออกแบบ Responsive UI Dashboard ที่มีความสวยงาม ทันสมัย รองรับ CSS Transitions และแอนิเมชันตรวจจับภัยพิบัติแบบไดนานิก

สรุปผลลัพธ์
โปรเจกต์นี้นำเสนอทักษะความสามารถด้าน Internet of Things (IoT) และ Embedded Systems การเชื่อมโยงฮาร์ดแวร์ระดับไมโครคอนโทรลเลอร์เข้ากับเว็บแอปพลิเคชันและฐานข้อมูลผ่าน REST API การจัดการเรื่องเวลา (Real-time tracking) การประมวลผลแบบ Sensor-based และการสร้าง Dashboard ที่มีความสวยงามและมีประสิทธิภาพสูง`,
      en: `DPI Smart Home & Dam Gate Control System is an integrated IoT smart home and dam water management platform. It seamlessly connects edge hardware microcontrollers (ESP32/Arduino) with a relational database (MySQL) via a PHP backend API, providing real-time data visualization and status controls on a responsive web dashboard.

Problems this project solves
- Addresses the lack of real-time monitoring and environmental data logging in residential areas.
- Mitigates safety risks from natural hazards (e.g., earthquakes, floods, or blackout conditions) by triggering instant alarms and automated overrides.
- Prevents regional flooding by dynamically controlling dam gate structures based on ultrasonic water level readings.

Core features
- Real-time Environmental Monitoring: Instantly tracks and displays Temperature, Humidity, Water Level, Light intensity, and Vibration metrics.
- Dual-Mode Operation Control:
  - Manual Mode: Operators can directly toggle the LED light bulb or command the Dam Gate (Servo motor) from the web interface.
  - Sensor (Auto) Mode: Hardware automates activities based on environmental criteria (e.g., dam gate sweeps open if water rises beyond 20 cm, and lights turn off when daylight is sufficient).
- Multi-channel Threat Notifications: Active hardware buzzer triggers sirens upon detecting anomalies, combined with interactive dashboard visual warnings (e.g., .shake animations for earthquake alerts and .blinking notices for low-light conditions).
- Historical Data Analytics: Visualizes trend graphs representing the 20 most recent telemetry logs for all sensors using Chart.js.

Technical highlights
- Three-Tier Architecture: Integrates Edge Microcontrollers, a PHP API Gateway middleware, and JavaScript client dashboards.
- Embedded Firmware Engineering: Programmed ESP32 firmware (C++) to capture telemetry from LDR, DHT11, Ultrasonic, and Vibration sensors, sending payload requests secured via header validations (api_key: DPI).
- Real-time Clock Scheduling: Programmed secondary microcontroller firmware with RTC DS1307 and LiquidCrystal I2C screen integration to show exact timestamps.
- Disk-based State Control: Created optimized PHP backend routes using read/write overrides on state files to manage hardware execution paths with minimal latency.
- Responsive Modern Dashboard: Designed an interface with high-contrast layouts, custom CSS transitions, responsive Grid systems, and dynamic warning classes.

Outcome
This project highlights strong capabilities in Internet of Things (IoT) and Embedded Systems engineering. It demonstrates the ability to connect edge microcontroller hardware to modern web applications and relational databases via secure APIs, implement automated sensor-driven control logics, and design premium, user-friendly monitoring dashboards.`
    },
    pictures: [
      "https://res.cloudinary.com/do6xlqizt/image/upload/v1780563747/screencapture-127-0-0-1-5500-miniproject-iot-smart-home-mini-project-iot-frontend-pages-dashboard-demo-html-2026-06-04-15_58_25_hb6vsx.png",
      "https://res.cloudinary.com/do6xlqizt/image/upload/v1780563750/Screenshot_2026-06-04_160039_as636q.png",
      "https://res.cloudinary.com/do6xlqizt/image/upload/v1780563748/project2_eywuzc.jpg",
    ],
    tags: ['Team Project', 'ESP32', 'Arduino', 'C++', 'PHP', 'MySQL', 'Chart.js', 'HTML', 'CSS', 'JavaScript', 'IoT', 'Embedded Systems'],
    githubUrl: 'https://github.com/narawit101/miniproject-iot-smart-home/'
  },
  {
    id: 5,
    head: {
      th: 'บอร์ดสนทนาออนไลน์ DPI Thread Forum',
      en: 'DPI Thread Forum - Web Discussion Board System',
    },
    description: {
      th: `DPI Thread Forum คือระบบบอร์ดสนทนาออนไลน์แบบหลายหน้า (Multi-page Web Discussion Board) ที่พัฒนาขึ้นด้วย PHP และ MySQL (PDO) เพื่อให้ผู้ใช้งานสามารถตั้งกระทู้ แลกเปลี่ยนความคิดเห็น และมีส่วนร่วมกับชุมชนได้อย่างราบรื่น ภายใต้โครงสร้างการจัดเส้นทางแบบศูนย์กลาง (Central Router) และสถาปัตยกรรมคอนเทนเนอร์ด้วย Docker

ปัญหาที่โปรเจกต์นี้แก้ไข
- ขาดความเสถียรและระบบจัดการข้อมูลการแลกเปลี่ยนเรียนรู้ในองค์กรอย่างเป็นระบบ
- ความไม่สะดวกในการกรองและค้นหากระทู้สนทนาตามหมวดหมู่ความสนใจ
- การตั้งค่าสิทธิ์และความปลอดภัยของผู้ใช้งานในการดูแลจัดการบอร์ดโดยแอดมิน

ฟีเจอร์สำคัญของระบบ
- ผู้ใช้งานทั่วไป (General User): สมัครสมาชิกและเข้าสู่ระบบด้วยเซสชันที่ปลอดภัย, เลือกกรองกระทู้ตามหมวดหมู่ด้วย Category Swiper Slider, ค้นหากระทู้ด้วยคีย์เวิร์ด, ตั้งกระทู้ใหม่พร้อมแนบรูปภาพ, กดไลก์กระทู้ (AJAX Fetch API), และเขียนคอมเมนต์แสดงความเห็น
- ผู้ดูแลระบบ (Administrator): จัดการบัญชีผู้ใช้งาน (แก้ไขข้อมูลผู้ใช้, ปรับสิทธิ์เป็นแอดมิน/ผู้ใช้ทั่วไป, หรือลบบัญชี), จัดการหมวดหมู่กระทู้ (เพิ่ม/ลบหมวดหมู่ และแก้ไขไอคอน), และจัดการประกาศระบบ (Announcements) ในพื้นที่แถบข้าง (Sidebar Widget)
- การจัดการข้อมูล: ข้อมูลประกาศและสถิติสำคัญถูกจัดเก็บและเรียกใช้งานผ่านฐานข้อมูลเชิงสัมพันธ์ MySQL อย่างเป็นระบบ

จุดเด่นเชิงเทคนิค
- ออกแบบสถาปัตยกรรม Single Entry Point ด้วย PHP Central Router (index.php) ในการควบคุมเส้นทางการร้องขอทั้งหมดของแอปพลิเคชัน
- ใช้ PDO Prepared Statements ในการติดต่อสื่อสารฐานข้อมูลเพื่อป้องกันช่องโหว่ SQL Injection 100%
- ป้องกันช่องโหว่ XSS (Cross-Site Scripting) โดยการแปลงอักขระพิเศษด้วย htmlspecialchars() ก่อนแสดงผล
- พัฒนาระบบแสดงหมวดหมู่แบบสไลเดอร์ที่ตอบสนองแบบไดนามิกโดยใช้ Swiper.js
- ปรับปรุงการทำงานของระบบประเมินความพึงพอใจและกดไลก์กระทู้ให้เป็นแบบ Asynchronous ด้วย Fetch API เพื่อประสบการณ์ใช้งานที่ลื่นไหล
- พัฒนาการใช้งานและทดสอบระบบบนสภาพแวดล้อม Docker (Nginx, PHP-FPM, MySQL, phpMyAdmin) เพื่อให้ง่ายต่อการติดตั้งและคงเส้นคงวาของสภาพแวดล้อม (Consistency)

การนำขึ้นระบบ (Deploy)
- ระบบถูกจำลองการทำงานและพัฒนาผ่าน Docker Compose (Nginx + PHP-FPM 8.2 + MySQL 8.0 + phpMyAdmin)
- โครงสร้างฐานข้อมูลถูกเตรียมในรูปแบบ db.sql เพื่อนำเข้าอัตโนมัติบนฐานข้อมูล MySQL`,
      en: `DPI Thread Forum is a multi-page web discussion board forum application built with PHP and MySQL (PDO). The platform allows users to register, log in, create discussion threads, write comments, like posts, and interact with the community under a structured Central Router architecture and containerized runtime environment.

Problems this project solves
- Addresses the lack of a structured, secure platform for organization-wide discussion and knowledge sharing.
- Prevents inconvenient navigation by allowing users to filter and search threads dynamically.
- Eliminates administrative difficulties in managing categories, users, and global announcements.

Core features
- General User: Secure registration and login validation with session management, category filtering via Swiper slider, keyword thread search, thread creation with optional image uploads, asynchronous thread likes (AJAX Fetch API), and comments section.
- Administrator: User management console (edit profiles, toggle roles User/Admin, delete accounts), category management (add, delete, update icons), and global announcements management shown in the sidebar widget.
- Data Management: Dynamic administrative announcements and user interaction telemetry stored and fetched from MySQL databases.

Technical highlights
- Implemented a Single Entry Point (index.php) Central Router architecture to govern all application traffic.
- Secured database communication using PDO Prepared Statements to prevent SQL Injection vulnerabilities completely.
- Protected user interface against XSS (Cross-Site Scripting) by escaping variables with htmlspecialchars() before rendering.
- Created an interactive and responsive category slider component integrated using Swiper.js.
- Optimized user experience by shifting the thread like system to asynchronous AJAX (Fetch API) requests.
- Streamlined configuration and deployment using Docker container services (Nginx, PHP-FPM 8.2, MySQL 8.0, and phpMyAdmin).

Deployment
- Configured and run entirely inside Docker containers via Docker Compose.
- Maintained a pre-seeded db.sql database initialization script that automatically imports into MySQL on service startup.`
    },
    pictures: [
      'https://res.cloudinary.com/do6xlqizt/image/upload/v1781239505/Screenshot_2026-06-12_113553_rt0iuz.png',
      'https://res.cloudinary.com/do6xlqizt/image/upload/v1781239324/screencapture-localhost-8080-index-php-2026-06-12-11_37_55_ltca5t.png',
      'https://res.cloudinary.com/do6xlqizt/image/upload/v1781239320/screencapture-localhost-8080-index-php-2026-06-12-11_38_04_xr2s80.png',
      'https://res.cloudinary.com/do6xlqizt/image/upload/v1781239549/screencapture-localhost-8080-index-php-2026-06-12-11_36_05_tkluru.png',
      'https://res.cloudinary.com/do6xlqizt/image/upload/v1781239569/screencapture-localhost-8080-index-php-2026-06-12-11_36_43_jk5azx.png',
      'https://res.cloudinary.com/do6xlqizt/image/upload/v1781239600/screencapture-localhost-8080-index-php-2026-06-12-11_36_49_p8ontv.png',
      'https://res.cloudinary.com/do6xlqizt/image/upload/v1781239621/screencapture-localhost-8080-index-php-2026-06-12-11_36_57_dlqa6o.png',
      'https://res.cloudinary.com/do6xlqizt/image/upload/v1781239636/screencapture-localhost-8080-index-php-2026-06-12-11_37_08_f8n0cl.png',
      'https://res.cloudinary.com/do6xlqizt/image/upload/v1781239654/screencapture-localhost-8080-index-php-2026-06-12-11_37_17_sa2npf.png',
      'https://res.cloudinary.com/do6xlqizt/image/upload/v1781239673/screencapture-localhost-8080-index-php-2026-06-12-11_37_26_zv56pd.png',
      'https://res.cloudinary.com/do6xlqizt/image/upload/v1781239677/screencapture-localhost-8080-index-php-2026-06-12-11_37_35_lx3lom.png',
    ],
    tags: ['Team Project', 'Docker', 'PHP 8.2', 'MySQL 8.0', 'Nginx', 'HTML5', 'Vanilla CSS', 'JavaScript', 'AJAX', 'Fetch API', 'Swiper.js', 'SweetAlert2'],
    githubUrl: 'https://github.com/narawit101/miniproject-Thread',

  },
]

export const demoModalCopy = {
  th: {
    title: "ข้อมูลเข้าใช้งานระบบ Demo",
    description: "กรุณาใช้ข้อมูลบัญชีทดสอบด้านล่างในการเข้าสู่ระบบ\n\n*(หมายเหตุ: โปรดอนุญาต/ยอมรับคุกกี้บุคคลที่สาม (Third-party cookies) บนเบราว์เซอร์ เพื่อให้ระบบเซสชันล็อกอินทำงานได้ตามปกติ)*",
    role: "บทบาท",
    username: "ชื่อผู้ใช้",
    password: "รหัสผ่าน",
    copy: "คัดลอก",
    copied: "คัดลอกแล้ว!",
    show: "แสดง",
    hide: "ซ่อน",
    visitSite: "เปิดหน้าเว็บ Demo",
  },
  en: {
    title: "Demo Login Credentials",
    description: "Please use the test credentials below to log into the simulated environment:\n\n*(Note: Please allow/enable third-party cookies in your browser settings to ensure the login session functions correctly)*",
    role: "Role",
    username: "Username",
    password: "Password",
    copy: "Copy",
    copied: "Copied!",
    show: "Show",
    hide: "Hide",
    visitSite: "Open Demo Site",
  },
}
