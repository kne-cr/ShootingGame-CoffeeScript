# ランダムで0か1を返す
Math.random_boolean = ->
  # ランダムな数字を四捨五入して作成
  this.round this.random()

# 指定された範囲内の数字をランダムで返す
Math.random_number = (range) ->
  this.floor this.random() * range