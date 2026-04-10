"use client";

import { useRef } from "react";

import { Container } from "@/components/ui";
import { Hero } from "@/components/hero";

import { Comments, OurClients } from "@/components/clients";
import { Services } from "@/components/services";
import { Navbar } from "@/components/layout";
import { Gallery } from "@/components/gallery";

export default function Home() {
  const refSectionHero = useRef<HTMLDivElement>(null);
  const refSectionServices = useRef<HTMLDivElement>(null);
  const refSectionGallery = useRef<HTMLDivElement>(null);
  const refSectionOurClients = useRef<HTMLDivElement>(null);

  return (
    <>
      <Navbar
        sectionRef={[
          refSectionHero,
          refSectionServices,
          refSectionGallery,
          refSectionOurClients,
        ]}
      />
      <Container>
        <Hero refSectionHero={refSectionHero} />
        <Services refSectionServices={refSectionServices} />
        <Gallery refSectionGallery={refSectionGallery} />
        <OurClients refSectionOurClients={refSectionOurClients} />
        <Comments />
      </Container>
    </>
  );
}
