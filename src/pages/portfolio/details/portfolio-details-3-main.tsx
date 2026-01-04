"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import PortfolioDetailsThreeArea from "@/components/portfolio/details/portfolio-details-3-area";
// animation
import { charAnimation, titleAnimation } from "@/utils/title-animation";
import { portfolioData } from "@/data/portfolio-data";
import FooterTwo from "@/layouts/footers/footer-two";

const PortfolioDetailsThreeMain = () => {
  useScrollSmooth();
  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  // Get the specific portfolio item - adjust the ID or index as needed
  // Option 1: If you're using a specific ID (e.g., ID 3 for details-3)
  const portfolioItem = portfolioData.find(item => item.id === 3);

  // Option 2: Or if you want to get it by index
  // const portfolioItem = portfolio_data[2]; // third item (index 2)

  // Add a fallback in case the item is not found
  if (!portfolioItem) {
    return <div>Portfolio item not found</div>;
  }

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderEleven />
      {/* header area end */}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* portfolio details area */}
            <PortfolioDetailsThreeArea portfolio={portfolioItem} />
            {/* portfolio details area */}
          </main>
          {/* footer area */}
          <FooterTwo topCls="" whiteFooter={true} />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default PortfolioDetailsThreeMain;