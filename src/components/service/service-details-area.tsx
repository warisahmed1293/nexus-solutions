// src/components/service/service-details-area.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ServiceDetail } from "@/data/service-details-data";

interface ServiceDetailsAreaProps {
  service: ServiceDetail;
}

export default function ServiceDetailsArea({ service }: ServiceDetailsAreaProps) {
  const allServices = [
    { slug: "branding-identity-design", name: "Branding & Identity" },
    { slug: "social-media", name: "Social Media" },
    { slug: "environmental-graphics", name: "Environmental Graphics" },
    { slug: "photography-videography", name: "Photography & Video" },
    { slug: "glazed-creations", name: "Glazed Creations" },
    { slug: "creative-consulting", name: "Creative Consulting" }
  ];

  return (
    <div className="service-details__area service-details__space pt-200 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__title-box mb-40">
              <span className="service-details__subtitle tp-char-animation">
                {service.subtitle}
              </span>
              <h4 className="sv-hero-title tp-char-animation">
                {service.title}
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="offset-xl-4 col-xl-5">
              <div className="service-details__banner-text mb-80">
                {service.detailsPage.introText.map((text, index) => (
                  <p
                    key={index}
                    className={index === 0 ? "mb-30 tp_title_anim" : "tp_title_anim"}
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__tab-wrapper text-center mb-120">
              <div className="service-details__tab-thumb">
                <Image
                  data-speed="0.4"
                  src={service.detailsPage.heroImage}
                  alt={`${service.title} - hero image`}
                  style={{ height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7">
            <div className="service-details__left-wrap">
              <div className="service-details__left-text pb-20">
                <p className="text-1 tp_title_anim">
                  {service.detailsPage.mainContent.heading}
                </p>
                {service.detailsPage.mainContent.description.map((desc, index) => (
                  <p key={index}>{desc}</p>
                ))}
              </div>

              <div className="service-details__fea-list">
                <ul>
                  {service.detailsPage.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              {service.detailsPage.smallImages.length > 0 && (
                <div className="service-details__sm-thumb-wrap mb-60">
                  <div className="row">
                    {service.detailsPage.smallImages.map((img, index) => (
                      <div
                        key={index}
                        className="col-xl-6 col-lg-6 col-md-6 mb-20"
                      >
                        <div className="service-details__sm-thumb">
                          <Image
                            src={img}
                            alt={`${service.title} - detail ${index + 1}`}
                            style={{ height: "auto" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="service-details__left-text">
                <p>{service.detailsPage.bottomText}</p>
              </div>
            </div>
          </div>

          <div className="col-xl-5 col-lg-5">
            <div className="service-details__right-wrap fix p-relative">
              <div className="service-details__rotate-text">
                <span>Full list of services</span>
              </div>

              <div className="service-details__right-category">
                {allServices.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/service-details/${s.slug}`}
                    className={s.slug === service.slug ? "active" : ""}
                  >
                    {s.name}
                  </Link>
                ))}
              </div>

              <div className="service-details__right-text-box">
                <h4>
                  {service.detailsPage.sidebarContent.title.split(' ').slice(0, 2).join(' ')}
                  <br />
                  {service.detailsPage.sidebarContent.title.split(' ').slice(2).join(' ')}
                </h4>
                <p className="mb-20">
                  {service.detailsPage.sidebarContent.description}
                </p>
                <Link
                  className="tp-btn-white background-black"
                  href="/contact"
                >
                  Let&apos;s Talk
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}