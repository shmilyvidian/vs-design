'use strict'

const { series, src, dest } = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')
const path = require('path')
var minifyCSS = require('gulp-clean-css')

const extralPath = path.resolve(process.cwd(), '../../node_modules/vant')
console.log(extralPath + '/**/*.css', 'path')
function compile () {
  return src('./src/*.scss', extralPath + '/**/*.css')
 
    .pipe(sass.sync({
      includePaths: extralPath + '/**/*.css'
    }))
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    .pipe(minifyCSS({
      relativeTo: extralPath,
      processImport: true
    }))
    .pipe(cssmin())
    .pipe(dest('./lib'))
}

function copyfont () {
  return src('./src/fonts/**')
    .pipe(cssmin())
    .pipe(dest('./lib/fonts'))
}

exports.build = series(compile, copyfont)
