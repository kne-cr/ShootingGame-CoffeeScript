# 物体はスクリーンを知らないけどスクリーンは物体を扱えるようにしたい
# mixinっぽく
class ScreenAbility
  @methods:
    # 少しでも画面に入っていればtrueを返す
    includes: (solid) ->
      0 < solid.position.right_x() and
      solid.position.left_x() < @width and
      0 < solid.position.bottom_y() and
      solid.position.top_y() < @height

    # 画面外の物体を死亡判定に変える
    clear_out_of_range: (solids) ->
      # 単数、多次元配列をflatten arrayに変換する
      for solid in [].concat.apply [], solids
        solid.die() unless @includes solid

  # 引数にメソッドを付与する
  @give_to: (target) ->
    target[method_name] = method_content for method_name, method_content of @methods