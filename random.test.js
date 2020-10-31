const random = require('./random')
const ditadosArray = require('./ditados.json').ditados;

test('getting all ditados one by one using random should return no duplicate', () => {
    const seenDitados = [];
    const foundDuplicateDitado = false;
    const totalDitados = ditadosArray.length;
    for(let i = 0; i < totalDitados; i++){
        const ditado = random.getRandomDitado(false, ditadosArray);
        if(ditado in seenDitados) {
            foundDuplicateDitado = true;
            break;
        }
        seenDitados.push(ditado);
    }

    expect(foundDuplicateDitado).toBe(false);
});
