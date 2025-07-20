import React from 'react';

export default function Home() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">کالاهای پیشنهادی</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-100 p-2 rounded">یخچال</div>
        <div className="bg-gray-100 p-2 rounded">تردمیل</div>
        <div className="bg-gray-100 p-2 rounded">دستگاه جوش</div>
      </div>
    </div>
  );
}