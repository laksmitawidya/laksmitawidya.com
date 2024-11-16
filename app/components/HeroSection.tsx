"use client";
import { TypeAnimation } from "react-type-animation";

export const HeroSection = () => {
  return (
    <section id="about">
      <div className="max-w-3xl text-3xl sm:text-xl lg:text-3xl">Hello,</div>
      <div className="typeAnimationTitle mb-4 text-3xl sm:text-md lg:text-8xl lg:leading-normal font-extrabold">
        <TypeAnimation
          sequence={["My name is Mita", 1000, "I'm a Front End Engineer", 1000]}
          wrapper="span"
          repeat={Infinity}
        />
      </div>
      <div className="text-xl sm:text-lg lg:text-xl">
        I live in Yogyakarta, Indonesia, where my days are filled with React,
        TypeScript, and, yeah, a fair share of debugging. TypeScript always
        finds something to complain about, but hey, that's part of the fun,
        right? I'm all about crafting smooth, intuitive user experiences and
        building web apps that look as good as they work. Whether it's ReactJS,
        Astro.js, Remix.js, or React Native, I enjoy turning ideas into digital
        solutions that are both functional and beautiful. I love collaborating
        with awesome people to create impactful projects—though I wouldn't mind
        if TypeScript chilled out a bit. Let's build something cool together!
      </div>
    </section>
  );
};
