$("#start").click ->
  $(this).attr "disabled", true
  main_screen = $("#screen")[0]
  context = main_screen.getContext "2d"

  # スクリーンとしての能力を与える
  ScreenAbility.give_to main_screen
  # プレイヤー
  player = new Player main_screen.width.center(), main_screen.height - 50, 20
  # 敵
  enemies = new Enemies main_screen.width, 5, 3

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
    main_screen.clear_out_of_range player.bullets.list
    main_screen.clear_out_of_range enemies.list

    # 画面の削除
    context.clearRect 0, 0, main_screen.width, main_screen.height

    # プレイヤーの再描画
    context.drawImage player.image, player.position.x, player.position.y

    # 弾の再描画
    for bullet in player.bullets.list when not bullet.is_dead
      context.fillStyle = bullet.style
      context.fillRect bullet.position.x, bullet.position.y, bullet.position.width, bullet.position.height

    # 敵の再描画
    for enemy in enemies.list when not enemy.is_dead
      context.drawImage enemy.image, enemy.position.x, enemy.position.y

    # 次のループへ
    setTimeout main, 20

  main()