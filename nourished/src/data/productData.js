import cat1 from "../assets/images/categories/cat-1.jpg"
import cat2 from "../assets/images/categories/cat-2.jpg"
import cat3 from "../assets/images/categories/cat-3.jpg"
import cat4 from "../assets/images/categories/cat-4.jpg"
import cat5 from "../assets/images/categories/cat-5.jpg"

import blog1 from "../assets/images/blog/blog-1.jpg"
import blog2 from "../assets/images/blog/blog-2.jpg"
import blog3 from "../assets/images/blog/blog-3.jpg"

export const data = [
  {
    title: "home",
    link: "/",
  },
  {
    title: "shop",
    link: "/shop",
  },
  {
    title: "pages",
    link: "/pages",
  },
  {
    title: "blog",
    link: "/blog",
  },
  {
    title: "contact",
    link: "/contact",
  },
];

export const dashboardNavbarData = [
  {
    title: "home",
    link: "/",
  },
  {
    title: "Add Product",
    link: "/add-product",
  },
  {
    title: "Manage Product",
    link: "/manage-product",
  },
];

export const categories = ["All", "Fruits", "Shake", "Juice"];


export const categoriesData = [
  {
    image: cat1,
    title: "fresh fruit"
  },
  {
    image: cat2,
    title: "dried fruit"
  },
  {
    image: cat3,
    title: "vegatable fruit"
  },
  {
    image: cat4,
    title: "drink fruit"
  },
  {
    image: cat5,
    title: "drink fruit"
  },
];

export const categoriesCarouselSetting = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

export const addProductOption = [
  {
    option1: "Fruits",
    option2: "Juice",
    option3: "Shake",
  },
];

export const initialData = {
  name: "",
  category: "",
  price: "",
  description: "",
  image: "",
};

export const initialLoginData = {
  email: "",
  password: "",
}

export const blogData = [
  {
    image: blog1,
    title: 'Cooking tips make cooking simple',
    description: 'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat'
  },
  {
    image: blog2,
    title: '6 ways to prepare breakfast for 30',
    description: 'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat'
  },
  {
    image: blog3,
    title: 'Visit the clean farm in the US',
    description: 'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat'
  }
]

