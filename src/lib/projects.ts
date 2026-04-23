import animImg from "@/assets/cat-animation.jpg";
import liveImg from "@/assets/cat-liveaction.jpg";
import vfxImg from "@/assets/cat-vfx.jpg";

export type Category = "animation" | "live-action" | "vfx-cgi";

export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  category: Category;
  categoryLabel: string;
  img: string;
  span?: "wide" | "tall" | "normal";
  summary: string;
  role: string;
  duration: string;
  videoUrl: string;
  brief: string;
  craft: string[];
  credits: { role: string; name: string }[];
};

export const PROJECTS: Project[] = [
  {
    slug: "the-wandering-pixel",
    title: "The Wandering Pixel",
    client: "Ubisoft",
    year: "2024",
    category: "animation",
    categoryLabel: "Animation",
    img: animImg,
    span: "wide",
    summary: "A hand drawn anthem spot for a global game launch.",
    role: "Direction, 2D animation, sound design",
    duration: "60 seconds",
    videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    brief:
      "Ubisoft asked us to capture the wonder of stepping into a new world for the first time. We built a frame by frame story about a pixel that wanders out of its game and finds others.",
    craft: ["Storyboarding", "Character design", "2D rigging", "Frame by frame animation", "Compositing", "Original score"],
    credits: [
      { role: "Director", name: "Raman Singh" },
      { role: "Lead Animator", name: "Aisha Verma" },
      { role: "Sound Design", name: "Kabir Joshi" },
    ],
  },
  {
    slug: "sunshine-saga",
    title: "Sunshine Saga",
    client: "Cartoon Network",
    year: "2024",
    category: "animation",
    categoryLabel: "Animation",
    img: liveImg,
    span: "tall",
    summary: "Title sequence for a coming of age animated series.",
    role: "Concept, character design, 2D animation",
    duration: "90 seconds",
    videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    brief:
      "We crafted a sun drenched title sequence introducing six young characters across one summer day. Built to scale into bumpers and social cuts.",
    craft: ["Character design", "Storyboarding", "2D animation", "Type design"],
    credits: [
      { role: "Creative Director", name: "Mira Patel" },
      { role: "Animation Lead", name: "Devon Chen" },
    ],
  },
  {
    slug: "echo-echo",
    title: "Echo Echo",
    client: "Spotify",
    year: "2023",
    category: "animation",
    categoryLabel: "Animation",
    img: vfxImg,
    summary: "Motion identity for a podcast launch campaign.",
    role: "Motion design, sound design",
    duration: "30 seconds",
    videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    brief:
      "A reactive motion language that turned audio waveforms into living shapes for Spotify's podcast launch across markets in Asia.",
    craft: ["Motion design", "Sound reactive systems", "Brand motion"],
    credits: [
      { role: "Motion Lead", name: "Nikhil Shah" },
    ],
  },
  {
    slug: "made-of-lines",
    title: "Made of Lines",
    client: "Adobe",
    year: "2023",
    category: "animation",
    categoryLabel: "Animation",
    img: animImg,
    summary: "A tribute to illustrators, every frame drawn by hand.",
    role: "Direction, illustration, animation",
    duration: "75 seconds",
    videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    brief:
      "An ode to the illustrator's hand. We worked with twelve guest artists, each contributing one scene, all stitched into a single seamless film.",
    craft: ["Illustration", "Frame by frame animation", "Editorial"],
    credits: [
      { role: "Director", name: "Raman Singh" },
      { role: "Producer", name: "Sara Iqbal" },
    ],
  },
  {
    slug: "tiny-worlds",
    title: "Tiny Worlds",
    client: "Netflix Kids",
    year: "2023",
    category: "animation",
    categoryLabel: "Animation",
    img: liveImg,
    span: "wide",
    summary: "Promo idents for a preschool slate.",
    role: "Character design, 3D animation",
    duration: "5 seconds each",
    videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    brief:
      "Six bite sized 3D idents introducing new characters from Netflix's preschool lineup. Soft, tactile, full of personality.",
    craft: ["3D modeling", "Character design", "Lighting", "Look development"],
    credits: [
      { role: "CG Supervisor", name: "Tara Menon" },
    ],
  },
  {
    slug: "bloom-cycle",
    title: "Bloom Cycle",
    client: "Apple",
    year: "2022",
    category: "animation",
    categoryLabel: "Animation",
    img: vfxImg,
    span: "tall",
    summary: "Generative motion piece for a flagship product launch.",
    role: "Motion design, generative art",
    duration: "120 seconds",
    videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    brief:
      "A blooming generative system, hand tuned for hero shots, used across keynote stage screens and retail displays.",
    craft: ["Generative design", "Motion design", "Color grading"],
    credits: [
      { role: "Creative Lead", name: "Mira Patel" },
    ],
  },
  {
    slug: "night-shift",
    title: "Night Shift",
    client: "Nike",
    year: "2024",
    category: "live-action",
    categoryLabel: "Live Action",
    img: liveImg,
    span: "wide",
    summary: "A documentary style spot following midnight runners.",
    role: "Direction, production, post",
    duration: "90 seconds",
    videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    brief:
      "Three nights, three cities, real runners. Nike asked for honesty over polish, so we shot on the streets at 2am with available light and the people who actually own those hours.",
    craft: ["Direction", "Cinematography", "Editorial", "Color grading", "Sound mix"],
    credits: [
      { role: "Director", name: "Raman Singh" },
      { role: "DOP", name: "Hari Krishnan" },
      { role: "Producer", name: "Sara Iqbal" },
    ],
  },
  {
    slug: "salt-of-the-earth",
    title: "Salt of the Earth",
    client: "National Geographic",
    year: "2024",
    category: "live-action",
    categoryLabel: "Live Action",
    img: vfxImg,
    span: "tall",
    summary: "A short documentary on India's salt farming families.",
    role: "Direction, production, edit",
    duration: "12 minutes",
    videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    brief:
      "We spent three weeks in the Rann of Kutch with families who have farmed salt for generations. The film is theirs as much as ours.",
    craft: ["Documentary direction", "Long lens cinematography", "Sound recording", "Editorial"],
    credits: [
      { role: "Director", name: "Mira Patel" },
      { role: "DOP", name: "Hari Krishnan" },
    ],
  },
  {
    slug: "chase-the-light",
    title: "Chase the Light",
    client: "Mercedes Benz",
    year: "2023",
    category: "live-action",
    categoryLabel: "Live Action",
    img: animImg,
    summary: "A golden hour chase film through the Himalayas.",
    role: "Direction, production",
    duration: "60 seconds",
    videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    brief:
      "Two cars, one mountain pass, the last fifteen minutes of light. Shot across four sunsets to get every cut perfect.",
    craft: ["Direction", "Cinematography", "Aerial", "Color grading"],
    credits: [
      { role: "Director", name: "Raman Singh" },
    ],
  },
  {
    slug: "hometown-heroes",
    title: "Hometown Heroes",
    client: "Coca Cola",
    year: "2023",
    category: "live-action",
    categoryLabel: "Live Action",
    img: liveImg,
    summary: "Portraits of small town India during the cricket world cup.",
    role: "Direction, production, post",
    duration: "120 seconds",
    videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    brief:
      "Six towns, six families, one tournament. A patchwork portrait of how cricket lives in the country it was reborn in.",
    craft: ["Documentary direction", "Casting", "Editorial", "Sound design"],
    credits: [
      { role: "Director", name: "Mira Patel" },
    ],
  },
  {
    slug: "after-hours",
    title: "After Hours",
    client: "Levi's",
    year: "2023",
    category: "live-action",
    categoryLabel: "Live Action",
    img: vfxImg,
    span: "wide",
    summary: "A late night fashion film built around a single track.",
    role: "Direction, choreography, edit",
    duration: "75 seconds",
    videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    brief:
      "We gave a denim story to a choreographer and shot the result in a Mumbai parking garage at 3am. One song, one location, one take per setup.",
    craft: ["Direction", "Choreography", "Cinematography", "Editorial"],
    credits: [
      { role: "Director", name: "Raman Singh" },
    ],
  },
  {
    slug: "first-light",
    title: "First Light",
    client: "Royal Enfield",
    year: "2022",
    category: "live-action",
    categoryLabel: "Live Action",
    img: animImg,
    span: "tall",
    summary: "An anthem film for a new motorcycle launch.",
    role: "Direction, production",
    duration: "90 seconds",
    videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    brief:
      "Sunrise rides through Spiti Valley, captured over a single week with a tiny crew and a lot of warm tea.",
    craft: ["Direction", "Cinematography", "Aerial", "Sound design"],
    credits: [
      { role: "Director", name: "Mira Patel" },
    ],
  },
  {
    slug: "edge-of-atmosphere",
    title: "Edge of Atmosphere",
    client: "BMW",
    year: "2024",
    category: "vfx-cgi",
    categoryLabel: "VFX & CGI",
    img: vfxImg,
    span: "wide",
    summary: "A photoreal CGI launch film for an electric flagship.",
    role: "CGI, look development, compositing",
    duration: "75 seconds",
    videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    brief:
      "Built entirely in CG, the film places the new BMW at the edge of the atmosphere with no compromise on photoreal detail.",
    craft: ["3D modeling", "Look development", "Lighting", "FX simulations", "Compositing"],
    credits: [
      { role: "VFX Supervisor", name: "Tara Menon" },
      { role: "Lighting Lead", name: "Devon Chen" },
    ],
  },
  {
    slug: "liquid-logic",
    title: "Liquid Logic",
    client: "Pepsi",
    year: "2024",
    category: "vfx-cgi",
    categoryLabel: "VFX & CGI",
    img: animImg,
    span: "tall",
    summary: "Hyperreal liquid simulations for a global campaign.",
    role: "FX, lighting, compositing",
    duration: "30 seconds",
    videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    brief:
      "A series of impossible pour shots simulated frame by frame. Made for hero TVCs, banners and out of home.",
    craft: ["FX simulation", "Look development", "Compositing"],
    credits: [
      { role: "FX Lead", name: "Nikhil Shah" },
    ],
  },
  {
    slug: "dust-to-dawn",
    title: "Dust to Dawn",
    client: "PUBG",
    year: "2023",
    category: "vfx-cgi",
    categoryLabel: "VFX & CGI",
    img: liveImg,
    summary: "Cinematic trailer for a new battleground map.",
    role: "Previs, CGI, VFX",
    duration: "120 seconds",
    videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    brief:
      "Live action plates seamlessly extended into a sprawling CG environment for the launch trailer of PUBG's new map.",
    craft: ["Previs", "Matte painting", "FX", "Compositing"],
    credits: [
      { role: "VFX Supervisor", name: "Tara Menon" },
    ],
  },
  {
    slug: "crystalline",
    title: "Crystalline",
    client: "Swarovski",
    year: "2023",
    category: "vfx-cgi",
    categoryLabel: "VFX & CGI",
    img: vfxImg,
    summary: "A jewel made of light, built entirely in CGI.",
    role: "CGI, look development",
    duration: "20 seconds",
    videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    brief:
      "A hero product film for Swarovski's seasonal launch. Modeled, lit and rendered with optical accuracy down to the facet.",
    craft: ["3D modeling", "Look development", "Lighting", "Compositing"],
    credits: [
      { role: "Lighting Lead", name: "Devon Chen" },
    ],
  },
  {
    slug: "beneath-the-tide",
    title: "Beneath the Tide",
    client: "BBC Earth",
    year: "2023",
    category: "vfx-cgi",
    categoryLabel: "VFX & CGI",
    img: liveImg,
    span: "wide",
    summary: "Underwater CGI extensions for a natural history series.",
    role: "Environment art, FX, compositing",
    duration: "Series",
    videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    brief:
      "Invisible work: extending real underwater plates with CG creatures, bubbles and god rays. The kind of VFX you should not notice.",
    craft: ["Environment", "Creature animation", "FX", "Compositing"],
    credits: [
      { role: "VFX Supervisor", name: "Tara Menon" },
    ],
  },
  {
    slug: "neon-pulse",
    title: "Neon Pulse",
    client: "Cyberpunk",
    year: "2022",
    category: "vfx-cgi",
    categoryLabel: "VFX & CGI",
    img: vfxImg,
    span: "tall",
    summary: "A stylised CG short for a game expansion launch.",
    role: "Direction, CGI, FX",
    duration: "90 seconds",
    videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    brief:
      "A neon soaked CG short, cut to an original score, made to launch the expansion's marketing beat.",
    craft: ["Direction", "3D animation", "FX", "Compositing", "Color grading"],
    credits: [
      { role: "Director", name: "Raman Singh" },
      { role: "VFX Supervisor", name: "Tara Menon" },
    ],
  },
];

export function projectsByCategory(category: Category): Project[] {
  return PROJECTS.filter((p) => p.category === category);
}

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
