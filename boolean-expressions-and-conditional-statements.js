/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

node boolean-expressions-and-conditional-statements.js

*/



const readline = require('readline-sync');

let hasSword = false;
let torchLit = false;

console.log(`You see two paths: one leads to the mountains, the other to the village. On your person you find a torch.
  What will you do?

  A. Take the path toward the mountains.
  B. Take the path toward the village.
  C. Take out your torch and light it.`);
let choice = readline.question("Decision: ");
choice = choice.toUpperCase().replace(".", "");

if (choice === "A"){
  console.log("\nYou turn left toward the mountains, the peaks like beacons calling you from above the trees.")
  paths(choice);
} else if (choice === "B"){
  console.log("\nYou turn right toward the village. The trees begin to thin and you make out the warm glow of civilization in the distance.")
  paths(choice);
} else if (choice === "C"){
  console.log(`
    You take out your torch and light it, the dark forest fills with a comforting glow.
    Now which path will you take?

    A. Take the path towards the mountains.
    B. Take the path towards the village.`);
    torchLit = true;
    choice = readline.question("Decision: ");
    choice = choice.toUpperCase().replace(".", "");

    if (choice !== "A" && choice !== "B"){
      console.log(`As you stand there pondering your decision, you hear the crunch of a branch snapping behind you.
        Before you have time to think to turn around, you hear a whizz before something pierces your back.
        You've been shot by an arrow! You make to run but trip, falling forward. You hit the ground hard.
        You attempt to push yourself up, but a foot presses down on your back. You can't speak, yell, or beg.
        The slow drawing of a bow is heard above you. It's agonizingly slow. You wait and wait heart pounding.
        Did they decide not to shoot? It's then you hear the whizz of a released arrow.
        For a moment you feel an immense pain in your head. Then you feel nothing. 
        You won't ever again.
    
        END.`);
        choice = "End";
    
    }
    else{
      paths(choice);
    }

    
}
else {
  console.log(`
    As you stand there pondering your decision, you hear the crunch of a branch snapping behind you.
    Before you have time to think to turn around, you hear a whizz before something pierces your back.
    You've been shot by an arrow! You make to run but trip, falling forward. You hit the ground hard.
    You attempt to push yourself up, but a foot presses down on your back. You can't speak, yell, or beg.
    The slow drawing of a bow is heard above you. It's agonizingly slow. You wait and wait heart pounding.
    Did they decide not to shoot? It's then you hear the whizz of a released arrow.
    For a moment you feel an immense pain in your head. Then you feel nothing. 
    You won't ever again.
    
    END.`);
    choice = "End";
}


