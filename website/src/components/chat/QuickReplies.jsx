export default function QuickReplies({ onPick }) {
  const items = ["Product Info (Buy)", "Chat For Support", "Request a Callback"];
  return (
    <div className="flex gap-2 flex-wrap">
      {items.map((label) => (
        <button
          key={label}
          onClick={() => onPick(label)}
          className="rounded-full border px-3 py-1 text-sm bg-white hover:bg-gray-50"
        >
          {label}
        </button>
      ))}
    </div>
  );
}
