"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global application error:", error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center bg-black px-4 text-white sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="mb-6 flex justify-center">
              <ExclamationTriangleIcon className="h-24 w-24 text-red-500" />
            </div>

            <h1 className="mb-4 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl lg:text-6xl">
              Application Error
            </h1>

            <p className="mx-auto mb-8 max-w-md text-lg text-gray-400 sm:text-xl">
              A critical error occurred. Please refresh the page or contact
              support if the problem persists.
            </p>

            {process.env.NODE_ENV === "development" && (
              <div className="mb-6 rounded-lg bg-gray-900 p-4 text-left">
                <p className="text-sm text-red-400">
                  <strong>Error:</strong> {error.message}
                </p>
                {error.digest && (
                  <p className="mt-2 text-sm text-gray-500">
                    <strong>Digest:</strong> {error.digest}
                  </p>
                )}
              </div>
            )}

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={reset}
                className="inline-flex items-center rounded-md border border-transparent bg-gradient-to-r from-[#0047AB] to-[#0056D6] px-6 py-3 text-base font-medium text-white shadow-lg hover:from-[#003366] hover:to-[#004499] focus:outline-none focus:ring-2 focus:ring-[#0047AB] focus:ring-offset-2"
              >
                Try again
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => (window.location.href = "/")}
                className="inline-flex items-center rounded-md border border-gray-600 bg-transparent px-6 py-3 text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Reload Application
              </motion.button>
            </div>
          </motion.div>
        </div>
      </body>
    </html>
  );
}
