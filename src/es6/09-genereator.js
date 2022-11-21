function* iterate(array) {
    for (let value of array){
        yield value;
    }
}

const it = iterate(['oscar', 'David', 'David', 'Ulises']);
console.log(it.next().value);