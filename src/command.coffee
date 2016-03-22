# コマンドクラス。ユーザーの入力をプレイヤーに伝える
class Command
  @SPACE: 32
  @LEFT: 37
  @UP: 38
  @RIGHT: 39
  @DOWN: 40

  constructor: ->
    @requested = new Array(240)

  reset: ->
    @requested[Command.SPACE] = false
    @requested[Command.LEFT] = false
    @requested[Command.UP] = false
    @requested[Command.RIGHT] = false
    @requested[Command.DOWN] = false

  request: (type) ->
    @requested[type] = true

  cancel: (type) ->
    @requested[type] = false

  isRequested: (type) ->
    @requested[type]