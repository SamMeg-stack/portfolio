import React from "react";
import Star from "@/assets/icons/Star";
import { twMerge } from "tailwind-merge";

function CardHeader( {title,description,className}) {
  return (
    <div className={twMerge("flex flex-col p-6 md:py-8 md:px-10",className)}>
      <div className="inline-flex items-center gap-2">
        <Star classname="size-9 text-emerald-300" />
        <h3 className="font-serif text-3xl">{title}</h3>
      </div>
      <p className="text-sm lg:text-base lg:max-w-xs text-white/60 mt-2">
       {description}
      </p>
    </div>
  );
}

export default CardHeader;
