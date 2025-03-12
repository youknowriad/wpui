import { useState, useRef, useEffect } from "react";
import {
  __experimentalText as Text,
  __experimentalHStack as HStack,
  __experimentalVStack as VStack,
  Button,
  TextControl,
} from "@wordpress/components";
import { arrowRight, moreVertical } from "@wordpress/icons";

const ChatPreview = () => {
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      content: "Hi, how can I help you today?",
      sender: "support",
      timestamp: "09:41 AM",
    },
    {
      id: 2,
      content: "I'm having trouble connecting my account to the API.",
      sender: "user",
      timestamp: "09:43 AM",
    },
    {
      id: 3,
      content:
        "I understand. Let me check the status of your account. Could you provide your account ID please?",
      sender: "support",
      timestamp: "09:45 AM",
    },
    {
      id: 4,
      content:
        "Sure, it's ACT-29381. I've been trying to generate an API key but keep getting an error.",
      sender: "user",
      timestamp: "09:47 AM",
    },
    {
      id: 5,
      content:
        "Thanks for providing that. I can see your account is active but there's a permission issue. I've updated your account permissions. Could you try generating the API key again?",
      sender: "support",
      timestamp: "09:50 AM",
    },
  ]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          content: newMessage,
          sender: "user",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
      setNewMessage("");
    }
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  // Scroll to bottom of chat window
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <VStack spacing={4}>
      <HStack
        justify="flex-start"
        spacing={4}
        style={{ paddingBottom: "16px", borderBottom: "1px solid #e5e7eb" }}
      >
        <img
          src="https://i.pravatar.cc/150?img=8"
          alt="Avatar"
          style={{ width: "40px", height: "40px", borderRadius: "20px" }}
        />
        <VStack spacing={0} style={{ flexGrow: "1" }}>
          <Text>Support Team</Text>
          <Text style={{ color: "#6b7280" }}>Online</Text>
        </VStack>
        <Button icon={moreVertical} variant="tertiary" size="compact" />
      </HStack>

      <VStack
        spacing={3}
        style={{
          maxHeight: "300px",
          overflowY: "auto",
          padding: "5px",
          marginBottom: "10px"
        }}
        ref={messagesContainerRef}
      >
        {messages.map((message) => (
          <HStack
            key={message.id}
            justify={message.sender === "user" ? "flex-end" : "flex-start"}
            style={{
              minHeight: "fit-content"
            }}
          >
            <VStack
              style={{
                backgroundColor:
                  message.sender === "user" ? 'var(--wp-admin-theme-color, #3858e9)' : "#f3f4f6",
                padding: "12px 16px",
                borderRadius: "12px",
                maxWidth: "75%",
              }}
              spacing={2}
            >
              <Text
                style={{
                  color: message.sender === "user" ? "white" : "inherit",
                }}
              >
                {message.content}
              </Text>
              <Text
                size="small"
                style={{
                  display: "block",
                  marginTop: "4px",
                  textAlign: message.sender === "user" ? "right" : "left",
                  color:
                    message.sender === "user"
                      ? "rgba(255, 255, 255, 0.7)"
                      : "#6b7280",
                }}
              >
                {message.timestamp}
              </Text>
            </VStack>
          </HStack>
        ))}
      </VStack>

      <HStack
        style={{
          paddingTop: "16px",
          borderTop: "1px solid #e5e7eb",
          flexShrink: 0,
        }}
      >
        <VStack style={{ flexGrow: 1 }}>
          <TextControl
            value={newMessage}
            onChange={setNewMessage}
            placeholder="Type your message..."
            onKeyUp={handleKeyPress}
            __next40pxDefaultSize
            __nextHasNoMarginBottom
          />
        </VStack>
        <Button
          variant="primary"
          onClick={handleSendMessage}
          icon={arrowRight}
          disabled={!newMessage.trim()}
          __next40pxDefaultSize
        />
      </HStack>
    </VStack>
  );
};

export default ChatPreview;
