function convertLength() {
    const inputNumber = parseFloat(document.getElementById('inputNumber').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    let result;

    if (fromUnit === 'unit' && toUnit === 'centi') {
        result = inputNumber * 100;
    } else if (fromUnit === 'unit' && toUnit === 'kilo') {
        result = inputNumber / 1000;
    } else if (fromUnit === 'centi' && toUnit === 'unit') {
        result = inputNumber / 100;
    } else if (fromUnit === 'centi' && toUnit === 'kilo') {
        result = inputNumber / 100000;
    } else if (fromUnit === 'kilo' && toUnit === 'unit') {
        result = inputNumber * 1000;
    } else if (fromUnit === 'kilo' && toUnit === 'centi') {
        result = inputNumber * 100000;
    } else {
        result = inputNumber;
    }

    document.getElementById('result').value = result;
}