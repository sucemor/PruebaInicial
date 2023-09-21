function ordenarPorPrecio() {
    const container = document.getElementById("Contenedor");
    const items = Array.from(container.children);

    const select = document.getElementById("ordenarPorPrecio");
    const orden = select.value;

    items.sort((a, b) => {
        const priceA = parseFloat(a.getAttribute("precio"));
        const priceB = parseFloat(b.getAttribute("precio"));

        if (orden === "ascendente") {
            return priceA - priceB;
        } else {
            return priceB - priceA;
        }
    });

    container.innerHTML = "";
    items.forEach(item => container.appendChild(item));
}

const selectOrden = document.getElementById("ordenarPorPrecio");
selectOrden.addEventListener("change", ordenarPorPrecio);

// Llamar a la función de ordenar inicialmente
ordenarPorPrecio();