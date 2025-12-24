// app/service-details/[slug]/page.tsx
"use client";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { useParams, useRouter } from "next/navigation";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import ServiceDetailsArea from "@/components/service/service-details-area";
import LineImgSlider from "@/components/line-text/line-img-slider";
import BigText from "@/components/big-text";
import FooterTwo from "@/layouts/footers/footer-two";
import { getServiceBySlug } from "@/data/service-details-data";
// animation
import { charAnimation, titleAnimation } from "@/utils/title-animation";

const ServiceDetailsPage = () => {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  // Get service data by slug
  const service = getServiceBySlug(slug);

  // Redirect to 404 if service not found
  useEffect(() => {
    if (!service) {
      router.push('/error');
    }
  }, [service, router]);

  // Show nothing while redirecting
  if (!service) {
    return null;
  }

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderEleven />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* service details area */}
            <ServiceDetailsArea service={service} />
            {/* service details area */}

            {/* line image slider  */}
            <LineImgSlider />
            {/* line image slider  */}

            {/* big text */}
            <BigText />
            {/* big text */}
          </main>

          {/* footer area */}
          <FooterTwo topCls="" />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default ServiceDetailsPage;