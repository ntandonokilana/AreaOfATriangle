function calculateArea(){
    // Get the values of base and height from input fields
    var base = parseFloat(document.getElementById('base').value);
    var height = parseFloat(document.getElementById('height').value);

    // Check if the input values are valid numbers
    if (isNaN(base) || isNaN(height)) {
        alert('Please enter valid numbers for base and height.');
        return;
    }

    // Calculate the area of the triangle
    var area = 0.5 * base * height;

    // Display the result
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = 'Area: ' + area.toFixed(2);
    resultElement.style.display = 'block';
}