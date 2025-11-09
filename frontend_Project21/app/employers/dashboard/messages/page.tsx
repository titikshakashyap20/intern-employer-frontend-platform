"use client";
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Send, User, MessageSquare } from "lucide-react";

const conversations = [
    {
        id: 1,
        name: "Alice Johnson (Software Engineering Intern)",
        lastMessage: "Sounds good, let's connect next week.",
        avatar: "",
        time: "10m ago",
        unread: 2,
    },
    {
        id: 2,
        name: "Bob Williams (Data Science Intern)",
        lastMessage: "I have sent over my portfolio.",
        avatar: "",
        time: "1h ago",
        unread: 0,
    },
    {
        id: 3,
        name: "Charlie Brown (UX/UI Design Intern)",
        lastMessage: "Welcome! I have a few questions.",
        avatar: "",
        time: "3h ago",
        unread: 0,
    },
];

const initialMessages = {
    1: [
        { id: 1, text: "Hey! We were impressed with your application for the Software Engineer Intern role.", sender: "employer" },
        { id: 2, text: "I'd love to schedule a brief 15-minute call to discuss your experience. Are you free sometime this week?", sender: "employer" },
        { id: 3, text: "Hi, that sounds great! I'm available on Wednesday and Friday afternoon.", sender: "student" },
        { id: 4, text: "Perfect. Does Friday at 2 PM work for you?", sender: "employer" },
        { id: 5, text: "Yes, that works for me. Looking forward to it!", sender: "student" },
        { id: 6, text: "Sounds good, let's connect next week.", sender: "employer" },
    ],
    2: [
        { id: 1, text: "Hi, thanks for applying to the Product Manager internship.", sender: "employer" },
        { id: 2, text: "Can you send over your portfolio?", sender: "employer" },
        { id: 3, text: "I have sent over my portfolio.", sender: "student" },
    ],
    3: [
        { id: 1, text: "Welcome! Let me know if you have questions.", sender: "employer" },
        { id: 2, text: "Welcome! I have a few questions.", sender: "student" },
    ]
};

export default function MessagesPage() {
    const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
    const [messages, setMessages] = useState(initialMessages);
    const [newMessage, setNewMessage] = useState("");

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (newMessage.trim() === "") return;

        const newMsg = {
            id: messages[selectedConversation.id].length + 1,
            text: newMessage,
            sender: 'employer',
        };

        const updatedMessages = {
            ...messages,
            [selectedConversation.id]: [...messages[selectedConversation.id], newMsg],
        };

        setMessages(updatedMessages);
        setNewMessage("");
    };

    return (
        <div className="h-[calc(100vh-80px)] flex bg-white rounded-lg shadow-lg border border-gray-200 ml-0">
            {/* Left Sidebar: Conversations List */}
            <div className="w-1/3 border-r border-gray-200 flex flex-col">
                <div className="p-4 border-b border-gray-200">
                    <h1 className="text-xl font-bold flex items-center gap-2 text-gray-800">
                        <MessageSquare className="w-6 h-6 text-[#7c3aed]" />
                        Messages
                    </h1>
                    <div className="relative mt-4">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input placeholder="Search messages..." className="pl-10 bg-gray-50" />
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto">
                    {conversations.map((convo) => (
                        <div
                            key={convo.id}
                            className={`p-4 flex items-center cursor-pointer border-l-4 ${selectedConversation.id === convo.id ? 'border-[#7c3aed] bg-purple-50' : 'border-transparent hover:bg-gray-50'}`}
                            onClick={() => setSelectedConversation(convo)}
                        >
                            <Avatar className="w-12 h-12 mr-4">
                                {/* <AvatarImage src={convo.avatar} alt={convo.name} /> */}
                                <AvatarFallback><User /></AvatarFallback>
                            </Avatar>
                            <div className="flex-1 overflow-hidden">
                                <div className="font-semibold text-gray-900 truncate">{convo.name}</div>
                                <p className="text-sm text-gray-500 truncate">{convo.lastMessage}</p>
                            </div>
                            <div className="text-right ml-2">
                                <div className="text-xs text-gray-400 mb-1">{convo.time}</div>
                                {convo.unread > 0 && (
                                    <div className="w-5 h-5 bg-[#7c3aed] text-white text-xs rounded-full flex items-center justify-center">
                                        {convo.unread}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Side: Chat Window */}
            <div className="w-2/3 flex flex-col">
                {selectedConversation ? (
                    <>
                        {/* Chat Header */}
                        <div className="border-b border-gray-200 flex items-center justify-between h-20 px-6">
                            <div className="flex items-center">
                                <Avatar className="w-10 h-10 mr-3">
                                    {/* <AvatarImage src={selectedConversation.avatar} alt={selectedConversation.name} /> */}
                                    <AvatarFallback><User /></AvatarFallback>
                                </Avatar>
                                <div>
                                    <div className="font-bold text-gray-800">{selectedConversation.name}</div>
                                    <div className="text-sm text-green-500 flex items-center">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mr-1.5"></div>
                                        Online
                                    </div>
                                </div>
                            </div>
                            <Button variant="outline" size="sm">View Profile</Button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto px-6 py-4">
                            <div className="space-y-6">
                                {messages[selectedConversation.id].map((msg) => (
                                    <div key={msg.id} className={`flex items-end gap-3 ${msg.sender === 'employer' ? 'justify-end' : 'justify-start'}`}>
                                        {msg.sender === 'student' && (
                                            <Avatar className="w-8 h-8">
                                                {/* <AvatarImage src={selectedConversation.avatar} /> */}
                                                <AvatarFallback>
                                                    {selectedConversation.name.split(' ')[0][0]}
                                                    {selectedConversation.name.split(' ')[1][0]}
                                                </AvatarFallback>
                                            </Avatar>
                                        )}
                                        <div className={`max-w-md p-3 rounded-2xl ${msg.sender === 'employer' ? 'bg-[#7c3aed] text-white rounded-br-none' : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'}`}>
                                            <p>{msg.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Message Input */}
                        <div className="border-t border-gray-200 h-20 flex items-center px-6 bg-white">
                            <form onSubmit={handleSendMessage} className="flex items-center gap-4 w-full">
                                <Input
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    placeholder="Type your message..."
                                    className="flex-1 bg-gray-100 border-transparent focus:bg-white focus:border-gray-300"
                                    autoComplete="off"
                                />
                                <Button type="submit" size="icon" disabled={!newMessage.trim()}>
                                    <Send className="w-5 h-5" />
                                </Button>
                            </form>
                        </div>
                    </>
                ) : (
                    <div className="flex-1 flex items-center justify-center text-gray-500">
                        <div className="text-center">
                            <MessageSquare className="w-16 h-16 mx-auto text-gray-300" />
                            <h2 className="mt-2 text-xl font-semibold">Select a conversation</h2>
                            <p className="mt-1 text-sm">Choose from your existing conversations to start chatting.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
} 