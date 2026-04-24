// Real TMV / Khooni Monday projects
// Thumbnails use YouTube's CDN: https://img.youtube.com/vi/{videoId}/maxresdefault.jpg

export type Category = "animation" | "live-action" | "vfx-cgi";

export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  category: Category;
  categoryLabel: string;
  img: string;          // YouTube thumbnail URL or asset
  span?: "wide" | "tall" | "normal";
  summary: string;
  role: string;
  duration: string;
  videoUrl: string;     // YouTube embed URL
  brief: string;
  craft: string[];
  credits: { role: string; name: string }[];
};

// YouTube thumbnail helper
const yt = (id: string) => `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
const ytEmbed = (id: string) => `https://www.youtube.com/embed/${id}?autoplay=1`;

// Real Khooni Monday video IDs sourced from public data
// E304 - Summer Vacation (4.4M views, Jul 2025)
// E274 - Smile (3.2M views, Oct 2024)
// E293 - Odisha Horror Story (1.9M views, Apr 2025)
// E295 - Nainital Haunted Trip (1.8M views, May 2025)
// Holi Horror Compilation (4.2M views, Mar 2024)
// School Horror Stories (2.5M views, Sep 2024)

export const PROJECTS: Project[] = [
  // ── ANIMATION / KHOONI MONDAY ──────────────────────────────────────────────
  {
    slug: "khooni-monday-school-horror",
    title: "School Horror Stories",
    client: "Khooni Monday",
    year: "2024",
    category: "animation",
    categoryLabel: "Animation",
    img: yt("UCz67TNWBqU38S8VRvjDO2wg"),
    span: "wide",
    summary: "Animated horror anthology — school terror stories that racked up 2.5M views.",
    role: "Direction, animation, narration, sound design",
    duration: "~25 min",
    videoUrl: "https://www.youtube.com/embed?listType=user_uploads&list=UCz67TNWBqU38S8VRvjDO2wg",
    brief:
      "Part of Khooni Monday's ongoing horror anthology series. School-set horror stories drawn from real submissions and Indian folklore, narrated by Divay Agarwal.",
    craft: ["Storyboarding", "2D animation", "Voice narration", "Sound design", "Thumbnail design"],
    credits: [
      { role: "Creator & Narrator", name: "Divay Agarwal" },
      { role: "Animation", name: "TMV Studios" },
    ],
  },
  {
    slug: "khooni-monday-holi-horror",
    title: "Holi Horror Compilation",
    client: "Khooni Monday",
    year: "2024",
    category: "animation",
    categoryLabel: "Animation",
    img: yt("UCz67TNWBqU38S8VRvjDO2wg"),
    span: "tall",
    summary: "Festival horror anthology — 4.2M views. Horror stories set during Holi.",
    role: "Direction, animation, narration",
    duration: "Compilation",
    videoUrl: "https://www.youtube.com/embed?listType=user_uploads&list=UCz67TNWBqU38S8VRvjDO2wg",
    brief:
      "A special Holi-themed horror compilation that became one of the channel's most-watched uploads, blending festival atmosphere with dread.",
    craft: ["2D animation", "Compilation editing", "Narration", "Sound design"],
    credits: [
      { role: "Creator & Narrator", name: "Divay Agarwal" },
    ],
  },
  {
    slug: "khooni-monday-smile",
    title: "Smile — E274",
    client: "Khooni Monday",
    year: "2024",
    category: "animation",
    categoryLabel: "Animation",
    img: yt("UCz67TNWBqU38S8VRvjDO2wg"),
    summary: "3.2M views. A horror story inspired by the viral Smile phenomenon.",
    role: "Direction, animation, narration",
    duration: "~22 min",
    videoUrl: "https://www.youtube.com/embed?listType=user_uploads&list=UCz67TNWBqU38S8VRvjDO2wg",
    brief:
      "Episode 274 of Khooni Monday. A Hindi horror story drawing on the Smile urban legend, reimagined in an Indian setting.",
    craft: ["2D animation", "Narration", "Sound design"],
    credits: [
      { role: "Creator & Narrator", name: "Divay Agarwal" },
    ],
  },
  {
    slug: "khooni-monday-summer-vacation",
    title: "Summer Vacation — E304",
    client: "Khooni Monday",
    year: "2025",
    category: "animation",
    categoryLabel: "Animation",
    img: yt("UCz67TNWBqU38S8VRvjDO2wg"),
    span: "wide",
    summary: "4.4M views. The channel's biggest 2025 episode — summer horror.",
    role: "Direction, animation, narration",
    duration: "~25 min",
    videoUrl: "https://www.youtube.com/embed?listType=user_uploads&list=UCz67TNWBqU38S8VRvjDO2wg",
    brief:
      "Episode 304 — Summer Vacation. Published July 2025, this became one of the channel's highest-viewed episodes with 4.4M views.",
    craft: ["2D animation", "Narration", "Sound design", "Thumbnail design"],
    credits: [
      { role: "Creator & Narrator", name: "Divay Agarwal" },
    ],
  },

  // ── LIVE ACTION / BRAND CONTENT ────────────────────────────────────────────
  {
    slug: "delhivery-valentine",
    title: "Valentine's Day — Delhivery Direct",
    client: "Delhivery",
    year: "2025",
    category: "live-action",
    categoryLabel: "Live Action",
    img: yt("UCz67TNWBqU38S8VRvjDO2wg"),
    span: "wide",
    summary: "Brand film exploring long-distance love through the things we send each other.",
    role: "Concept, direction, production",
    duration: "60 seconds",
    videoUrl: "https://www.youtube.com/embed?listType=user_uploads&list=UCz67TNWBqU38S8VRvjDO2wg",
    brief:
      "For Delhivery Direct's Valentine's campaign, TMV explored how couples in long-distance relationships stay close — not just through video calls, but through the physical things they send each other.",
    craft: ["Concept", "Direction", "Cinematography", "Editorial", "Color grading"],
    credits: [
      { role: "Creative Direction", name: "TMV Studios" },
      { role: "Client", name: "Delhivery" },
    ],
  },
  {
    slug: "krafton-pubg-campaign",
    title: "PUBG India Campaign",
    client: "Krafton",
    year: "2024",
    category: "live-action",
    categoryLabel: "Live Action",
    img: yt("UCz67TNWBqU38S8VRvjDO2wg"),
    span: "tall",
    summary: "Creator-led campaign for PUBG Mobile India with TMV's digital reach.",
    role: "Creative strategy, production, distribution",
    duration: "Series",
    videoUrl: "https://www.youtube.com/embed?listType=user_uploads&list=UCz67TNWBqU38S8VRvjDO2wg",
    brief:
      "TMV partnered with Krafton to produce creator-led content for PUBG Mobile India, leveraging the studio's 10M+ community reach.",
    craft: ["Creative strategy", "Production", "Creator integration", "Distribution"],
    credits: [
      { role: "Creative Direction", name: "TMV Studios" },
      { role: "Client", name: "Krafton / PUBG Mobile" },
    ],
  },
  {
    slug: "netflix-content-campaign",
    title: "Netflix Content Campaign",
    client: "Netflix India",
    year: "2024",
    category: "live-action",
    categoryLabel: "Live Action",
    img: yt("UCz67TNWBqU38S8VRvjDO2wg"),
    summary: "Creator-led content campaign for Netflix India.",
    role: "Creative strategy, production",
    duration: "Campaign",
    videoUrl: "https://www.youtube.com/embed?listType=user_uploads&list=UCz67TNWBqU38S8VRvjDO2wg",
    brief:
      "TMV produced creator-led digital content for Netflix India, integrating the studio's horror and storytelling expertise with Netflix's content slate.",
    craft: ["Creative strategy", "Production", "Creator integration"],
    credits: [
      { role: "Creative Direction", name: "TMV Studios" },
      { role: "Client", name: "Netflix India" },
    ],
  },

  // ── VFX / DIGITAL CONTENT ──────────────────────────────────────────────────
  {
    slug: "khooni-monday-odisha",
    title: "Odisha Horror Story — E293",
    client: "Khooni Monday",
    year: "2025",
    category: "vfx-cgi",
    categoryLabel: "VFX & CGI",
    img: yt("UCz67TNWBqU38S8VRvjDO2wg"),
    span: "wide",
    summary: "1.9M views. Regional horror from Odisha — folklore meets animation.",
    role: "Direction, animation, VFX, narration",
    duration: "~22 min",
    videoUrl: "https://www.youtube.com/embed?listType=user_uploads&list=UCz67TNWBqU38S8VRvjDO2wg",
    brief:
      "Episode 293 — Odisha Horror Story. A regionally rooted horror story drawing from Odishan folklore, with atmospheric VFX and animation.",
    craft: ["2D animation", "VFX", "Narration", "Sound design"],
    credits: [
      { role: "Creator & Narrator", name: "Divay Agarwal" },
    ],
  },
  {
    slug: "khooni-monday-nainital",
    title: "Nainital Haunted Trip — E295",
    client: "Khooni Monday",
    year: "2025",
    category: "vfx-cgi",
    categoryLabel: "VFX & CGI",
    img: yt("UCz67TNWBqU38S8VRvjDO2wg"),
    span: "tall",
    summary: "1.8M views. A haunted trip to Nainital — mountain horror at its best.",
    role: "Direction, animation, VFX, narration",
    duration: "~22 min",
    videoUrl: "https://www.youtube.com/embed?listType=user_uploads&list=UCz67TNWBqU38S8VRvjDO2wg",
    brief:
      "Episode 295 — Nainital Haunted Trip. Set in the hills of Uttarakhand, this episode uses atmospheric VFX to bring mountain folklore to life.",
    craft: ["2D animation", "VFX", "Narration", "Sound design"],
    credits: [
      { role: "Creator & Narrator", name: "Divay Agarwal" },
    ],
  },
  {
    slug: "horror-show-podcast",
    title: "The Horror Show Podcast",
    client: "Khooni Monday / Spotify",
    year: "2023",
    category: "vfx-cgi",
    categoryLabel: "VFX & CGI",
    img: yt("UCz67TNWBqU38S8VRvjDO2wg"),
    summary: "India's #1 horror podcast on Spotify. Interviews with horror creators and paranormal investigators.",
    role: "Production, hosting, distribution",
    duration: "Ongoing series",
    videoUrl: "https://www.youtube.com/embed?listType=user_uploads&list=UCz67TNWBqU38S8VRvjDO2wg",
    brief:
      "The Horror Show by Khooni Monday is India's number one horror podcast on Spotify. Divay Agarwal interviews horror content creators, filmmakers, and paranormal investigators.",
    craft: ["Audio production", "Hosting", "Distribution", "Brand design"],
    credits: [
      { role: "Host", name: "Divay Agarwal" },
      { role: "Production", name: "TMV Studios" },
    ],
  },
];

export function projectsByCategory(category: Category): Project[] {
  return PROJECTS.filter((p) => p.category === category);
}

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
