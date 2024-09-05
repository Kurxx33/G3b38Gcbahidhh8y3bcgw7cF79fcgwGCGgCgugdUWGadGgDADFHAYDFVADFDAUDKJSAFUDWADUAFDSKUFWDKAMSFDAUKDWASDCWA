if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function () {
      loaded();
    });
  } else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function () {
      loaded();
    });
  }
  function loaded() {
    setInterval(loop, 300);
  }
  var x = 0;
  var titleText = [
    "K",
    "Ku",
    "Kur",
    "Kurx",
    "kurxx",
    "Kurxx ",
    "Kurxx x",
    "Kurxx x ",
    "Kurxx x T",
    "Kurxx x Tk",
    "Kurxx x Tk<",
    "Kurxx x Tk<3",
    "Kurxx x Tk<",
    "Kurxx x Tk",
    "Kurxx x T",
    "Kurxx x ",
    "Kurxx x",
    "Kurxx ",
    "Kurxx",
    "Kurx",
    "Kur",
    "Ku", 
    "K",
    "<3",
    "</3",
    "artemas.lol",
    "sachi.lol",
    ".gg/nudess",
  ];
  
  function loop() {
    document.getElementsByTagName("title")[0].innerHTML =
      titleText[x++ % titleText.length];
  }
