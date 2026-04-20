import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 1,
    head: "แพลตฟอร์มจองสนามกีฬา | Sports Venue Booking Platform",
    description: `Sport Hub คือแพลตฟอร์มจองสนามกีฬาแบบครบวงจรที่รวมการทำงานของลูกค้า เจ้าของสนาม และผู้ดูแลระบบไว้ในที่เดียว ช่วยให้การค้นหาสนาม การจองคิว และการจัดการหลังบ้านทำได้ง่ายขึ้นกว่าการประสานงานแบบเดิมที่ต้องใช้หลายช่องทาง

ปัญหาที่โปรเจคนี้แก้ไข
- ลดปัญหาจองซ้ำซ้อนจากการจองผ่านโทรศัพท์หรือการบันทึกด้วยมือ
- ลดความล่าช้าในการอัปเดตตารางว่างและสถานะการจอง
- ทำให้เจ้าของสนามและแอดมินเห็นข้อมูลการดำเนินงานได้เป็นระบบมากขึ้น

ฟีเจอร์สำคัญของระบบ
- ลูกค้า (Customer): สมัครและยืนยันตัวตน, ค้นหาสนามตามประเภทกีฬา, ดูรายละเอียดสนามและรีวิว, จองช่วงเวลา, อัปโหลดหลักฐานการชำระเงิน, และติดตามสถานะการจอง
- เจ้าของสนาม (Field Owner): ลงทะเบียนสนาม, จัดการสนามย่อยและสิ่งอำนวยความสะดวก, สร้างประกาศ, ตรวจสอบและอัปเดตสถานะการจอง, และดูสถิติพร้อม export รายงานไฟล์ .xlsx
- ผู้ดูแลระบบ (Admin): จัดการผู้ใช้งาน, อนุมัติหรือปฏิเสธคำขอลงทะเบียนสนาม, และดูแลข้อมูลประเภทกีฬากลางของระบบ

จุดเด่นเชิงเทคนิค
- Realtime booking และ notification ด้วย Socket.IO เพื่อลดความผิดพลาดจากข้อมูลไม่ตรงกัน
- ระบบชำระเงินรองรับ PromptPay QR, การอัปโหลดสลิป, และการตรวจสอบหลักฐานการชำระเงิน
- แจ้งเตือนอีเมลอัตโนมัติในเหตุการณ์สำคัญของผู้ใช้และเจ้าของสนาม
- จัดการไฟล์ภาพด้วย Cloudinary และรองรับงานที่ต้องใช้แผนที่ผ่าน Longdo Map
- ออกแบบระบบแบบ full-stack แยก frontend (Next.js) และ backend (Express + PostgreSQL) ชัดเจน

การนำขึ้นระบบ (Deploy)
- Frontend deploy บน Vercel เพื่อรองรับการเข้าถึงและการอัปเดตหน้าเว็บอย่างรวดเร็ว
- Backend API deploy บน Railway พร้อมเชื่อมต่อ PostgreSQL สำหรับข้อมูลธุรกรรม
- จัดเก็บรูปภาพและไฟล์มีเดียบน Cloudinary เพื่อให้โหลดเร็วและดูแลง่ายใน production

สรุปผลลัพธ์
โปรเจคนี้แสดงความสามารถในการพัฒนาระบบจริงแบบ end-to-end ที่มีหลายบทบาทผู้ใช้และหลาย integration พร้อมกัน ทั้งด้านธุรกรรม การสื่อสารแบบเรียลไทม์ และการวิเคราะห์ข้อมูล ทำให้เป็นผลงานที่สื่อทั้งมุม product และ engineering ได้ครบ`,
    pictures:
      ["https://res.cloudinary.com/do6xlqizt/image/upload/v1773920996/project4_zqcb7j.png",
        "https://res.cloudinary.com/do6xlqizt/image/upload/v1776675003/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E1_hbg19m.png",
        "https://res.cloudinary.com/do6xlqizt/image/upload/v1776675037/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E2_rkpyjz.png",
        "https://res.cloudinary.com/do6xlqizt/image/upload/v1776675034/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E3_fvbir4.png",
        "https://res.cloudinary.com/do6xlqizt/image/upload/v1776675189/Screenshot_2025-09-08_185909_zeidig.png",
        "https://res.cloudinary.com/do6xlqizt/image/upload/v1776675031/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E4_ukedcg.png",
        "https://res.cloudinary.com/do6xlqizt/image/upload/v1776675282/Screenshot_2025-09-22_004414_tl9zks.png",
        "https://res.cloudinary.com/do6xlqizt/image/upload/v1776675380/Screenshot_2025-07-19_213144_op2ka9.png",
        "https://res.cloudinary.com/do6xlqizt/image/upload/v1776675022/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E7_pqebmc.png",
        "https://res.cloudinary.com/do6xlqizt/image/upload/v1776675018/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E8_yrm62r.png",
        "https://res.cloudinary.com/do6xlqizt/image/upload/v1776675014/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E10_ug5tmb.png",
        "https://res.cloudinary.com/do6xlqizt/image/upload/v1776675006/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E12_rc5hyq.png",
        "https://res.cloudinary.com/do6xlqizt/image/upload/v1776675002/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E14_p2nmsw.png",
        "https://res.cloudinary.com/do6xlqizt/image/upload/v1776675008/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E13_c8ltei.png"



      ],
    tags: ["TEAMWORK", "Next.js 15", "Express.js", "PostgreSQL", "Socket.IO", "PromptPay QR", "Railway", "Vercel", "Cloudinary",]
  },
  {
    id: 2,
    head: "แพลตฟอร์มขนส่งช่วยเหลือผู้ป่วยและคนขับรถรับส่ง | DriveCare",
    description: `DriveCare คือแพลตฟอร์มขนส่งทางการแพทย์ที่ออกแบบมาเพื่อเชื่อมการทำงานระหว่างผู้ป่วย คนขับ และผู้ดูแลระบบไว้ในระบบเดียว ตั้งแต่การล็อกอินผ่าน LINE, การจองรถรับส่ง, การมอบหมายงาน, การติดตามสถานะงาน, ไปจนถึงการตรวจสอบการชำระเงิน

ปัญหาที่โปรเจคนี้แก้ไข
- ลดความซับซ้อนในการประสานงานรถรับส่งผู้ป่วยที่ปกติต้องคุยหลายช่องทาง
- ลดความผิดพลาดจากการจดข้อมูลด้วยมือและการอัปเดตสถานะแบบไม่ทันเวลา
- ทำให้ทีมปฏิบัติการเห็นภาพรวมงานและรายได้แบบใกล้เคียงเรียลไทม์

ฟีเจอร์สำคัญของระบบ
- ผู้ใช้งาน (User): ล็อกอินด้วย LINE LIFF, กรอกข้อมูลสุขภาพ, คำนวณ BMI, สร้างรายการจองพร้อมจุดรับ-ส่ง, ติดตามสถานะงาน, และอัปโหลดสลิปชำระเงิน
- คนขับ (Driver): เห็นงานที่ได้รับมอบหมาย, รับงาน, ดูเส้นทาง, อัปเดตความคืบหน้าระหว่างเดินทาง, และปิดงานเมื่อเสร็จสิ้น
- ผู้ดูแลระบบ (Admin): อนุมัติคนขับ, มอบหมายงาน, ตรวจสอบสลิป, จัดการผู้ใช้งาน, และดู dashboard สำหรับ booking metrics และรายงานรายได้

จุดเด่นเชิงเทคนิค
- Realtime event ด้วย Pusher เพื่ออัปเดตสถานะงานและข้อมูลฝั่งปฏิบัติการ
- เชื่อม LINE Messaging API สำหรับการแจ้งเตือนงานและสถานะสำคัญ
- ใช้ Longdo Map ในการดูเส้นทางและงานที่เกี่ยวข้องกับตำแหน่ง
- จัดการไฟล์รูปและหลักฐานผ่าน Cloudinary
- พัฒนาแบบ type-safe ด้วย Next.js + TypeScript + PostgreSQL เพื่อให้ดูแลระบบระยะยาวได้ง่าย

การนำขึ้นระบบ (Deploy)
- Full-stack app (Frontend + Backend) deploy บน Vercel สำหรับประสบการณ์ใช้งานที่เสถียรทั้งมือถือและเดสก์ท็อป
- Database (PostgreSQL) deploy บน Railway สำหรับจัดเก็บข้อมูลหลักของระบบ
- ใช้ Cloudinary สำหรับรูปและหลักฐานการชำระเงิน เพื่อแยก storage layer ออกจากตัวแอปหลัก

สรุปผลลัพธ์
โปรเจคนี้แสดงความสามารถด้านการออกแบบระบบจริงที่มีหลายบทบาทผู้ใช้ (role-based workflow) และต้องประสานทั้งฝั่ง product, operation และ technical integration พร้อมกัน เหมาะกับงานที่ต้องการทั้งความแม่นยำของข้อมูลและประสบการณ์ใช้งานที่ลื่นไหล`,
    pictures: [
      "https://res.cloudinary.com/do6xlqizt/image/upload/v1776673862/image1_txylet.png",
      "https://res.cloudinary.com/do6xlqizt/image/upload/v1776673861/image_u7usjx.png",
      "https://res.cloudinary.com/do6xlqizt/image/upload/v1776673911/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E1_d4mqxn.png",
      "https://res.cloudinary.com/do6xlqizt/image/upload/v1776673912/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E2_stj8ac.png",
      "https://res.cloudinary.com/do6xlqizt/image/upload/v1776673913/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E3_ggdnub.png",
      "https://res.cloudinary.com/do6xlqizt/image/upload/v1776673979/Screenshot_2026-04-20_152941_pg6eof.png",
      "https://res.cloudinary.com/do6xlqizt/image/upload/v1776673980/Screenshot_2026-04-20_152949_yokjnm.png",
    ],
    tags: ["TEAMWORK", "Next.js 16 Fullstack", "Tailwind CSS", "TypeScript", "PostgreSQL", "LINE LIFF", "LINE Messaging Api", "Pusher", "Longdo Map", "Railway", "Vercel", "Cloudinary",]
  },
  {
    id: 3,
    head: "Ticket Helper Platform + Admin Dashboard",
    description: `Ticket Helper Platform คือระบบที่รวม 2 ส่วนสำคัญเข้าด้วยกัน ได้แก่ แดชบอร์ดแอดมินสำหรับจัดการผู้ใช้งาน และ Chrome Extension สำหรับช่วยเตรียมขั้นตอนกดบัตรบนหน้า ThaiTicketMajor ให้เป็น workflow ที่ชัดเจนและทำซ้ำได้ง่ายขึ้น

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
    pictures: [
      "https://res.cloudinary.com/do6xlqizt/image/upload/v1776672735/Screenshot_2026-04-20_151039_k2f4uw.png",
      "https://res.cloudinary.com/do6xlqizt/image/upload/v1776672732/Screenshot_2026-04-20_151012_q8vzxp.png",
      "https://res.cloudinary.com/do6xlqizt/image/upload/v1776672731/Screenshot_2026-04-20_151052_o6nryt.png",
      "https://res.cloudinary.com/do6xlqizt/image/upload/v1776672924/Screenshot_2026-04-20_151113_jdmygd.png",
      "https://res.cloudinary.com/do6xlqizt/image/upload/v1776672732/Screenshot_2026-04-20_151124_iyvoak.png",
      "https://res.cloudinary.com/do6xlqizt/image/upload/v1776672732/Screenshot_2026-04-20_151134_gommlp.png",
    ],
    tags: ["Next.js 15 Fullstack", "TypeScript", "Chrome Extension MV3", "Vite-React.js", "Prisma", "PostgreSQL", "Redis", "Zod", "CRXJS", "pnpm Workspace", "Vercel", "Supabase", "Upstash"]
  },
]
