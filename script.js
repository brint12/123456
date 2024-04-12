// JavaScript code for handling code editor and live preview

// Function to update live preview
function updatePreview() {
    const htmlCode = document.getElementById('htmlCode').value;
    const cssCode = document.getElementById('cssCode').value;
    const jsCode = document.getElementById('jsCode').value;

    const combinedCode = `
        <html>
        <head>
            <style>${cssCode}</style>
        </head>
        <body>${htmlCode}</body>
        <script>${jsCode}</script>
        </html>`;

    const previewFrame = document.getElementById('previewFrame').contentWindow.document;
    previewFrame.open();
    previewFrame.write(combinedCode);
    previewFrame.close();
}

// Event listeners for code editor changes
document.getElementById('htmlCode').addEventListener('input', updatePreview);
document.getElementById('cssCode').addEventListener('input', updatePreview);
document.getElementById('jsCode').addEventListener('input', updatePreview);

// Initialize preview
updatePreview();

// JavaScript code for handling fullscreen preview

const previewFrame = document.getElementById('previewFrame');
const fullscreenButton = document.getElementById('fullscreenButton');

// Load a blank HTML page into the preview iframe initially
window.addEventListener('DOMContentLoaded', () => {
    previewFrame.src = 'about:blank';
});

fullscreenButton.addEventListener('click', toggleFullscreen);

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        previewFrame.requestFullscreen();
        fullscreenButton.innerHTML = '<i class="fas fa-compress"></i>';
    } else {
        document.exitFullscreen();
        fullscreenButton.innerHTML = '<i class="fas fa-expand"></i>';
    }
}
