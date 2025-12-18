import React from "react";
import Image from "next/image";

// images
import ser_img_1 from "@/assets/img/inner-service/service/service-1.jpg";
import ser_img_2 from "@/assets/img/inner-service/service/service-2.jpg";
import ser_img_3 from "@/assets/img/inner-service/service/service-3.jpg";
import ser_img_4 from "@/assets/img/inner-service/service/service-4.jpg";
import ser_img_5 from "@/assets/img/inner-service/service/service-1.jpg";
import ser_img_6 from "@/assets/img/inner-service/service/service-2.jpg";
import { RightArrow, ShapeTwo } from "../svg";
import Link from "next/link";

const service_data = [
  {
    id: 1,
    img: ser_img_1,
    subtitle: "Design Studio",
    title: "Branding & Identity Design",
    text: "We craft unique visual identities that capture your brand's essence. From comprehensive brand strategies to cohesive design systems that resonate with your audience.",
    lists: [
      "Logo Design",
      "Brand Guidelines",
      "Visual Identity Systems",
      "Stationery Design",
    ],
  },
  {
    id: 2,
    img: ser_img_2,
    subtitle: "Design Studio",
    title: "Social Media",
    text: "Engaging content creation for all digital platforms. We design stunning posts, stories, reels, and banners that drive engagement and build your digital presence.",
    lists: [
      "Social Media Content",
      "Digital Advertising",
      "Stories & Reels",
      "Campaign Design",
    ],
  },
  {
    id: 3,
    img: ser_img_3,
    subtitle: "Design Studio",
    title: "Environmental Graphics",
    text: "Transforming physical spaces into branded experiences. From event branding and signage to window displays and wayfinding systems that leave lasting impressions.",
    lists: [
      "Event Branding",
      "Signage & Wayfinding",
      "Window Displays",
      "Publication Design",
    ],
  },
  {
    id: 4,
    img: ser_img_4,
    subtitle: "Design Studio",
    title: "Photography & Videography",
    text: "Professional visual storytelling through expert photography and videography. We capture compelling narratives with image editing and video graphics overlay services.",
    lists: [
      "Product Photography",
      "Food Photography",
      "Video Editing",
      "Image Enhancement",
    ],
  },
  {
    id: 5,
    img: ser_img_5,
    subtitle: "Design Studio",
    title: "Glazed Creations",
    text: "Custom ceramic artwork and branded merchandise design. From unique pottery pieces to promotional items, we create tangible expressions of your brand identity.",
    lists: [
      "Custom Ceramic Artwork",
      "Apparel Graphics",
      "Promotional Items",
      "Packaging Design",
    ],
  },
  {
    id: 6,
    img: ser_img_6,
    subtitle: "Design Studio",
    title: "Creative Consulting",
    text: "Strategic guidance for your brand's creative journey. We provide brand strategy consulting, marketing campaign conceptualization, and comprehensive content strategy development.",
    lists: [
      "Brand Strategy",
      "Marketing Campaigns",
      "Content Strategy",
      "Creative Direction",
    ],
  },
];

export default function ServiceSix() {
  return (
    <div className="sv-service-area project-panel-area-2">
      <div className="container-fluid p-0">
        {service_data.map((item) => (
          <div key={item.id} className="sv-service-item project-panel-2">
            <div className="row g-0">
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-thumb">
                  <Image
                    src={item.img}
                    alt="service-img"
                    style={{ height: "auto" }}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-content-wrap d-flex align-items-center">
                  <div className="sv-service-content">
                    <div className="sv-service-title-box">
                      <span className="sv-service-subtitle">
                        <i>{item.id < 9 ? "0" + item.id : item.id}</i>
                        {item.subtitle}
                      </span>
                      <h4 className="sv-service-title">{item.title}</h4>
                    </div>
                    <div className="sv-service-space-wrap">
                      <div className="sv-service-text">
                        <p>{item.text}</p>
                      </div>
                      <div className="sv-service-list">
                        <ul>
                          {item.lists.map((list, i) => (
                            <li key={i}>{list}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="sv-service-btn">
                        <Link
                          className="tp-btn-zikzak zikzak-inner p-relative"
                          href="/service-details"
                        >
                          <span className="zikzak-content">
                            See <br /> Details
                            <RightArrow clr="currentColor" />
                          </span>
                          <ShapeTwo />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}