var Setting;

Setting = (function() {
  function Setting() {}

  Setting.INTERVAL = 20;

  Setting.SCREEN = {
    WIDTH: 800,
    HEIGHT: 600
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
    COUNT: 7,
    APPEARANCE_RATE: 3,
    MACARON: {
      IMAGE: "img/macaron.png",
      SPEED: 10,
      EXP: 100
    }
  };

  return Setting;

})();
