import { createFileRoute } from "@tanstack/react-router";
import vfxImg from "@/assets/cat-vfx.jpg";
import { CategoryPage } from "@/components/CategoryPage";
import { projectsByCategory } from "@/lib/projects";

export const Route = createFileRoute("/portfolio_/vfx-cgi")({
  head: () => ({
    meta: [
      { title: "VFX & CGI, TMV Studios" },
      { name: "description", content: "Visual effects, CGI and post-production by TMV Studios." },
      { property: "og:title", content: "VFX & CGI, TMV Studios" },
      { property: "og:description", content: "Photoreal worlds, simulations and finishing." },
      { property: "og:image", content: vfxImg },
    ],
  }),
  component: VfxPage,
});

function VfxPage() {
  return (
    <CategoryPage
      eyebrow="Department, VFX & CGI"
      title="VFX &amp; CGI."
      cover={vfxImg}
      intro={
        <>
          Photoreal CG, intricate sims, careful comp. Our VFX team treats every pixel as a story
          decision. Invisible work when it needs to be, jaw dropping when it should be.
        </>
      }
      projects={projectsByCategory("vfx-cgi")}
    />
  );
}
