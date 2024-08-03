# Fullstack AI Chat Application

## Overview

This project is a fullstack AI chat application that integrates a backend powered by Spring AI with the Ollama model and a frontend developed using the Hilla framework. Both the frontend and backend are hosted on the same server, providing a unified and seamless user experience.

## Features

- **AI-Powered Chat**: Uses the Ollama model via Spring AI to deliver intelligent and context-aware chat responses.
- **Integrated Frontend and Backend**: Built with the Hilla framework, ensuring a cohesive application where both components operate on the same server.
- **Responsive Interface**: Offers an interactive and modern chat experience within the web application.

## Technologies

- **Java 17**: The application is developed using Java 17.
- **Spring AI**: Framework for integrating AI models into Java applications.
- **Ollama Model**: Advanced AI model for generating chat responses.
- **Hilla Framework**: Combines Vaadin and Spring Boot for a unified fullstack solution.
- **Docker Compose**: Used for managing and running the Ollama container.

## Getting Started

### Prerequisites

- JDK 17
- Maven
- Docker and Docker Compose

### Installation

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Run the Docker Compose File:**
    - Navigate to the directory containing the `docker-compose.yml` file.
    - Start the Ollama container:
   ```bash
    git clone <repository-url>
    cd <repository-directory>
   ```

3. **Run the Llama2 Model:**
    - Start the Llama2 model within the Ollama container using::
   ```bash
    docker exec -it ollama ollama run llama2
   ```

4. **Build and Run the Application:**
    - Navigate to the project root directory.
    - Install dependencies and build the application with Maven:
   ```bash
    mvn clean install
   ```
    - Run the Spring Boot application, which will start both the backend and frontend:
   ```bash
    mvn spring-boot:run
   ```

5. **Access the Application:**
    - Open your web browser and go to `http://localhost:8080` to interact with the chat application.

### Usage
- **Chat Interface:** Use the integrated chat interface to interact with the AI model.
- **Configuration:** Modify AI model parameters and other settings in the `src/main/resources/application.yml` file.