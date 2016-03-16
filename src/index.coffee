$ ->
  main_screen = $("#screen")[0]
  context = main_screen.getContext "2d"

  # スクリーンとしての能力を与える
  ScreenAbility.give_to main_screen
  ContextAbility.give_to context

  # メイン画像の初期化
  main_screen.width = Settings.SCREEN.WIDTH
  main_screen.height = Settings.SCREEN.HEIGHT

  $("#start").click ->
    $(this).attr "disabled", true

    # プレイヤー
    player = new Player
    # 敵
    enemies = new Enemies

    document.onkeydown = (key) ->
      player.command.request key.keyCode

    document.onkeyup = (key) ->
      player.command.cancel key.keyCode

    main = ->
      # 敵の出現
      enemies.apear()
      # プレイヤーの操作
      player.behave enemies.list
      # 敵の操作
      enemies.behave player

      # 画面外のものを死亡判定
      main_screen.clear_out_of_range [player.bullets.list, enemies.list]

      # 画面の削除
      context.clearRect 0, 0, Settings.SCREEN.WIDTH, Settings.SCREEN.HEIGHT

      # プレイヤーの再描画
      context.draw_image_of_alive [player]
      # 弾の再描画
      context.draw_rect_of_alive player.bullets.list
      # 敵の再描画
      context.draw_image_of_alive enemies.list

      # 次のループへ
      setTimeout main, Settings.INTERVAL

    main()