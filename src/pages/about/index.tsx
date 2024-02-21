import PageWrapper from "@/components/PageWrapper/PageWrapper";
import AboutUs from "@/features/about/AboutUs";
import React from "react";

const Index = () => {
  return (
    <PageWrapper isNavbar navClass="!fixed" seo={{
      metaTitle: "Kiddle: Unveiling Our Story & Passion for Early Education",
      metaDescription: "Discover Kiddle's mission, innovative approach, and passionate team dedicated to nurturing young minds through play & India's 1st VR preschool experience!",
    }}>
      <AboutUs />
    </PageWrapper>
  );
};

export default Index;
