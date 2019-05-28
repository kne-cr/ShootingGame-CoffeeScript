# ランダムで0か1を返す
Math.randomBoolean = ->
  # ランダムな数字を四捨五入して作成
  this.round this.random()

# ランダムでプラス1かマイナス1を返す
Math.randomSort = ->
  if this.random() < 0.5
    -1
  else
    1

# 指定された範囲内の数字をランダムで返す
Math.randomNumber = (range) ->
  this.floor this.random() * range