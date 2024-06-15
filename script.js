function executebutton1() {
    const input1=
    parseFloat(document.getElementById('input1').value);
    const input2=
    parseFloat(document.getElementById('input2').value);
    const input3=
    parseFloat(document.getElementById('input3').value);
    const resulElement =
    document.getElementById('result');

    if (input1 < input3) {
        const result = input1 * input2 * input3;
        resulElement.innerText = 'multiplicando: ${input1} * ${input2} * ${input3} = ${result}';
    } else if (input2 === 0) {
        const result = math.max(input1, input3) -
        math.min(input1, input3);
        resulElement.innerText = 'restando: max(${input1}, ${input3}) - min(${input1}, ${input3}) = ${result}';
    } else if (input1 === input2){
        const result = input1 + input2 + input3;
        resulElement.innerText ='sumando: ${input1} + ${input2} + ${input3} = ${result}';
    } else {
        resultElement.innerText = "Ninguna condición se cumplió.";
    }
}

function executeButton2() {
    const input1 = parseFloat(document.getElementById('input1').value);
    const input2 = parseFloat(document.getElementById('input2').value);
    const input3 = parseFloat(document.getElementById('input3').value);
    const repetitions = input1 * input2 + input3;
    const resultElement = document.getElementById('result');

    let resultText = Repitiendo ${repetitions} veces:\n;
    for (let i = 0; i < repetitions; i++) {
        resultText + = repetitions ${i + 1}\n;
    }
    resultElement.innerText = resultText;
}