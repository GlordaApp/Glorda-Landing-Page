export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md mx-4 bg-white rounded-2xl shadow p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-3">404 – الصفحة غير موجودة</h1>
        <p className="text-sm text-gray-500">
          الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
        </p>
        <a href="/" className="mt-6 inline-block text-sm font-medium text-[#A51245] hover:underline">
          العودة للرئيسية
        </a>
      </div>
    </div>
  );
}
