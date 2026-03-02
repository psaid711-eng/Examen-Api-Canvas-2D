/**
 * PROYECTO: Recreación Geométrica - Panda y Perro
 * Descripción: Dibujo mediante Canvas 2D con más de 30 figuras básicas.
 * Fecha: Marzo 2026
 */

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    // --- FUNCIÓN 1: PANDA ---
    function dibujarPanda() {
        // 1-2. Orejas
        ctx.fillStyle = "black";
        ctx.beginPath(); ctx.arc(110, 175, 25, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(220, 175, 25, 0, Math.PI * 2); ctx.fill();

        // 3. Cuerpo / Torso
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(165, 350, 85, 0, Math.PI * 2); ctx.stroke();

        // 4. Cabeza
        ctx.fillStyle = "white";
        ctx.beginPath(); ctx.arc(165, 230, 75, 0, Math.PI * 2); ctx.fill(); ctx.stroke();

        // 5-6. Manchas Ojos (Separadas un poco más: de 138/192 a 130/200)
        ctx.fillStyle = "black";
        ctx.save();
        ctx.translate(130, 235); ctx.rotate(Math.PI / 6); 
        ctx.beginPath(); ctx.ellipse(0, 0, 30, 22, 0, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
        ctx.save();
        ctx.translate(200, 235); ctx.rotate(-Math.PI / 6);
        ctx.beginPath(); ctx.ellipse(0, 0, 30, 22, 0, 0, Math.PI * 2); ctx.fill();
        ctx.restore();

        // 7-10. Ojos (Alineados con la nueva separación de las manchas)
        dibujarOjoPanda(130, 232);
        dibujarOjoPanda(200, 232);

        function dibujarOjoPanda(x, y) {
            ctx.fillStyle = "white";
            ctx.beginPath(); ctx.arc(x, y, 10, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = "black";
            ctx.beginPath(); ctx.arc(x, y + 2, 6, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = "white"; 
            ctx.beginPath(); ctx.arc(x, y - 1, 3, 0, Math.PI * 2); ctx.fill();
        }

        // 11. Nariz
        ctx.fillStyle = "black";
        ctx.beginPath(); ctx.arc(165, 255, 8, 0, Math.PI * 2); ctx.fill();

        // 12. Boca
        ctx.beginPath(); ctx.arc(158, 268, 7, 0, Math.PI); ctx.stroke();
        ctx.beginPath(); ctx.arc(172, 268, 7, 0, Math.PI); ctx.stroke();

        // 13-14. Brazos
        ctx.beginPath(); ctx.ellipse(90, 330, 40, 20, Math.PI / 2, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.ellipse(240, 330, 40, 20, -Math.PI / 2, 0, Math.PI * 2); ctx.fill();

        // 15-16. Patas traseras
        ctx.beginPath(); ctx.arc(120, 415, 25, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(210, 415, 25, 0, Math.PI * 2); ctx.fill();
    }

    // --- FUNCIÓN 2: PERRO ---
    function dibujarPerro() {
        const cafe = "#8B5A2B";

        // 17. Cuerpo
        ctx.fillStyle = cafe;
        ctx.strokeStyle = "black";
        ctx.fillRect(320, 300, 140, 80);
        ctx.strokeRect(320, 300, 140, 80);

        // 18. Cabeza
        ctx.fillRect(320, 200, 100, 100);
        ctx.strokeRect(320, 200, 100, 100);

        // 19-20. Orejas Triangulares
        ctx.fillStyle = cafe;
        ctx.beginPath();
        ctx.moveTo(320, 200); ctx.lineTo(285, 230); ctx.lineTo(285, 140); 
        ctx.closePath(); ctx.fill(); ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(420, 200); ctx.lineTo(455, 230); ctx.lineTo(455, 140);
        ctx.closePath(); ctx.fill(); ctx.stroke();

        // 21. Hocico
        ctx.fillStyle = "#EEDCBB";
        ctx.fillRect(345, 255, 50, 45);
        ctx.strokeRect(345, 255, 50, 45);

        // 22-25. Ojos
        ctx.fillStyle = "white";
        ctx.beginPath(); ctx.arc(345, 235, 15, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
        ctx.beginPath(); ctx.arc(395, 235, 15, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
        ctx.fillStyle = "black";
        ctx.beginPath(); ctx.arc(345, 235, 6, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(395, 235, 6, 0, Math.PI * 2); ctx.fill();

        // 26. Nariz
        ctx.beginPath(); ctx.arc(370, 270, 9, 0, Math.PI * 2); ctx.fill();

        // 27-30. Patas
        ctx.fillStyle = cafe;
        ctx.fillRect(320, 380, 20, 80); ctx.strokeRect(320, 380, 20, 80);
        ctx.fillRect(350, 380, 20, 80); ctx.strokeRect(350, 380, 20, 80);
        ctx.fillRect(410, 380, 20, 80); ctx.strokeRect(410, 380, 20, 80);
        ctx.fillRect(440, 380, 20, 80); ctx.strokeRect(440, 380, 20, 80);

        // 31. Cola
        ctx.fillRect(460, 230, 25, 80); ctx.strokeRect(460, 230, 25, 80);
        
        // 32. Detalle circular en cuerpo
        ctx.beginPath(); ctx.arc(430, 340, 20, 0, Math.PI * 2); ctx.stroke();
    }

    dibujarPanda();
    dibujarPerro();
});