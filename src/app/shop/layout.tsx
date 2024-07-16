import Image from "next/image";
import menuheaderimg from "@/assets/menu/menuheaderimg.png";
import Header from "./header/Header";
import UrlHeader from "./../components/urlheader/UrlHeader";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <UrlHeader>
        <Header></Header>
      </UrlHeader>
      <>{children}</>
    </div>
  );
}
