import Link from "next/link";
import socials from "@/data/socials";

export default function Footer() {
  return (
    <footer id="contact" className="mt-auto bg-[#000000] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="text-center">
            <Link href="/" className="text-2xl font-bold text-white">
              Deviators Club
            </Link>
            <p className="opacity-80">estd: 2024</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {socials.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                className="flex gap-1 text-gray-400 transition-colors hover:text-[#0047AB]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="h-6 w-6" title={social.name} />
                {social.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
