'use strict';

const fs = require('fs-extra');
const path = require('path');
const output = fs.readFileSync(path.join(__dirname, '../dist/output'), 'utf8');
console.log(output);