import { Popover, Transition } from "@headlessui/react";

import { WidgetForm } from "./Form/WidgetForm";
import { OpenWidgetButton } from "./Form/OpenWidgetButton";

export function FeedWidget() {
  return (
    <Popover
      id="popover__container"
      className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end"
    >
      <Transition
        enter="transition duration-140 ease-out"
        enterFrom="transform origin-bottom-right scale-95 opacity-0"
        enterTo="transform origin-bottom-right scale-100 opacity-100"
        leave="transition duration-90 ease-out"
        leaveFrom="transform origin-bottom-right scale-100 opacity-100"
        leaveTo="transform origin-bottom-right scale-95 opacity-0"
      >
        {/* https://github.com/tailwindlabs/headlessui/pull/1409 */}
        <Popover.Panel static>
          <WidgetForm />
        </Popover.Panel>
      </Transition>
      <OpenWidgetButton />
    </Popover>
  );
}
