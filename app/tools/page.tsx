"use client";

import React from "react";
import Link from "next/link";
import { toolList } from "@/app/_components/ToolList"; // Make sure to adjust the path if needed

const Tools = () => {
  return (
    <div className="min-h-screen p-4 bg-background">
      <h1 className="text-3xl font-semibold mb-8 text-center">Dev-Kit Tools</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {toolList.map((tool) => (
          <Link key={tool.name} href={tool.path}>
            <div className="bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-xl font-bold mb-4 text-white">{tool.name}</h2>
              <p className="text-gray-300">Click to explore {tool.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tools;
