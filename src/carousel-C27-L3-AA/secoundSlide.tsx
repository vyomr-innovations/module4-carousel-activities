import React, { useState } from "react";
import DropDwon from "./dropDwon";

const SecoundSlide = () => {
  const [selection, setSelection] = useState("");
  const [highligted, setHighligted] = useState<
    { text: string; color: string }[]
  >([]);
  const paragraph = `But here is what I came to Masterman to tell you: nobody gets to write your destiny but you. Your future is in your hands. Your life is what you make of it. And nothing – absolutely nothing – is beyond your reach. So long as you’re willing to dream big. So long as you’re willing to work hard. So long as you’re willing to stay focused on your education. That last part is absolutely essential – because an education has never been more important. I’m sure there will be times in the months ahead when you’re staying up late cramming for a test, or dragging yourselves out of bed on a rainy morning, and wondering if it’s all worth it. Let me tell you, there is no question about it. Nothing will have as great an impact on your success in life as your education. More and more, the kinds of opportunities that are open to you will be determined by how far you go in school. In other words, the farther you go in school, the farther you’ll go in life. And at a time when other countries are competing with us like never before; when students around the world are working harder than ever, and doing better than ever; your success in school will also help determine America’s success in the 21st century.`;
  const handleMouseUp = () => {
    const selectedObj = window.getSelection();
    const text = selectedObj?.toString();
   if (text && selection) {
  setHighligted((prev) => [...prev, { text, color: selection }]);
}
  };

  const renderedText = () => {
    let final = paragraph;
    highligted.forEach(({ text, color }) => {
      
      const span = `<span style="color: ${color}; font-weight:bold;">${text}</span>`;

      final = final.replace(text, span);
    });

    return <span dangerouslySetInnerHTML={{ __html: final }} />;
  };
  return (
    <div className="flex justify-center items-center flex-col gap-5">
      <div>
        <DropDwon setSelection={setSelection} selection={selection} />
      </div>
      <p
        onMouseUp={handleMouseUp}
        className={` text-gray-800 font-extralight text-lg py-3  `}
      >
        {renderedText()}
      </p>
    </div>
  );
};

export default SecoundSlide;
