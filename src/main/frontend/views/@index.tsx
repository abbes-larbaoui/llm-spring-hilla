import { Button, TextField } from "@vaadin/react-components";
import { useState } from "react";
import {AiService} from "Frontend/generated/endpoints";
import Markdown from "react-markdown";
import '../styles/styles.css';

interface Message {
    user: string;
    bot: string;
}

export default function AiChat() {
    const [prompt, setPrompt] = useState<string>("");
    const [response, setResponse] = useState<string>("");
    const [history, setHistory] = useState<string[]>([]);
    const [messages, setMessages] = useState<Message[]>([]);

    async function send() {
        if (prompt.trim() === "") return; // Prevent sending empty messages
        setResponse("");
        setHistory([...history, prompt]);
        setMessages([...messages, { user: prompt, bot: "" }]);
        setPrompt("");
        AiService.generateMessage(prompt).onNext(token => {
            setMessages(prevMessages => {
                const updatedMessages = [...prevMessages];
                updatedMessages[updatedMessages.length - 1].bot += token;
                return updatedMessages;
            });
        });
    }

    return (
        <div className="container">
            <div className="history">
                <h2>History</h2>
                <ul>
                    {history.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div className="header">
                    <h1>Kyrios Chat</h1>
                </div>
                <div className="messages">
                    <div>
                        {messages.map((message, index) => (
                            <div key={index} className="message-block">
                                <div className="user-message">
                                    <p>{message.user}</p>
                                </div>
                                <div className="bot-message">
                                    <Markdown>{message.bot}</Markdown>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="input-dev">
                    <TextField
                        className="text-field"
                        placeholder="Ask me anything"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                    />
                    <Button onClick={send}>Send</Button>
                </div>
            </div>
        </div>
    );
}
