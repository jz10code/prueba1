const Fs = require ('fs');

Fs.writeFileSync('./env', `API=${process.env.API}\n`)