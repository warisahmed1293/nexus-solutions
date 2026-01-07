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
import b_9 from "@/assets/img/home-01/client-logos/CLIENT LOGOS 2025-09.png";
import b_10 from "@/assets/img/home-01/client-logos/CLIENT LOGOS 2025-10.png";
import b_11 from "@/assets/img/home-01/client-logos/CLIENT LOGOS 2025-11.png";
import b_12 from "@/assets/img/home-01/client-logos/CLIENT LOGOS 2025-12.png";
import b_13 from "@/assets/img/home-01/client-logos/CLIENT LOGOS 2025-13.png";
import b_14 from "@/assets/img/home-01/client-logos/CLIENT LOGOS 2025-14.png";
import b_15 from "@/assets/img/home-01/client-logos/CLIENT LOGOS 2025-15.png";
import b_16 from "@/assets/img/home-01/client-logos/CLIENT LOGOS 2025-16.png";
import b_17 from "@/assets/img/home-01/client-logos/CLIENT LOGOS 2025-17.png";
import b_18 from "@/assets/img/home-01/client-logos/CLIENT LOGOS 2025-18.png";
import b_19 from "@/assets/img/home-01/client-logos/CLIENT LOGOS 2025-19.png";
import b_20 from "@/assets/img/home-01/client-logos/CLIENT LOGOS 2025-20.png";
import b_21 from "@/assets/img/home-01/client-logos/CLIENT LOGOS 2025-21.png";
import b_22 from "@/assets/img/home-01/client-logos/CLIENT LOGOS 2025-22.png";
import b_23 from "@/assets/img/home-01/client-logos/CLIENT LOGOS 2025-23.png";
import b_24 from "@/assets/img/home-01/client-logos/CLIENT LOGOS 2025-24.png";
import b_25 from "@/assets/img/home-01/client-logos/CLIENT LOGOS 2025-25.png";
import b_26 from "@/assets/img/home-01/client-logos/CLIENT LOGOS 2025-26.png";
import b_27 from "@/assets/img/home-01/client-logos/CLIENT LOGOS 2025-27.png";
import b_28 from "@/assets/img/home-01/client-logos/CLIENT LOGOS 2025-28.png";
import b_29 from "@/assets/img/home-01/client-logos/CLIENT LOGOS 2025-29.png";
import b_30 from "@/assets/img/home-01/client-logos/CLIENT LOGOS 2025-30.png";

const brand_images = [b_1, b_2, b_3, b_4, b_5, b_6, b_7, b_8,  b_1, b_2, b_3, b_4, b_5, b_6, b_7, b_8, b_9, b_10, b_11, b_12, b_13, b_14, b_15, b_16, b_17, b_18, b_19, b_20, b_21, b_22, b_23, b_24, b_25, b_26, b_27, b_28, b_29, b_30];

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
            <Image src={b} alt="" style={{width:120, height:"100%"}} />
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

