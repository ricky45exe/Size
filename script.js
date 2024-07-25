document.getElementById('tshirtForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let chestSize = parseFloat(document.getElementById('chestSize').value);
    let chestUnit = document.getElementById('chestUnit').value;
    let length = parseFloat(document.getElementById('length').value);
    let lengthUnit = document.getElementById('lengthUnit').value;

    // Convert to inches if necessary
    if (chestUnit === 'cm') {
        chestSize = chestSize / 2.54;
    }
    if (lengthUnit === 'cm') {
        length = length / 2.54;
    }

    const size = calculateSize(chestSize, length);
    
    document.getElementById('result').innerText = `Recommended T-shirt size: ${size}`;
});

function calculateSize(chest, length) {
    if (chest <= 36 && length <= 26) return 'S';
    if (chest <= 40 && length <= 28) return 'M';
    if (chest <= 44 && length <= 30) return 'L';
    if (chest <= 48 && length <= 32) return 'XL';
    if (chest <= 52 && length <= 34) return 'XXL';
    return 'Custom Size Recommended';
}
