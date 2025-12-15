import { Metadata } from "next";
import HomeOnePage from "./(homes)/home-1/page";
import HomeMain from "@/pages/homes/home-1";

export const metadata: Metadata = {
  title: "Glazed Designs - Home",
};

export default function Home() {
  return (
    <>
      <HomeMain />
    </>
  );
}
