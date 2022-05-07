import { Popover } from "@headlessui/react";
import { ChatTeardropDots } from "phosphor-react";

export function OpenWidgetButton() {
  return (
    <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
      <ChatTeardropDots className="w-6 h-6" />

      <span className="max-w-0 translate-y-5 opacity-0 overflow-hidden group-hover:max-w-xs group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <span className="pl-2" />
        Feedback
      </span>
    </Popover.Button>
  );
}
