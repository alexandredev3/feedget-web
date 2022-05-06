import { useState } from "react";
import { Camera, Trash } from "phosphor-react";
import html2canvas from "html2canvas";

import { Loading } from "./Loading";

interface ScreenshotButtonProps {
  onScreenshotTook: (base64screenshot: string | null) => void;
  screenshot: string | null;
}

export function ScreenshotButton({
  onScreenshotTook,
  screenshot,
}: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    try {
      setIsTakingScreenshot(true);

      const htmlDocument = document.querySelector("html");

      const popoverElement = htmlDocument?.querySelector("#popover__container");

      const canvas = await html2canvas(htmlDocument!, {
        ignoreElements: (element) => popoverElement === element,
      });
      const base64image = canvas.toDataURL();

      onScreenshotTook(base64image);
    } catch (err) {
      console.error(err);
    } finally {
      setIsTakingScreenshot(false);
    }
  }

  if (screenshot) {
    return (
      <button
        type="button"
        onClick={() => onScreenshotTook(null)}
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        style={{
          backgroundImage: `url(${screenshot})`,
        }}
      >
        <Trash weight="fill" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      disabled={isTakingScreenshot}
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
    >
      {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
    </button>
  );
}
