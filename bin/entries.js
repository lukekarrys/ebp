#!/usr/bin/env node

const getEntries = require("../lib/entries.js")

getEntries(process.argv[2])
  .then((d) => console.log(JSON.stringify(d, null, 2)))
  .catch((e) => {
    process.exitCode = 1
    throw e
  })
