import PageWrapper from "@/components/PageWrapper/PageWrapper";
import AboutUs from "@/features/about/AboutUs";
import React from "react";

const Index = () => {
  return (
    <PageWrapper isNavbar navClass="!fixed">
      <AboutUs />
    </PageWrapper>
  );
};

export default Index;
