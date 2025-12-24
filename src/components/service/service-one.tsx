// src/components/service/service-one.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
// service images
import s_1 from "@/assets/img/home-01/service/service-icon-1.png";
import s_2 from "@/assets/img/home-01/service/service-icon-2.png";
import s_3 from "@/assets/img/home-01/service/service-icon-3.png";
import s_4 from "@/assets/img/home-01/service/service-icon-4.png";
import s_5 from "@/assets/img/home-01/service/service-icon-1.png";
import s_6 from "@/assets/img/home-01/service/service-icon-2.png";

// service data
const service_data = [
  {
    id: 1,
    slug: "branding-identity-design",
    title: "BRANDING & IDENTITY DESIGN",
    desc: "We craft unique visual identities that capture your brand's essence. From logos to comprehensive brand guidelines, we create cohesive systems that resonate with your audience.",
    icon: s_1,
  },
  {
    id: 2,
    slug: "social-media",
    title: "SOCIAL MEDIA",
    desc: "Engaging content creation for all platforms. We design stunning posts, stories, reels, and banners that drive engagement and build your digital presence.",
    icon: s_2,
  },
  {
    id: 3,
    slug: "environmental-graphics",
    title: "ENVIRONMENTAL GRAPHICS",
    desc: "Transforming physical spaces into branded experiences. From event branding and signage to window displays and wayfinding systems that leave lasting impressions.",
    icon: s_3,
  },
  {
    id: 4,
    slug: "photography-videography",
    title: "PHOTOGRAPHY & VIDEOGRAPHY",
    desc: "Professional product, spatial, and food photography combined with expert video editing. We capture your story through compelling visual narratives.",
    icon: s_4,
  },
  {
    id: 5,
    slug: "glazed-creations",
    title: "GLAZED CREATIONS",
    desc: "Custom ceramic artwork and merchandise design. From unique pottery pieces to branded promotional items, we create tangible expressions of your brand.",
    icon: s_5,
  },
  {
    id: 6,
    slug: "creative-consulting",
    title: "CREATIVE CONSULTING",
    desc: "Strategic guidance for your brand's creative journey. We provide brand strategy consulting, marketing campaign conceptualization, and content strategy development.",
    icon: s_6,
  },
];

const ServiceOne = () => {
  return (
    <div className="tp-service-area pt-180 pb-80 tp-btn-trigger">
      <div className="container container-1630">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="tp-service-title-box p-relative">
              <span className="tp-section-subtitle subtitle-position tp_fade_bottom">
                I Think a lot
              </span>
              <h4 className="tp-section-title tp_fade_bottom">
                Thoughtful
                <br />
                <span>Process</span>
              </h4>
            </div>
            <div className="tp-service-left-btn tp-btn-bounce">
              <Link className="tp-btn-border" href="/service">
                <span className="tp-btn-border-wrap">
                  <span className="text-1">See All Services</span>
                  <span className="text-2">See All Services</span>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="tp-service-right-wrap">
              {service_data.map((s, i) => (
                <div
                  key={s.id}
                  className="tp-service-item d-flex align-items-start mb-75 tp_fade_bottom"
                >
                  <div className="tp-service-icon">
                    <Image src={s.icon} alt="icon" style={{ height: "auto" }} />
                  </div>
                  <div className="tp-service-content">
                    <h4 className="tp-service-title-sm order-0">
                      <Link href={`/service-details/${s.slug}`}>{s.title}</Link>
                    </h4>
                    <p className="order-1">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOne;