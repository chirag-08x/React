import { lazy, Suspense } from "react";

const AboutPage = () => {
  const About = lazy(() => import("../component/About"));
  return (
    <Suspense fallback={<>Loading...</>}>
      <About />
    </Suspense>
  );
};

export default AboutPage;
