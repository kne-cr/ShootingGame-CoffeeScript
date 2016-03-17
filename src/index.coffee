$ ->
  mainScreen = $("#screen")[0]
  context = mainScreen.getContext "2d"

  # スクリーンとしての能力を与える
  ContextAbility.giveTo context

  # メイン画像の初期化
  mainScreen.width = Setting.SCREEN.WIDTH
  mainScreen.height = Setting.SCREEN.HEIGHT

  $("#start").click ->
    $(this).attr "disabled", true

    player = new Player
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

      # 画面の削除
      context.clear()

      # プレイヤーの再描画
      context.drawImageOf player
      # 弾の再描画
      context.drawRectOfAlive player.bullets.list
      # 敵の再描画
      context.drawImageOfAlive enemies.list

      # 次のループへ
      timer = setTimeout main, Setting.INTERVAL
      clearTimeout timer unless player.isAlive

    main()