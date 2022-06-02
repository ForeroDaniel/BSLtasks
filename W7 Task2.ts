abstract class Character {
  
  constructor() {}
  
  introduce() {}
  walk() {}
  run() {}
  abstract uniqueVoiceTone();
  abstract usualVoicePace();
}

class Protagonist extends Character {
  constructor() {
    super();
  }
  uniqueVoiceTone() {}
  usualVoicePace() {}
  fly() {}
  sing() {}
}

class Antagonist extends Character {
  constructor() {
    super();
  }
  uniqueVoiceTone() {}
  usualVoicePace() {}
  dance() {}
  paint() {}
}
