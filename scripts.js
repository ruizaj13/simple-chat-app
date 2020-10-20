const socket = io('http://localhost:3000')

const messageContainer = document.getElementById('message-container')
const messageForm = document.getElementById('send-form')
const messageInput = document.getElementById('message-input') 

socket.on('chat-message', (data) => {
    appendMesssage(data)
})


messageForm.addEventListener('submit', e => {
    e.preventDefault()
    const message = messageInput.value
    socket.emit('send-chat-message', message)
    messageInput.value = ''
})

function appendMesssage(message) {
    const messageElement = document.createElement('div')
    messageElement.innerText = message
    messageContainer.append(messageElement)
}