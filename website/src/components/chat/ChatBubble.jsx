export default function ChatBubble({ sender, text, ts }) {
  const isUser = sender === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-2`}>
      <div
        className={`max-w-[75%] rounded-2xl px-3 py-2 text-sm shadow
          ${isUser ? "bg-blue-600 text-white" : "bg-white text-gray-800 border"}`}
      >
        <div>{text}</div>
        {ts && <div className="text-[10px] opacity-70 mt-1">{new Date(ts).toLocaleTimeString()}</div>}
      </div>
    </div>
  );
}
