import React, { lazy, Suspense } from "react";

const HomePage = () => {
  const Home = lazy(() => import("../component/Home"));

  return (
    <Suspense fallback={<>Loading...</>}>
      <Home />
    </Suspense>
  );
};

export default HomePage;
