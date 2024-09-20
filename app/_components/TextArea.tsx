import { useEffect, useState } from "react";

type Props = {
  // eslint-disable-next-line react/require-default-props
  initialInput?: string;
  onInputChange: (input: string) => void;
  // eslint-disable-next-line react/require-default-props
  title?: string;
};
export default function TextArea({
  initialInput = "",
  onInputChange,
  title = "Input:",
}: Props) {
  const [input, setInput] = useState(initialInput);

  useEffect(() => {
    onInputChange(input);
  }, [input, onInputChange]);

  return (
    <div className="w-full h-full">
      <div className="flex items-center mb-4 gap-4">
        <p className="font-bold text-xl"> {title} </p>
        <button
          type="button"
          className="rounded-md bg-purple-700 px-4 py-2 text-lg font-semibold text-white shadow-sm hover:bg-purple-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-900"
          onClick={() => setInput("")}
        >
          Clear
        </button>
      </div>
      <textarea
        className="px-8 py-2 block w-full rounded-lg border-0
        bg-zinc-950 text-white shadow-sm ring-1 ring-inset
        ring-gray-300"
        style={{ height: "calc(100% - 44px)" }}
        value={input}
        onInput={(e) => setInput(e.currentTarget.value)}
      />
    </div>
  );
}
