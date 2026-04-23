import { createFileRoute } from "@tanstack/react-router";
import liveImg from "@/assets/cat-liveaction.jpg";
import { CategoryPage } from "@/components/CategoryPage";
import { projectsByCategory } from "@/lib/projects";

export const Route = createFileRoute("/portfolio_/live-action")({
  head: () => ({
    meta: [
      { title: "Live Action, TMV Studios" },
      { name: "description", content: "Live action film, commercial and documentary production by TMV Studios." },
      { property: "og:title", content: "Live Action, TMV Studios" },
      { property: "og:description", content: "Films, commercials and documentary craft." },
      { property: "og:image", content: liveImg },
    ],
  }),
  component: LiveActionPage,
});

function LiveActionPage() {
  return (
    <CategoryPage
      eyebrow="Department, Live Action"
      title="Live Action."
      cover={liveImg}
      intro={
        <>
          We direct and produce films that earn their seconds. Tight scripts, real performances,
          considered cinematography. Stories with a pulse, made for screens of every size.
        </>
      }
      projects={projectsByCategory("live-action")}
    />
  );
}
