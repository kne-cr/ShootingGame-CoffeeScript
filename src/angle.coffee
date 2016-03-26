class Angle
  constructor: (@speed, @rate) ->
    @angle = 0

  nextSin: ->
    @angle += @speed
    @angle.sin() * @rate