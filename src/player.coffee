# プレイヤークラス
class Player extends Solid
  constructor: ->
    @image = new Image
    @image.src = Settings.PLAYER.IMAGE
    @bullets = new Bullets
    @command = new Command
    super(
      new Position(
        Settings.SCREEN.WIDTH.center() - @image.width.half(),
        Settings.SCREEN.HEIGHT - 50 - @image.height.half(),
        @image.width,
        @image.height,
        Settings.PLAYER.SPEED
      ),
      true
    )

  behave: (enemy_list) ->
    # 弾を撃つ
    @bullets.shoot @position if @command.is_requested Command.SPACE
    # 移動する
    @position.left() if @command.is_requested Command.LEFT
    @position.up() if @command.is_requested Command.UP
    @position.right() if @command.is_requested Command.RIGHT
    @position.down() if @command.is_requested Command.DOWN

    # 弾の操作
    @bullets.behave enemy_list