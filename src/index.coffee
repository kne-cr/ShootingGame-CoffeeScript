$("#start").click ->
  $(this).attr "disabled", true
  main_screen = $("#screen")[0]
  context = main_screen.getContext "2d"

  # スクリーンとしての能力を与える
  ScreenAbility.give_to main_screen
  ContextAbility.give_to context

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
    main_screen.clear_out_of_range [player.bullets.list, enemies.list]

    # 画面の削除
    context.clearRect 0, 0, main_screen.width, main_screen.height

    # プレイヤーの再描画
    context.draw_image_of player
    # 弾の再描画
    context.draw_rect_of_alive player.bullets.list
    # 敵の再描画
    context.draw_image_of_alive enemies.list

    # 次のループへ
    setTimeout main, 20

  main()