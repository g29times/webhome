// Connect to the WebSocket server
    const socket = new WebSocket('ws://localhost:8080/chat/chatSocket');

    // When the WebSocket is open
    socket.addEventListener('open', (event) => {
        console.log('WebSocket is open');
    });

    // When the WebSocket receives a message
    socket.addEventListener('message', (event) => {
        const message = event.data;
        console.log('WebSocket received a message:', message);

        // Add the bot message to the messages div
        const messagesDiv = document.querySelector('.messages');
        const botMessageDiv = document.createElement('div');
        botMessageDiv.classList.add('bot-message');
        const botMessageP = document.createElement('p');
        botMessageP.textContent = `ChatGPT: ${message}`;
        botMessageDiv.appendChild(botMessageP);
        messagesDiv.appendChild(botMessageDiv);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    });

    // When the form is submitted
    const chatForm = document.getElementById('chat-form');
    chatForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get the user input
        const userInput = document.querySelector('input[name=user-message]');
        const userMessage = userInput.value;
        userInput.value = '';

        // Add the user message to the messages div
        const messagesDiv = document.querySelector('.messages');
        const userMessageDiv = document.createElement('div');
        userMessageDiv.classList.add('user-message');
        const userMessageP = document.createElement('p');
        userMessageP.textContent = `You: ${userMessage}`;
        userMessageDiv.appendChild(userMessageP);
        messagesDiv.appendChild(userMessageDiv);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;

        // Send the user message to the WebSocket server
        socket.send(userMessage);
    });