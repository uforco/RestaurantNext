import Link from "next/link";
import UrlHeader from "./components/urlheader/UrlHeader";
import ParentWeithControl from "./components/ParentWeithControl";

export default function NotFound() {
  return (
    <div>
      <UrlHeader>
        <div className=" absolute w-full h-full bg-black bg-opacity-40 flex flex-col justify-center items-center text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <h2 className=" text-2xl font-semibold ">404 Error</h2>
          <p>
            Home{` > `}
            <span className=" primarycolor ">404</span>
          </p>
        </div>
      </UrlHeader>
      <div className=" bg-white ">
        <ParentWeithControl>
          <div className=" flex flex-col items-center justify-center gap-8 py-20 ">
            <h2 className=" primarycolor text-7xl font-semibold ">404</h2>
            <h3 className=" text-3xl font-bold ">
              Oops! Look likes something going wrong
            </h3>
            <p className=" w-full lg:w-[450px] text-center ">
              Page Cannot be found! {`we’ll`} have it figured out in no time.
              Menwhile, cheek out these fresh ideas:
            </p>
            <div>
              <Link className="" href={"/"}>
                <button
                  className={`  primaryBgcolor p-4 px-10 text-base rounded text-white font-semibold `}
                >
                  Go to home
                </button>
              </Link>
            </div>
          </div>
        </ParentWeithControl>
      </div>
    </div>
  );
}
