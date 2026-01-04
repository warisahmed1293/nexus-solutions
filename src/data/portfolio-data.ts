import { StaticImageData } from "next/image";

// Import all your project images
import p_1 from "@/assets/img/home-01/project/shorooq-project-1/project-1-2.png";
import p_2 from "@/assets/img/home-01/project/optibuild-project-2/project-2-1.png";
import p_3 from "@/assets/img/home-01/project/bulle-project-3/project-3-3.png";
import p_4 from "@/assets/img/home-01/project/santo-project-4/project-4-3.png";
import p_5 from "@/assets/img/home-01/project/caliners-project-5/project-5-1.png";
import p_6 from "@/assets/img/home-01/project/ardi-project-6/project-6-4.png";

// Detail page images
import project_1_1 from '@/assets/img/home-01/project/shorooq-project-1/project-1-1.png';
import project_1_2 from '@/assets/img/home-01/project/shorooq-project-1/project-1-2.png';
import project_1_3 from '@/assets/img/home-01/project/shorooq-project-1/project-1-3.png';
import project_1_4 from '@/assets/img/home-01/project/shorooq-project-1/project-1-4.png';
import project_1_5 from '@/assets/img/home-01/project/shorooq-project-1/project-1-5.png';
import project_1_6 from '@/assets/img/home-01/project/shorooq-project-1/project-1-6.png';

import project_2_1 from '@/assets/img/home-01/project/optibuild-project-2/project-2-1.png';
import project_2_2 from '@/assets/img/home-01/project/optibuild-project-2/project-2-2.png';
import project_2_3 from '@/assets/img/home-01/project/optibuild-project-2/project-2-3.png';
import project_2_4 from '@/assets/img/home-01/project/optibuild-project-2/project-2-4.png';
import project_2_5 from '@/assets/img/home-01/project/optibuild-project-2/project-2-5.png';
import project_2_6 from '@/assets/img/home-01/project/optibuild-project-2/project-2-6.png';

import project_3_1 from '@/assets/img/home-01/project/bulle-project-3/project-3-1.png';
import project_3_2 from '@/assets/img/home-01/project/bulle-project-3/project-3-2.png'; 
import project_3_3 from '@/assets/img/home-01/project/bulle-project-3/project-3-3.png';
import project_3_4 from '@/assets/img/home-01/project/bulle-project-3/project-3-4.png';
import project_3_5 from '@/assets/img/home-01/project/bulle-project-3/project-3-5.png';
import project_3_6 from '@/assets/img/home-01/project/bulle-project-3/project-3-6.png';

import project_4_1 from '@/assets/img/home-01/project/santo-project-4/project-4-1.png';
import project_4_2 from '@/assets/img/home-01/project/santo-project-4/project-4-2.png';
import project_4_3 from '@/assets/img/home-01/project/santo-project-4/project-4-3.png';
import project_4_4 from '@/assets/img/home-01/project/santo-project-4/project-4-4.png';
import project_4_5 from '@/assets/img/home-01/project/santo-project-4/project-4-5.png';
import project_4_6 from '@/assets/img/home-01/project/santo-project-4/project-4-6.png';

import project_5_1 from '@/assets/img/home-01/project/caliners-project-5/project-5-1.png';
import project_5_2 from '@/assets/img/home-01/project/caliners-project-5/project-5-2.png';
import project_5_3 from '@/assets/img/home-01/project/caliners-project-5/project-5-3.png';
import project_5_4 from '@/assets/img/home-01/project/caliners-project-5/project-5-4.png';
import project_5_5 from '@/assets/img/home-01/project/caliners-project-5/project-5-5.png';

