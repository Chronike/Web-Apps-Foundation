let counter = 0;
const maxSchritte = 100;
const headerHeight = document.querySelector(".header").offsetHeight;

document.addEventListener("click", function (event) {
  if (event.clientY > headerHeight) {
    incrementCounter();
  }
});

function incrementCounter() {
  if (counter < maxSchritte) {
    counter++;
    updateCounter();
    updateBackgroundColor();
  }
}

function resetCounter() {
  counter = 0;
  updateCounter();
  resetBackgroundColor();
}

function updateCounter() {
  document.getElementById("counter").textContent = counter;
}

function updateBackgroundColor() {
  const progress = counter / maxSchritte;
  const backgroundColor = `linear-gradient(to right, gold ${
    progress * 100
  }%, white ${progress * 100}%)`;
  document.body.style.background = backgroundColor;
}

function resetBackgroundColor() {
  document.body.style.background = "white";
}
