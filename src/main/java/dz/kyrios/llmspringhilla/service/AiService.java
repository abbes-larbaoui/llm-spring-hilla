package dz.kyrios.llmspringhilla.service;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.ollama.OllamaChatModel;
import reactor.core.publisher.Flux;

@BrowserCallable
@AnonymousAllowed
public class AiService {

    private final ChatClient chatClient;

    private final OllamaChatModel ollamaChatModel;

    public AiService(ChatClient.Builder builder, OllamaChatModel ollamaChatModel) {
        this.chatClient = builder.build();
        this.ollamaChatModel = ollamaChatModel;
    }

    public String getCompletion(String prompt) {
        return chatClient.prompt()
                .user(prompt)
                .call()
                .content();
    }

    public Flux<String> generateMessage(String promptMessage) {
        return ollamaChatModel.stream(promptMessage);
    }
}
