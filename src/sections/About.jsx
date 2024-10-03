"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import Card from "@/components/Card";
import Star from "@/assets/icons/Star";
import book from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavaScript from "@/assets/icons/Squarejs";
import Chrome from "@/assets/icons/Chrome";
import Css3 from "@/assets/icons/Css3";
import Html5 from "@/assets/icons/Html5";
import ReactIcon from "@/assets/icons/Reactjs";
import Github from "@/assets/icons/Github";
// import TechIcon from "@/components/TechIcon";
import mapImage from "@/assets/images/map1.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
import { motion } from "framer-motion";

const hobbies = [
  {
    title: "Painting",
    emoji: "🖐",
    left: "5%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "🎲",
    left: "50%",
    top: "5%",
  },
  {
    title: "Music",
    emoji: "🎹",
    left: "35%",
    top: "40%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "10%",
    top: "35%",
  },
  {
    title: "Fitness",
    emoji: "👊",
    left: "70%",
    top: "45%",
  },
  {
    title: "Reading",
    emoji: "🧾",
    left: "5%",
    top: "65%",
  },
  {
    title: "Football",
    emoji: "🏈",
    left: "45%",
    top: "70%",
  },
];
function About() {
  return (
    <div className="py-20 lg:py-28 scroll-smooth" id="About">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the boks shaping my perspectives."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={book} alt="Book cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional
                digital experiences."
                className=""
              />
              <ToolboxItems
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                className="mt-6 "
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
              {/* <div>
              {toolbox.map((item, index) => (
                <div key={index} className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg">
                  <TechIcon component={item.iconType}   />
                  <JavaScript  classname="size-6" />
                  <span className="size-10">{item.iconType}</span>
                  <span className="font-semibold">{item.title}</span>
                </div>
              ))}
            </div> */}
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                className="px-6 py-6"
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital Realm."
              />
              <div className="relative flex-1">
                {hobbies.map((hobby, index) => (
                  <motion.div
                    key={index}
                    className="inline-flex items-center gap-2 px-2 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:conttent-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  className="size-20"
                  src={smileMemoji}
                  alt="smiling memoji"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
