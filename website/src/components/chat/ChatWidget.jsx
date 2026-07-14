"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { getSocket } from "@/lib/socket";
import ChatBubble from "./ChatBubble";
import QuickReplies from "./QuickReplies";
import axiosInstance from "@/lib/axiosInstance";

export default function ChatWidget() {
  const [open, setOpen] = useState(true); // open by default for dev
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  // persist a sessionId per browser
  const sessionId = useMemo(() => {
    if (typeof window === "undefined") return "";
    const key = "chat_session_id";
    let id = localStorage.getItem(key);
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem(key, id);
    }
    return id;
  }, []);

  // bootstrap: socket + history
  useEffect(() => {
    const socket = getSocket();

    socket.emit("join", { sessionId, userAgent: navigator.userAgent });

    socket.on("server:message", (msg) => {
      setMessages((m) => [...m, msg]);
    });

    // prime with a greeting if empty history
    (async () => {
      const { data } = await axiosInstance.get(`/chat/history/${sessionId}`);
      if (data?.messages?.length) {
        setMessages(data.messages);
      } else {
        setMessages([
          {
            _id: "greet",
            sender: "bot",
            text:
              "Hello! 👋 I'm Sanaya, your chat assistant from TimeWatch. I'm here to help you! 😊\n\nAnything we can do to help out?",
            createdAt: new Date().toISOString(),
          },
        ]);
      }
    })();

    return () => {
      socket.off("server:message");
      socket.disconnect();
    };
  }, [sessionId]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // send user message (via API + socket)
  const send = async (text) => {
    if (!text.trim()) return;

    try {
      // 1. save to backend
      const { data } = await axiosInstance.post("/chat/send", {
        sessionId,
        sender: "user",
        text,
      });

      // 2. add to local state
      setMessages((m) => [...m, data.message]);

      // 3. emit via socket (so other clients or admin dashboard can see it)
      const socket = getSocket();
      socket.emit("client:message", data.message);

      setInput("");
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  return (
    <div className="fixed bottom-6 right-6">
      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="rounded-full shadow-xl px-4 py-3 bg-blue-600 text-white"
      >
        {open ? "Close Chat" : "Chat"}
      </button>

      {/* Panel */}
      {open && (
        <div className="mt-3 w-80 h-[480px] rounded-2xl shadow-2xl bg-gray-100 border flex flex-col overflow-hidden">
          <div className="p-3 bg-white border-b">
            <div className="font-semibold">TimeWatch Chat Assistant</div>
            <div className="text-xs text-gray-500">We are here to help you</div>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {messages.map((m) => (
              <ChatBubble
                key={m._id + m.createdAt}
                sender={m.sender}
                text={m.text}
                ts={m.createdAt}
              />
            ))}
            <QuickReplies onPick={(label) => send(label)} />
            <div ref={bottomRef} />
          </div>

          <div className="p-3 bg-white border-t flex gap-2">
            <input
              className="flex-1 border rounded-xl px-3 py-2 text-sm"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send(input)}
            />
            <button
              onClick={() => send(input)}
              className="px-3 py-2 rounded-xl bg-blue-600 text-white text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
