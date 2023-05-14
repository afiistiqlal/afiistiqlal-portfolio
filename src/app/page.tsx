import Head from "@/components/Head";
import Footer from "@/components/Footer";
import AboutMe from "@/components/AboutMe";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Head myName={''}/>
      <AboutMe AboutMe={''}/>
      <Education />
      <Experience/>
      <Projects/>
      <Footer myName={''}/>
    </>
  );
}
