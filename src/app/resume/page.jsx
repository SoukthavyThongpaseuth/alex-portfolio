"use client";

import { info } from "autoprefixer";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

//experience
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "I’ve gained experience in software testing, IT support, and front-end development, improving both technical and soft skills.",
  items: [
    // {
    //   company: "LailaoAppzap",
    //   position: "Software Tester & IT Support",
    //   duration: "2024 - Present",
    // },
    // {
    //   company: "Lailaolab ICT Solutions",
    //   position: "Front-end Developer Intern",
    //   duration: "Summer 2024",
    // },
    {
      company: "LailaoAppzap",
      position: "Software Tester & IT Support",
      duration: "2025",
    },
    {
      company: "LailaoAppzap",
      position: "Front-end Developer",
      duration: "2024 - 2025",
    },
    {
      company: "Lailaolab ICT Solutions",
      position: "Front-end Developer Intern",
      duration: "Summer 2024",
    },
    {
      company: "ETL Company",
      position: "Assisted with network installation and maintenance Intern",
      duration: "Summer 2022",
    },
  ],
};

//education
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "I graduated with a degree in Computer Science, where I built a strong foundation in programming, software development, and problem-solving.",
  items: [
    {
      institution: "National University of Laos",
      degree: "Bachelor of Computer Science",
      duration: "2022 - 2024",
    },
    {
      institution: "Soutsaka institute of Technology",
      degree: "Higher Diploma of Computer Science",
      duration: "2019 - 2022",
    },
    {
      institution: "Sirimoungkhoun College",
      degree: "Higher Diploma of General English",
      duration: "2019 - 2022",
    },
    {
      institution: "Souksavath School",
      degree: "Honored for high school certificate",
      duration: "2016 - 2019",
    },
    {
      institution: "Souksavath School",
      degree: "Honored for secondary school certificate",
      duration: "2011 - 2016",
    },
    {
      institution: "Souksavath School",
      degree: "Honored for primary school certificate",
      duration: "2007 - 2011",
    },
  ],
};

//skills
const skills = {
  icon: "/assets/resume/skills.svg",
  title: "My skills",
  description:
    "I have a strong foundation in HTML, CSS, and JavaScript, with experience in React.js and Next.js. I am also proficient in using Tailwind CSS for styling and Figma for design.",
  items: [
    {
      name: "HTML5",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS3",
      icon: <FaCss3 />,
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
    },
    {
      name: "ReactJS",
      icon: <FaReact />,
    },
    {
      name: "NodeJS",
      icon: <FaNodeJs />,
    },
    {
      name: "NextJS",
      icon: <SiNextdotjs />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
    },
    {
      name: "Figma",
      icon: <FaFigma />,
    },
  ],
};

//about
const about = {
  title: "About Me",
  description:
    "I’m a passionate front-end developer skilled in HTML, CSS, and JavaScript. With experience in software testing and IT support, I enjoy learning new technologies and working on challenging projects with others.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Soukthavy Thongpaseuth",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+856 20) 5704 6787",
    },
    {
      fieldName: "Experience",
      fieldValue: "2 Years",
    },
    {
      fieldName: "Instagram",
      fieldValue: "alex_slowlife",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Lao",
    },
    {
      fieldName: "Email",
      fieldValue: "soukthaythongpaseuth@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "Lao, English, Thai",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-green-400">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3 mt-5">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-green-400"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                {/* max-w-[600px] */}
                <p className=" text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-green-400">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-green-400"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            {/* test */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  {/* max-w-[600px] */}
                  <p className=" text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.items.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          {" "}
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group transition-all duration-300 hover:scale-110 hover:bg-[#2e2e2e]">
                              <div className="text-6xl group-hover:text-green-400 transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                {/* max-w-[600px] */}
                <p className=" text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">
                          {item.fieldName}:{" "}
                        </span>
                        <span className="text-lg">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
