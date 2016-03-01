$("#start").click ->
  KEY =
    SPACE: 32
    LEFT: 37
    UP: 38
    RIGHT: 39
    DOWN: 40
  pressed = new Array(240); # 240 = キーコードの最大値

  document.onkeydown = (key) ->
    pressed[key.keyCode] = true

  document.onkeyup = (key) ->
    pressed[key.keyCode] = false

  $(this).attr "disabled", true
  main_screen = $("#screen")[0]
  context = main_screen.getContext "2d"
  player = new Player(main_screen.width.center(), main_screen.height - 50, 20)

  main = ->
    # ユーザーの操作
    player.shoot() if pressed[KEY.SPACE]
    player.left() if pressed[KEY.LEFT]
    player.up() if pressed[KEY.UP]
    player.right() if pressed[KEY.RIGHT]
    player.down() if pressed[KEY.DOWN]

    # 画面の削除
    context.clearRect 0, 0, main_screen.width, main_screen.height

    # プレイヤーの再描画
    context.drawImage player.image, player.x, player.y

    # 弾の再描画
    for bullet in player.bullets
      bullet.move()
      context.fillStyle = bullet.style
      context.fillRect bullet.x, bullet.y, bullet.width, bullet.height

    # 次のループへ
    setTimeout main, 20

  main()