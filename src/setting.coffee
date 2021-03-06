class Setting
  @INTERVAL: 20

  @SCREEN:
    WIDTH: 1000
    HEIGHT: 750
    BACKGROUND:
      IMAGE: "img/background.gif"
    PADDING: 20
    FONT:
      COLOR: "#FFFFFF"
    SHADOW:
      COLOR: "#FF6DBE"
      BLUR: 30

  @PLAYER:
    IMAGE: "img/player.png"
    SPEED: 20
    HIT_POINT: 1
    BULLET:
      WIDTH: 3
      HEIGHT: 20
      COUNT: 10
      SPEED: 20
      HIT_POINT: 1
      COLOR: "#FFFFFF"

  @ENEMY:
    APPEARANCE_RATE: 3

    YELLOW_MACARON:
      COUNT: 7
      IMAGE: "img/yellowMacaron.png"
      SPEED: 10
      HIT_POINT: 1
      EXP: 100

    BLUE_MACARON:
      COUNT: 2
      IMAGE: "img/blueMacaron.png"
      SPEED: 20
      HIT_POINT: 10
      EXP: 500

    GREEN_MACARON:
      COUNT: 5
      IMAGE: "img/greenMacaron.png"
      SPEED: 10
      HIT_POINT: 3
      EXP: 200

    PINK_MACARON:
      COUNT: 3
      IMAGE: "img/pinkMacaron.png"
      SPEED: 25
      HIT_POINT: 1
      EXP: 300

    PANCAKE:
      IMAGE: "img/pancake.png"
      SPEED: 5
      HIT_POINT: 400
      EXP: 10000
      APPEARANCE_FRAME: 2000
      SWING:
        SPEED: 10
        RANGE: 5
      BULLET:
        SHOOT_RATE: 3
        COUNT: 20
        SPEED: 10
        IMAGE: "img/pancakeBullet.png"
        HIT_POINT: 1
        EXP: 0