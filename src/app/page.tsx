import Image from "next/image";
import Homepage from "./home/Homepage";

export default function Home() {
  return (
    <main>
      <Homepage></Homepage>
      <div className=" w-full h-16 border my-5 "></div>
    </main>
  );
}
