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
  fly<Type>(arg: Type): Type {return arg;}
  sing() {}
}

class Antagonist extends Character {
  constructor() {
    super();
  }
  uniqueVoiceTone() {}
  usualVoicePace() {}
  dance<Type>(arg: Type): Type {return arg;}
  paint() {}
}
