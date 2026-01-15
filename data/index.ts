export const navItems = [
  { name: "About", link: "#about" },
  {
    name: "Resume",
    link: "https://drive.google.com/file/d/12l4g31lEyZ80xCLFLuLfITJcqBHuM1Dt/view?usp=sharing",
  },
  { name: "Projects", link: "#projects" },
  //{ name: "Testimonials", link: "#testimonials" },

  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I prioritize open communication with my clients for the best quality results",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: " Flexibility is my promise ",
    description: "",
    className:
      "lg:col-span-2 md:col-span-3 md:row-span-2 min-h-[40vh] select-none",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Resume",
    description: "Are you hiring? Check out ",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 flex",
    imgClassName: "",
    titleClassName: "justify-end",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Clean Code and Modern Design",
    description: "Passionate about transforming ideas into reality.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Property-Pulse",
    des: "Find your perfect rental property with Property Pulse, the leading platform for real estate listings and property management.",
    img: "/property-pulse.png",
    iconLists: ["/next.svg", "/tail.svg", "/mongo.svg"],
    link: "https://property-pulse-nextjs-seven.vercel.app/",
  },
  {
    id: 2,
    title: "Halal-Way",
    des: "I believe in building a relationship that aligns with Islamic values — with mutual respect, clear intentions, and the goal of marriage (nikah). I value honesty, commitment, and family involvement to keep things halal",
    img: "halal-way.png",
    iconLists: ["/science.png", "/tail.svg", "/next.svg", "/mui.svg"],
    link: "https://halal-way.vercel.app/",
  },
  {
    id: 3,
    title: "Rent-Cars",
    des: "Find, book and rent a car Easily",
    img: "/rent-cars.png",
    iconLists: ["/vite.svg", "/science.png", "/tail.svg"],
    link: "https://rent-cars-in-react.vercel.app/",
  },

  {
    id: 4,
    title: "German-Care-Brigee",
    des: "Empowerment Through Employment: Launch Your Career in Germany",
    img: "/german-care.png",
    iconLists: ["/vite.svg", "/science.png", "/tail.svg"],
    link: "https://german-care-brigee.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Linux Clipboard App",
    desc: "Made a linux App that can be used to copy multiple codes at once and paste according to the sequence",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "React Library",
    desc: "Developed a React library called react-infinite-scroller which is used to create horizontal logo animations , its still in improvement stage ",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Project",
    desc: "Developed a AR based web application for a client to present his machines AR gltf files to get funding for his big project , have signed a NDA",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Team Lead",
    desc: "Led the team of developers at whitebranding for multiple projects for a period of 6 months",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    href: "https://github.com/jagannath-p-s",
  },
  {
    id: 2,
    img: "/twit.svg",
    href: "https://x.com/jagannathps2000",
  },
  {
    id: 3,
    img: "/link.svg",
    href: "https://www.linkedin.com/in/jagannath-ps",
  },
];
