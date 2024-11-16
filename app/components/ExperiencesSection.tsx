"use client";

import { Card, CardBody, Chip, Tab, Tabs } from "@nextui-org/react";
import { experiences } from "../data/data";
import { useEffect, useState } from "react";

export const ExperiencesSection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth <= 768; // Example logic for screen size

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="experience">
      <div className="max-w-3xl text-3xl sm:text-xl lg:text-3xl mb-5">
        Experiences
      </div>
      <div className="flex gap-5">
        <div className="flex w-full flex-col">
          <Tabs aria-label="Options" isVertical={isMobile ? false : true}>
            {experiences.map((experience) => {
              return (
                <Tab key={experience.company} title={experience.company}>
                  <Card className="px-3">
                    <CardBody className="p-5">
                      <div>{experience.position}</div>
                      <div className="text-xs mb-5">
                        {experience.description}
                      </div>
                      <ul className="list-disc text-sm">
                        {experience.responsibilities.map((resp) => {
                          return <li key={resp}>{resp}</li>;
                        })}
                      </ul>
                      <div className="flex gap-x-2 mt-5">
                        {experience.skills.map((skill) => {
                          return (
                            <Chip key={skill} size="sm" variant="flat">
                              {skill}
                            </Chip>
                          );
                        })}
                      </div>
                    </CardBody>
                  </Card>
                </Tab>
              );
            })}
          </Tabs>
        </div>
      </div>
    </section>
  );
};
