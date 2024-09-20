"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type ToolOption = {
  name: string;
  path: string;
};
export const toolList: ToolOption[] = [
  {
    name: "String Converter",
    path: "/tools/string-converter",
  },
  {
    name: "JSON Validator",
    path: "/tools/json-validator",
  },
];

export default function ToolList() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col space-y-2 overflow-x-auto">
      {toolList
        .sort((a, b) => {
          if (a.name < b.name) return -1;
          else if (a.name > b.name) return 1;
          return 0;
        })
        .map((toolOption) => (
          <Link
            className={`block p-2 text-white rounded-lg shadow-md hover:shadow-lg  ${
              pathname === toolOption.path && "bg-purple-950"
            }`}
            key={toolOption.name}
            href={toolOption.path}
          >
            <p> {toolOption.name}</p>
          </Link>
        ))}
    </div>
  );
}