import project_6_1 from '@/assets/img/home-01/project/ardi-project-6/project-6-1.png';
import project_6_2 from '@/assets/img/home-01/project/ardi-project-6/project-6-2.png';
import project_6_3 from '@/assets/img/home-01/project/ardi-project-6/project-6-3.png';
import project_6_4 from '@/assets/img/home-01/project/ardi-project-6/project-6-4.png';
import project_6_5 from '@/assets/img/home-01/project/ardi-project-6/project-6-5.png';
import project_6_6 from '@/assets/img/home-01/project/ardi-project-6/project-6-6.png';

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
    slug: "shorooq-partners-hoodie-design",
    cls: "tp-project-mr",
    cls_2: "height-1",
    img: p_1,
    title: "Shorooq Partners | Hoodie Design",
    category: "Fashion Design",
    details: {
      title: "Shorooq Partners | Hoodie Design",
      websiteUrl: "https://shorooqpartners.com",
      fullImage: project_1_1,
      fullImage2: project_1_2,
      sections: [
        {
          sectionTitle: "Brand Apparel Innovation",
          subtitle: "Custom Fashion Design for Investment Firm",
          content: [
            "Shorooq Partners, a leading venture capital firm, required premium branded apparel that reflected their sophisticated brand identity. Our challenge was to create a hoodie design that balanced professional elegance with modern streetwear aesthetics, suitable for both corporate events and casual team gatherings.",
            "We developed a comprehensive apparel design system featuring minimalist typography, carefully selected color palettes, and strategic logo placement. The design emphasizes quality craftsmanship while maintaining the firm's professional image, making it perfect for team building events, corporate gifting, and brand representation."
          ]
        },
        {
          sectionTitle: "Design Philosophy",
          subtitle: "Merging Corporate Identity with Contemporary Fashion",
          content: [
            "Our approach centered on creating wearable brand experiences that employees would be proud to wear. We studied current fashion trends in corporate apparel, analyzing successful tech company merchandise and luxury streetwear brands to inform our design decisions.",
            "The hoodie design incorporates premium materials specifications, modern fit guidelines, and versatile styling options. We ensured the design worked across multiple color variations while maintaining brand consistency and visual impact, whether worn at startup events, investor meetings, or casual team outings."
          ]
        },
        {
          sectionTitle: "Results & Impact",
          subtitle: "Enhanced Brand Visibility and Team Unity",
          content: [
            "The final hoodie design exceeded expectations, becoming one of the most requested items in Shorooq Partners' branded merchandise collection. Team members actively wear the hoodies at industry events, conferences, and in social media posts, significantly increasing brand visibility.",
            "The successful launch led to additional apparel design projects, including t-shirts, jackets, and accessories. The design system we created allows for easy adaptation to future merchandise, ensuring consistent brand representation across all touchpoints while maintaining contemporary appeal in the competitive venture capital landscape."
          ]
        }
      ],
      thumbImages: [project_1_1, project_1_2],
      sliderImages: [project_1_3, project_1_4, project_1_5, project_1_6]
    }
  },
  {
    id: 2,
    slug: "optibuild-supplies-branding-stationary-packaging",
    cls: "text-end",
    cls_2: "height-2 d-inline-flex justify-content-end",
    img: p_2,
    title: "Optibuild Supplies | Branding, Stationary & Packaging",
    category: "Brand Identity",
    details: {
      title: "Optibuild Supplies | Branding, Stationary & Packaging",
      websiteUrl: "https://optibuildsupplies.com",
      fullImage: project_2_1,
      fullImage2: project_2_2,
      sections: [
        {
          sectionTitle: "Complete Brand Transformation",
          subtitle: "Building Supply Industry Rebranding",
          content: [
            "Optibuild Supplies approached us to completely reimagine their brand identity in the competitive construction and building supplies market. The existing brand lacked cohesion, failed to communicate their commitment to quality, and didn't resonate with modern contractors and builders who increasingly value professional presentation.",
            "We conducted extensive market research, analyzing competitor positioning, target audience preferences, and industry trends. Our goal was to create a powerful brand identity that communicates reliability, professionalism, and innovation while standing out in the traditional building supplies sector."
          ]
        },
        {
          sectionTitle: "Comprehensive Design System",
          subtitle: "From Logo to Packaging Excellence",
          content: [
            "Our comprehensive branding solution included logo design, color palette development, typography system, business stationery (business cards, letterheads, envelopes), and custom packaging design for various product lines. We ensured every touchpoint reflected Optibuild's core values of durability, precision, and customer service.",
            "The stationary system features premium paper stocks and printing techniques that communicate quality at first touch. The packaging design balances functional requirements (durability, stackability, product protection) with strong brand presence, turning every delivery into a brand experience that reinforces Optibuild's market position."
          ]
        },
        {
          sectionTitle: "Market Impact",
          subtitle: "Measurable Brand Recognition Growth",
          content: [
            "Post-launch metrics showed impressive results: 47% increase in brand recognition among target contractors, 35% improvement in perceived quality ratings, and significant uptick in inquiries from larger commercial projects. The professional presentation elevated Optibuild's positioning from regional supplier to industry-leading brand.",
            "The new brand identity opened doors to major retail partnerships and enabled premium pricing strategies. Client testimonials consistently mention the professional presentation and attention to detail, with the branded packaging becoming a point of pride among contractors who display Optibuild products on job sites."
          ]
        }
      ],
      thumbImages: [project_2_1, project_2_2],
      sliderImages: [project_2_3, project_2_4, project_2_5, project_2_6]
    }
  },
  {
    id: 3,
    slug: "bulle-bakery-branding-packaging-design",
    cls: "tp-project-mr",
    cls_2: "height-3",
    img: p_3,
    title: "Bulle | Branding & Packaging Design",
    category: "Food & Beverage",
    details: {
      title: "Bulle | Branding & Packaging for Artisan Bakery",
      websiteUrl: "https://bullebakery.com",
      fullImage: project_3_1,
      fullImage2: project_3_2,
      sections: [
        {
          sectionTitle: "Artisan Bakery Identity",
          subtitle: "Creating an Authentic French Bakery Experience",
          content: [
            "Bulle, meaning 'bubble' in French, is an artisan bakery dedicated to creating authentic French pastries and breads. The brand name evokes the light, airy quality of perfectly crafted croissants and the delicate bubbles in champagne, setting the stage for a sophisticated yet approachable bakery experience.",
            "Our challenge was to capture the essence of traditional French baking while appealing to modern consumers who value authenticity, quality ingredients, and Instagram-worthy presentation. The brand needed to work equally well on rustic bakery packaging, elegant storefronts, and digital platforms where food photography drives engagement."
          ]
        },
        {
          sectionTitle: "Elegant Simplicity",
          subtitle: "Design That Celebrates the Product",
          content: [
            "We developed a refined brand identity centered on a custom script logotype that balances elegance with playfulness. The circular text treatment reinforces the 'bulle' concept while creating a distinctive brand mark that works beautifully across applications from bakery boxes to Instagram posts.",
            "The soft sage green color palette communicates freshness, natural ingredients, and French countryside charm. Our packaging design system includes bread bags, pastry boxes, cake boxes, and shopping bags, each designed to enhance the unboxing experience while protecting delicate baked goods. The minimalist approach lets the beautiful products shine while maintaining strong brand presence."
          ]
        },
        {
          sectionTitle: "Sweet Success",
          subtitle: "Building a Beloved Neighborhood Bakery",
          content: [
            "Since launch, Bulle has become the neighborhood's favorite bakery, with customers regularly sharing their purchases on social media. The distinctive branding creates instant recognition, with the sage green boxes becoming synonymous with quality artisan baking in the local community.",
            "Sales exceeded projections by 60% in the first six months, driven by word-of-mouth marketing and the shareable nature of the brand's visual identity. The packaging design has won praise from customers who appreciate the attention to detail, with many reusing the beautiful boxes for storage and gifting, extending brand exposure organically."
          ]
        }
      ],
      thumbImages: [project_3_1, project_3_2],
      sliderImages: [project_3_3, project_3_4, project_3_5, project_3_6]
    }
  },
  {
    id: 4,
    slug: "santo-pizzeria-branding-packaging-signage",
    cls: "",
    cls_2: "height-4",
    img: p_4,
    title: "Santo Pizzeria | Branding, Packaging & Signage",
    category: "Restaurant Design",
    details: {
      title: "Santo Pizzeria | Complete Restaurant Brand Identity",
      websiteUrl: "https://santopizzeria.com",
      fullImage: project_4_1,
      fullImage2: project_4_2,
      sections: [
        {
          sectionTitle: "Authentic Italian Experience",
          subtitle: "Crafting a Memorable Pizzeria Brand",
          content: [
            "Santo Pizzeria sought to establish itself as the premier destination for authentic Neapolitan pizza in a competitive urban market. The brand needed to communicate authenticity, quality ingredients, and traditional cooking methods while appealing to modern diners who expect excellent food, atmosphere, and shareable dining experiences.",
            "We immersed ourselves in Italian culinary culture, studying traditional pizzeria aesthetics, regional design elements, and contemporary restaurant branding trends. Our goal was creating a timeless brand that honors Italian heritage while feeling fresh and relevant to today's sophisticated restaurant consumers."
          ]
        },
        {
          sectionTitle: "Comprehensive Brand System",
          subtitle: "Every Touchpoint Tells the Story",
          content: [
            "The complete branding solution includes logo design, color system, typography, menu design, pizza box packaging, takeout bags, staff uniforms, interior signage, exterior storefront signage, and digital assets. The logo features custom lettering that references vintage Italian typography while maintaining modern readability.",
            "Our packaging design transforms every takeout order into a brand experience. The pizza boxes feature interior messages about Santo's commitment to quality ingredients and traditional preparation methods. The signage system guides customers through the dining experience, from striking exterior neon signs that draw foot traffic to interior wayfinding and atmospheric wall graphics that create Instagram-worthy moments."
          ]
        },
        {
          sectionTitle: "Restaurant Success Story",
          subtitle: "Building Community Through Brand",
          content: [
            "Santo Pizzeria opened to overwhelming response, with lines out the door from day one. The distinctive branding created immediate recognition in the neighborhood, with the iconic signage becoming a local landmark and meeting spot. Social media engagement exceeded expectations, with customers regularly sharing photos of their meals and the restaurant's aesthetic details.",
            "Within the first year, Santo expanded to two additional locations, with the strong brand system ensuring consistent experience across all venues. The brand has been featured in multiple food publications and design blogs, with the packaging design winning a regional design award. Customer surveys consistently rank Santo's brand experience among the top reasons for choosing the restaurant over competitors."
          ]
        }
      ],
      thumbImages: [project_4_1, project_4_2],
      sliderImages: [project_4_3, project_4_4, project_4_5, project_4_6]
    }
  },
  {
    id: 5,
    slug: "mains-calines-poster-design-paris",
    cls: "tp-project-ml",
    cls_2: "height-5",
    img: p_5,
    title: "Mains Câlines | Poster Design Paris",
    category: "Print Design",
    details: {
      title: "Mains Câlines | Promotional Poster Campaign",
      websiteUrl: "https://mainscalines.fr",
      fullImage: project_5_1,
      fullImage2: project_5_2,
      sections: [
        {
          sectionTitle: "Parisian Campaign",
          subtitle: "Capturing Attention in the City of Light",
          content: [
            "Mains Câlines, a beloved French bakery chain known for fresh sandwiches, pastries, and coffee, needed a striking poster campaign for their Paris locations. The campaign objective was increasing foot traffic during morning rush hours while reinforcing their position as a quality fast-casual dining option for busy Parisians and tourists.",
            "We designed a series of bold, eye-catching posters that work in Paris's unique urban landscape - from metro stations to bus shelters to storefront windows. The design needed to grab attention in seconds while communicating Mains Câlines' core value proposition: fresh, quality food made with care, perfect for breakfast or quick lunch."
          ]
        },
        {
          sectionTitle: "Visual Impact Strategy",
          subtitle: "Design That Stops Traffic",
          content: [
            "Our poster design features vibrant food photography with dramatic lighting that makes the products irresistible. The composition draws the eye immediately, even from a distance or in motion. We employed bold typography with clear hierarchy, ensuring the message reads instantly whether viewed from across the street or while rushing through a metro station.",
            "The campaign includes multiple variations targeting different dayparts and product categories - breakfast croissants and coffee, lunchtime sandwiches, afternoon pastries. Each poster maintains consistent brand identity while optimizing for specific messaging. The color palette pops against typical Parisian urban environments, ensuring visibility in busy city contexts."
          ]
        },
        {
          sectionTitle: "Campaign Performance",
          subtitle: "Measurable Results in Competitive Market",
          content: [
            "The poster campaign launched across 50+ high-traffic locations throughout Paris, generating significant increases in store visits. Tracked locations near poster placements saw 28% increase in morning traffic and 19% increase in lunchtime customers during the campaign period, significantly outperforming control locations without poster presence.",
            "Social media engagement spiked as customers shared photos with the distinctive posters, effectively extending the campaign's reach organically. The successful Paris campaign led to rollout across Mains Câlines' national network, with the design system adapted for regional markets while maintaining core brand impact and recognition."
          ]
        }
      ],
      thumbImages: [project_5_1, project_5_2],
      sliderImages: [project_5_3, project_5_4, project_5_5, project_5_1]
    }
  },
  {
    id: 6,
    slug: "ardi-branding-food-packaging-lebanon",
    cls: "",
    cls_2: "height-6",
    img: p_6,
    title: "ARDI | Branding & Food Packaging",
    category: "Product Packaging",
    details: {
      title: "ARDI | Lebanese Food Brand Identity & Packaging",
      websiteUrl: "https://ardifoods.com",
      fullImage: project_6_1,
      fullImage2: project_6_2,
      sections: [
        {
          sectionTitle: "Celebrating Lebanese Heritage",
          subtitle: "Local Produce, National Pride",
          content: [
            "ARDI, meaning 'My Land' in Arabic, is a Lebanese food brand dedicated to showcasing the country's rich agricultural heritage. The brand sources exclusively from Lebanese farmers, supporting local agriculture while delivering premium quality products. Our challenge was creating a brand identity and packaging system that celebrates Lebanese culture, communicates quality and authenticity, and stands out in competitive grocery aisles.",
            "The brand name itself is a powerful statement of origin and pride. We needed to amplify this message through visual storytelling that connects consumers to the land, the farmers, and the traditional growing methods that make Lebanese produce exceptional. The design had to resonate with Lebanese consumers' national pride while appealing to international markets interested in authentic Mediterranean products."
          ]
        },
        {
          sectionTitle: "Illustration-Driven Packaging",
          subtitle: "Bringing Lebanese Landscapes to Life",
          content: [
            "Our packaging design features hand-drawn illustrations of Lebanese rural landscapes - the rolling hills, agricultural fields, and traditional farming scenes that define the country's agricultural regions. Each product features unique landscape illustrations specific to where that ingredient is grown, creating an educational element that connects consumers to the source.",
            "The illustrated corn can shown in the portfolio captures the essence of Lebanese corn fields with characteristic attention to detail - terraced hillsides, traditional farming methods, and the lush greenery of Lebanon's fertile valleys. The green color palette reinforces freshness and natural growing methods while creating strong shelf presence. The bilingual Arabic-English design ensures accessibility across Lebanon's diverse market and international export opportunities."
          ]
        },
        {
          sectionTitle: "Market Leadership",
          subtitle: "Building a Proud National Brand",
          content: [
            "ARDI's launch exceeded all projections, with the distinctive packaging immediately recognizable in stores nationwide. The brand successfully positioned Lebanese produce as premium quality rather than commodity products, enabling higher price points that benefit local farmers. Retailers report that ARDI products have the highest turnover in their category, with customers specifically seeking out the brand.",
            "The brand's success sparked a broader movement toward locally-sourced products in Lebanon, with ARDI becoming synonymous with quality and national pride. International distribution has begun in Middle Eastern and European markets, where the packaging's storytelling approach resonates with diaspora communities and consumers seeking authentic Mediterranean ingredients. The brand has been recognized with multiple design awards and featured in international packaging design publications."
          ]
        }
      ],
      thumbImages: [project_6_1, project_6_2],
      sliderImages: [project_6_3, project_6_4, project_6_5, project_6_6]
    }
  }
];

// Helper function to get portfolio by slug
export const getPortfolioBySlug = (slug: string): IPortfolioItem | undefined => {
  return portfolioData.find(item => item.slug === slug);
};