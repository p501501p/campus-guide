# Campus Guide

Campus Guide เป็นแอปพลิเคชันสำหรับแสดงข้อมูลสถานที่ต่าง ๆ ภายในมหาวิทยาลัย โดยแยกการใช้งานออกเป็นหน้าสำหรับผู้ใช้ทั่วไป (Public) และหน้าจัดการสำหรับแอดมิน (Admin / Backoffice)

## โครงสร้างโปรเจค

```text
campus-guide/
├── app/
│   ├── (private)/
│   │   ├── layout.tsx
│   │   └── place-management/
│   │       └── page.tsx
│   ├── (public)/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   └── place/
│   │       ├── layout.tsx
│   │       ├── page.tsx
│   │       └── [slug]/
│   │           ├── page.tsx
│   │           └── not-found.tsx
│   ├── globals.css
│   └── layout.tsx
├── components/
│   └── Breadcrumbs.tsx
├── data/
│   └── places.ts
├── public/
├── eslint.config.mjs
├── next.config.ts
├── next-env.d.ts
├── package.json
├── postcss.config.mjs
├── README.md
├── tsconfig.json
└── ...
```

## หน้าที่สำคัญ

### Public
- `/` หน้าแรก
- `/about` หน้าเกี่ยวกับผู้พัฒนา
- `/place` แสดงรายการสถานที่ทั้งหมด
- `/place/[slug]` แสดงรายละเอียดของสถานที่แต่ละแห่ง

### Admin / Backoffice
- `/place-management` หน้าจัดการรายการสถานที่สำหรับแอดมิน

## Layout ที่ใช้
- Public layout: `app/(public)/layout.tsx`
- Admin layout: `app/(private)/layout.tsx`

## Breadcrumbs
ทุกหน้ามีคอมโพเนนต์ `Breadcrumbs` เพื่อแสดงตำแหน่งปัจจุบัน เช่น
- หน้าแรก / สถานที่ / ห้องสมุดกลาง

## ข้อมูลสถานที่
ข้อมูลสถานที่ถูกจัดเก็บในไฟล์:
- `data/places.ts`

## วิธีการรัน

```bash
npm install
npm run dev
```

## ผู้พัฒนา
- นายกิตติศักดิ์ ขันแข็ง
- รหัสนักศึกษา: 673450031-4
