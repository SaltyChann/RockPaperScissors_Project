let kenMove = 'Not working';
let grip = 'not working';
let tamaMove = 'not working';
let LHcounter = 0;
function tamaGrip() {
    tamaMove = Math.floor(Math.random() * 2)
    if (tamaMove === 0) {
        LHcounter = LHcounter + 1;
        tamaMove = 'Light House';
    }
    else if (tamaMove === 1) {
        tamaMove = 'Jumping Stick';
    }
    console.log('Do a ' + tamaMove);
    return;
} //Airplane 0, LightHouse 1, Jumping Stick 2
function TamaMoves() {
    for (i = 0; i < 3; i++) {
        tamaGrip();
    }
}
function chooseGrip() {
    grip = Math.floor(Math.random() * 2)
    if (grip === 0) {
        console.log('You are doing Tama Grip');
        console.log('Do an airplane');
        TamaMoves();
    }
    else  {
        console.log('You are doing Ken Grip')
        KenMoves();
    }
}
function kenGrip() {
    kenMove = Math.floor(Math.random() * 11);
    if (kenMove === 0) {
        kenMove = 'BigCup';
    }
    else if (kenMove === 1) {
        kenMove = 'LittleCup';
    }
    else if (kenMove === 2) {
        kenMove = 'BaseCup';
    }
    else if (kenMove === 3) {
        kenMove = 'Spike';
    }
    else if (kenMove === 4) {
        kenMove = 'Bungee';
    }
    else if (kenMove === 5) {
        kenMove = 'Bird';
    }
    else if (kenMove === 6) {
        kenMove = 'Earth Turn';
    }
    else if (kenMove === 7) {
        kenMove = 'Ken Flip';
    }
    else if (kenMove === 8) {
        kenMove = 'Orbit';
    }
    /*else if (beginnerMove === 9) {
        beginnerMove = 'Frying Pan';
    }*/
    else if (kenMove === 9) {
        kenMove = 'Swing Spike'
    }
    else if (kenMove === 10) {
        kenMove = 'Penguin Catch';
    }
    console.log('Do a ' + kenMove)
    return;
}
function KenMoves() {
    for (i =0 ; i < 3; i++) {
        kenGrip();
    }
}
//chooseGrip();
KenMoves();
/* big cup 0, little cup 1, base cup 2, spike 3, bungee 4, Bird 5, EarthTurn 6, Ken Flip 7, Orbit 8, Frying Pan 9, Swing Spike 10
Penguin catch 10,

COMPATABILITY ISSUES ---------

Only Earth Turn after Spike
No Bungee to spike, bird, Frying Pan
No Ken Flip from Base cup, Spike
No Orbit Bungee
No Bungee to bird 
No Double anything
No start on Orbit, Bungee
Can't End on bungee

*/