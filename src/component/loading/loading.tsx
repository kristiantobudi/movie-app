export default function Loading() {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop:blur-lg">
        <div className="bg-white rounded-lg p-6 ">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-maroon"></div>
          <p className="mt-4 text-lg font-semibold text-gray-700 flex items-center">
            Loading
          </p>
        </div>
      </div>
    </>
  );
}
