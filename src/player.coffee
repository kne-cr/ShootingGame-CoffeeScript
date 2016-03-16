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
    @position.move_left() if @command.is_requested(Command.LEFT) and not @position.is_left_end()
    @position.move_up() if @command.is_requested(Command.UP) and not @position.is_top_end()
    @position.move_right() if @command.is_requested(Command.RIGHT) and not @position.is_right_end()
    @position.move_down() if @command.is_requested(Command.DOWN) and not @position.is_bottom_end()

    # 弾の操作
    @bullets.behave enemy_list