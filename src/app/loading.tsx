import ClientBackground3D from "@/components/3D/ClientBackground3D";

export default function Loading() {
  return (
    <>
      <ClientBackground3D />
      <div className="flex min-h-screen flex-col items-center justify-center px-4 text-white sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Animated loading spinner */}
          <div className="relative mb-8">
            <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-[#0047AB]/30 border-t-[#0047AB] shadow-lg"></div>
            <div className="absolute inset-0 inline-block h-16 w-16 animate-ping rounded-full border-2 border-[#0047AB]/20"></div>
          </div>

          <h2
            className="mb-4 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text font-pixelify text-2xl font-bold text-transparent sm:text-3xl"
            style={{
              textShadow: "0 0 20px rgba(0, 71, 171, 0.5)",
            }}
          >
            Loading...
          </h2>

          <p className="text-lg text-gray-300">Preparing your experience</p>

          {/* Loading dots animation */}
          <div className="mt-6 flex justify-center space-x-2">
            <div className="h-2 w-2 animate-bounce rounded-full bg-[#0047AB] [animation-delay:-0.3s]"></div>
            <div className="h-2 w-2 animate-bounce rounded-full bg-[#0047AB] [animation-delay:-0.15s]"></div>
            <div className="h-2 w-2 animate-bounce rounded-full bg-[#0047AB]"></div>
          </div>
        </div>
      </div>
    </>
  );
}
