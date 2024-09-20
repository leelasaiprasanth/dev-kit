"use client";

import TextArea from "@/app/_components/TextArea";

// const convertToSnakeCase = (input: string): string =>
//   input
//     .replace(/\s+/g, "_") // Replace spaces with underscores
//     .replace(/([a-z])([A-Z])/g, "$1_$2")
//     .toLowerCase();

// const convertToCamelCase = (input: string): string =>
//   input
//     .replace(/[\s_-]+./g, (match) =>
//       match.charAt(match.length - 1).toUpperCase()
//     )
//     .replace(/^[A-Z]/, (match) => match.toLowerCase());

// const convertToKebabCase = (input: string): string =>
//   input
//     .replace(/[\s_-]/g, "-")
//     .replace(/([a-z])([A-Z])/g, "$1-$2")
//     .toLowerCase();

export default function StringConverter() {
  
  return (
    <div className="w-full h-full flex gap-4">
      <TextArea
        initialInput="snake_case_to_camel_case"
        onInputChange={() => {
          // const input = convertToSnakeCase(input);
        }}
      />
      <div className="w-full h-full">
        <div className="flex items-center mb-4 gap-4 justify-between">
          <p className="font-bold text-xl"> Output: </p>
          <button
            type="button"
            className="rounded-md bg-purple-700 px-4 py-2 text-lg font-semibold text-white shadow-sm hover:bg-purple-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-900"
            
          >
            Copy
          </button>
        </div>
        <textarea
          readOnly
          className="px-8 py-2 block w-full rounded-lg border-0
        bg-zinc-950 text-white shadow-sm ring-1 ring-inset
        ring-gray-300"
          style={{ height: "calc(100% - 44px)" }}
        />
      </div>
    </div>
  );
}
