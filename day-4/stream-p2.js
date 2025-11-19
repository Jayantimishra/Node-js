const {Readable} = require('stream');

const readableStream = new Readable({
    read() {}
});

readableStream.on('data', (chunk) => {
    console.log("CHANK", chunk );
});


readableStream.push('Hello');