import { useState } from "react";

import { WidgetFooter } from "./WidgetFooter";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

import bugImgURL from "../../../assets/bug.svg";
import ideaImgURL from "../../../assets/idea.svg";
import thoughtImgURL from "../../../assets/thought.svg";
import { FeedbackSuccessfullyStep } from "./Steps/FeedbackSuccessfullyStep";

export const feedbacksTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImgURL,
      alt: "A bug image.",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImgURL,
      alt: "A idea image.",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImgURL,
      alt: "A thought image.",
    },
  },
};

export type FeedbackTypes = keyof typeof feedbacksTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackTypes | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessfullyStep
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      ) : feedbackType ? (
        <FeedbackContentStep
          feedbackType={feedbackType}
          onFeedbackRestartRequested={handleRestartFeedback}
          onFeedbackSent={() => setFeedbackSent(true)}
        />
      ) : (
        <FeedbackTypeStep
          onFeedbackTypeSelected={(key) => setFeedbackType(key)}
        />
      )}

      <WidgetFooter />
    </div>
  );
}
