var Settings;

Settings = (function() {
  function Settings() {}

  Settings.INTERVAL = 20;

  Settings.SCREEN = {
    WIDTH: 800,
    HEIGHT: 600
  };

  Settings.PLAYER = {
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

  Settings.ENEMY = {
    COUNT: 7,
    APPEARANCE_RATE: 3,
    MACARON: {
      IMAGE: "img/macaron.png",
      SPEED: 10
    }
  };

  return Settings;

})();
