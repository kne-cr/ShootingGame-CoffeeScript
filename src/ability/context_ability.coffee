# canvas.contextの拡張
class ContextAbility
  @methods:
    initialize: ->
      this.rect  0, 0, Setting.SCREEN.WIDTH, Setting.SCREEN.HEIGHT
      this.shadowColor = Setting.SCREEN.SHADOW.COLOR
      this.shadowBlur = Setting.SCREEN.SHADOW.BLUR

    # 画面内をすべて削除
    clear: ->
      this.clearRect 0, 0, Setting.SCREEN.WIDTH, Setting.SCREEN.HEIGHT

    # 画像を描画する
    drawImageOf: (actor) ->
      this.drawImage actor.image, actor.position.x, actor.position.y

    # 生きている物体のみ画像を描画する
    drawImageOfActive: (actors) ->
      for actor in actors when actor.isActive()
        @drawImageOf actor
        @drawImageOfActive actor.bullets.list if actor.bullets?

    # 図形を描画する
    drawRectOf: (actor) ->
      this.fillStyle = actor.style
      this.fillRect actor.position.x, actor.position.y, actor.position.width, actor.position.height

    # 生きている物体のみ図形を描画する
    drawRectOfActive: (actors) ->
      for actor in actors when actor.isActive()
        @drawRectOf actor

    showCenter: (text) ->
      this.textAlign = "center"
      this.textBaseline = "middle"
      this.font = "70px 'ヒラギノ角ゴ'"
      this.fillStyle = Setting.SCREEN.FONT.COLOR
      this.fillText text, Setting.SCREEN.WIDTH.center(), Setting.SCREEN.HEIGHT.center()

    showUpperLeft: (text) ->
      this.textAlign = "left"
      this.textBaseline = "top"
      this.font = "30px 'ヒラギノ角ゴ'"
      this.fillStyle = Setting.SCREEN.FONT.COLOR
      this.fillText text, Setting.SCREEN.PADDING, Setting.SCREEN.PADDING

    showUpperRight: (text) ->
      this.textAlign = "right"
      this.textBaseline = "top"
      this.font = "30px 'ヒラギノ角ゴ'"
      this.fillStyle = Setting.SCREEN.FONT.COLOR
      this.fillText text, Setting.SCREEN.WIDTH - Setting.SCREEN.PADDING, Setting.SCREEN.PADDING

  # 引数にメソッドを付与する
  @giveTo: (target) ->
    target[methodName] = methodContent for methodName, methodContent of @methods
    target.initialize()