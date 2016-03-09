$("#start").click ->
  $(this).attr "disabled", true
  main_screen = $("#screen")[0]
  context = main_screen.getContext "2d"
  player = new Player main_screen.width.center(), main_screen.height - 50, 20
  enemies = new Enemies main_screen.width, 3, 3

  document.onkeydown = (key) ->
    player.command.request(key.keyCode)

  document.onkeyup = (key) ->
    player.command.cancel(key.keyCode)

  main = ->
    # 画面の削除
    context.clearRect 0, 0, main_screen.width, main_screen.height

    # プレイヤーの操作
    player.action()

    # プレイヤーの再描画
    context.drawImage player.image, player.position.x, player.position.y

    for bullet in player.bullets.list
      # 死亡したインスタンスは描画しない
      continue if bullet.is_dead

      # 弾の再描画
      context.fillStyle = bullet.style
      context.fillRect bullet.position.x, bullet.position.y, bullet.position.width, bullet.position.height

    # 敵の操作
    enemies.action()

    for enemy in enemies.list
      # 死亡したインスタンスは描画しない
      continue if enemy.is_dead

      # 敵の再描画
      context.drawImage enemy.image, enemy.position.x, enemy.position.y

    # 次のループへ
    setTimeout main, 20

  main()