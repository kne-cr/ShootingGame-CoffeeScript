$ ->
  # スクリーンの初期化
  mainScreen = $("#screen")[0]
  mainScreen.width = Setting.SCREEN.WIDTH
  mainScreen.height = Setting.SCREEN.HEIGHT

  # スクリーンとしての能力を与える
  context = mainScreen.getContext "2d"
  ContextAbility.giveTo context

  context.show "PUSH START"
  player = new Player
  enemies = new Enemies

  $("#start").click ->
    $(this).attr "disabled", true

    player.reset()
    enemies.reset()

    document.onkeydown = (event) ->
      event.preventDefault()
      player.command.request event.keyCode

    document.onkeyup = (event) ->
      event.preventDefault()
      player.command.cancel event.keyCode

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

      unless player.isAlive
        clearTimeout timer
        alert "GAME OVER"
        player.reset()
        enemies.reset()
        main()

    main()