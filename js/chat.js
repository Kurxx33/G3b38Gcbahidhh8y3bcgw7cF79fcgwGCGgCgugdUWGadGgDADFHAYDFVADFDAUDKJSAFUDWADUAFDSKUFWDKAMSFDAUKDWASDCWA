const ARTEMAS_DB_ID = 'ec566cc4-99dc-40b2-837c-de66b0304e3f';
const MONGO_API_URL = 'https://us-east-2.aws.data.mongodb-api.com/app/data-doddzcr/endpoint/data/v1/action/';
const MONGO_API_KEY = 'XHPcG4evzC341O7OueF9WRX0H9DLHm7anTIKPmCc8tGlEpadoMaVHFKyf2Av4hmu';

// Chat Functions
async function sendMessage(username, message, profilePicture) {
    const response = await fetch(`${MONGO_API_URL}insertOne`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'api-key': MONGO_API_KEY,
        },
        body: JSON.stringify({
            collection: 'messages',
            database: 'artemas',
            dataSource: 'Cluster0artemas',
            document: { username, message, profilePicture, timestamp: new Date(), status: 'sent' },
        }),
    });
    return response.json();
}

async function receiveMessages() {
    const response = await fetch(`${MONGO_API_URL}find`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'api-key': MONGO_API_KEY,
        },
        body: JSON.stringify({
            collection: 'messages',
            database: 'artemas',
            dataSource: 'Cluster0artemas',
            sort: { timestamp: -1 },
            limit: 50,
        }),
    });

    const data = await response.json();
    return data.documents;
}

// Mark Messages as Read
async function markMessageAsRead(messageId) {
    const response = await fetch(`${MONGO_API_URL}updateOne`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'api-key': MONGO_API_KEY,
        },
        body: JSON.stringify({
            collection: 'messages',
            database: 'artemas',
            dataSource: 'Cluster0artemas',
            filter: { _id: messageId },
            update: { $set: { status: 'read' } },
        }),
    });
    return response.json();
}

// Function to render messages
function renderMessages(messages) {
    const chatContainer = document.getElementById('chat-container');
    chatContainer.innerHTML = '';
    messages.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message');
        messageElement.innerHTML = `
            <img src="${message.profilePicture}" alt="Profile Picture">
            <div class="message-content">
                <strong>${message.username}</strong>: ${message.message}
            </div>
            <span class="message-status">${message.status === 'read' ? '✔✔' : '✔'}</span>
        `;
        chatContainer.appendChild(messageElement);
    });
}

// Poll for new messages
setInterval(async () => {
    const messages = await receiveMessages();
    renderMessages(messages);
}, 3000);

// Event listeners for sending messages
document.getElementById('send-message-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const message = document.getElementById('message').value;
    const profilePicture = document.getElementById('profile-picture').value; // Assuming input with profile picture URL
    await sendMessage(username, message, profilePicture);
    document.getElementById('message').value = '';
    const messages = await receiveMessages();
    renderMessages(messages);
});
