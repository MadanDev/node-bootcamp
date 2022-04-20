const fs = require('fs');
const server = require('http').createServer();

server.on("request", (request, response) => {

    //Solution 1
    // fs.readFile("test-file.txt", (err, data) => {
    //     if (err) console.log(err);
    //     else {
    //         response.end(data);
    //     }
    // });

    //Solution 2
    const readableStream = fs.createReadStream("text-file.txt");
    readableStream.on("data", (chunk) => {
        response.write(chunk);
    })
    readableStream.on("end", () => {
        response.end();
    })
    readableStream.on("error", (error) => {
        console.log(error);
        response.statusCode = 404;
        response.end("File not found!!!")
    })

})

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening!");
});