const container = document.querySelector(".container");

function getRandomColor() {
    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function createSquares(size) {
    if (size > 100) size = 100; 

    container.textContent = ""; 

    const squareSize = Math.floor(container.clientWidth / size); 

    for (let i = 1; i <= size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.opacity = 0.1;
        container.appendChild(square);

        square.addEventListener("mouseover", () => {
            const computedStyle = window.getComputedStyle(square);
            
            if (computedStyle.backgroundColor === 'rgba(0, 0, 0, 0)') { 
                square.style.backgroundColor = getRandomColor(); 
            }
            else {
                let currentOpacity = parseFloat(computedStyle.opacity);
                if (currentOpacity < 1) {
                    square.style.opacity = currentOpacity + 0.2; // Aumenta a opacidade em 10%
                }
            }
        });
    }
}

const btnPrompt = document.querySelector(".top-button a");
btnPrompt.addEventListener("click", () => {
    const squareNumber = prompt("Number of squares per side");

    const parsedSize = parseInt(squareNumber);
    if (!isNaN(parsedSize) && parsedSize > 0) {
        createSquares(parsedSize); 
    } else {
        alert("Insert a valid number!");
    }
});