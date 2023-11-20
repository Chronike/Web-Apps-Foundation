document.addEventListener("DOMContentLoaded", function () {
  let checkboxes = document.querySelectorAll('input[type="checkbox"]');

  // Fügt einen Event-Listener zu jeder Checkbox
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      // Zählt die aktivierten Checkboxen
      let checkedCount = document.querySelectorAll(
        'input[type="checkbox"]:checked'
      ).length;

      // Wenn mehr als zwei Checkboxen aktiviert sind, muss die zuletzt aktivierte deaktiviert werden
      if (checkedCount > 2) {
        checkbox.checked = false;
      }
    });
  });
});
