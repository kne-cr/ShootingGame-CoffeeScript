Number::center = ->
  this.half()

Number::half = ->
  this / 2

# 角度を元にsin値を算出する
Number::sin = ->
  Math.sin(this * Math.PI / 180).toFixed(15)