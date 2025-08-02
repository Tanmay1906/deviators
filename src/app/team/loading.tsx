import ClientBackground3D from "@/components/3D/ClientBackground3D";

export default function TeamLoading() {
  return (
    <>
      <ClientBackground3D />
      <section className="relative py-20 pt-24 lg:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2
              className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text font-pixelify text-4xl font-bold text-transparent md:text-6xl lg:text-7xl"
              style={{
                textShadow:
                  "0 0 20px rgba(0, 71, 171, 0.5), 0 0 40px rgba(0, 71, 171, 0.3)",
              }}
            >
              Meet Our Team
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-300 sm:text-xl">
              The brilliant minds behind Deviators Club pushing the boundaries
              of what&apos;s possible in technology and innovation
            </p>
          </div>

          <div className="py-20 text-center">
            <div className="relative mb-8">
              <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-[#0047AB]/30 border-t-[#0047AB] shadow-lg"></div>
              <div className="absolute inset-0 inline-block h-16 w-16 animate-ping rounded-full border-2 border-[#0047AB]/20"></div>
            </div>

            <p className="mb-4 text-xl font-medium text-gray-300">
              Loading team members...
            </p>

            {/* Skeleton cards */}
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="group relative animate-pulse rounded-2xl border border-white/20 bg-gradient-to-br from-white/5 via-white/10 to-white/5 p-8 backdrop-blur-xl"
                >
                  <div className="flex flex-col items-center">
                    <div className="mb-6 h-36 w-36 rounded-full bg-gray-700/50"></div>
                    <div className="mb-3 h-6 w-32 rounded bg-gray-700/50"></div>
                    <div className="mb-5 flex gap-2">
                      <div className="h-6 w-16 rounded-full bg-gray-700/50"></div>
                      <div className="h-6 w-20 rounded-full bg-gray-700/50"></div>
                    </div>
                    <div className="mb-6 space-y-2">
                      <div className="h-4 w-48 rounded bg-gray-700/50"></div>
                      <div className="h-4 w-40 rounded bg-gray-700/50"></div>
                    </div>
                    <div className="flex space-x-4">
                      <div className="h-6 w-6 rounded bg-gray-700/50"></div>
                      <div className="h-6 w-6 rounded bg-gray-700/50"></div>
                      <div className="h-6 w-6 rounded bg-gray-700/50"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
