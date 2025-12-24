"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// brand images
import b_1 from "@/assets/img/home-01/client-logos/CLIENT LOGOS 2025-01.png";
import b_2 from "@/assets/img/home-01/client-logos/CLIENT LOGOS 2025-02.png";
import b_3 from "@/assets/img/home-01/client-logos/CLIENT LOGOS 2025-03.png";
import b_4 from "@/assets/img/home-01/client-logos/CLIENT LOGOS 2025-04.png";
import b_5 from "@/assets/img/home-01/client-logos/CLIENT LOGOS 2025-05.png";
import b_6 from "@/assets/img/home-01/client-logos/CLIENT LOGOS 2025-06.png";
import b_7 from "@/assets/img/home-01/client-logos/CLIENT LOGOS 2025-07.png";
import b_8 from "@/assets/img/home-01/client-logos/CLIENT LOGOS 2025-08.png";

const brand_images = [b_1, b_2, b_3, b_4, b_5, b_6, b_7, b_8,  b_1, b_2, b_3, b_4, b_5, b_6, b_7, b_8];

export default function BrandSlider() {
  return (
    <div className="tp-brand-slider-active fix">
      <Marquee
        speed={100}
        loop={0}
        className="brand-wrapper"
      >
        {brand_images.map((b, i) => (
          <div key={i} className="tp-brand-item">
            <Image src={b} alt="" />
          </div>
        ))}
      </Marquee>
      {/* <Swiper
        {...slider_setting}
        modules={[Autoplay, FreeMode]}
        className="brand-wrapper"
      >
        {brand_images.map((b, i) => (
          <SwiperSlide key={i}>
            <div className="tp-brand-item">
              <Image src={b} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
  );
}
