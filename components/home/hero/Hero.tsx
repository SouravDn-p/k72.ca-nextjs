import Link from "next/link";
import VideoComponent from "../Video";

export default function Hero() {
  return (
    <div className="h-screen w-screen">
      <div className="h-screen w-screen fixed">
        <VideoComponent />
      </div>
      <div className="h-screen w-screen relative flex flex-col justify-between">
        <section className="flex flex-col text-center items-center">
          <div className="text-[9vw] uppercase leading-[9vw]">
            L&apos;étincelle
          </div>
          <div className="text-[9vw] uppercase leading-[9vw] flex items-center">
            qui
            <div className="w-100 rounded-full overflow-hidden h-40">
              <VideoComponent />
            </div>
            génère
          </div>
          <div className="text-[9vw] uppercase leading-[9vw]">
            la créativité
          </div>
        </section>
        <section className="flex space-x-8 mx-auto text-center items-center pb-4">
          <Link
            href={"projects"}
            className="text-[6vw] py-2 hover:border-[#D3FD50] hover:text-[#D3FD50] font-bold mr-12 tracking-wide px-8  border-4 rounded-full border-white uppercase  leading-[10.5vh]"
          >
            Projects
          </Link>
          <Link
            href="/agency"
            className="text-[6vw] py-2 hover:border-[#D3FD50] hover:text-[#D3FD50] font-bold tracking-wide px-8  border-4 rounded-full border-white uppercase leading-[10.5vh] flex items-center"
          >
            Agency
          </Link>
        </section>
      </div>
    </div>
  );
}
