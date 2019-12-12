const { Writable } = require('stream');

const writableStream = new Writable({
    write(chunk, encoding)
})