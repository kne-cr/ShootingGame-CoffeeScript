$("#start").click ->
  $(this).attr "disabled", true
  main_screen = $("#screen")[0]
  context = main_screen.getContext "2d"
  player = new Player main_screen.width.center(), main_screen.height - 50, 20
  enemies = new Enemies main_screen.width, 5, 3

  # 少しでも画面に入っていればtrue
  main_screen.includes = (solid) ->
    0 < solid.position.right_x() and
    solid.position.left_x() < @width and
    0 < solid.position.bottom_y() and
    solid.position.top_y() < @height

  # 画面外の物体を死亡判定に
  main_screen.clear_out_of_range = (solids) ->
    # [].concat -> 引数が単体でもリストでもarrayに変換する
    for solid in [].concat solids
      solid.die() unless @includes solid

  document.onkeydown = (key) ->
    player.command.request key.keyCode

  document.onkeyup = (key) ->
    player.command.cancel key.keyCode

  main = ->
    # プレイヤーの操作
    player.action()

    # 敵の操作
    enemies.action()

    # 画面外のものを死亡判定
    main_screen.clear_out_of_range(player.bullets.list)
    main_screen.clear_out_of_range(enemies.list)

    # 画面の削除
    context.clearRect 0, 0, main_screen.width, main_screen.height

    # プレイヤーの再描画
    context.drawImage player.image, player.position.x, player.position.y

    # 弾の再描画
    for bullet in player.bullets.list
      unless bullet.is_dead
        context.fillStyle = bullet.style
        context.fillRect bullet.position.x, bullet.position.y, bullet.position.width, bullet.position.height

    # 敵の再描画
    for enemy in enemies.list
      unless enemy.is_dead
        context.drawImage enemy.image, enemy.position.x, enemy.position.y

    # 次のループへ
    setTimeout main, 20

  main()