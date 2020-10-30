#!/usr/bin/env node
const execSync = require('child_process').execSync
const VERSION = require('../package.json').version
const fs = require('fs')
const GIT_COMMIT = execSync('git rev-parse --short HEAD').toString().replace(/\n/, '')

const ghpages = require('gh-pages')
execSync('npm run build:docs')
