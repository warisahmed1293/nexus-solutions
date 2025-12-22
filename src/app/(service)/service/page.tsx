import React from "react";
import { Metadata } from "next";
import ServiceMain from "@/pages/service/service";

export const metadata: Metadata = {
  title: "Glazed Designs - Services",
};

const ServicePage = () => {
  return (
    <ServiceMain/>
  );
};

export default ServicePage;
