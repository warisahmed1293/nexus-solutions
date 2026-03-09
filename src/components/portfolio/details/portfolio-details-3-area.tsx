// components/portfolio/details/portfolio-details-3-area.tsx
"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { IPortfolioItem } from "@/data/portfolio-data";
import "@/assets/css/portfolio-details.css";

function useScrollReveal() {
  const refs = useRef<(HTMLElement | null)[]>([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) (e.target as HTMLElement).classList.add("pd-visible");
        });
      },
      { threshold: 0.07, rootMargin: "0px 0px -50px 0px" }
    );
    refs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);
  return refs;
}

interface Props { portfolio: IPortfolioItem; }

export default function PortfolioDetailsThreeArea({ portfolio }: Props) {
  const { details, category } = portfolio;
  const refs = useScrollReveal();
  const refIdx = useRef(0);

  // reset counter each render
  refIdx.current = 0;
  const setRef = (el: HTMLElement | null) => {
    refs.current[refIdx.current++] = el;
  };

  // duplicate slider images so loop is seamless regardless of count
  const allSliderImages = details.sliderImages.length > 0
    ? [...details.sliderImages, ...details.sliderImages, ...details.sliderImages]
    : [];

  return (
    <div className="pd-page">
      <div className="pd-page">

        {/* ── HERO ── */}
        <div className="pd-hero">
          <Image
            src={details.fullImage}
            alt={details.title}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* ── INFO ROW ── */}
        <div
          className="pd-info pd-reveal-stagger"
          ref={setRef as React.RefCallback<HTMLDivElement>}
        >
          <div>
            <h1 className="pd-info__title">{details.title}</h1>
            <div className="pd-info__desc">
              {details.sections[0]?.content.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <a className="pd-visit" href={details.websiteUrl} target="_blank" rel="noopener noreferrer">
              Visit Website ↗
            </a>
          </div>

          <div>
            <div className="pd-col-group">
              <span className="pd-col-label">Disciplines</span>
              {details.sections.map((s, i) => (
                <span className="pd-col-item" key={i}>{s.sectionTitle}</span>
              ))}
            </div>
            <div className="pd-col-group">
              <span className="pd-col-label">Category</span>
              <span className="pd-col-item">{category}</span>
            </div>
          </div>

          <div>
            <div className="pd-col-group">
              <span className="pd-col-label">Year</span>
              <span className="pd-col-item">2024</span>
            </div>
          </div>
        </div>

        {/* ── FULL WIDTH IMAGE 2 ── */}
        <div
          className="pd-full-img pd-reveal"
          ref={setRef as React.RefCallback<HTMLDivElement>}
        >
          <Image
            src={details.fullImage2}
            alt={details.title}
            width={1920}
            height={1080}
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        {/* ── SECTION 2 ── */}
        {details.sections[1] && (
          <>
            <div
              className="pd-section pd-reveal"
              ref={setRef as React.RefCallback<HTMLDivElement>}
            >
              <h2 className="pd-section__heading">{details.sections[1].sectionTitle}</h2>
              <div className="pd-section__body">
                <span className="pd-section__sub">{details.sections[1].subtitle}</span>
                {details.sections[1].content.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
            <div className="pd-divider" />
          </>
        )}

        {/* ── SPLIT 2-COL THUMBS ── */}
        {details.thumbImages.length >= 2 && (
          <div
            className="pd-split pd-reveal"
            ref={setRef as React.RefCallback<HTMLDivElement>}
          >
            {details.thumbImages.map((img, i) => (
              <div className="pd-split__img" key={i}>
                <Image src={img} alt={`${details.title} ${i + 1}`} fill sizes="50vw" style={{ objectFit: "cover" }} />
              </div>
            ))}
          </div>
        )}

        {/* ── SECTION 3 ── */}
        {details.sections[2] && (
          <>
            <div
              className="pd-section pd-reveal"
              ref={setRef as React.RefCallback<HTMLDivElement>}
            >
              <h2 className="pd-section__heading">{details.sections[2].sectionTitle}</h2>
              <div className="pd-section__body">
                <span className="pd-section__sub">{details.sections[2].subtitle}</span>
                {details.sections[2].content.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
            <div className="pd-divider" />
          </>
        )}

        {/* ── EXTRA 2-COL GRID (first 2 slider images) ── */}
        {details.sliderImages.length >= 2 && (
          <div
            className="pd-extra-grid pd-reveal"
            ref={setRef as React.RefCallback<HTMLDivElement>}
          >
            {details.sliderImages.slice(0, 2).map((img, i) => (
              <div className="pd-extra-grid__img" key={i}>
                <Image src={img} alt={`${details.title} extra ${i + 1}`} fill sizes="50vw" style={{ objectFit: "cover" }} />
              </div>
            ))}
          </div>
        )}

        {/* ── SLIDER — all images tripled for smooth infinite loop ── */}
        {allSliderImages.length > 0 && (
          <div
            className="pd-slider-wrap pd-reveal"
            ref={setRef as React.RefCallback<HTMLDivElement>}
          >
            <Swiper
              modules={[Autoplay]}
              slidesPerView="auto"
              spaceBetween={16}
              loop={true}
              speed={3000}
              autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false }}
              allowTouchMove={false}
            >
              {allSliderImages.map((img, i) => (
                <SwiperSlide key={i} style={{ width: "auto" }}>
                  <div className="pd-slide-img">
                    <Image
                      src={img}
                      alt={`${details.title} slide ${i + 1}`}
                      height={420}
                      width={640}
                      style={{ height: "420px", width: "auto", display: "block" }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

      </div>
    </div>
  );
}