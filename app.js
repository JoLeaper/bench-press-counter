const repsSpan = document.getElementById('reps');
const muscleButton = document.getElementById('muscle-button');
const img = document.getElementById('image');
const liftingLevel = document.getElementById('lifting-level');

let reps = 0;

muscleButton.addEventListener('click', () => {
    reps++;
    repsSpan.textContent = reps;

    if (reps > 10 && reps < 20) {
        liftingLevel.textContent = 'You are getting stronger!';
        img.src = 'https://66.media.tumblr.com/tumblr_lok3yjlr471qfghx2o1_500.png';
    } 
    else if (reps > 20 && reps < 30) {
        liftingLevel.textContent = 'Your gains are TITANIC!';
        img.src = 'https://static.comicvine.com/uploads/original/11118/111184078/4874827-1652289316-tumbl.jpg';
        
    } else if (reps > 30) {
        liftingLevel.textContent = 'Are you a Greek God?!';
        img.src = 'https://skinnyguyshealth.files.wordpress.com/2017/04/spongebob-bodybuilder.jpg?w=1200&h=628&crop=1';
        
    }

});