gulp = require 'gulp'
coffee = require 'gulp-coffee'
webserver = require 'gulp-webserver'
concat = require 'gulp-concat'
uglify = require 'gulp-uglify'

gulp.task 'default', [
  'coffee'
  'webserver'
  'watch'
]

# webサーバーの起動
gulp.task 'webserver', ->
  gulp.src 'docs'
    .pipe webserver
      livereload: true

# coffeeファイルに変更があった場合に再コンパイルする
gulp.task 'watch', ->
  gulp.watch 'src/**/*.coffee', ['coffee']

# .coffeeのコンパイル
gulp.task 'coffee', ->
  gulp.src([
    'src/setting.coffee'
    'src/extension/*.coffee'
    'src/ability/*.coffee'
    'src/command.coffee'
    'src/position.coffee'
    'src/bullets.coffee'
    'src/actor.coffee'
    'src/player.coffee'
    'src/player_bullet.coffee'
    'src/player_bullets.coffee'
    'src/enemy/enemy.coffee'
    'src/enemy/yellow_macaron.coffee'
    'src/enemy/blue_macaron.coffee'
    'src/enemy/green_macaron.coffee'
    'src/enemy/pink_macaron.coffee'
    'src/enemy/pancake_bullet.coffee'
    'src/pancake_bullets.coffee'
    'src/angle.coffee'
    'src/enemy/pancake.coffee'
    'src/enemies.coffee'
    'src/index.coffee'
  ]).pipe coffee
    bare: true
  .pipe concat('index.js')
  .pipe uglify()
  .pipe gulp.dest 'docs/js/'