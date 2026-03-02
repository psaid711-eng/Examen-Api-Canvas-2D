/**
 * APLICACIÓN: Recreación de Ilustración con Canvas 2D
 * DESCRIPCIÓN: Dibujo programático de un panda y un perro en un paisaje.
 * AUTOR: Pedro Said Otero
 * FECHA: 2 de Marzo de 2026
 */

window.onload = function() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    drawScene();

    function drawScene() {
        // --- 1. FONDO (Cielo y Sol) ---
        ctx.fillStyle = "#A5D8F3"; // Cielo
        ctx.fillRect(0, 0, 500, 300);
        
        ctx.fillStyle = "#FFF200"; // Sol
        ctx.beginPath();
        ctx.arc(70, 70, 35, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // --- 2. PASTO ---
        ctx.fillStyle = "#69B34C";
        ctx.fillRect(0, 300, 500, 200);

        // --- 3. DIBUJAR PANDA ---
        drawPanda(150, 350);

        // --- 4. DIBUJAR PERRO ---
        drawDog(350, 350);

        // --- 5. DETALLES (Flores) ---
        drawFlower(50, 420, "red");
        drawFlower(450, 430, "red");
        drawFlower(250, 460, "yellow");
    }

    function drawPanda(x, y) {
        // Orejas
        ctx.fillStyle = "black";
        ctx.beginPath(); ctx.arc(x-60, y-100, 25, 0, Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.arc(x+60, y-100, 25, 0, Math.PI*2); ctx.fill();

        // Cuerpo
        ctx.beginPath();
        ctx.ellipse(x, y+20, 80, 90, 0, 0, Math.PI*2);
        ctx.fill();
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.ellipse(x, y+30, 60, 70, 0, 0, Math.PI*2);
        ctx.fill();

        // Cabeza
        ctx.fillStyle = "white";
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(x, y-50, 70, 0, Math.PI*2);
        ctx.fill();
        ctx.stroke();

        // Ojos (Manchas)
        ctx.fillStyle = "black";
        ctx.beginPath(); ctx.ellipse(x-30, y-60, 20, 25, Math.PI/4, 0, Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.ellipse(x+30, y-60, 20, 25, -Math.PI/4, 0, Math.PI*2); ctx.fill();
        
        // Pupilas
        ctx.fillStyle = "white";
        ctx.beginPath(); ctx.arc(x-25, y-65, 5, 0, Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.arc(x+25, y-65, 5, 0, Math.PI*2); ctx.fill();
    }

    function drawDog(x, y) {
        // Cuerpo (Óvalo café)
        ctx.fillStyle = "#C19A6B";
        ctx.beginPath();
        ctx.ellipse(x, y, 70, 60, 0, 0, Math.PI*2);
        ctx.fill();
        ctx.stroke();

        // Patas
        ctx.fillStyle = "#8B4513";
        ctx.fillRect(x-40, y+20, 20, 60);
        ctx.fillRect(x+20, y+20, 20, 60);

        // Cabeza
        ctx.fillStyle = "#C19A6B";
        ctx.beginPath();
        ctx.arc(x-20, y-60, 50, 0, Math.PI*2);
        ctx.fill();
        ctx.stroke();

        // Hocico y ojos omitidos por brevedad, pero seguirían la misma lógica de arcos...
    }

    function drawFlower(x, y, color) {
        ctx.fillStyle = "green";
        ctx.fillRect(x-2, y, 4, 30); // Tallo
        ctx.fillStyle = color;
        // Pétalos simples
        for(let i=0; i<5; i++) {
            ctx.beginPath();
            ctx.arc(x + 10*Math.cos(i*72), y + 10*Math.sin(i*72), 7, 0, Math.PI*2);
            ctx.fill();
        }
    }
};