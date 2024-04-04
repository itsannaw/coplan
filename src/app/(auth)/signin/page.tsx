import Image from "next/image";
import Login from "../../../ui/components/authorization/Login/Login";
import { Link } from "@nextui-org/react";

export default function SignIn() {
  return (
    <main className="px-5 md:px-10 py-2">
      {/* need navbar */}
      <div className="flex flex-col md:flex-row max-w-[377px] md:max-w-[1440px] mx-auto justify-center mt-12 gap-10 md:gap-28 lg:gap-72">
        <div className="relative flex flex-col gap-4 lg:gap-8">
          <div className="flex flex-col gap-2 lg:gap-4">
            <span className="text-3xl lg:text-5xl font-semibold">
              Sign in to
            </span>
            <span className="text-2xl lg:text-4xl font-medium">
              Coplan is simply
            </span>
          </div>
          <div className="flex flex-col gap-2 text-base">
            <span>If you don’t have an account register</span>
            <div>
              You can <Link href="/signup">Register here </Link>!
            </div>
            <Image
              src="/saly.png"
              width={1540}
              height={1540}
              priority={true}
              className="max-xl:hidden absolute top-36 left-24 max-w-[385px] -z-10"
              alt="Saly"
            />
          </div>
        </div>
        <div className="flex">
          <Login />
        </div>
      </div>
    </main>
  );
}
