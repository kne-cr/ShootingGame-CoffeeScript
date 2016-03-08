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
  enemy = new Enemy1(Math.floor(Math.random() * main_screen.width), 0, 10)

  main = ->
    # 画面の削除
    context.clearRect 0, 0, main_screen.width, main_screen.height

    # プレイヤーの操作
    player.shoot() if pressed[KEY.SPACE]
    player.left() if pressed[KEY.LEFT] and 0 < player.position.left_x()
    player.up() if pressed[KEY.UP] and 0 < player.position.top_y()
    player.right() if pressed[KEY.RIGHT] and player.position.right_x() < main_screen.width
    player.down() if pressed[KEY.DOWN] and player.position.bottom_y() < main_screen.height

    # プレイヤーの再描画
    context.drawImage player.image, player.position.x, player.position.y

    for bullet in player.bullets.list
      # 死亡したインスタンスは描画しない
      continue if bullet.is_dead
      # 弾の操作
      bullet.move()

      # 弾の再描画
      context.fillStyle = bullet.style
      context.fillRect bullet.position.x, bullet.position.y, bullet.position.width, bullet.position.height

    # 敵の操作
    enemy.move()
    # 敵の再描画
    context.drawImage enemy.image, enemy.position.x, enemy.position.y

    # 次のループへ
    setTimeout main, 20

  main()