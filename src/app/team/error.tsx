"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function TeamError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Team page error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-4 text-white sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="mb-6 flex justify-center">
          <ExclamationTriangleIcon className="h-20 w-20 text-red-500" />
        </div>

        <h1 className="mb-4 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl lg:text-5xl">
          Unable to Load Team
        </h1>

        <p className="mx-auto mb-8 max-w-md text-lg text-gray-400">
          We&apos;re having trouble loading the team information. This might be
          due to network issues or data loading problems.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={reset}
            className="inline-flex items-center rounded-md border border-transparent bg-gradient-to-r from-[#0047AB] to-[#0056D6] px-6 py-3 text-base font-medium text-white shadow-lg hover:from-[#003366] hover:to-[#004499] focus:outline-none focus:ring-2 focus:ring-[#0047AB] focus:ring-offset-2"
          >
            Try Again
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => (window.location.href = "/")}
            className="inline-flex items-center rounded-md border border-gray-600 bg-transparent px-6 py-3 text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Go Home
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
