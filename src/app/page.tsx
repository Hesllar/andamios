"use client";

import { useRef } from "react";

import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";

import { OurClients } from "@/components/clients";
import { Services } from "@/components/services";
import { Navbar } from "@/components/Navbar";
import { Gallery } from "@/components/gallery";

export default function Home() {
  const refSectionHero = useRef<HTMLDivElement>(null);
  const refSectionServices = useRef<HTMLDivElement>(null);
  const refSectionGallery = useRef<HTMLDivElement>(null);
  const refSectionOueClients = useRef<HTMLDivElement>(null);

  return (
    <>
      <Navbar
        sectionRef={[
          refSectionHero,
          refSectionServices,
          refSectionGallery,
          refSectionOueClients,
        ]}
      />
      <Container>
        <Hero refSectionHero={refSectionHero} />
        <Services refSectionServices={refSectionServices} />
        <Gallery refSectionGallery={refSectionGallery} />
        <OurClients refSectionOueClients={refSectionOueClients} />
      </Container>
    </>
  );
}
