# プレイヤークラス
class Player extends Actor
  constructor: ->
    @image = new Image
    @image.src = Setting.PLAYER.IMAGE
    @bullets = new Bullets
    @command = new Command
    super(
      new Position(
        Setting.SCREEN.WIDTH.center() - @image.width.half(),
        Setting.SCREEN.HEIGHT - @image.height,
        @image.width,
        @image.height,
        Setting.PLAYER.SPEED
      ),
      true
    )

  reset: ->
    @command.reset()
    @position.x = Setting.SCREEN.WIDTH.center() - @image.width.half()
    @position.y = Setting.SCREEN.HEIGHT - @image.height
    @isAlive = true
    @bullets.reset()

  behave: (enemyList) ->
    # 弾を撃つ
    @bullets.shoot @position if @command.isRequested Command.SPACE
    # 移動する
    @position.moveLeft() if @command.isRequested(Command.LEFT) and not @position.isLeftEnd()
    @position.moveUp() if @command.isRequested(Command.UP) and not @position.isTopEnd()
    @position.moveRight() if @command.isRequested(Command.RIGHT) and not @position.isRightEnd()
    @position.moveDown() if @command.isRequested(Command.DOWN) and not @position.isBottomEnd()

    # 弾の操作
    @bullets.behave enemyList