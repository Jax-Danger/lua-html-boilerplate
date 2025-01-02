function display(show) {
  const uiElement = document.getElementById("parent");
  if (show) {
    uiElement.style.display = "block";
  } else {
    uiElement.style.display = "none";
  }
}

window.addEventListener("message", function (event) {
  if (event.data.type === "toggleUI") {
    display(event.data.show);
    console.log("display", event.data.show);
  }
});

// This ensures the NUI can send data back to the client.
document.addEventListener(
  "DOMContentLoaded",
  () => {
    document.getElementById("close").addEventListener("click", () => {
      axios.post(`https://${GetParentResourceName()}/hideUI`, {});
      display(false);
    });
  },
  false
);
