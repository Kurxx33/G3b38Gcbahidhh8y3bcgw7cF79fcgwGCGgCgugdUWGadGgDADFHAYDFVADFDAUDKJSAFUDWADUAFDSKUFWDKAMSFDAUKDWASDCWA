const ARTEMAS_DB_ID = 'ec566cc4-99dc-40b2-837c-de66b0304e3f';
const MONGO_API_URL = 'https://us-east-2.aws.data.mongodb-api.com/app/data-doddzcr/endpoint/data/v1/action/';
const MONGO_API_KEY = 'XHPcG4evzC341O7OueF9WRX0H9DLHm7anTIKPmCc8tGlEpadoMaVHFKyf2Av4hmu';

// View and Like Count Functions
async function incrementViewCount(postId) {
    const response = await fetch(`${MONGO_API_URL}updateOne`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'api-key': MONGO_API_KEY,
        },
        body: JSON.stringify({
            collection: 'forum_posts',
            database: 'artemas',
            dataSource: 'Cluster0artemas',
            filter: { _id: postId },
            update: { $inc: { views: 1 } },
        }),
    });
    return response.json();
}

async function incrementLikeCount(postId) {
    const response = await fetch(`${MONGO_API_URL}updateOne`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'api-key': MONGO_API_KEY,
        },
        body: JSON.stringify({
            collection: 'forum_posts',
            database: 'artemas',
            dataSource: 'Cluster0artemas',
            filter: { _id: postId },
            update: { $inc: { likes: 1 } },
        }),
    });
    return response.json();
}

// Chat Functions
async function sendMessage(username, message) {
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
            document: { username, message, timestamp: new Date(), status: 'sent' },
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
            <strong>${message.username}</strong>: ${message.message}
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
    await sendMessage(username, message);
    document.getElementById('message').value = '';
    const messages = await receiveMessages();
    renderMessages(messages);
});
