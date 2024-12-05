function appendToOutput(value) {
    const output = document.getElementById('output');
    if (output.value === "0" && value !== '.') {
        output.value = value;
    } else {
        output.value += value;
    }
}

function clearOutput() {
    document.getElementById('output').value = '0';
}

function backspace() {
    const output = document.getElementById('output');
    output.value = output.value.slice(0, -1) || '0';
}

function calculate() {
    const output = document.getElementById('output');
    try {
        output.value = eval (output.value.replace('%', '/100'));
    } catch (error) {
        output.value = 'Error';
    }
}