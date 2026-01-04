"use client";
import React from "react";
import ProjectTextLine from "./project-text-line";
import Image from "next/image";
import Link from "next/link";
import { portfolioData, IPortfolioItem } from "@/data/portfolio-data";

function ProjectItem({ item }: { item: IPortfolioItem }) {
  return (
    <div className={`tp-project-item ${item.cls} mb-200`}>
      <div
        className={`tp-project-img ${item.cls_2} fix not-hide-cursor`}
        data-cursor="View<br>Demo"
      >
        <Link className="cursor-hide" href={`/portfolio/${item.slug}`}>
          <Image data-speed=".8" src={item.img} alt={item.title} style={{ height: "auto" }} />
        </Link>
      </div>
    </div>
  );
}

type IProps = {
  style_2?: boolean;
};

const ProjectOne = ({ style_2 = false }: IProps) => {
  return (
    <>
      <div className={`${style_2 ? "tp-project-area-2" : "tp-project-area"} fix`}>
        {!style_2 && (
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-xl-12">
                <ProjectTextLine />
              </div>
            </div>
          </div>
        )}
        <div className="tp-project-gallery-wrapper">
          <div className="container container-1630">
            <div className="tp-project-gallery-top pb-50">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="tp-project-left-wrap">
                    {portfolioData.slice(0, 3).map((item) => (
                      <ProjectItem key={item.id} item={item} />
                    ))}
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="tp-project-right-wrap">
                    {portfolioData.slice(3, 6).map((item) => (
                      <ProjectItem key={item.id} item={item} />
                    ))}

                    <div className="tp-project-btn tp-btn-trigger">
                      <div className="tp-btn-bounce">
                        <Link
                          className="tp-btn-border"
                          href="/portfolio-grid-col-3"
                        >
                          <span className="tp-btn-border-wrap">
                            <span className="text-1">View all projects</span>
                            <span className="text-2">View all projects</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {!style_2 && (
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-xl-12">
                  <div className="tp-project-full-img-wrap p-relative fix">
                    <div
                      className="tp-project-full-img"
                      data-speed="auto"
                      style={{
                        backgroundImage:
                          "url(/assets/img/inner-service/hero/hero-1-2.jpg)",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectOne;