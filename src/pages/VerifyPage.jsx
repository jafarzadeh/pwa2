function VerifyPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-xl font-bold mb-4">کد تأیید پیامک‌شده را وارد کنید</h2>
      <input type="text" placeholder="کد تأیید" className="border p-2 rounded mb-4 w-64 text-right" />
      <button className="bg-green-500 text-white px-4 py-2 rounded">ورود به داشبورد</button>
    </div>
  )
}

export default VerifyPage
