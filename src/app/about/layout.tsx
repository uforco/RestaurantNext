import UrlHeader from "./../components/urlheader/UrlHeader";
import Header from "./header/Header";

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
      {children}
    </div>
  );
}
