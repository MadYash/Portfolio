import AboutHome from "@/components/AboutHome";
import ImageWithAbout from "@/components/ImageWithAbout";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className=" min-h-screen">
      <ImageWithAbout/>
      <AboutHome/>
      <ProjectsSection/>
    </main>
  )
}
