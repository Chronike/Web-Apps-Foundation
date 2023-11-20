function toggleLight() {
  const body = document.body;
  const title = document.querySelector("title");

  if (body.classList.contains("on")) {
    body.classList.remove("on");
    body.classList.add("off");
    title.textContent = "Good Night";
  } else {
    body.classList.remove("off");
    body.classList.add("on");
    title.textContent = "Good Morning";
  }
}