function paths(choice){

    if (choice === "A" && torchLit === false){

        console.log(`\nAs you walk down the forest path towards the mountains. The trees grow thicker.
        The limited moonlight, already barely illuminating the surrounding area, begins to fade due to the trees' boughs.
        You hear a sound behind you. Shivers run down your spine.
        What do you do?
        A. Stop and listen to try and discern what the sound is
        B. Hide in the thicket
        C. Run`);

        choice = readline.question("Decision: ");
        choice = choice.toUpperCase().replace(".", "");

        if (choice === "A"){
            console.log(`\n You stop and strain to listen hoping to identify the sound. Which direction was it coming from?
            Was it simply one of the sounds of the forest? Or something more sinister? You hear it again closer this time.
            A rustle? You turn to face the direction of the noise. The last thing you see is an open maw and pointed teeth.
    
             END.`);
             choice = "End";
        }
        else if (choice === "B"){
            console.log(`\nSomething isn't right. As quickly and quietly as you can, you make your way into a dense thicket on the side of the path.
            You stay still and strain your ears. Then you hear it. The sound of heavy footprints and deep labored breathing.
            A horrible stench fills the air. Spying through the thicket, you have to stifle as gasp. A huge bipedal being enters the pathway.
            It is taller than any man, long powerful arms reaching almost to the ground. It stops, sniffing the air. It's looking for you, your scent.
            You hold your breath as the creature lets out a deep growl; it's many sharp teeth on full display. It turns towards the thicket. You dare not move.
            And you don't. Eventually the beast retreats. But you don't leave. Not until the night has passed and the rays of sun trickle through the boughs.
            You head toward the village and never speak a word of this to anyone.
    
            END.`);
            choice = "End";
        }
        else if (choice === "C"){
            console.log(`\nYou make a run for it. Nothing moving through the woods in the night can be friendly. You hear movement behind you, the sound of something in pursuit.
            You dare not look back. You can hear it gaining. You push your leg muscles to the fullest, your breath ragged with exertion. You swear you can feel
            its breath on the back of your neck as if its jaws were about to snap closed around it. Finally, you burst out of the woods into a clearing. Ahead
            of you is a bridge spanning a river before the path leads into the mountains. You run across the bridge and hear the thing stop behind you. When you
            reach the other side of the bridge, you finally dare to turn around. You almost retch at the sight of it. It cannot be described. It hesitates on the
            other side of the bridge. Perhaps it's afraid of running water? It shuffles from foot to foot, as if contemplating its next move. You look around you and
            spot a knife on the ground.
            What do you do?
    
            A. Grab the knife and cut the rope holding the bridge.
            B. Attempt to untie the bridge's rope with your hands.
            C. Continue up the mountain path confident the beast won't follow.`);

            choice = readline.question("Decision: ");
            choice = choice.toUpperCase().replace(".", "");

            if (choice === "A"){
                console.log(`\nTaking advantage of the creature's indecision, you grab the knife and quickly cut away the ropes holding up the bridge. The bridge tumbles into the waters
                below and the beast roars in anger. You are safe... You turn your back on the frustrated creature and make your way up the mountain path. Finally, after what
                feels like a lifetime, you reach your destination, a cozy cabin overlooking a beautiful vista. The sun's rays just peek over the horizon as you enter. You 
                take a moment to appreciate the beauty before entering the cabin, locking the door and taking a much-needed rest.
        
                Congrats!`);
            }
            else if (choice === "B"){
                console.log(`\nNot wanting to take the time to grab the knife and risk taking your eyes off the creature you begin to wrestle with the knots holding the bridge's rope in place.
                The knots are tight and you feel yourself straining your fingers to get a grip. You look down to get a better grip. Then you feel a huge hand on your shoulder.
                "Need a hand?"
                You can freeze. You can feel the beast's smile without looking. You gulp, and then, nothing.
        
                END.`);
                choice = "End";
            }
            else if (choice === "C"){
                console.log(`\nThe creature's hesitation speaks volumes. It won't cross the river. Breathing a sigh of relief, you turn away to continue up the mountain path.
                It's then that your breath stops short. Immediately you feel its breath on your neck again, jaws ready to snap closed.
                "You shouldn't have turned away."
                It's voice is rough and gnarled, as if it's mouth wasn't meant to speak human language. As you contemplate this thought, you feel a pain. then nothing.
      
                END.`);
                choice = "End";
            }
            else{
                console.log (`\nThe beast senses your indecision and bounds across the bridge. It extends one of its long arms and slashes its claws across your chest. As you fall backwards
                the sight of your own blood streaming forth, you can't help but wonder, "Why did I hesitate?"
        
                END.`);
                choice = "End";
            }
        }
        else{
            console.log(`\nYou hear the sound again, closer this time. A rustle? You turn to face the direction of the noise. 
            The last thing you see is an open maw and pointed teeth.
    
             END.`);
             choice = "End";

        }
    }

    else if (choice === "A" && torchLit === true){
        console.log(`\nThe comforting glow of your torch eases any nerves you might have had walking through the forest at night. The light feels like a barrier surrounding you.
        A smile spreads across your face as you take a deep breath and continue towards the mountain path. After walking for a while you exit the forest and 
        come to a clearing where a bridge spans the river roiling beneath it. You calmly walk across. Before daylight breaks, you have made it up the mountain pass to your cabin
        overlooking the beautiful scenery in this remote locale. You enter, lock the door behind you, and get into the large plush bed. Completely at ease with the world.
    
        Congrats!`);
    }

    else if (choice === "B" && torchLit === false){
        console.log(`\nYou head down the path slowly. The darkness of the forest raises goosebumps across your arms. You take a deep breath, trying to ease your nerves. You
        concentrate on the glow in the distance, using it as an anchor for your emotions. But then something catches your eye. Huddled under a cloak on the side of the road ahead of you, is a figure. 
        The hood is drawn up and their gaze cast downward, so you are unable to make out anything that would identify them. You have to walk by them to get to the village so you continue. As you walk
        closer, you keep an eye on the figure. They don't seem to move. In fact, their stillness is eerie. They are too still. You stop.
    
        What do you do?
    
        A. Call out to the figure, perhaps they are asleep or in need of aid
        B. Inspect the figure
        C. Approach cautiously
        D. Continue to walk past them`);

        choice = readline.question("Decision: ");
        choice = choice.toUpperCase().replace(".", "");

        if (choice === "A"){
            console.log(`\nYou call out to the figure but get no response.
        
            A. Call out again
            B. Inspect the figure
            C. Approach cautiously
            D. Walk past them`);

            choice = readline.question("Decision: ");
            choice = choice.toUpperCase().replace(".", "");

            if (choice === "A"){
                console.log(`\nThe figure's head jerks towards you and your body freezes, unable to move. It rises from the ground as if levitating and approaches you. Despite the chill
                throughout your body beads of sweat drip down your neck as dread fills your entire system. It moves closer and closer until it's drawn hood is inches from you.
                But you still cannot see what lies beneath. You hear it exhale. Then the cloak opens and engulfs you. Then nothing.
            
                END.`);
                choice = "End";
            }
            else if (choice === "B"){
                console.log(`\nYou inspect the figure closely. There is something sitting on the ground beside them.
          
                A. Approach
                B. Walk past`);

                choice = readline.question("Decision: ");
                choice = choice.toUpperCase().replace(".", "");

                if (choice === "A"){
                    console.log(`\n You approach the figure cautiously. They do not move.
                    A. Inspect
                    B. Walk Past`);

                    choice = readline.question("Decision: ");
                    choice = choice.toUpperCase().replace(".", "");

                    if (choice === "A"){
                        console.log(`You inspect the figure closely. Now that you are close enough, you can see there is a sword on the ground next to them. Your proximity makes you feel uneasy.
              
                        A. Grab the sword 
                        B. Walk away`);

                        choice = readline.question("Decision: ");
                        choice = choice.toUpperCase().replace(".", "");

                        if (choice === "A"){
                            hasSword = true;
                        }
                        else if (choice === "B"){
                            console.log(`\nYou walk away from the figure. There is something wrong with them. You'd best not get close. You increase your pace, holding your breath. After you have passed
                            them and have put some distance between you and them, you breathe sigh of relief, smiling as the glow of the village gets ever closer.
                            Suddenly, you feel a cold chill across your back and a raspy voice in your ear.
                            "Why didn't you help me?"
                            Your body goes completely cold, and the life drains from you.
        
                            END.`);
                            choice = "End";
                        }
                         else{
                            console.log(`\nYou ponder your decision. When somehing catches your eye. The hood of the still figure turns toward you unnatural smoothness. You cannot see under the hood but you can feel its
                            gaze fixed on you. You feel cold. It reaches its hand to its side and unsheathes a sword before lunging at you, piercing you in the chest.
                            "Why didn't you help me?" You feel it ask in your mind. It's question reverberates before fading, like all other sensation. It looks like your indecision has been your end.
        
                            END.`);
                            choice = "End";
                        }
                    }
                    else if (choice === "B"){
                        console.log(`\nYou walk away from the figure. There is something wrong with them. You'd best not get close. You increase your pace, holding your breath. After you have passed
                        them and have put some distance between you and them, you breathe sigh of relief, smiling as the glow of the village gets ever closer.
                        Suddenly, you feel a cold chill across your back and a raspy voice in your ear.
                        Why didn't you help me?"
                        Your body goes completely cold, and the life drains from you.
        
                        END.`);
                        choice = "End";
                    }
                    else {
                        console.log(`\nYou ponder your decision. When somehing catches your eye. The hood of the still figure turns toward you unnatural smoothness. You cannot see under the hood but you can feel its
                        gaze fixed on you. You feel cold. It reaches its hand to its side and unsheathes a sword before lunging at you, piercing you in the chest.
                        "Why didn't you help me?" You feel it ask in your mind. It's question reverberates before fading, like all other sensation. It looks like your indecision has been your end.
        
                        END.`)
                        choice = "End";
                    }
                }
                else if (choice === "B"){
                    console.log(`\nYou walk away from the figure. There is something wrong with them. You'd best not get close. You increase your pace, holding your breath. After you have passed
                    them and have put some distance between you and them, you breathe sigh of relief, smiling as the glow of the village gets ever closer.
                    Suddenly, you feel a cold chill across your back and a raspy voice in your ear.
                    Why didn't you help me?"
                    Your body goes completely cold, and the life drains from you.
        
                    END.`);
                    choice = "End";
                }
                else {
                    console.log(`\nYou ponder your decision. When somehing catches your eye. The hood of the still figure turns toward you unnatural smoothness. You cannot see under the hood but you can feel its
                    gaze fixed on you. You feel cold. It reaches its hand to its side and unsheathes a sword before lunging at you, piercing you in the chest.
                    "Why didn't you help me?" You feel it ask in your mind. It's question reverberates before fading, like all other sensation. It looks like your indecision has been your end.
        
                    END.`)
                    choice = "End";
                }
            }
            if (choice === "C"){
                console.log(`\n You approach the figure cautiously. They do not move.
                A. Inspect
                B. Walk Past`);

                choice = readline.question("Decision: ");
                choice = choice.toUpperCase().replace(".", "");

                if (choice === "A"){
                    console.log(`You inspect the figure closely. Now that you are close enough, you can see there is a sword on the ground next to them. Your proximity makes you feel uneasy.
              
                    A. Grab the sword 
                    B. Walk away`);

                    choice = readline.question("Decision: ");
                    choice = choice.toUpperCase().replace(".", "");

                    if (choice === "A"){
                            hasSword = true;
                    }
                    else if (choice === "B"){
                        console.log(`\nYou walk away from the figure. There is something wrong with them. You'd best not get close. You increase your pace, holding your breath. After you have passed
                        them and have put some distance between you and them, you breathe sigh of relief, smiling as the glow of the village gets ever closer.
                        Suddenly, you feel a cold chill across your back and a raspy voice in your ear.
                        "Why didn't you help me?"
                        Your body goes completely cold, and the life drains from you.
        
                        END.`);
                        choice = "End";
                    }
                    else{
                        console.log(`\nYou ponder your decision. When somehing catches your eye. The hood of the still figure turns toward you unnatural smoothness. You cannot see under the hood but you can feel its
                        gaze fixed on you. You feel cold. It reaches its hand to its side and unsheathes a sword before lunging at you, piercing you in the chest.
                        "Why didn't you help me?" You feel it ask in your mind. It's question reverberates before fading, like all other sensation. It looks like your indecision has been your end.
        
                        END.`);
                        choice = "End";
                    }
                }
                else if (choice === "B"){
                    console.log(`\nYou walk away from the figure. There is something wrong with them. You'd best not get close. You increase your pace, holding your breath. After you have passed
                    them and have put some distance between you and them, you breathe sigh of relief, smiling as the glow of the village gets ever closer.
                    Suddenly, you feel a cold chill across your back and a raspy voice in your ear.
                    "Why didn't you help me?"
                    Your body goes completely cold, and the life drains from you.
        
                    END.`);
                    choice = "End";
                }
                else{
                    console.log(`\nYou ponder your decision. When somehing catches your eye. The hood of the still figure turns toward you unnatural smoothness. You cannot see under the hood but you can feel its
                    gaze fixed on you. You feel cold. It reaches its hand to its side and unsheathes a sword before lunging at you, piercing you in the chest.
                    "Why didn't you help me?" You feel it ask in your mind. It's question reverberates before fading, like all other sensation. It looks like your indecision has been your end.
        
                    END.`);
                    choice = "End";
                }
            }
            else if (choice === "D"){
                console.log(`\nYou walk away from the figure. There is something wrong with them. You'd best not get close. You increase your pace, holding your breath. After you have passed
                them and have put some distance between you and them, you breathe sigh of relief, smiling as the glow of the village gets ever closer.
                Suddenly, you feel a cold chill across your back and a raspy voice in your ear.
                Why didn't you help me?"
                Your body goes completely cold, and the life drains from you.
        
                END.`);
                choice = "End";
            }
            
        }    
        else if (choice === "B"){
            console.log(`\nYou inspect the figure closely. There is something sitting on the ground beside them.
          
            A. Approach
            B. Walk past`);

            choice = readline.question("Decision: ");
            choice = choice.toUpperCase().replace(".", "");

            if (choice === "A"){
                console.log(`\n You approach the figure cautiously. They do not move.
                A. Inspect
                B. Walk Past`);

                choice = readline.question("Decision: ");
                choice = choice.toUpperCase().replace(".", "");

                if (choice === "A"){
                    console.log(`You inspect the figure closely. Now that you are close enough, you can see there is a sword on the ground next to them. Your proximity makes you feel uneasy.
              
                    A. Grab the sword 
                    B. Walk away`);

                    choice = readline.question("Decision: ");
                    choice = choice.toUpperCase().replace(".", "");

                    if (choice === "A"){
                            hasSword = true;
                    }
                    else if (choice === "B"){
                        console.log(`\nYou walk away from the figure. There is something wrong with them. You'd best not get close. You increase your pace, holding your breath. After you have passed
                        them and have put some distance between you and them, you breathe sigh of relief, smiling as the glow of the village gets ever closer.
                        Suddenly, you feel a cold chill across your back and a raspy voice in your ear.
                        "Why didn't you help me?"
                        Your body goes completely cold, and the life drains from you.
        
                        END.`);
                        choice = "End";
                    }
                    else{
                        console.log(`\nYou ponder your decision. When somehing catches your eye. The hood of the still figure turns toward you unnatural smoothness. You cannot see under the hood but you can feel its
                        gaze fixed on you. You feel cold. It reaches its hand to its side and unsheathes a sword before lunging at you, piercing you in the chest.
                        "Why didn't you help me?" You feel it ask in your mind. It's question reverberates before fading, like all other sensation. It looks like your indecision has been your end.
        
                        END.`);
                        choice = "End";
                    }
                }
                else if (choice === "B"){
                    console.log(`\nYou walk away from the figure. There is something wrong with them. You'd best not get close. You increase your pace, holding your breath. After you have passed
                    them and have put some distance between you and them, you breathe sigh of relief, smiling as the glow of the village gets ever closer.
                    Suddenly, you feel a cold chill across your back and a raspy voice in your ear.
                    Why didn't you help me?"
                    Your body goes completely cold, and the life drains from you.
        
                    END.`);
                    choice = "End";
                }
                else {
                    console.log(`\nYou ponder your decision. When somehing catches your eye. The hood of the still figure turns toward you with unnatural smoothness. You cannot see under the hood but you can feel its
                    gaze fixed on you. You feel cold. It reaches its hand to its side and unsheathes a sword before lunging at you, piercing you in the chest.
                    "Why didn't you help me?" You feel it ask in your mind. It's question reverberates before fading, like all other sensation. It looks like your indecision has been your end.
        
                    END.`)
                    choice = "End";
                }
            }
            else if (choice === "B"){
                console.log(`\nYou walk away from the figure. There is something wrong with them. You'd best not get close. You increase your pace, holding your breath. After you have passed
                them and have put some distance between you and them, you breathe sigh of relief, smiling as the glow of the village gets ever closer.
                Suddenly, you feel a cold chill across your back and a raspy voice in your ear.
                Why didn't you help me?"
                Your body goes completely cold, and the life drains from you.
        
                END.`);
                choice = "End";
            }
            else {
                console.log(`\nYou ponder your decision. When something catches your eye. The hood of the still figure turns toward you unnatural smoothness. You cannot see under the hood but you can feel its
                gaze fixed on you. You feel cold. It reaches its hand to its side and unsheathes a sword before lunging at you, piercing you in the chest.
                "Why didn't you help me?" You feel it ask in your mind. It's question reverberates before fading, like all other sensation. It looks like your indecision has been your end.
        
                END.`)
                choice = "End";
            }
        }
        else if (choice === "C"){
            console.log(`\n You approach the figure cautiously. They do not move.
            A. Inspect
            B. Walk Past`);

            choice = readline.question("Decision: ");
            choice = choice.toUpperCase().replace(".", "");

            if (choice === "A"){
                console.log(`You inspect the figure closely. Now that you are close enough, you can see there is a sword on the ground next to them. Your proximity makes you feel uneasy.
              
                A. Grab the sword 
                B. Walk away`);

                choice = readline.question("Decision: ");
                choice = choice.toUpperCase().replace(".", "");

                if (choice === "A"){
                    hasSword = true;
                }
                else if (choice === "B"){
                    console.log(`\nYou walk away from the figure. There is something wrong with them. You'd best not get close. You increase your pace, holding your breath. After you have passed
                    them and have put some distance between you and them, you breathe sigh of relief, smiling as the glow of the village gets ever closer.
                    Suddenly, you feel a cold chill across your back and a raspy voice in your ear.
                    "Why didn't you help me?"
                    Your body goes completely cold, and the life drains from you.
        
                    END.`);
                    choice = "End";
                }
                else{
                    console.log(`\nYou ponder your decision. When somehing catches your eye. The hood of the still figure turns toward you unnatural smoothness. You cannot see under the hood but you can feel its
                    gaze fixed on you. You feel cold. It reaches its hand to its side and unsheathes a sword before lunging at you, piercing you in the chest.
                    "Why didn't you help me?" You feel it ask in your mind. It's question reverberates before fading, like all other sensation. It looks like your indecision has been your end.
        
                    END.`);
                    choice = "End";
                }
            }
            else if (choice === "B"){
                console.log(`\nYou walk away from the figure. There is something wrong with them. You'd best not get close. You increase your pace, holding your breath. After you have passed
                them and have put some distance between you and them, you breathe sigh of relief, smiling as the glow of the village gets ever closer.
                Suddenly, you feel a cold chill across your back and a raspy voice in your ear.
                "Why didn't you help me?"
                Your body goes completely cold, and the life drains from you.
        
                END.`);
                choice = "End";
            }
            else{
                console.log(`\nYou ponder your decision. When somehing catches your eye. The hood of the still figure turns toward you unnatural smoothness. You cannot see under the hood but you can feel its
                gaze fixed on you. You feel cold. It reaches its hand to its side and unsheathes a sword before lunging at you, piercing you in the chest.
                "Why didn't you help me?" You feel it ask in your mind. It's question reverberates before fading, like all other sensation. It looks like your indecision has been your end.
        
                END.`);
                choice = "End";
            }
        }
        else if (choice === "D"){
            console.log(`\nYou walk away from the figure. There is something wrong with them. You'd best not get close. You increase your pace, holding your breath. After you have passed
            them and have put some distance between you and them, you breathe sigh of relief, smiling as the glow of the village gets ever closer.
            Suddenly, you feel a cold chill across your back and a raspy voice in your ear.
            Why didn't you help me?"
            Your body goes completely cold, and the life drains from you.
        
            END.`);
            choice = "End";
        }
    }
    else if (choice === "B" && torchLit === true){ // FINISHED
        console.log(`\nYou make your way down the path towards the glow in the distance. You walk at a calm pace, the light of the torch easing any nerves you may have had without it.
        At one point you could swear you saw a cloaked figure sitting on the side of the path. But when you raise your torch for a better look, you see nothing. Must have been the 
        darkness playing a trick on you. Sighing with relief, you walk to the end of the path emerging to see the village sign welcoming you home, and beyond a community that cares for you.
        Walking down the path and nodding at the patrol man guarding the entrance to town, you make your way towards your house, greeting your excited dog as you enter. You beckon him to follow,
        and you both lay down to get some well-deserved sleep.
    
        Congrats!`);
        choice = "End";
    }
}
    
if (hasSword === true && choice !== "End"){
    console.log(`You quickly grab the sword. The cloaked figure lunges, but you jump back to avoid the attack. You take a mighty swing with the sword. It cuts through the cloaked figure like paper.
    The cloaked figure dissolves into a puff of smoke. Whatever it was, you defeated it. With a sigh of relief and a shiny new sword, you head into the village for a well deserved rest.
    
    END`);
    choice = "End";
}