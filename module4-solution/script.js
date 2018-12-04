(function() {
  var names = [
    "Yaakov",
    "John",
    "Jen",
    "Jason",
    "Paul",
    "Frank",
    "Larry",
    "Paula",
    "Laura",
    "Jim"
  ];

  names.forEach(name => {
    var firstLetter = name.charAt(0).toLowerCase();
    if (firstLetter === "j") {
      byeSpeaker.speak(name);
    } else {
      helloSpeaker.speak(name);
    }
  });
})();
