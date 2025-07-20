function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-xl font-bold mb-4">ورود با شماره موبایل</h2>
      <input type="tel" placeholder="شماره موبایل" className="border p-2 rounded mb-4 w-64 text-right" />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">تأیید و ادامه</button>
    </div>
  )
}

export default LoginPage
