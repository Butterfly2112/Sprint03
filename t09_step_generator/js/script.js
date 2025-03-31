function* Generator() {
    let result = 1;

    while(true) {
        let input = prompt(`Previous result: ${result}. Enter a new number:`);
        let number = Number(input);

        if(isNaN(number)) {
            console.error("Invalid number!");
        } else {
            result += number;
            if(result > 10000) {
                result = 1;
            }
        }
        yield result;
    }
}
const gen = Generator();

console.log(gen.next().value); 
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);