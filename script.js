const input = document.querySelector("#emoji-input");
const animateButton = document.querySelector("#animate-button");
const screenshotButton = document.querySelector("#screenshot-button");
const animationContainer = document.querySelector("#animation-container");

animateButton.addEventListener("click", () => {
  const emoji = input.value;
  animationContainer.innerHTML = emoji;
  animationContainer.classList.add("animate");
});

screenshotButton.addEventListener("click", () => {
  const screenshot = document.querySelector("#animation-container").innerHTML;
  const link = document.createElement("a");
  link.download = "screenshot.txt";
  link.href = "data:text/plain," + encodeURIComponent(screenshot);
  link.click();
});
// Add animation to CSS
const style = document.createElement("style");
style.innerHTML = `
  @keyframes animate {
    0% { transform: scale(1); }
    50% { transform: scale(1.5); }
    100% { transform: scale(1); }
  }
  
  .animate {
    animation: animate 1s ease-in-out infinite;
  }
`;
document.head.appendChild(style);
