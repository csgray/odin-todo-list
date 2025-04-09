const content = document.getElementById("content");

export function clearContent() {
    while (content.hasChildNodes()) {
        content.removeChild(content.lastChild);
    }
}
