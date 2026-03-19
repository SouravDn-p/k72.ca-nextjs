"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ProjectsPage() {
  const container = useRef(null);
  const imageDivRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(imageDivRef.current, {
        x: 12,
        y: 12,
        opacity: 0,
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: container.current,
          start: "top 36%",
          end: "bottom top",
          // scrub: true,
          markers: true,
        }
      }).to(imageDivRef.current, {
        x: 0,
        y: 20,
        duration: 1,
        ease: "power1.inOut",
      });
    },
    { scope: container },
  );

  return (
    <div ref={container} className="relative min-h-screen w-screen bg-white ">
      <div className="relative " ref={imageDivRef}>
        <Image
          height={280}
          width={280}
          src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"
          alt="agence image"
          className="absolute rounded-3xl left-[31vw] top-[23vh] z-10"
        />
      </div>

      <div className="text-black pt-[50vh] relative z-10 h-screen overflow-x-hidden ">
        <h1 className="text-[19vw] leading-[17vw] text-center uppercase">
          Soixan7e <br /> Douze
        </h1>

        <p className="text-6xl pl-[40%] mt-2 ml-auto pr-6">
          Notre curiosité nourrit notre créativité. On reste humbles et on dit
          non aux gros egos, même le vôtre. Une marque est vivante. Elle a des
          valeurs, une personnalité, une histoire.
        </p>
      </div>
    </div>
  );
}

{
  /* <div class="c-about-hero_visual_inner">
  <img data-about-hero="image" class="c-about-hero_visual_image is-inview -lazy-loaded" src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&amp;h=640&amp;fit=crop&amp;s=f0a84706bc91a6f505e8ad35f520f0b7" data-scroll="" data-scroll-call="lazyLoad, Scroll" data-src="/images/teamMembers/Carl_480x640.jpg?w=480&amp;h=640&amp;fit=crop&amp;s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" style="z-index: 68;">
  <img data-about-hero="image" class="c-about-hero_visual_image is-inview -lazy-loaded" src="https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&amp;h=640&amp;fit=crop&amp;s=c13569c0753117d04f1a93cf7b446d64" data-scroll="" data-scroll-call="lazyLoad, Scroll" data-src="/images/teamMembers/Olivier_480x640.jpg?w=480&amp;h=640&amp;fit=crop&amp;s=c13569c0753117d04f1a93cf7b446d64" alt="" style="z-index: 69;">
  <img data-about-hero="image" class="c-about-hero_visual_image is-inview -lazy-loaded" src="https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&amp;h=640&amp;fit=crop&amp;s=13093769c4a19cecd291ddcccd898991" data-scroll="" data-scroll-call="lazyLoad, Scroll" data-src="/images/teamMembers/ChantalG_480x640.jpg?w=480&amp;h=640&amp;fit=crop&amp;s=13093769c4a19cecd291ddcccd898991" alt="" style="z-index: 70;">
  <img data-about-hero="image" class="c-about-hero_visual_image is-inview -lazy-loaded" src="https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&amp;h=640&amp;fit=crop&amp;s=ce85dc6d140947736baa739d0e59dab2" data-scroll="" data-scroll-call="lazyLoad, Scroll" data-src="/images/teamMembers/Michele_480X640.jpg?w=480&amp;h=640&amp;fit=crop&amp;s=ce85dc6d140947736baa739d0e59dab2" alt="" style="z-index: 71;">
  <img data-about-hero="image" class="c-about-hero_visual_image is-inview -lazy-loaded" src="https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&amp;h=640&amp;fit=crop&amp;s=07c9bfee89816720b873e6748a276af6" data-scroll="" data-scroll-call="lazyLoad, Scroll" data-src="/images/teamMembers/MEL_480X640.jpg?w=480&amp;h=640&amp;fit=crop&amp;s=07c9bfee89816720b873e6748a276af6" alt="" style="z-index: 72;">
  <img data-about-hero="image" class="c-about-hero_visual_image is-inview -lazy-loaded" src="https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&amp;h=640&amp;fit=crop&amp;s=74317575b2d72fd11c5296615c383e4a" data-scroll="" data-scroll-call="lazyLoad, Scroll" data-src="/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&amp;h=640&amp;fit=crop&amp;s=74317575b2d72fd11c5296615c383e4a" alt="" style="z-index: 57;">
  <img data-about-hero="image" class="c-about-hero_visual_image is-inview -lazy-loaded" src="https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&amp;h=640&amp;fit=crop&amp;s=3604b19f8fc7b40f517954147698d847" data-scroll="" data-scroll-call="lazyLoad, Scroll" data-src="/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&amp;h=640&amp;fit=crop&amp;s=3604b19f8fc7b40f517954147698d847" alt="" style="z-index: 56;">
  <img data-about-hero="image" class="c-about-hero_visual_image is-inview -lazy-loaded" src="https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&amp;h=640&amp;fit=crop&amp;s=1cadbf143b3aa916b1b414464acbb4d6" data-scroll="" data-scroll-call="lazyLoad, Scroll" data-src="/images/teamMembers/joel_480X640_3.jpg?w=480&amp;h=640&amp;fit=crop&amp;s=1cadbf143b3aa916b1b414464acbb4d6" alt="" style="z-index: 55;">
</div> */
}
