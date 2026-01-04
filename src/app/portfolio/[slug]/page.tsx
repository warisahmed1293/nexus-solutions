"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import { notFound } from "next/navigation";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import PortfolioDetailsThreeArea from "@/components/portfolio/details/portfolio-details-3-area";
import FooterTwo from "@/layouts/footers/footer-two";
import { getPortfolioBySlug } from "@/data/portfolio-data";
// animation
import { charAnimation, titleAnimation } from "@/utils/title-animation";

interface PageProps {
  params: { slug: string };
}

const PortfolioDetailsPage = ({ params }: PageProps) => {
  const portfolio = getPortfolioBySlug(params.slug);

  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  if (!portfolio) {
    notFound();
  }

  return (
    <Wrapper>
      <HeaderEleven />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <PortfolioDetailsThreeArea portfolio={portfolio} />
          </main>
          <FooterTwo topCls="" whiteFooter={true} />
        </div>
      </div>
    </Wrapper>
  );
};

export default PortfolioDetailsPage;