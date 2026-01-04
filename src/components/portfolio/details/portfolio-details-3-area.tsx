import React from 'react';
import { scroller } from 'react-scroll';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import Image from 'next/image';
import { Leaf, ScrollDownTwo, UpArrowFour } from '@/components/svg';
import { IPortfolioItem } from '@/data/portfolio-data';

// slider setting
const slider_setting: SwiperOptions = {
  slidesPerView: 3,
  loop: true,
  autoplay: true,
  spaceBetween: 20,
  speed: 1000,
  breakpoints: {
    '1400': {
      slidesPerView: 3,
    },
    '1200': {
      slidesPerView: 3,
    },
    '992': {
      slidesPerView: 2,
    },
    '768': {
      slidesPerView: 2,
    },
    '576': {
      slidesPerView: 1,
    },
    '0': {
      slidesPerView: 1,
    },
  },
};

interface PortfolioDetailsThreeAreaProps {
  portfolio: IPortfolioItem;
}

export default function PortfolioDetailsThreeArea({ portfolio }: PortfolioDetailsThreeAreaProps) {
  const { details } = portfolio;

  const scrollTo = () => {
    scroller.scrollTo('xyz', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <>
      {/* details area */}
      <div className="tp-project-details-3-top tp-project-details-3-ptb">
        <div className="container container-1560">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-project-details-3-title-box">
                <h2 className="tp-section-title-160 mb-50 tp-char-animation">
                  {details.title}
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <div className="tp-project-details-3-scroll smooth">
                <a onClick={scrollTo} className="pointer">
                  <span>
                    <ScrollDownTwo />
                  </span>
                  Scroll to Explore
                </a>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="tp-project-details-3-link mt-30 text-start text-md-end">
                <a href={details.websiteUrl} target="_blank" rel="noopener noreferrer">
                  Visit Website
                  <span>
                    <UpArrowFour />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* full image */}
      <div className="tp-project-details-3-full-width-thumb mb-120">
        <Image data-speed=".8" src={details.fullImage} alt={details.title} style={{ height: 'auto' }} />
      </div>

      {/* first section */}
      {details.sections[0] && (
        <div className="showcase-details-2-area pb-120">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="showcase-details-2-section-box">
                  <h4 className="showcase-details-2-section-title tp-char-animation">
                    {details.sections[0].sectionTitle}
                  </h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3">
                <div className="showcase-details-2-section-left">
                  <span className="ab-inner-subtitle mb-25">
                    <Leaf />
                    {details.sections[0].subtitle}
                  </span>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="showcase-details-2-content-right tp_title_anim">
                  {details.sections[0].content.map((paragraph, idx) => (
                    <p key={idx} className={idx === 0 ? "pb-25" : ""}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* second full image */}
      <div id="xyz" className="tp-project-details-3-thumb mb-120">
        <div className="container container-1560">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-project-details-3-thumb-box">
                <Image data-speed=".8" src={details.fullImage2} alt={details.title} style={{ height: 'auto' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second section */}
      {details.sections[1] && (
        <div className="showcase-details-2-area pb-120">
          <div className="container">
            <div className="row">
              <div className="col-xl-8">
                <div className="showcase-details-2-section-box">
                  <h4 className="showcase-details-2-section-title tp-char-animation">
                    {details.sections[1].sectionTitle}
                  </h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3">
                <div className="showcase-details-2-section-left">
                  <span className="ab-inner-subtitle mb-25">
                    <Leaf />
                    {details.sections[1].subtitle}
                  </span>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="showcase-details-2-content-right tp_title_anim">
                  {details.sections[1].content.map((paragraph, idx) => (
                    <p key={idx} className={idx === 0 ? "pb-25" : ""}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* thumb images */}
      {details.thumbImages.length > 0 && (
        <div className="tp-project-details-3-thumb mb-90">
          <div className="container">
            <div className="row">
              {details.thumbImages.map((img, idx) => (
                <div key={idx} className="col-xl-6">
                  <div className="tp-project-details-3-thumb-box mb-30">
                    <Image className="w-100" src={img} alt={`${details.title}-${idx}`} style={{ height: 'auto' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* third section */}
      {details.sections[2] && (
        <div className="showcase-details-2-area pb-120">
          <div className="container">
            <div className="row">
              <div className="col-xl-8">
                <div className="showcase-details-2-section-box">
                  <h4 className="showcase-details-2-section-title tp-char-animation">
                    {details.sections[2].sectionTitle}
                  </h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3">
                <div className="showcase-details-2-section-left">
                  <span className="ab-inner-subtitle mb-25">
                    <Leaf />
                    {details.sections[2].subtitle}
                  </span>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="showcase-details-2-content-right tp_title_anim">
                  {details.sections[2].content.map((paragraph, idx) => (
                    <p key={idx} className={idx === 0 ? "pb-25" : ""}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* slider images area */}
      {details.sliderImages.length > 0 && (
        <div className="pd-visual-slider-wrap pb-40">
          <Swiper {...slider_setting} modules={[Autoplay]} className="swiper-container pd-visual-slider-active">
            {details.sliderImages.map((imgSrc, index) => (
              <SwiperSlide key={index}>
                <div className="pd-visual-slider-thumb fix">
                  <Image src={imgSrc} alt={`${details.title}-slider-${index}`} style={{ height: "auto" }} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
}