$("#start").click ->
  $(this).attr "disabled", true
  main_screen = $("#screen")[0]
  context = main_screen.getContext "2d"
  player = new Player(main_screen.width, main_screen.height, 20)
  bullets = []

  document.onkeydown = (key) ->
    player.instruct(key)

  document.onkeyup = (key) ->
    player.cancel(key)

  main = ->
    player.move()
    context.clearRect 0, 0, main_screen.width, main_screen.height
    context.drawImage player.image, player.x, player.y
    setTimeout main, 20

  main()