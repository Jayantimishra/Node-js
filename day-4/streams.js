//* Streams allow you to read or write data in small chunks, not all at once.
// streams are not only for streaming video or audio, but also for handling large files, network communications, or any situation where data is produced or consumed over time.
// There are four main types of streams in Node.js:
// Readable: streams from which data can be read (e.g., fs.createReadStream).
// Writable: streams to which data can be written (e.g., fs.createWriteStream).
// Duplex: streams that are both Readable and Writable (e.g., net.Socket).
// Transform: a type of Duplex stream that can modify or transform the data as it is read or written (e.g., zlib.createGzip).

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // ---------1-----------------------------------------------------
  //  Serving a large file without streams
  //--------------------------------------------------

  //* Downloading in a bad way without streams
  //   const file = fs.readFileSync("sample.txt");
  //   res.end(file);

  //* Downloading in a good way using streams
  //   const fileStream = fs.createReadStream("sample.txt");
  //   fileStream.pipe(res);
  //   res.end();

  // ---------2-----------------------------------------------------
  // copying a large file

  //* Copying in a bad way without streams

  // const file = fs.readFileSync("sample.txt");
  // fs.writeFileSync("sample-copy.txt", file);
  // res.end();
  //

  //* Copying in a good way using streams

  const readStream = fs.createReadStream("sample.txt");
  const writeStream = fs.createWriteStream("output.txt");
  readStream.on("data", (chunk) => {
    console.log("CHANK: ", chunk);
  });
});

server.listen(3080, () => {
  console.log("Server is listening on port 3080");
});
