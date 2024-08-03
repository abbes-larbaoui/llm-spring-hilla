import { Button, TextField } from "@vaadin/react-components";
import { useState } from "react";
import {AiService} from "Frontend/generated/endpoints";
import Markdown from "react-markdown";
import '../styles/styles.css';

export default function AiChat() {

    const [prompt, setPrompt] = useState<string>("");
    const [response, setResponse] = useState<string>("");

    async function send() {
        setResponse("");
        AiService.generateMessage(prompt).onNext(token => setResponse(res => res + token));
    }

    return (
        <div className="p-m">
            <h1>AI Chat</h1>

            <div>
                <TextField placeholder="Ask me anything" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
                <Button onClick={send}>Send</Button>
            </div>

            <Markdown>
                {response}
            </Markdown>
        </div>
    );
}