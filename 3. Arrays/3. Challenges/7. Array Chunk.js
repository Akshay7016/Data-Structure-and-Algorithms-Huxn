const createChunkArray = (array, size) => {
    const chunkedArray = [];
    let index = 0;

    while (index < array.length) {
        // slice returns new array without changing original array
        const chunk = array.slice(index, index + size);
        chunkedArray.push(chunk);
        index += size;
    }

    return chunkedArray;
}

console.log(createChunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3))