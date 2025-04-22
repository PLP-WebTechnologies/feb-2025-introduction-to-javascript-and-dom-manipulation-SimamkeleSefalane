// Change text and style
document.getElementById("change-btn").addEventListener("click", () => {
    const text = document.getElementById("dynamic-text");
    text.textContent = "The text and style have been changed!";
    text.style.color = "white";
    text.style.backgroundColor = "teal";
    text.style.padding = "10px";
    text.style.borderRadius = "8px";
});

// Add or remove an element
document.getElementById("toggle-element-btn").addEventListener("click", () => {
    const container = document.getElementById("element-container");
    const existingElement = document.getElementById("new-element");

    if (existingElement) {
        container.removeChild(existingElement);
    } else {
        const newElement = document.createElement("p");
        newElement.id = "new-element";
        newElement.textContent = "This is a dynamically added paragraph.";
        container.appendChild(newElement);
    }
});
