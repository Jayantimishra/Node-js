const {Readable, Writable} = require('stream');

const readableStream = new Readable({
    read() {}
});


const writableStream = new Writable({
    write(streamData) {
        console.log("writing:", streamData.toString());
    }
})


readableStream.on('data', (chunk) => {
    console.log("CHANK", chunk );
    writableStream.write(chunk);
});


readableStream.push('Hello');