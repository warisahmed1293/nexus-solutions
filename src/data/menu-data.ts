import { IMenuDT } from "@/types/menu-d-t";


const menu_data: IMenuDT[] = [
  {
    id: 1,
    title: 'Home',
    link: '/',
  },
  {
    id: 2,
    title: 'About Us',
    link: '/about-us',
    // pages_mega_menu: {
    //   first: {
    //     title: 'LIST TYPES',
    //     submenus: [
    //       { title: 'ABOUT US', link: '/about-us' },
    //       { title: 'FAQ Page', link: '/faq' },
    //       { title: 'ABOUT ME', link: '/about-me' },
    //       { title: 'Pricing', link: '/pricing' },
    //       { title: 'Team Page', link: '/team' },
    //       { title: 'OUR CLIENTS', link: '/brand' },
    //       { title: 'Team Details', link: '/team-details/1' },
    //       { title: 'Register', link: '/register' },
    //       { title: 'OUR SERVICES', link: '/service' },
    //       { title: 'LogIn', link: '/login' },
    //       { title: 'SERVICES DETAILS', link: '/service-details' },
    //       { title: 'ERROR PAGE', link: '/error' },
    //     ]
    //   },
    //   second: {
    //     title: 'Shop Page',
    //     submenus: [
    //       { title: 'Shop Page', link: '/shop' },
    //       { title: 'Shop Details One', link: '/shop-details/1' },
    //       { title: 'Shop Details Two', link: '/shop-details-2' },
    //       { title: 'my account', link: '/account' },
    //       { title: 'Cart', link: '/cart' },
    //       { title: 'Checkout', link: '/checkout' },
    //       { title: 'Wishlist', link: '/wishlist' },
    //     ]
    //   },

    // }
  },
  {
    id: 3,
    title: 'Services',
    link: '/service',
  },
  // {
  //   id: 4,
  //   title: 'Blog',
  //   link: '/blog-modern',
  //   dropdown_menus: [
  //     { title: 'Modern', link: '/blog-modern' },
  //     { title: 'Classic Sidebar', link: '/blog-classic' },
  //     { title: 'Minimal List', link: '/blog-list' },
  //     { title: 'Post Single', link: '/blog-details/1' },
  //     { title: 'Post With Sidebar', link: '/blog-details-2' },
  //   ]
  // },
  {
    id: 4,
    title: 'Contact',
    link: '/contact',
    // dropdown_menus:[
    //   { title: 'Contact', link: '/contact' },
    //   { title: 'Get IN touch', link: '/contact-2' },
    // ]
  }
];



export default menu_data;

// mobile menus 
export const mobile_menu_data: {
  id: number;
  title: string;
  link: string;
  dropdown_menus: {
    title: string;
    link: string;
  }[];
}[] = [
    {
      id: 1,
      title: 'Home',
      link: '/',
      dropdown_menus: [
      ]
    },
    {
      id: 2,
      title: 'About Us',
      link: '/about-us',
      dropdown_menus: [
      ]
    },
    {
      id: 3,
      title: 'Services',
      link: '/service',
      dropdown_menus: [
      ]
    },
    {
      id: 4,
      title: 'Contact',
      link: '/contact',
      dropdown_menus: [
      ]
    }
  ]