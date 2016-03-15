# canvas.contextの拡張
class ContextAbility
  @methods:
    # 画像を描画する
    draw_image_of: (solid) ->
      this.drawImage solid.image, solid.position.x, solid.position.y

    # 生きている物体のみ画像を描画する
    draw_image_of_alive: (solids) ->
      for solid in solids when not solid.is_dead
        @draw_image_of solid

    # 図形を描画する
    draw_rect_of: (solid) ->
      this.fillStyle = solid.style
      this.fillRect solid.position.x, solid.position.y, solid.position.width, solid.position.height

    # 生きている物体のみ図形を描画する
    draw_rect_of_alive: (solids) ->
      for solid in solids when not solid.is_dead
        @draw_rect_of solid

  # 引数にメソッドを付与する
  @give_to: (target) ->
    target[method_name] = method_content for method_name, method_content of @methods