document.getElementById('randomButton').addEventListener('click', function() {
    const randomElement = document.getElementById('randomElement');
    const elements = ['🌟', '💃', '🎩', '👗', '🌹', '💄', '👠', '🎀', '💋']; // Add your random elements here
  
    const randomIndex = Math.floor(Math.random() * elements.length);
    randomElement.innerHTML = elements[randomIndex];
  });


  let clickCount = 0;

document.getElementById('randomButton').addEventListener('click', function() {
  clickCount++;

  if (clickCount  === 50) {
    displayMessage("Never gonna give you up");
  }
  if (clickCount  === 51) {
    displayMessage("Never gonna let you down");
  }
  if (clickCount  === 52) {
    displayMessage("Never gonna run around and desert you");
  }
  if (clickCount  === 53) {
    displayMessage("Never gonna make you cry");
  }
  if (clickCount  === 54) {
    displayMessage("Never gonna say goodbye");
  }
  if (clickCount  === 55) {
    displayMessage("Never gonna tell a lie and hurt you");
  }
});

function displayMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.textContent = message;

  document.body.appendChild(messageElement);

  // Remove the message after a few seconds (you can adjust the delay)
  setTimeout(() => {
    messageElement.remove();
  }, 3000); // Message display duration in milliseconds (e.g., 3000ms = 3 seconds)
}

  