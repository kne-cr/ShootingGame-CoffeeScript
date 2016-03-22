var Setting;

Setting = (function() {
  function Setting() {}

  Setting.INTERVAL = 20;

  Setting.SCREEN = {
    WIDTH: 800,
    HEIGHT: 600,
    SCORE: {
      PADDING: 20
    }
  };

  Setting.PLAYER = {
    IMAGE: "img/player.png",
    SPEED: 20,
    BULLET: {
      WIDTH: 1,
      HEIGHT: 20,
      COUNT: 10,
      SPEED: 20,
      STYLE: "rgb(255, 255, 255)"
    }
  };

  Setting.ENEMY = {
    APPEARANCE_RATE: 3,
    YELLOW_MACARON: {
      COUNT: 7,
      IMAGE: "img/yellowMacaron.png",
      SPEED: 10,
      EXP: 100
    },
    BLUE_MACARON: {
      COUNT: 5,
      IMAGE: "img/blueMacaron.png",
      SPEED: 30,
      EXP: 150
    },
    GREEN_MACARON: {
      COUNT: 5,
      IMAGE: "img/greenMacaron.png",
      SPEED: 10,
      EXP: 200
    },
    PINK_MACARON: {
      COUNT: 3,
      IMAGE: "img/pinkMacaron.png",
      SPEED: 25,
      EXP: 300
    }
  };

  return Setting;

})();
