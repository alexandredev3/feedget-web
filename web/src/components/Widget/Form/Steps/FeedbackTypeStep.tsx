import { feedbacksTypes, FeedbackTypes } from "../WidgetForm";
import { CloseWidgetButton } from "../CloseWidgetButton";

interface FeedbackTypeStepProps {
  onFeedbackTypeSelected: (type: FeedbackTypes) => void;
}

export function FeedbackTypeStep({
  onFeedbackTypeSelected,
}: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6 flex items-center gap-2">
          Deixe seu feedback
        </span>

        <CloseWidgetButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbacksTypes).map(([key, value]) => (
          <button
            key={key}
            type="button"
            // FIXME: it would be better type directly the key and value proprieties.
            onClick={() => onFeedbackTypeSelected(key as FeedbackTypes)}
            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
          >
            <img src={value.image.source} alt={value.image.alt} />
            <span>{value.title}</span>
          </button>
        ))}
      </div>
    </>
  );
}
