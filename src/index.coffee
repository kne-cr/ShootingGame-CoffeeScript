$(window).load ->
  # スクリーンの初期化
  mainScreen = $("#screen")[0]
  mainScreen.width = Setting.SCREEN.WIDTH
  mainScreen.height = Setting.SCREEN.HEIGHT

  # スクリーンとしての能力を与える
  context = mainScreen.getContext "2d"
  ContextAbility.giveTo context
  context.showCenter "PRESS ENTER"

  command = new Command
  player = new Player command
  enemies = new Enemies
  timer = 0

  document.onkeydown = (event) ->
    command.request event.keyCode
    start() if command.isRequested(Command.ENTER)

  document.onkeyup = (event) ->
    command.cancel event.keyCode

  start = ->
    clearTimeout timer
    player.reset()
    enemies.reset()
    main()

  gameOver = ->
    clearTimeout timer
    alert "GAME OVER : #{enemies.totalEXP()}"
    start()

  clear = ->
    clearTimeout timer
    context.showCenter "CLEAR！！"

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
      gameOver()

    if enemies.boss.isKilled()
      clear()