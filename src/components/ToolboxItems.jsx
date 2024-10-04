import React, { Fragment } from "react";
import JavaScript from "@/assets/icons/Squarejs";
import Chrome from "@/assets/icons/Chrome";
import Css3 from "@/assets/icons/Css3";
import Html5 from "@/assets/icons/Html5";
import ReactIcon from "@/assets/icons/Reactjs";
import Github from "@/assets/icons/Github";
import { twMerge } from "tailwind-merge";

function ToolboxItems({ className, itemsWrapperClassName }) {
  const toolbox = [
    {
      title: "JavaScript",
      iconType: <JavaScript classname="size-10 fill-[url(#techjava)]" />,
    },
    {
      title: "HTML5",
      iconType: <Html5 classname="size-10 fill-[url(#techjava)]" />,
    },
    {
      title: "CSS3",
      iconType: <Css3 classname="size-10 fill-[url(#techjava)]" />,
    },
    {
      title: "React",
      iconType: <ReactIcon classname="size-10 fill-[url(#techjava)]" />,
    },
    {
      title: "Chrome",
      iconType: <Chrome classname="size-10  fill-[url(#techreact)]" />,
    },
    {
      title: "Github",
      iconType: <Github classname="size-10 fill-[url(#techjava)]" />,
    },
  ];
  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={twMerge(
          "flex flex-none py-0.5 gap-6 pr-6",
          itemsWrapperClassName
        )}
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <Fragment key={index}>
            {toolbox.map((item, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
              >
                <span className="size-10">{item.iconType}</span>
                <span className="font-semibold">{item.title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default ToolboxItems;
