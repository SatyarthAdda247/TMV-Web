import { createFileRoute } from "@tanstack/react-router";
import animImg from "@/assets/cat-animation.jpg";
import { CategoryPage } from "@/components/CategoryPage";
import { projectsByCategory } from "@/lib/projects";

export const Route = createFileRoute("/portfolio_/animation")({
  head: () => ({
    meta: [
      { title: "Animation, TMV Studios" },
      { name: "description", content: "2D, 3D and motion design animation work by TMV Studios." },
      { property: "og:title", content: "Animation, TMV Studios" },
      { property: "og:description", content: "Characters, worlds and motion." },
      { property: "og:image", content: animImg },
    ],
  }),
  component: AnimationPage,
});

function AnimationPage() {
  return (
    <CategoryPage
      eyebrow="Department, Animation"
      title="Animation."
      cover={animImg}
      intro={
        <>
          From hand drawn frames to full CG productions, our animation team builds characters with
          warmth and worlds with weight. Every blink, every bounce, every breath, designed.
        </>
      }
      projects={projectsByCategory("animation")}
    />
  );
}
