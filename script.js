const textElement = document.getElementById('text');
const colorInput = document.getElementById('color');
const sizeInput = document.getElementById('size');
const shapeInput = document.getElementById('shape');

let highlightElement = document.createElement('div');
highlightElement.className = 'highlight';
document.body.appendChild(highlightElement);

textElement.addEventListener('mousemove', (event) => {
    const { left, top } = textElement.getBoundingClientRect();

    highlightElement.style.width = `${sizeInput.value}px`;
    highlightElement.style.height = shapeInput.value === 'rectangle' ? `${sizeInput.value * 2}px` : `${sizeInput.value}px`;
    highlightElement.style.borderRadius = shapeInput.value === 'circle' ? '50%' : '0';
    highlightElement.style.backgroundColor = colorInput.value;
    highlightElement.style.left = `${event.clientX - sizeInput.value / 2}px`;
    highlightElement.style.top = `${event.clientY - sizeInput.value / 2}px`;
    highlightElement.style.display = 'block';
});

textElement.addEventListener('mouseleave', () => {
    highlightElement.style.display = 'none';
});
