# コマンドクラス。ユーザーの入力をプレイヤーに伝える
class Command
  @SPACE: 32
  @LEFT: 37
  @UP: 38
  @RIGHT: 39
  @DOWN: 40

  constructor: ->
    @requested = new Array(240)

  request: (type) ->
    @requested[type] = true

  cancel: (type) ->
    @requested[type] = false

  isRequested: (type) ->
    @requested[type]