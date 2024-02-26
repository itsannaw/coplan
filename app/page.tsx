import Image from "next/image";
import Login from "./ui/home/login";

export default function Home() {
  return (
    <main className="px-10 py-8">
      <h1 className="text-xl font-semibold">Coplan</h1>
      <div className="flex justify-center mt-12 gap-16">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-5xl font-semibold">Sign in to</span>
            <span className="text-4xl font-medium">Coplan is simply</span>
          </div>
          <div className="flex flex-col gap-2 text-base">
            <span>If you don’t have an account register</span>
            <span>You can Register here !</span>
            <Image
              src="/saly.svg"
              width={395}
              height={320}
              className="ml-28"
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
