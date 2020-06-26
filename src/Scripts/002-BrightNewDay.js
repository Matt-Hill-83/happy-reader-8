const story002 = {
  title: "002 - A New Day",
  notes: "fix me",

  description: [
    "1: some stuff----------------",
    "2: some stuff----------------",
  ],
  scenes: [
    {
      title: "cave",
      sceneConfig: {
        coordinates: { col: 0, row: 0 },
        creatures: ["kat"],
        isEndScene: false,
        isStartScene: true,
        items: [{ name: "empty" }],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [
              { face: "happy", character: "liz2" },
              { character: "kat", face: "kat-smiling.49647334.png" },
            ],
            creatures: ["kat"],
          },
          dialogs: [
            '{"kat" : "OK Kat."}',
            '{"kat" : "You can do it."}',
            '{"kat" : "Today is the day."}',
            '{"kat" : "Today is your day, Kat."}',
            '{"kat" : "Go get the dress Kat!."}',
            '{"kat" : "Go get the dress!."}',
          ],
        },
        {
          frameConfig: {
            items: ["troll01", "troll02"],
            faces: [
              { character: "liz2", face: "happy" },
              { character: "kat", face: "kat-cringing.62a27ad4.png" },
            ],
            creatures: ["kat", "liz2"],
          },
          dialogs: [
            '{"kat" : "Hi."}',
            '{"liz2" : "I see a bug.  I see a bug in a rug."}',
            '{"kat" : "Hey you!"}',
            '{"liz2" : "I see a cat.  I see a bug on a mat."}',
            '{"kat" : "Yoo Hoo!"}',
            '{"kat" : "Yoo Hoo!"}',
            '{"liz2" : "Oh hi!"}',
            '{"kat" : "++++++++++"}',
            '{"kat" : "++++++++++"}',
            '{"liz2" : "just working on some poems I guess."}',
            '{"liz2" : "This place is wonderful."}',
            '{"liz2" : "I see a cat.  I see a bug on a mat."}',
            '{"kat" : "I\'ve been here for a while."}',
            '{"kat" : "So let me break it down real simple."}',
            '{"kat" : "Get the dress."}',
            '{"kat" : "I see a dress... and a mess."}',
            '{"kat" : "Tee Hee Hee"}',
            '{"liz2" : "Liz, you are hilarious."}',
            '{"kat" : "Hey, you wanna check out the bog?"}',
            '{"liz2" : "So how many dresses have you gotten?"}',
            '{"kat" : "Zero?"}',
            '{"kat" : "------."}',
            '{"liz2" : "Set a math song to Followed my heart..."}',
            '{"kat" : "------."}',
            '{"liz2" : "------."}',
            '{"kat" : "------."}',
            '{"liz2" : "------."}',
            '{"kat" : "Yay!"}',
            '{"kat" : "Woo! Hoo!"}',
            '{"liz2" : "Oh sorry, my last game was a chat game.  So, sometimes I\'m a bit succinct."}',
            '{"liz2" : "Cool!  Does succinct mean weird?"}',
            '{"liz2" : "It means I say really short things.  Texts cost like 8 cents each in some regions."}',
            '{"liz2" : "Mostly cattle farmers in Nigeria played my game."}',
            '{"liz2" : "It was super low bandwidth.  I was part of the sell off of the Zune. So it came bundled with a service plan in Laos. "}',
            '{"liz2" : "It means I say really short things.  Texts cost like 8 cents each in some regions. Regional rates may apply."}',
            '{"liz2" : "-----------------------------------------------"}',
            '{"liz2" : "I was part of a program that taught Korean business women memory tricks."}',
            '{"liz2" : "Check this out."}',
            '{"liz2" : "Can you drop some put a cat a?"}',
            '{"liz2" : "Put A Cat A"}',
            '{"liz2" : "Put A Cat A"}',
            '{"liz2" : "Put A Cat A"}',
            '{"liz2" : "Eight plus eight is Sixteen."}',
            '{"liz2" : "Oh, great! Just Great"}',
            '{"liz2" : "Eight plus eight."}',
            '{"liz2" : "-------------------"}',
            '{"liz2" : "-------------------"}',
            '{"liz2" : "No wait!"}',
            '{"liz2" : "Sixteen is eight plus eight????"}',
            '{"liz2" : "Wait! I\'ve made a mistake!!!"}',
            '{"liz2" : "I was baking a cake"}',
            '{"liz2" : "Now It\'s gonna be the size of a lake!"}',
            '{"liz2" : "Liz, go get me"}',
            '{"liz2" : "my right roller skate!"}',
            '{"liz2" : "and a roll of that bright pink tape."}',
            '{"liz2" : "What\'s eight plus eight?"}',

            '{"liz2" : "Those 2 cats ate."}',
            '{"liz2" : "All the pie on my plate."}',

            '{"liz2" : "-------------------"}',
            '{"liz2" : "you don\'t really want to debate me."}',
            '{"liz2" : "You can\'t out roller skate me."}',
            '{"liz2" : "It\'s fine! Just fine."}',
            '{"liz2" : "-------------------"}',
            '{"liz2" : "-------------------"}',
            '{"liz2" : "-------------------"}',
            '{"kat" : "What\'s nine plus nine?"}',
            '{"liz2" : "What\'s nine plus nine?"}',
            '{"liz2" : "Fine just fine!"}',
            '{"liz2" : "I\'ll say it once last time."}',
            '{"liz2" : "------------"}',
            '{"liz2" : "------------"}',
            '{"liz2" : "Hey!"}',
            '{"liz2" : "What?"}',
            '{"liz2" : "It\'s eight-teen"}',
            '{"liz2" : ""}',
            '{"liz2" : "-------------------"}',
            '{"liz2" : "Lately"}',
            '{"liz2" : "I was out rollerskating."}',
            '{"liz2" : "Zippy jumped jumped up on the table."}',
            '{"liz2" : "And liked my plate clean."}',
            '{"liz2" : "-------------------"}',
            '{"liz2" : "That\'s pretty silly."}',
            '{"liz2" : "What\'s nine plus nine?"}',
            '{"liz2" : "It\'s eighteen."}',
            '{"liz2" : "So."}',
            '{"liz2" : "-------------------"}',
            '{"liz2" : "Eight-teen"}',
            '{"liz2" : "My cat leaped on the table,"}',
            '{"liz2" : "drank my milk and licked my plate clean,"}',
            '{"liz2" : "That little brat "}',
            '{"liz2" : "She must have been waiting? "}',
          ],
        },
      ],
    },
    {
      title: "home",
      sceneConfig: {
        coordinates: { col: 1, row: 0 },
        creatures: ["kat", "liz2"],
        isEndScene: false,
        isStartScene: true,
        items: [{ name: "empty" }],
      },
      frames: [
        {
          frameConfig: {
            items: [],
            faces: [
              { face: "happy", character: "liz2" },
              { character: "kat", face: "kat-smiling.49647334.png" },
            ],
            creatures: ["kat", "liz2"],
          },
          dialogs: [
            '{"liz2" : "-----------------------------------------------"}',
            '{"kat" : "++++++++++"}',
          ],
        },
        {
          frameConfig: {
            items: [],
            faces: [
              { character: "liz2", face: "happy" },
              { character: "kat", face: "kat-cringing.62a27ad4.png" },
            ],
            creatures: ["kat", "liz2", "troll01", "troll02"],
          },
          dialogs: [
            '{"kat" : "++++++++++"}',
            '{"liz2" : "-----------------------------------------------"}',
          ],
        },
      ],
    },
  ],
}

export default story002
