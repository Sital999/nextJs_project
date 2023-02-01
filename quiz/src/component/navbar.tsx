import type { NextPage } from "next";
import Link from "next/link"

const Navbar:NextPage = () => {
  return (
    <>
      <Link href="/">
          <h1 className="text-5xl font-bold underline text-center pb-7">
            Quiz 
          </h1>
      </Link>
    </>
  );
};

export default Navbar;
