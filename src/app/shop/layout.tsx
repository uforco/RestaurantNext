import Image from "next/image";
import menuheaderimg from "@/assets/menu/menuheaderimg.png";
import Header from "./header/Header";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className=" relative overflow-hidden ">
        <Image
          className=" w-full object-cover "
          src={menuheaderimg}
          alt=""
        ></Image>
        <Header></Header>
      </div>
      <>{children}</>
    </div>
  );
}
