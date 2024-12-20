"use client";

import { Link } from "@nextui-org/react";
import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <section id="contact">
      <div className="p-5 mb-20 sm:mb-5 flex flex-col justify-center items-center">
        <div>What's Next?</div>
        <div className="max-w-3xl text-3xl sm:text-xl lg:text-3xl">
          Get in touch
        </div>
        <div className="flex gap-5 mt-5">
          <Link
            isExternal
            showAnchorIcon
            href="https://www.linkedin.com/in/laksmita-widya-astuti-4a392010b/"
            anchorIcon={<Linkedin />}
          ></Link>
          <Link
            isExternal
            showAnchorIcon
            href="https://github.com/laksmitawidya"
            anchorIcon={<Github />}
          ></Link>
          <Link
            isExternal
            showAnchorIcon
            href="mailto:mithawid@gmail.com"
            anchorIcon={<Mail />}
          ></Link>
        </div>
        <div className="mt-20 sm:mt-5 max-w-3xl flex justify-center items-center text-center sm:text-sm">
          My newbie project crafted with NextJS, written in Visual Studio,
          styled with TailwindCSS, NextUI and ShadCN UI, and sprinkled with
          design magic from Canva. Special thanks to ChatGPT for being my
          personal copy editor 😊
        </div>
      </div>
    </section>
  );
};
