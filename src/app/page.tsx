import { Metadata } from "next";
import HomeOnePage from "./(homes)/home-1/page";

export const metadata: Metadata = {
  title: "Nexus Solutions",
};

export default function Home() {
  return (
    <>
      <HomeOnePage />
    </>
  );
}
