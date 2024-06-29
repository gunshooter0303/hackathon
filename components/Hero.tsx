import React from "react";
import { GlobeDemo } from "./ui/globe-demo";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className=" w-10/12 rounded-lg flex flex-col lg:flex-row gap-x-6 items-center justify-center p-6 m-4">
      <div className="flex-1 text-center lg:text-left mb-4 lg:mb-0">
        <h1 className="text-4xl font-bold mb-4">
          Enhancing Education and Awareness on Climate Change
        </h1>
        <p className="text-lg">
          Empowering communities through education, awareness, and capacity
          building on climate change mitigation, adaptation, impact reduction,
          and early warning systems.
        </p>
        <Link href={"/learn-more"}>
          <Button className="mt-4 px-6 py-2 rounded-lg">Learn More</Button>
        </Link>
      </div>
      <div className="flex-1">
        <GlobeDemo />
      </div>
    </div>
  );
}
