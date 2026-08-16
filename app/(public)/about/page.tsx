export default function Page() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-12">
      <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
          About
        </p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">
          Campus Guide
        </h1>

        <div className="mt-6 space-y-4 text-slate-600">
          <p>
            เว็บแอปนี้ออกแบบเพื่อช่วยให้ผู้ใช้ค้นหาสถานที่สำคัญภายในมหาวิทยาลัยได้ง่าย
            และเข้าใจข้อมูลต่าง ๆ เช่น อาคาร เวลาเปิด และสิ่งอำนวยความสะดวก
          </p>
          <p>
            ผู้พัฒนา: <span className="font-semibold text-slate-800">Kittisak Kankaeng</span>
          </p>
          <p>
            รหัสนักศึกษา: <span className="font-semibold text-slate-800">673450031-4</span>
          </p>
        </div>
      </div>
    </main>
  );
}
