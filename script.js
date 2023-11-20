function Mediana(value) {
    const numbers = value.sort((a, b) => a - b);
    const mid = Math.floor(numbers.length / 2);

    if(numbers.length % 2 === 0){
        const mediana = (numbers[mid - 1] + numbers[mid]) / 2;
        console.log(`Mediana do grupo: ${mediana}`);
        return mediana;
    } else {
        const mediana = numbers[mid];
        console.log(`Mediana do grupo: ${mediana}`);
        return mediana
    }
}

function MedianaDasMedianas(value) {
    if(value.length <= 5) {
        const mediana = Mediana(value);
        console.log(`Mediana: ${mediana}`);
        return { mediana }
    }

    const grupos = []

    for(let i = 0; i < value.length; i +=5){
        const grupo = value.slice(i, i + 5).sort((a, b) => a - b);
        grupos.push(grupo)

        const grupoString = grupo.join(', ');
        console.log(`Grupo ${i / 5 + 1}: [${grupoString}]`);
    }

    const medianas = grupos.map(grupo => {
        return Mediana(grupo);
    })

    const newMedianas = medianas.sort((a, b) => a - b);

    const result = MedianaDasMedianas(newMedianas);

    console.log(`Mediana das medianas: ${result.mediana}`);
    return { mediana: result.mediana };
}

function calcularMediana(){
    const input = document.getElementById('input');
    const result = document.getElementById('result');

    const value = input.value.split(',').map(num => parseInt(num, 10));

    const newValue = value.filter(num => !isNaN(num));

    if(newValue.length === 0){
        return result.textContent = 'Por favor, insira números válidos.';
    }

    const { mediana } = MedianaDasMedianas(newValue);

    result.textContent = `Mediana: ${mediana}`;
}