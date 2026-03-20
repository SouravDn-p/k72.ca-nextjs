"use client";

import Transitions from "@/components/Transition";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import { useState } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function AgencyPage() {
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [
    "https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7",
    "https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64",
    "https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991",
    "https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2",
    "https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6",
    "https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847",
    "https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6",
  ];

  const [currentImage, setCurrentImage] = useState(imageArray[0]);

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      x: -160,
      ease: "power1.inOut",
      duration: 3,
      scrollTrigger: {
        trigger: imageDivRef.current,
        markers: true,
        scrub: 2,
        start: "top 20%",
        end: "top -90%",
        pin: true,
        onUpdate: (st) => {
          const imageIndex = Math.round(st.progress * imageArray.length);
          setCurrentImage(
            imageArray[imageIndex]
              ? imageArray[imageIndex]
              : "https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6",
          );
        },
      },
    });
  });

  return (
    <section className="overflow-x-hidden">
      <Transitions />
      <div className="section1 w-screen overflow-hidden">
        <div
          ref={imageDivRef}
          className="absolute rounded-3xl left-[20vw] md:left-[31vw] top-[20vh] overflow-hidden"
        >
          <Image
            height={260}
            width={260}
            src={currentImage}
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
