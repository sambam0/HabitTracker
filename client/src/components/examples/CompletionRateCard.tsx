import { CompletionRateCard } from "../CompletionRateCard";

export default function CompletionRateCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 max-w-2xl">
      <CompletionRateCard period="7 days" percentage={87} trend={5} />
      <CompletionRateCard period="30 days" percentage={76} trend={-3} />
    </div>
  );
}
