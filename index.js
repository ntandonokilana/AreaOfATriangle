function calculateArea(){

    let base = parseFloat(document.getElementById('base').value);
    let height = parseFloat(document.getElementById('height').value);

    if (isNaN(base) || isNaN(height)) {
        alert('Please enter valid numbers for base and height.');
        return;
    }
    let area = 0.5 * base * height;

    let resultElement = document.getElementById('result');
    resultElement.innerHTML = 'Area: ' + area.toFixed(2);
    resultElement.style.display = 'block';
}