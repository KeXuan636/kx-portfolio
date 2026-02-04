const projects = [
  {
    title: "Pizza Menu Website",
    slug: "pizza-menu-website",
    description: "A pizza ordering website that allows users to browse the menu.",
    imageUrl: "/pizza-app.png",
    link: "https://pizza-five-ruddy.vercel.app/",
    tools: "React, CSS, JavaScript",
    category: "Programming",
    overview: "The Pizza Menu Website is an interactive web application that allows users to browse a variety of pizza options with ease. It provides a clean, user-friendly interface where customers can view pizza categories, see detailed descriptions, and explore available toppings. The platform is designed to simulate a real-world online menu experience, making it easy for users to navigate, select pizzas, and plan their orders efficiently.",
    solution: "The application was built using React for a dynamic, responsive front-end, combined with CSS for styling and JavaScript for interactivity. Key features include real-time updates of menu items, clear categorization of pizzas, and an intuitive layout that ensures users can quickly find their favorite pizzas. The design focuses on simplicity and accessibility, providing a seamless browsing experience across both desktop and mobile devices.",
    challenges: "One of the main challenges was ensuring that the menu layout remained consistent and visually appealing across different screen sizes. Another was managing the state effectively in React to ensure that any updates to the menu or selections were reflected immediately without reloading the page. Through careful planning and component-based design, these challenges were overcome, resulting in a smooth and responsive application.",
  },
  {
    title: "Travel List Website",
    slug: "travel-list-website",
    description: "This website allows users to add, delete, search, sort and browse items in the list.",
    imageUrl: "/travel-app.png",
    link: "https://travel-app-ten-lilac.vercel.app/",
    tools: "React, CSS, JavaScript",
    category: "Programming",
    overview:"The Travel List Website is a productivity-focused web application designed to help users organise and manage their travel packing items efficiently. Users can add, remove, search, sort, and browse items in their list while tracking their overall packing progress. The app simulates a real-life packing checklist, making it easier for users to prepare for trips in a structured and stress-free way.",
    solution:"The application was developed using React to manage dynamic state updates and provide a responsive user experience. React hooks were used to handle item creation, deletion, sorting, and filtering, while CSS was applied to create a clean and readable layout. Local storage was implemented to ensure that users’ data persists even after refreshing or closing the browser.",
    challenges:"One key challenge was managing multiple list operations such as sorting, searching, and deleting items while keeping the interface responsive. Another challenge was ensuring the data remained consistent across sessions using local storage. These challenges were addressed by structuring the application into reusable components and carefully managing state changes within React."
  },
  {
    title: "Escape Room Game",
    slug: "escape-room-game",
    description: "A web-based escape room game with 4 puzzles.",
    imageUrl: "/escaperoom.png",
    link: "/escaperoom.mp4",
    tools: "Unity",
    category: "VR/AR",
    overview:"The Escape Room Game is an interactive virtual experience that challenges players to solve a series of puzzles in order to escape a locked environment. The game features four distinct puzzles that require logical thinking, exploration, and problem-solving skills. The objective is to create an immersive experience that simulates the tension and excitement of a real-world escape room.",
    solution:"The game was developed using Unity, where puzzles, environments, and interactions were designed and implemented using game logic and scripting. Each puzzle was carefully structured to guide players through clues while maintaining a sense of challenge. Visual and audio elements were added to enhance immersion and player engagement.",
    challenges:"Designing puzzles that were neither too difficult nor too easy was a major challenge. Another challenge was ensuring smooth gameplay flow and clear feedback when players interacted with objects. Through playtesting and iteration, the puzzles were refined to provide an engaging yet intuitive experience."
  },
  {
    title: "Jio Me Website",
    slug: "jiome-website",
    description: "JioMe is a campus app that helps people quickly find, join, and manage informal interest groups and events.",
    imageUrl: "/jiome-app.png",
    link: "https://c219-ca2-jiome-api.vercel.app/",
    tools: "React, CSS, JavaScript",
    category: "Programming",
    overview:"JioMe is a campus-focused web application designed to help students discover, join, and manage informal interest groups and events easily. The platform aims to strengthen community engagement by allowing users to explore activities, connect with like-minded individuals, and participate in campus life more actively.",
    solution:"The website was built using React to create a dynamic and interactive front-end experience. Components were structured to display groups and events clearly, while CSS was used to maintain a clean and modern interface. The design focuses on usability and clarity, ensuring users can navigate the platform effortlessly.",
    challenges:"One challenge was presenting a large amount of group and event information without overwhelming users. Another challenge was maintaining consistent navigation across different sections of the app. These issues were addressed through thoughtful UI structuring and component-based development."
  },
  {
    title: "AR Name Card",
    slug: "ar-name-card",
    description: "An augmented reality name card that displays my contact information in an interactive way.",
    imageUrl: "/ar-name-card.png",
    link: "/ar-name-card.mp4",
    tools: "Unity, C#",
    category: "VR/AR",
    overview:"The AR Name Card is an innovative augmented reality project that transforms a traditional name card into an interactive digital experience. When viewed through an AR-enabled device, the name card displays personal details and visual elements in a dynamic and engaging way, creating a memorable first impression.",
    solution:"The project was developed using Unity and C#, where AR functionality was implemented to detect the name card and overlay digital content. Interactive elements were designed to display contact information clearly while maintaining a professional aesthetic. The experience focuses on blending physical and digital interactions seamlessly.",
    challenges:"One of the main challenges was ensuring accurate AR tracking and alignment across different devices. Another challenge was balancing visual appeal with readability. These challenges were resolved through testing, refinement of AR anchors, and optimisation of 3D assets."
  },
  {
    title: "Leaf and Loom E-commerce UI Design",
    slug: "leaf-and-loom-ecommerce-ui-design",
    description: "A modern UI design for an e-commerce website specializing in eco-friendly products.",
    imageUrl: "/leafandloom.png",
    link: "/leafandloom.mp4",
    tools: "Figma",
    category: "UI/UX",
    overview:"Leaf and Loom is a modern e-commerce UI design concept focused on eco-friendly and sustainable products. The project emphasises clean visuals, intuitive navigation, and a calming aesthetic to reflect the brand’s environmentally conscious values.",
    solution:"The UI was designed using Figma, where layouts, colour palettes, typography, and components were carefully crafted. User flows were planned to ensure smooth navigation from product browsing to checkout. The design prioritises clarity, consistency, and accessibility to enhance the overall user experience.",
    challenges:"One challenge was balancing aesthetic appeal with usability, ensuring the design remained visually pleasing without sacrificing functionality. Another challenge was maintaining consistency across multiple screens. These were addressed by using design systems and reusable components within Figma."
  },
  {
    title: "Learn@RP UI/UX Design",
    slug: "learn-at-rp-ui-ux-design",
    description: "A user-friendly redesign of the Learn@RP platform to enhance student engagement and accessibility.",
    imageUrl: "/learnrp.png",
    link: "/learn@rp.mp4",
    tools: "Figma",
    category: "UI/UX",
    overview:"The Learn@RP UI/UX Design project focuses on redesigning the existing Learn@RP platform to improve student engagement and accessibility. The goal was to create a more intuitive and user-friendly interface that supports students in managing their academic activities efficiently.",
    solution:"The redesign was created using Figma, where user pain points were analysed and translated into improved layouts and navigation flows. The design incorporates clearer information hierarchy, improved spacing, and simplified interactions to enhance usability for students.",
    challenges:"Understanding diverse user needs and ensuring accessibility across different user groups was a key challenge. Another challenge was redesigning a familiar platform without disrupting existing workflows. These challenges were addressed through user-centric design principles and iterative refinement."
  },
];

export default projects;
