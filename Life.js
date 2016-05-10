import { women, men } from 'humanity';

class Life {
  constructor(woman, man) {
    this.couple = { woman, man };

    if (!this.isWomanBusy || !this.isManBusy) { return; }
    this.womanMoodChange();
  }

  womanMoodChange() {
    const range = {
      min: 0,
      max: 31
    };

    if (this.couple.woman.mood === Life.moodConditions().bad) {
      Life.fuckBrain(this.couple.man);
      return;
    }

    if (this.couple.woman.mood === Life.moodConditions().good) {
      this.couple.woman.boring = true;
      this.couple.woman.mood = {
        range: Math.ceil(Math.random() * (range.max - range.min) + range.min),
        value: Life.moodConditions().bad
      };
      Life.fuckBrain(this.couple.man);
    }

    if (!this.couple.man.hasGirlFriend) {
      Life.fuckBrain(this.couple.woman);
      this.couple.woman.hasBoyFriend = false;
      this.couple.woman.inLove = false;
    }
  }

  get isWomanBusy() {
    return this.couple.woman.hasBoyFriend;
  }

  get isManBusy() {
    return this.couple.man.hasGirlFriend;
  }

  static fuckBrain(man) {
    const range = {
      min: 0,
      max: 365
    };
    const time = Math.ceil(Math.random() * (range.max - range.min) + range.min);

    man.fuckBrain = true;

    if (time > 1) { man.zaebalsya = !!Math.floor(Math.random() * 2); }

    if (man.zaebalsya) {
      man.hasGirlFriend = false;
      man.inLove        = !!Math.floor(Math.random() * 2);
    }

    return man;
  }

  static moodConditions() {
    return {
      good: 'Всё хорошо',
      bad:  'Всё плохо'
    };
  }
}

for (const woman of women) {
  for (const man of men) {
    new Life(woman, man);
  }
}
