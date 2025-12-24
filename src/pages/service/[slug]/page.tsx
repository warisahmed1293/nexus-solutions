"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";

import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// layouts & components
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import ServiceDetailsArea from "@/components/service/service-details-area";
import LineImgSlider from "@/components/line-text/line-img-slider";
import BigText from "@/components/big-text";
import FooterTwo from "@/layouts/footers/footer-two";

// data & utils
import { getServiceBySlug } from "@/data/service-details-data";
import { charAnimation, titleAnimation } from "@/utils/title-animation";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ServiceDetailsPage({ params }: PageProps) {
  const router = useRouter();
  const { slug } = params;

  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
    }, 100);

    return () => clearTimeout(timer);
  });

  const service = getServiceBySlug(slug);

  // ✅ ONE EFFECT – ALWAYS RUNS
  useEffect(() => {
    if (!service) {
      router.push("/error");
    }
  }, [service, router]);

  if (!service) {
    return null;
  }

  return (
    <Wrapper>
      <HeaderEleven />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <ServiceDetailsArea service={service} />
            <LineImgSlider />
            <BigText />
          </main>

          <FooterTwo topCls="" />
        </div>
      </div>
    </Wrapper>
  );
}
