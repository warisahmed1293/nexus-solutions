// src/components/service/service-one.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
// service images
import s_1 from "@/assets/img/home-01/service/Glazed-Icons-01.png";
import s_2 from "@/assets/img/home-01/service/Glazed-Icons-02.png";
import s_3 from "@/assets/img/home-01/service/Glazed-Icons-03.png";
import s_4 from "@/assets/img/home-01/service/Glazed-Icons-04.png";
import s_5 from "@/assets/img/home-01/service/Glazed-Icons-05.png";
import s_6 from "@/assets/img/home-01/service/Glazed-Icons-06.png";

// service data
const service_data = [
  {
    id: 1,
    slug: "branding-identity-design",
    title: "BRANDING & IDENTITY DESIGN",
    desc: "Branding is personal, and so is our process. We take the time to understand you, your story, and what makes your brand unique. From logos to full brand systems, we create identities that feel authentic, considered, and built to resonate deeply with the people you want to reach.",
    icon: s_1,
  },
  {
    id: 2,
    slug: "social-media",
    title: "SOCIAL MEDIA",
    desc: "We create content that feels like you. By understanding your tone, audience, and rhythm, we design social media visuals and formats that naturally fit your brand and support genuine engagement. Everything is tailored to what works best for your presence, not trends for the sake of trends.",
    icon: s_2,
  },
  {
    id: 3,
    slug: "environmental-graphics",
    title: "ENVIRONMENTAL GRAPHICS",
    desc: "We approach physical spaces with the same care we give to brands. By understanding how you want people to feel in your space, we design environmental graphics that translate your identity into real, memorable experiences that feel intentional and cohesive.",
    icon: s_3,
  },
  {
    id: 4,
    slug: "photography-videography",
    title: "PHOTOGRAPHY & VIDEOGRAPHY",
    desc: "We capture your story by first understanding it. Through thoughtful planning and a collaborative approach, we create imagery and video that feel natural, honest, and aligned with your brand. Every shoot is guided by what best represents you, not a one size fits all style.",
    icon: s_4,
  },
  {
    id: 5,
    slug: "glazed-creations",
    title: "GLAZED CREATIONS",
    desc: "A small side project where we let our creative juices flow, some.glazed.things is a passion project centered around ceramics and thoughtfully designed print and digital items. It reflects the spirit of Glazed as a brand while allowing room for creativity, experimentation, and exploration.",
    icon: s_5,
  },
  {
    id: 6,
    slug: "creative-consulting",
    title: "CREATIVE CONSULTING",
    desc: "We work side by side with you to shape a creative direction that feels aligned and purposeful. Through conversation, listening, and strategy, we help clarify your vision and translate it into meaningful brand, campaign, and content decisions that truly support your goals.",
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
              {/* <span className="tp-section-subtitle subtitle-position tp_fade_bottom">
                I Think a lot
              </span> */}
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
                    <Image src={s.icon} alt="icon" style={{ height: "100%", width: 100 }} />
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