/* eslint-disable @next/next/no-img-element */
"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function AgencyPage() {
  const imageDivRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const imageArray = [
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
  ];

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      // x: -160,
      ease: "power1.inOut",
      duration: 3,
      scrollTrigger: {
        trigger: imageDivRef.current,
        markers: true,
        scrub: 2,
        start: "top 20%",
        end: "top -90%",
        pin: true,
        onUpdate: (self) => {
          let imageIndex;

          if (self.progress < 1) {
            imageIndex = Math.floor(self.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }

          if (imageRef.current) {
            imageRef.current.src = imageArray[imageIndex];
          }
        },
      },
    });
  });

  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <section className="overflow-x-hidden">
      {/* <Transition /> */}
      <div className="section1 w-screen overflow-hidden">
        <div
          ref={imageDivRef}
          className="absolute rounded-3xl left-[20vw] md:left-[31vw] top-[20vh] overflow-hidden h-[26vw] w-[20vw]"
        >
          <img
            // height={260}
            // width={260}
            src={imageArray[0]}
            alt="agence image"
            className=" h-full w-full object-cover"
            ref={imageRef}
          />
        </div>
        <div className="relative ">
          <div className="mt-[35vh] md:mt-[55vh]">
            <h1 className="text-[10vw] md:text-[19vw] leading-[12vw] md:leading-[17vw] text-center uppercase">
              Soixan7e <br /> Douze{" "}
            </h1>
          </div>
          <div className="xl:pl-[44%] w-full mt-4 ">
            <p className="text-md md:text-6xl px-12 md:px-0">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Notre
              curiosité nourrit notre créativité. On reste humbles et on dit non
              aux gros egos, même le vôtre. Une marque est vivante. Elle a des
              valeurs, une personnalité, une histoire. Si on oublie ça, on peut
              faire de bons chiffres à court terme, mais on la tue à long terme.
              C’est pour ça qu’on s’engage à donner de la perspective, pour
              bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
      <div className="h-screen"></div>
    </section>
  );
}
