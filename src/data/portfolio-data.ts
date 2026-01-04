import { StaticImageData } from "next/image";

// Import all your project images
import p_1 from "@/assets/img/home-01/project/shorooq-project-1/project-1-2.png";
import p_2 from "@/assets/img/home-01/project/project-1-2.jpg";
import p_3 from "@/assets/img/home-01/project/project-1-3.jpg";
import p_4 from "@/assets/img/home-01/project/project-1-4.jpg";
import p_5 from "@/assets/img/home-01/project/project-1-5.jpg";
import p_6 from "@/assets/img/home-01/project/project-1-6.jpg";

// Detail page images
import project_1_1 from '@/assets/img/home-01/project/shorooq-project-1/project-1-1.png';
import project_1_2 from '@/assets/img/home-01/project/shorooq-project-1/project-1-2.png';
import project_1_3 from '@/assets/img/home-01/project/shorooq-project-1/project-1-3.png';
import project_1_4 from '@/assets/img/home-01/project/shorooq-project-1/project-1-4.png';
import project_1_5 from '@/assets/img/home-01/project/shorooq-project-1/project-1-5.png';
import project_1_6 from '@/assets/img/home-01/project/shorooq-project-1/project-1-6.png';       

export interface IPortfolioDetails {
  title: string;
  websiteUrl: string;
  fullImage: StaticImageData;
  fullImage2: StaticImageData;
  sections: {
    sectionTitle: string;
    subtitle: string;
    content: string[];
  }[];
  thumbImages: StaticImageData[];
  sliderImages: StaticImageData[];
}

export interface IPortfolioItem {
  id: number;
  slug: string;
  cls: string;
  cls_2: string;
  img: StaticImageData;
  title: string;
  category: string;
  details: IPortfolioDetails;
}

