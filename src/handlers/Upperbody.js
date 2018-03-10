// Upperbody Handler
module.  exports = function () {

  const upperbody = [
    {
      name: 'Warrior Pose one',
	  benefits:'This exercise strengthens muscles of the back, shoulders and arms.  ',
      description: 'Stand erect, and place your legs slightly apart, with your hands hanging alongside your body.   You must make your thigh muscles firm.   Lift your kneecaps while ensuring you do not harden the lower part of your belly.   Strengthen the inner arches of your inner ankles as you lift them.  Look slightly upward.   Now breathe in and stretch your shoulders, arms, and chest upwards.   Raise your heels, making sure your body weight is on your toes.  Feel the stretch in your body right from your feet to your head.   Now Lift your arms perpendicular to the floor and parallel to each other.  Turn your left foot 45 to 60 degrees to the right and the right toes should point forward i.  e.   90 degrees.   Your knee should be in line with the ankle.  Breathe out and move your torso to the right.  Now bend your right knee over the right ankle making right shin perpendicular to the floor.  Keep your chest out and shoulders relaxed, feel the stretch down your torso and spine.  If you want to feel more stretch, joins your palms and hold on this position for 30 to 60 seconds.  Now breathe out and following the same steps come back to the original position.  Now repeat the same with the left leg.  ',
    },
	{
      name: 'Jumping jacks',
	  benefits:'This exercise helps to strength the upper body',
      description: 'Stand with your legs shoulder-width apart, knees slightly bent.   Bring right arm out to 90 degrees angle, with hand behind head, fingers lightly at ears.    Crunch to side, bringing elbow to knee at waist level.   Moving fast.    One.   two.   three.   four.   five.   six.   seven.   eight.   nine.   ten.   nine.   eight.   seven.   six.   five.   four.   three.   two.   one.   Now switch to the other side start moving fast.  One.   two.   three.   four.   five.   six.   seven.   eight.   nine.   ten.   nine.   eight.    seven.   six.   five.   four.   three.   two.   one.   Close your eyes and relax for few seconds.  ',
    },  
	{
      name: 'Mountain climbers',
	  benefits:'This exercise helps to strengthen your upper body',
      description: 'On the floor, get in basic pushup position, arms in line with your chest.  Bring right knee up to chest, then back to original position.  Alternate movement with left leg.   Motion mimics climbing a mountain.  Move rapidly.    One.   two.   three.   four.   five.   six.   seven.   eight.   nine.   ten.   nine.   eight.   seven.   six.   five.   four.   three.   two.   one.  On the floor, get in basic pushup position, arms in line with your chest.  Bring right knee in and across, to left elbow.  Do 10 each side.    One.   two.   three.   four.   five.   six.   seven.   eight.   nine.   ten.   nine.   eight.   seven.   six.   five.   four.   three.   two.   one.   On the floor, get in basic pushup position, arms in line with your chest.  Bring right knee to outside of right elbow (works the obliques).  Do 10 each side.    One.   two.   three.   four.   five.   six.   seven.   eight.   nine.   ten.   nine.   eight.   seven.   six.   five.   four.   three.   two.   one.    ',
    },  
	{
      name: 'Floor work out',
	  benefits:'This exercise helps to strengthen your upper body',
      description: 'Lie flat on floor, right leg straight out, left leg bent at 90 degrees angle, foot on floor.  Place right hand lightly behind head.   On exhale, bring elbow to left knee.  Repeat this for 10 times.   One.   two.   three.   four.   five.   six.   seven.   eight.   nine.   ten.   Now switch to the opposite side.   Start doing.   One.   two.   three.   four.   five.   six.   seven.   eight.   nine.   ten.   Lie flat on floor with both knees at 90 degrees, feet flat on the floor.  Keeping arms straight at sides, crunch forward, exhaling on way up.   Repeat now.   One.   two.   three.   four.   five.   six.   seven.   eight.   nine.   ten.   Switch to the opposite side and start doing.  One.   two.   three.   four.   five.   six.   seven.   eight.   nine.   ten.  ',
    },  
	{
      name: 'Locust Pose',
	  benefits:'This exercise helps to relieves fatigue and tension in the back.  ',
      description: 'This back bending yoga asana strengthens the vertebral column and arms.   Lay on the floor with your torso facing downwards.   Lift your head towards the back and raise your legs upwards while raising your arms parallelly above the ground.   The shoulders and hips are also strengthened.   ',
    },  
	{
      name: 'Standing Row',
	  benefits:'This helps to strengthens your upper body',
      description: 'Stand with feet hip-width apart and knees slightly bent, arms extended, holding dumbbells with palms facing each other.   Lean forward about 45 degrees from hips.   Bend elbows 90 degrees and pull them up toward ceiling, keeping arms close to sides.   Repeat for 10 times.     One.   two.   three.   four.   five.   six.   seven.   eight.   nine.   ten.  ',
    },  
	{
      name: 'Back and neck stretch',
	  benefits:'This helps to strengthens your upper body',
      description: 'Sit up tall in a chair.   Lower your right ear toward your right shoulder, feeling a stretch on the left side of your neck and upper back.   Hold for 5 full breaths.   One.   Two .  Three.   Four.   Five.   Breath out.    To increase the stretch, place your right hand on the top of your head and gently pull down.   Repeat on the other side.   Hold for 5 full breaths.   One Two Three Four FIve.  Breath out.   ',
    },
	{
      name: 'Side stretch',
	  benefits:'This helps to strengthens your upper body',
      description: 'Lie faceup with knees bent and feet on the floor.   Cross right thigh over left, allowing both legs to gradually fall to the right; you should feel the stretch along your left side.   Hold there for 5 breaths,one .  two.   three.   four.   five and breath out.    deepening the stretch with each exhalation.   Return to center and repeat, switching legs.  Hold there for 5 breaths,one.   two.   three.   four.   five and breath out.   ',
    },
	{
      name: 'Seated twist',
	  benefits:'This helps to strengthens your upper body',
      description: 'Sit tall on a chair.   Place your right ankle on your left thigh and gently turn toward the right.   Hold there for 5 full breaths one.   two.   three.   four.   five and breath out.   deepening the stretch with each exhalation.   To increase the stretch, gently pull your right knee toward your chest.   ',
    }
  ];
 
  const randomEvent = upperbody[Math.  floor(Math.  random() * upperbody.  length)];
  this.  attributes.  lastIntent = 'Upperbody';
  this.  emit(':ask', `Lets start ${randomEvent.  name}.    ${randomEvent.  benefits}.   ${randomEvent.  description}.   Would you like to do another upper body exercise?`, 'Would you like to do another upper body exercise?');
};
