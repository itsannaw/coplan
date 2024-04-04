import Registration from "@/src/ui/components/authorization/Registration/Registration";
import Image from "next/image";

export default function SignUp() {
  return (
    <main className="px-10 py-2">
      <div className=" flex justify-center mt-12 gap-72">
        <div className="relative flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-5xl font-semibold">Sign Up to</span>
            <span className="text-4xl font-medium">Coplan is simply</span>
          </div>
          <div className="flex flex-col gap-2 text-base">
            <span>If you already an account</span>
            <span>You can Login here!</span>
            <Image
              src="/saly.png"
              width={1540}
              height={1540}
              priority={true}
              className="max-xl:hidden absolute top-36 left-24 max-w-[385px] -z-10"
              alt="Saly" />
          </div>
        </div>
        <div className="flex">
          <Registration />
        </div>
      </div>
    </main>
  );
}
