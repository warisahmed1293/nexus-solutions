// data/service-details-data.ts
import s_1 from "@/assets/img/home-01/service/service-icon-1.png";
import s_2 from "@/assets/img/home-01/service/service-icon-2.png";
import s_3 from "@/assets/img/home-01/service/service-icon-3.png";
import s_4 from "@/assets/img/home-01/service/service-icon-4.png";
import s_5 from "@/assets/img/home-01/service/service-icon-1.png";
import s_6 from "@/assets/img/home-01/service/service-icon-2.png";

// Import detail images for each service
import branding_1 from "@/assets/img/inner-service/sercive-details/sv-details-1.jpg";
import branding_2 from "@/assets/img/inner-service/sercive-details/sv-details-2.jpg";
import branding_3 from "@/assets/img/inner-service/sercive-details/sv-details-3.jpg";

export interface ServiceDetail {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  icon: any;
  detailsPage: {
    heroImage: any;
    introText: string[];
    mainContent: {
      heading: string;
      description: string[];
    };
    features: string[];
    smallImages: any[];
    bottomText: string;
    sidebarContent: {
      title: string;
      description: string;
    };
  };
  relatedServices: string[];
}

export const serviceDetailsData: ServiceDetail[] = [
  {
    id: 1,
    slug: "branding-identity-design",
    title: "BRANDING & IDENTITY DESIGN",
    subtitle: "Design Studio",
    shortDesc: "We craft unique visual identities that capture your brand's essence. From logos to comprehensive brand guidelines, we create cohesive systems that resonate with your audience.",
    icon: s_1,
    detailsPage: {
      heroImage: branding_1,
      introText: [
        "Branding is essential to establish yourself in the market in a unique and permanent way. At our studio, we attach great importance to understanding your business to better convey your values and your talent through your brand image.",
        "Explore our achievements and let yourself be convinced!"
      ],
      mainContent: {
        heading: "Your logo is at the heart of your identity",
        description: [
          "An impactful design, tailor-made and in line with your activity will allow you to differentiate yourself and mark your audience.",
          "Great user experience design lets users focus on the task they have to complete and evokes emotion without distracting them!"
        ]
      },
      features: [
        "Graphic research and production",
        "Comprehensive brand guidelines",
        "Advice on the graphic orientation of your logo or its redesign",
        "Delivery of your logo in professional formats"
      ],
      smallImages: [branding_2, branding_3],
      bottomText: "Great user experience design lets users focus on the task they have to complete & evokes emotion without distracting them. Bonus points for when it also looks & feels aesthetically pleasing!",
      sidebarContent: {
        title: "Branding & Identity Design",
        description: "Your brand identity is at the heart of your business. An impactful design, tailor-made and in line with your activity will allow you to differentiate yourself and mark your audience."
      }
    },
    relatedServices: ["social-media", "creative-consulting", "environmental-graphics"]
  },
  {
    id: 2,
    slug: "social-media",
    title: "SOCIAL MEDIA",
    subtitle: "Digital Presence",
    shortDesc: "Engaging content creation for all platforms. We design stunning posts, stories, reels, and banners that drive engagement and build your digital presence.",
    icon: s_2,
    detailsPage: {
      heroImage: branding_1, // Replace with actual social media image
      introText: [
        "In today's digital landscape, social media is the primary touchpoint between brands and audiences. We create compelling content that stops the scroll and drives meaningful engagement.",
        "From Instagram to LinkedIn, we tailor content to each platform's unique audience and format."
      ],
      mainContent: {
        heading: "Content that captures attention",
        description: [
          "Every piece of content is strategically designed to align with your brand voice while maximizing platform-specific engagement.",
          "We combine stunning visuals with data-driven strategies to grow your digital presence organically."
        ]
      },
      features: [
        "Custom graphics for posts and stories",
        "Video editing and motion graphics",
        "Content calendar planning",
        "Platform-specific optimization"
      ],
      smallImages: [branding_2, branding_3],
      bottomText: "Strategic social media design goes beyond aesthetics—it's about creating content that resonates with your audience and drives measurable results.",
      sidebarContent: {
        title: "Social Media Design",
        description: "Engaging content creation that builds your digital presence across all platforms with stunning visuals and strategic messaging."
      }
    },
    relatedServices: ["branding-identity-design", "photography-videography", "creative-consulting"]
  },
  {
    id: 3,
    slug: "environmental-graphics",
    title: "ENVIRONMENTAL GRAPHICS",
    subtitle: "Spatial Design",
    shortDesc: "Transforming physical spaces into branded experiences. From event branding and signage to window displays and wayfinding systems that leave lasting impressions.",
    icon: s_3,
    detailsPage: {
      heroImage: branding_1,
      introText: [
        "Your physical space is a powerful brand touchpoint. We transform environments into immersive brand experiences that engage visitors and reinforce your identity.",
        "From retail spaces to corporate offices, we create cohesive visual systems that guide and inspire."
      ],
      mainContent: {
        heading: "Spaces that tell your story",
        description: [
          "Environmental graphics bridge the gap between physical spaces and brand identity, creating memorable experiences that resonate with visitors.",
          "We design comprehensive wayfinding systems, wall graphics, window displays, and event installations."
        ]
      },
      features: [
        "Event branding and installations",
        "Wayfinding and signage systems",
        "Window displays and retail graphics",
        "Wall murals and dimensional graphics"
      ],
      smallImages: [branding_2, branding_3],
      bottomText: "Well-designed environmental graphics enhance user experience, strengthen brand identity, and transform ordinary spaces into extraordinary brand experiences.",
      sidebarContent: {
        title: "Environmental Graphics",
        description: "Transforming physical spaces into branded experiences through strategic signage, installations, and immersive design."
      }
    },
    relatedServices: ["branding-identity-design", "glazed-creations", "creative-consulting"]
  },
  {
    id: 4,
    slug: "photography-videography",
    title: "PHOTOGRAPHY & VIDEOGRAPHY",
    subtitle: "Visual Storytelling",
    shortDesc: "Professional product, spatial, and food photography combined with expert video editing. We capture your story through compelling visual narratives.",
    icon: s_4,
    detailsPage: {
      heroImage: branding_1,
      introText: [
        "Great photography and videography do more than document—they evoke emotion, tell stories, and create lasting impressions.",
        "Our team specializes in capturing the essence of products, spaces, and culinary creations with artistry and technical precision."
      ],
      mainContent: {
        heading: "Visual narratives that captivate",
        description: [
          "Whether showcasing products, documenting spaces, or highlighting culinary artistry, we bring a creative eye and technical expertise to every project.",
          "From concept to post-production, we handle every aspect of visual content creation."
        ]
      },
      features: [
        "Product photography and styling",
        "Architectural and spatial photography",
        "Food and beverage photography",
        "Video production and editing"
      ],
      smallImages: [branding_2, branding_3],
      bottomText: "Professional photography and videography elevate your brand, showcase your offerings in the best light, and create content that resonates across all platforms.",
      sidebarContent: {
        title: "Photography & Videography",
        description: "Capturing compelling visual narratives through professional photography and expert video production that bring your brand to life."
      }
    },
    relatedServices: ["social-media", "branding-identity-design", "creative-consulting"]
  },
  {
    id: 5,
    slug: "glazed-creations",
    title: "GLAZED CREATIONS",
    subtitle: "Ceramic Art",
    shortDesc: "Custom ceramic artwork and merchandise design. From unique pottery pieces to branded promotional items, we create tangible expressions of your brand.",
    icon: s_5,
    detailsPage: {
      heroImage: branding_1,
      introText: [
        "Ceramic art brings a unique, tactile dimension to brand expression. Our glazed creations blend traditional craftsmanship with contemporary design.",
        "Each piece is carefully crafted to embody your brand's personality while serving as functional art."
      ],
      mainContent: {
        heading: "Tangible brand experiences",
        description: [
          "From custom pottery to branded merchandise, our ceramic creations offer a unique way to connect with your audience through handcrafted, meaningful objects.",
          "Every piece is designed with attention to detail, ensuring quality and brand consistency."
        ]
      },
      features: [
        "Custom pottery and ceramic art",
        "Branded merchandise design",
        "Limited edition collectibles",
        "Corporate gift design"
      ],
      smallImages: [branding_2, branding_3],
      bottomText: "Handcrafted ceramic pieces create memorable brand touchpoints, offering unique promotional items and artistic expressions that stand out in a digital world.",
      sidebarContent: {
        title: "Glazed Creations",
        description: "Custom ceramic artwork and branded merchandise that creates tangible, memorable connections with your audience through artisan craftsmanship."
      }
    },
    relatedServices: ["branding-identity-design", "environmental-graphics", "creative-consulting"]
  },
  {
    id: 6,
    slug: "creative-consulting",
    title: "CREATIVE CONSULTING",
    subtitle: "Strategic Guidance",
    shortDesc: "Strategic guidance for your brand's creative journey. We provide brand strategy consulting, marketing campaign conceptualization, and content strategy development.",
    icon: s_6,
    detailsPage: {
      heroImage: branding_1,
      introText: [
        "Great creative work starts with solid strategy. We help brands navigate their creative journey with expert guidance and strategic planning.",
        "From brand positioning to campaign development, we provide the insights and direction needed to achieve your goals."
      ],
      mainContent: {
        heading: "Strategy that drives creativity",
        description: [
          "Our consulting services bridge the gap between business objectives and creative execution, ensuring every design decision supports your broader goals.",
          "We work collaboratively to develop strategies that are both visionary and practical."
        ]
      },
      features: [
        "Brand strategy and positioning",
        "Marketing campaign conceptualization",
        "Content strategy development",
        "Creative direction and art direction"
      ],
      smallImages: [branding_2, branding_3],
      bottomText: "Strategic creative consulting ensures your brand's visual identity, messaging, and campaigns work together cohesively to achieve measurable business results.",
      sidebarContent: {
        title: "Creative Consulting",
        description: "Strategic guidance and expert insights that align your creative vision with business objectives for maximum impact and growth."
      }
    },
    relatedServices: ["branding-identity-design", "social-media", "photography-videography"]
  }
];

// Helper function to get service by slug
export const getServiceBySlug = (slug: string): ServiceDetail | undefined => {
  return serviceDetailsData.find(service => service.slug === slug);
};

// Helper function to get related services
export const getRelatedServices = (slugs: string[]): ServiceDetail[] => {
  return serviceDetailsData.filter(service => slugs.includes(service.slug));
};