do ->
  # 画像のプリロード
  images = [
    "img/player.png"
    "img/yellowMacaron.png"
    "img/blueMacaron.png"
    "img/greenMacaron.png"
    "img/pinkMacaron.png"
    "img/pancake.png"
    "img/pancakeBullet.png"
  ]
  imagesDiv = $("#images")
  for image in images
    imagesDiv.append "<img src=#{image} class=\"invisible\">"

$(window).load ->
  # 背景の初期化
  backScreen = $("#background")
  backScreen.css "width", Setting.SCREEN.WIDTH
  backScreen.css "height", Setting.SCREEN.HEIGHT

  # メインスクリーンの初期化
  mainScreen = $("#screen")[0]
  mainScreen.width = Setting.SCREEN.WIDTH
  mainScreen.height = Setting.SCREEN.HEIGHT

  # スクリーンとしての能力を与える
  context = mainScreen.getContext "2d"
  ContextAbility.giveTo context

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
    $("#description").remove()
    clearTimeout timer
    player.reset()
    enemies.reset()
    main()
    ga "send", "event", "Game", "load", "start"

  gameOver = ->
    clearTimeout timer
    alert "GAME OVER"
    start()
    ga "send", "event", "Game", "load", "gameOver", enemies.totalEXP()

  clear = ->
    clearTimeout timer
    context.showCenter "You are the No.1 sweets!!"
    ga "send", "event", "Game", "load", "clear", enemies.totalEXP()

  main = ->
    # 敵の出現
    enemies.appear()
    # 敵の操作
    enemies.behave player
    # プレイヤーの操作
    player.behave enemies.list

    # 画面の削除
    context.clear()

    # プレイヤーの再描画
    context.drawImageOf player
    # 弾の再描画
    context.drawRectOfActive player.bullets.list
    # 敵の再描画
    context.drawImageOfActive enemies.list

    # その他情報の描画
    context.showUpperLeft "SCORE : #{enemies.totalEXP()}"
    if enemies.boss.untilAppearance > 0
      context.showUpperRight "TIME : #{enemies.boss.untilAppearance}"

    # 次のループへ
    timer = setTimeout main, Setting.INTERVAL

    unless player.isAlive()
      gameOver()

    if enemies.boss.isKilled()
      clear()