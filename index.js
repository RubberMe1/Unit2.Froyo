function processOrder() {
    const flavorsInput = document.getElementById('flavorInput').value;
    const flavorsArray = flavorsInput.split(",").map(flavor => flavor.trim());
    const flavorCounts = countFroyoFlavors(flavorsArray);
    displayFlavorTable(flavorCounts);
}

function countFroyoFlavors(flavors) {
    const flavorCounts = {};

    flavors.forEach(flavor => {
        if (flavorCounts[flavor]) {
            flavorCounts[flavor]++;
        } else {
            flavorCounts[flavor] = 1;
        }
    });

    return flavorCounts;
}

function displayFlavorTable(flavorCounts) {
    console.table(flavorCounts);
}



