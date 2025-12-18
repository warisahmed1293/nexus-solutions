import React from "react";
import Image from "next/image";
import Link from "next/link";
// images
import s_1 from "@/assets/img/home-01/service/service-icon-1.png";
import s_2 from "@/assets/img/home-01/service/service-icon-2.png";
import s_3 from "@/assets/img/home-01/service/service-icon-3.png";

const service_data = [
  {
    id: 1,
    title: "Branding & Identity",
    desc: "We craft unique visual identities that capture your brand's essence, from logos to comprehensive brand guidelines that resonate with your audience.",
    icon: s_2,
  },
  {
    id: 2,
    title: "Digital Design",
    desc: "Creating stunning websites and social media content that look perfect across all platforms. Design that drives engagement and delivers exceptional user experiences.",
    icon: s_1,
  },
  {
    id: 3,
    title: "Creative Consulting",
    desc: "Strategic guidance for your brand's creative journey. We provide brand strategy, marketing campaign conceptualization, and content strategy that drives results.",
    icon: s_3,
  },
];

// service items
export function ServiceItems() {
  return (
    <div className="row">
      <div className="col-xxl-3"></div>
      {service_data.map((item) => (
        <div key={item.id} className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
          <div className="tp-service-5-item tp_fade_bottom space-1">
            <div className="tp-service-4-icon">
              <Image src={item.icon} alt="icon" />
            </div>
            <div className="tp-service-4-content">
              <h4 className="tp-service-4-title-sm tp-text-black">
                <Link href="/service">{item.title}</Link>
              </h4>
              <p>{item.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// service five area
export default function ServiceFive() {
  return (
    <div className="tp-service-5-area pt-120 pb-70">
      <div className="container container-1775">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-service-5-title-box mb-90">
              <h4 className="tp-service-5-title p-relative tp_fade_right">
                <span className="tp-service-5-subtitle tp_fade_left">
                  SERVICES
                </span>
                <span className="text-space"></span>
                We strongly believe that only design reinforced by <br />
                strategy can provide real results.
              </h4>
            </div>
          </div>
        </div>
        <div className="tp-service-5-wrap">
          <ServiceItems/>
        </div>
      </div>
    </div>
  );
}