export const portfolioData: IPortfolioItem[] = [
  {
    id: 1,
    slug: "mockups-google-pixel",
    cls: "tp-project-mr",
    cls_2: "height-1",
    img: p_1,
    title: "Mockups Google Pixel",
    category: "Branding",
    details: {
      title: "Mockups Google Pixel",
      websiteUrl: "https://example.com",
      fullImage: project_1_1,
      fullImage2: project_1_2,
      sections: [
        {
          sectionTitle: "Daring Colors",
          subtitle: "An introduction",
          content: [
            "Liko website was using a generic template, felt quite outdated and not in-line with the quality of his work. The main goal was to translate his high-end photography into a digital experience that would honor and present his work in a memorable and contemporary way.",
            "Each case study gets its own identity through the styling options in the custom content management system. The styling options are pre-defined"
          ]
        },
        {
          sectionTitle: "The Goal",
          subtitle: "An introduction",
          content: [
            "Liko website was using a generic template, felt quite outdated and not in-line with the quality of his work. The main goal was to translate his high-end photography into a digital experience that would honor and present his work in a memorable and contemporary way.",
            "Each case study gets its own identity through the styling options in the custom content management system. The styling options are pre-defined"
          ]
        },
        {
          sectionTitle: "The Result",
          subtitle: "An introduction",
          content: [
            "Liko website was using a generic template, felt quite outdated and not in-line with the quality of his work. The main goal was to translate his high-end photography into a digital experience that would honor and present his work in a memorable and contemporary way.",
            "Each case study gets its own identity through the styling options in the custom content management system. The styling options are pre-defined"
          ]
        }
      ],
      thumbImages: [project_1_1, project_1_2],
      sliderImages: [project_1_3, project_1_4, project_1_5, project_1_6]
    }
  },
  {
    id: 2,
    slug: "creative-design-studio",
    cls: "text-end",
    cls_2: "height-2 d-inline-flex justify-content-end",
    img: p_2,
    title: "Creative Design Studio",
    category: "Web Design",
    details: {
      title: "Creative Design Studio",
      websiteUrl: "https://example2.com",
      fullImage: project_1_1,
      fullImage2: project_1_2,
      sections: [
        {
          sectionTitle: "Modern Approach",
          subtitle: "Our vision",
          content: [
            "This project showcases a modern approach to web design with clean aesthetics and user-friendly interface.",
            "We focused on creating an immersive experience that highlights the creative work."
          ]
        },
        {
          sectionTitle: "Design Philosophy",
          subtitle: "Core concepts",
          content: [
            "Our design philosophy centers around user experience and visual impact.",
            "Every element serves a purpose in the overall narrative."
          ]
        },
        {
          sectionTitle: "Final Outcome",
          subtitle: "Results",
          content: [
            "The final product exceeded expectations and delivered measurable results.",
            "Client satisfaction was our top priority throughout the process."
          ]
        }
      ],
      thumbImages: [project_1_1, project_1_2],
      sliderImages: [project_1_3, project_1_4, project_1_5, project_1_6]
    }
  },
  {
    id: 3,
    slug: "brand-identity-project",
    cls: "tp-project-mr",
    cls_2: "height-3",
    img: p_3,
    title: "Brand Identity Project",
    category: "Branding",
    details: {
      title: "Brand Identity Project",
      websiteUrl: "https://example3.com",
      fullImage: project_1_1,
      fullImage2: project_1_2,
      sections: [
        {
          sectionTitle: "Brand Evolution",
          subtitle: "Discovery phase",
          content: [
            "Complete brand transformation from outdated visuals to modern, cohesive identity.",
            "Strategic approach to brand positioning and visual communication."
          ]
        },
        {
          sectionTitle: "Visual Language",
          subtitle: "Design system",
          content: [
            "Developed comprehensive visual language that resonates with target audience.",
            "Created scalable design system for consistent brand application."
          ]
        },
        {
          sectionTitle: "Brand Impact",
          subtitle: "Measured success",
          content: [
            "The rebrand resulted in increased brand recognition and customer engagement.",
            "Positive feedback from stakeholders validated our strategic approach."
          ]
        }
      ],
      thumbImages: [project_1_1, project_1_2],
      sliderImages: [project_1_3, project_1_4, project_1_5, project_1_6]
    }
  },
  {
    id: 4,
    slug: "e-commerce-platform",
    cls: "",
    cls_2: "height-4",
    img: p_4,
    title: "E-commerce Platform",
    category: "Development",
    details: {
      title: "E-commerce Platform",
      websiteUrl: "https://example4.com",
      fullImage: project_1_1,
      fullImage2: project_1_2,
      sections: [
        {
          sectionTitle: "Seamless Shopping",
          subtitle: "User experience",
          content: [
            "Built a robust e-commerce platform with intuitive navigation and secure checkout.",
            "Optimized for conversions and customer satisfaction."
          ]
        },
        {
          sectionTitle: "Technical Excellence",
          subtitle: "Development",
          content: [
            "Implemented cutting-edge technologies for optimal performance.",
            "Ensured scalability and security throughout the platform."
          ]
        },
        {
          sectionTitle: "Business Growth",
          subtitle: "Results",
          content: [
            "Platform launch resulted in significant increase in online sales.",
            "Customer retention improved through enhanced user experience."
          ]
        }
      ],
      thumbImages: [project_1_1, project_1_2],
      sliderImages: [project_1_3, project_1_4, project_1_5, project_1_6]
    }
  },
  {
    id: 5,
    slug: "mobile-app-design",
    cls: "tp-project-ml",
    cls_2: "height-5",
    img: p_5,
    title: "Mobile App Design",
    category: "UI/UX",
    details: {
      title: "Mobile App Design",
      websiteUrl: "https://example5.com",
      fullImage: project_1_1,
      fullImage2: project_1_2,
      sections: [
        {
          sectionTitle: "Mobile First",
          subtitle: "Design approach",
          content: [
            "Designed with mobile users in mind, ensuring perfect usability on all devices.",
            "Clean interface that prioritizes user experience."
          ]
        },
        {
          sectionTitle: "User Testing",
          subtitle: "Validation",
          content: [
            "Conducted extensive user testing to refine interactions and flows.",
            "Iterative design process based on real user feedback."
          ]
        },
        {
          sectionTitle: "App Success",
          subtitle: "Metrics",
          content: [
            "App achieved high user satisfaction scores and positive reviews.",
            "Download numbers exceeded initial projections."
          ]
        }
      ],
      thumbImages: [project_1_1, project_1_2],
      sliderImages: [project_1_3, project_1_4, project_1_5, project_1_6]
    }
  },
  {
    id: 6,
    slug: "corporate-website",
    cls: "",
    cls_2: "height-6",
    img: p_6,
    title: "Corporate Website",
    category: "Web Design",
    details: {
      title: "Corporate Website",
      websiteUrl: "https://example6.com",
      fullImage: project_1_1,
      fullImage2: project_1_2,
      sections: [
        {
          sectionTitle: "Professional Presence",
          subtitle: "Corporate identity",
          content: [
            "Established strong online presence with professional design and clear messaging.",
            "Reflects company values and builds trust with clients."
          ]
        },
        {
          sectionTitle: "Content Strategy",
          subtitle: "Communication",
          content: [
            "Developed comprehensive content strategy aligned with business goals.",
            "Clear, compelling messaging that converts visitors to customers."
          ]
        },
        {
          sectionTitle: "Digital Growth",
          subtitle: "Impact",
          content: [
            "Website launch contributed to increased lead generation.",
            "Enhanced credibility positioned company as industry leader."
          ]
        }
      ],
      thumbImages: [project_1_1, project_1_2],
      sliderImages: [project_1_3, project_1_4, project_1_5, project_1_6]
    }
  }
];

// Helper function to get portfolio by slug
export const getPortfolioBySlug = (slug: string): IPortfolioItem | undefined => {
  return portfolioData.find(item => item.slug === slug);
};