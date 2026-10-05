async function sendMessage() {

    const input = document.getElementById("message");
    const chatBox = document.getElementById("chat-box");

    const message = input.value.trim();

    if (message === "") {
        return;
    }

    
    const userMessage = document.createElement("div");

    userMessage.className = "message user";

    userMessage.textContent = message;

    chatBox.appendChild(userMessage);

    
    input.value = "";

    
    const aiMessage = document.createElement("div");

    aiMessage.className = "message ai";

    aiMessage.textContent = "Thinking...";

    chatBox.appendChild(aiMessage);

    chatBox.scrollTop = chatBox.scrollHeight;

    try {

        const response = await fetch("/chat", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                message: message
            })

        });

        const data = await response.json();

        aiMessage.textContent = data.reply;

    } catch (error) {

        aiMessage.textContent =
            "Sorry, something went wrong.";

        console.error(error);
    }

    chatBox.scrollTop = chatBox.scrollHeight;
}
document.getElementById("message").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sendMessage();
    }
});