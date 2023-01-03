const chalk = require('chalk')
const buddyList = require('spotify-buddylist')
let SP_DC = ""

if (process.env.SP_DC) {
    SP_DC = process.env.SP_DC
}

const main = async () => {
    console.log("Hello from spyify.")
}

main()