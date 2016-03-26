$(window).load ->
  # スクリーンの初期化
  mainScreen = $("#screen")[0]
  mainScreen.width = Setting.SCREEN.WIDTH
  mainScreen.height = Setting.SCREEN.HEIGHT

  player = new Player
  enemies = new Enemies

  # スクリーンとしての能力を与える
  context = mainScreen.getContext "2d"
  ContextAbility.giveTo context
  context.showCenter "PUSH START"

  document.onkeydown = (event) ->
    event.preventDefault()
    player.command.request event.keyCode

  document.onkeyup = (event) ->
    event.preventDefault()
    player.command.cancel event.keyCode

  start = ->
    player.reset()
    enemies.reset()
    main()

  main = ->
    # 敵の出現
    enemies.apear()
    # 敵の操作
    enemies.behave player
    # プレイヤーの操作
    player.behave enemies.list

    # 画面の削除
    context.clear()

    # スコアの描画
    context.showUpperLeft "SCORE : #{enemies.totalEXP()}"
    # プレイヤーの再描画
    context.drawImageOf player
    # 弾の再描画
    context.drawRectOfActive player.bullets.list
    # 敵の再描画
    context.drawImageOfActive enemies.list

    # 次のループへ
    timer = setTimeout main, Setting.INTERVAL

    unless player.isAlive()
      clearTimeout timer
      alert "GAME OVER : #{enemies.totalEXP()}"
      start()

  $("#start").click ->
    $(this).attr "disabled", true
    start()