"use client";

import { Card, Image } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { projects } from "../data/data";

enum Themes {
  dark = "dark",
  light = "light",
}
export const ProjectsSection = () => {
  const { theme } = useTheme();
  return (
    <section id="project">
      <div className="max-w-3xl text-3xl sm:text-xl lg:text-3xl mb-5">
        Projects
      </div>
      <div className="flex gap-5 flex-wrap">
        {projects.map((project, index) => {
          return (
            <Card
              key={index}
              onPress={() => {
                window.open(project.url, "_blank", "noopener,noreferrer");
              }}
              isPressable
              className="col-span-12 sm:col-span-4 h-[300px]"
            >
              <Image
                src={
                  theme === Themes.light
                    ? project.lightImage
                    : project.darkImage
                }
                width={500}
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-scale-down"
              />
            </Card>
          );
        })}
      </div>
    </section>
  );
};
