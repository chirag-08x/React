import { lazy, Suspense } from "react";

const ContactUsPage = () => {
  // If module is exported as named export
  const Contact = lazy(() =>
    import("../component/ContactUs").then((module) => {
      return { default: module.ContactUs };
    })
  );
  return (
    <Suspense fallback={<>Loading...</>}>
      <Contact />
    </Suspense>
  );
};

export default ContactUsPage;
