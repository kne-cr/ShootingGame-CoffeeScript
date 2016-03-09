Math.random_boolean = ->
  # Math.round(Math.random()) -> 0 or 1を取得
  # 1 -> true, 0 -> falseで判定される
  this.round this.random()

Math.random_number = (range) ->
  this.floor this.random() * range