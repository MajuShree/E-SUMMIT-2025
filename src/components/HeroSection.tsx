import { useState, useEffect } from "react";

const heroParts: string[] = [
  "Canara Bank Present's",
  "BIT's E Summit 2025",
  "powered by Unstop ",
  "presented by idec",
];

export default function HeroSection() {
  const [displayed, setDisplayed] = useState<string[]>(["", "", "", ""]);
  const [currentLine, setCurrentLine] = useState<number>(0);
  const [charIdx, setCharIdx] = useState<number>(0);
  const [showCursor, setShowCursor] = useState<boolean>(true);
  const [done, setDone] = useState<boolean>(false);

  useEffect(() => {
    if (currentLine < heroParts.length) {
      if (charIdx <= heroParts[currentLine].length) {
        const timeout = setTimeout(() => {
          setDisplayed((old) =>
            old.map((val, idx) =>
              idx === currentLine ? heroParts[currentLine].slice(0, charIdx) : val
            )
          );
          setCharIdx((idx) => idx + 1);
        }, 1);
        return () => clearTimeout(timeout);
      } else {
        setTimeout(() => {
          setCurrentLine((l) => l + 1);
          setCharIdx(0);
        }, 120);
      }
    } else {
      setDone(true);
    }
  }, [currentLine, charIdx]);

  useEffect(() => {
    if (done) {
      const interval = setInterval(() => setShowCursor((c) => !c), 500);
      return () => clearInterval(interval);
    }
  }, [done]);

  function highlightUnstop(line: string) {
    const idx = line.indexOf("Unstop");
    if (idx === -1) return line;
    return (
      <>
        {line.slice(0, idx)}
        <span className="text-cyan-400">{line.slice(idx, idx + 6)}</span>
        {line.slice(idx + 6)}
      </>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <h1 className="text-center leading-tight">
        <span className="block font-bold mb-2 text-white text-4xl md:text-6xl">
          {displayed[0]}
          {currentLine === 0 && <span>{showCursor ? "|" : ""}</span>}
        </span>
        <span className="block font-bold text-white text-3xl md:text-5xl">
          {displayed[1]}
          {currentLine === 1 && <span>{showCursor ? "|" : ""}</span>}
        </span>
      </h1>
      <div className="w-full flex justify-center">
        <div
          className="mt-6 text-xl font-semibold text-white/80"
          style={{ marginLeft: "4em", minWidth: "18ch", textAlign: "left" }}>
          {/* Only show when animating or finished */}
          {(currentLine > 1 || currentLine === 2) && (
            <>
              {currentLine === 2 ? highlightUnstop(displayed[2]) : highlightUnstop(heroParts[2])}
              {(currentLine === 2 || (currentLine === 3 && displayed[3] === "")) &&
                <span>{showCursor ? "|" : ""}</span>}
            </>
          )}
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div
          className="mt-2 text-xl font-semibold text-white/80"
          style={{ marginLeft: "13em", minWidth: "13ch", textAlign: "left" }}>
          {(currentLine > 2 || currentLine === 3) && (
            <>
              {displayed[3]}
              {currentLine === 3 && <span>{showCursor ? "|" : ""}</span>}
              {done && ".."}
            </>
          )}
          
        </div>
      </div>
    </div>
  );
}
