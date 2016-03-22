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
    MACARON: {
      COUNT: 5,
      IMAGE: "img/macaron.png",
      SPEED: 10,
      EXP: 100
    },
    COOKIE: {
      COUNT: 3,
      IMAGE: "img/cookie.png",
      SPEED: 20,
      EXP: 200
    }
  };

  return Setting;

})();
