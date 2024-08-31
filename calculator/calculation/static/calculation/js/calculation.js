function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    var input = document.getElementById('display').value
    var result = eval(input);
    document.getElementById('display').value = result;
    addToHistory(input + " = " + result);
}

function addToHistory(result) {
    var historyDiv = document.getElementById('history');
    var historyItem = document.createElement('div');
    historyItem.textContent = result;

    if (historyDiv.childNodes.length >= 5) {
        historyDiv.removeChild(historyDiv.childNodes[0]);
    }

    historyDiv.appendChild(historyItem);
}