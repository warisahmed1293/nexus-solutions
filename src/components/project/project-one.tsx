// ProjectOne.tsx — updated
"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioData, IPortfolioItem } from "@/data/portfolio-data";

function useScrollReveal() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    refs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return refs;
}

function ProjectCard({
  item,
  index,
  revealRef,
}: {
  item: IPortfolioItem;
  index: number;
  revealRef: (el: HTMLDivElement | null) => void;
}) {
  return (
    <div
      className="ow-card fade-up"
      ref={revealRef}
      style={{ transitionDelay: `${(index % 2) * 0.15}s` }}
    >
      <Link href={`/portfolio/${item.slug}`} className="ow-card__link">
        <div className="ow-card__img-wrap">
          <Image
            src={item.img}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
          <div className="ow-card__overlay">
            <span className="ow-card__view-label">View Project ↗</span>
          </div>
        </div>
        <div className="ow-card__meta">
          <span className="ow-card__title">{item.title}</span>
          <span className="ow-card__category">{item.category}</span>
        </div>
      </Link>
    </div>
  );
}

type IProps = { style_2?: boolean };

const ProjectOne = ({ style_2 = false }: IProps) => {
  const refs = useScrollReveal();

  return (
    <>
      <style>{`
        .ow-section {
          padding: 0 32px 80px;
          max-width: 1600px;
          margin: 0 auto;
        }

        .ow-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        @media (max-width: 768px) {
          .ow-section {
            padding: 0 16px 60px;
          }
          .ow-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
        }

        /* fade-up scroll reveal */
        .ow-card {
          opacity: 0;
          transform: translateY(56px);
          transition:
            opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.75s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .ow-card.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .ow-card__link {
          display: block;
          text-decoration: none;
          color: inherit;
        }

        /* fixed aspect ratio so all cards same height */
        .ow-card__img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          border-radius: 12px;
          background: #e8e8e8;
        }

        .ow-card__img-wrap img {
          transition: transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .ow-card__link:hover .ow-card__img-wrap img {
          transform: scale(1.04);
        }

        /* hover overlay */
        .ow-card__overlay {
          position: absolute;
          inset: 0;
          border-radius: 12px;
          background: rgba(0, 0, 0, 0.28);
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          padding: 20px 24px;
          opacity: 0;
          transition: opacity 0.38s ease;
        }
        .ow-card__link:hover .ow-card__overlay {
          opacity: 1;
        }

        .ow-card__view-label {
          color: #fff;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        /* meta row */
        .ow-card__meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 4px 28px;
          gap: 12px;
        }

        .ow-card__title {
          font-size: 14px;
          font-weight: 400;
          color: #111;
          line-height: 1.3;
          letter-spacing: -0.01em;
        }

        .ow-card__category {
          font-size: 12px;
          color: #999;
          letter-spacing: 0.03em;
          white-space: nowrap;
          flex-shrink: 0;
        }
      `}</style>

      <section className="ow-section">
        <div className="ow-grid">
          {portfolioData.map((item, i) => (
            <ProjectCard
              key={item.id}
              item={item}
              index={i}
              revealRef={(el) => { refs.current[i] = el; }}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectOne;