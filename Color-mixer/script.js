document.addEventListener("DOMContentLoaded", function () {
  const redSlider = document.getElementById("redSlider");
  const greenSlider = document.getElementById("greenSlider");
  const blueSlider = document.getElementById("blueSlider");
  const colorValue = document.getElementById("colorValue");

  setDefaultColor();

  redSlider.addEventListener("input", updateColor);
  greenSlider.addEventListener("input", updateColor);
  blueSlider.addEventListener("input", updateColor);

  function setDefaultColor() {
    redSlider.value = 255;
    greenSlider.value = 105;
    blueSlider.value = 180;

    updateColor();
  }

  function updateColor() {
    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;

    document.body.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

    colorValue.textContent = `RGB(${redValue}, ${greenValue}, ${blueValue})`;
  }
});
