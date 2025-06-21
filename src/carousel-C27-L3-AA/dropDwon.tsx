import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
type myProps = {
  selection: string;
  setSelection: (vla: string) => void;
};

const DropDwon = ({ setSelection, selection }: myProps) => {
  const [activeColor, setActiveColor] = useState("Select Categories");
  const handleSelectColor = (color: string, name: string) => {
    setActiveColor(name);
    setSelection(color);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        style={{ color: selection }}
        className="min-w-[150px] cursor-pointer font-bold text-lg text-black p-1 px-3 rounded-lg border border-black flex items-center justify-between gap-2"
      >
        {activeColor}
        <FaChevronDown className="text-sm" />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="border border-black backdrop-blur-lg min-w-[220px] flex justify-center items-center flex-col gap-2 text-center">
        <DropdownMenuItem
          className="cursor-pointer font-bold flex justify-center items-center  w-full   bg-[#3674B5]"
          onClick={() => handleSelectColor("#3674B5", "MUST")}
        >
          MUST
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer font-bold flex justify-center items-center w-full  bg-[#06923E]"
          onClick={() => handleSelectColor("#06923E", "SHOULD")}
        >
          SHOULD
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer font-bold flex justify-center items-center w-full  bg-[#890189]"
          onClick={() => handleSelectColor("#890189", " NICE TO KNOW")}
        >
          NICE TO KNOW
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDwon;
