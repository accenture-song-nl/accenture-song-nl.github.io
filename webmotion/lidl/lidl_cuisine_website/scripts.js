document.addEventListener('DOMContentLoaded', () => {
    init();
});

function init() {
    
    window.wordObjArray = prepareWordArray();

    idleAnimation();

         
    document.querySelector('.PlayGameButton').addEventListener('click', () => {
        document.querySelector('.PlayGameButton').style.display = 'none';
        document.querySelector('.introScreenContainer').style.display = 'none';
        document.querySelector('.gameElementContainer').style.display = 'flex';


        document.querySelector('.wordInputContainer').addEventListener('click', () => {
            document.querySelector('#mobileTextInputfield').focus();
        });
        
        console.log(document.querySelector('.productContainer').offsetHeight);
        console.log(document.querySelector('.gameElementContainer').offsetHeight);
        
        window.scrollTo(0, 150);
        startPreCountdown();

    });
};
function idleAnimation() { 

    var tl = new TimelineMax({ paused: true });
    tl.add('start')
    .from('.product', { duration: 0.7, x: -25, opacity: 0, ease: 'power1.inOut' }, 'start')
    
    tl.add('circleIn')
    .from('.circle', { duration: 0.5,  opacity: 0, ease: 'power1.inOut' }, 'circleIn')
    .from('.circle', { duration: 0.7, x: -25, scale: 0.3,  rotation:-120, ease: "back.out(1.7)"}, 'circleIn')
    
    tl.add('textIn')
    .from('.introText h1', { duration: 0.7, y: 25, opacity: 0, ease: 'power1.inOut' }, 'textIn')
    .from('.introText p', { duration: 0.7, y: 25, opacity: 0, ease: 'power1.inOut'}, 'textIn+=0.2')

    tl.add('ctaIn')
    .from('.PlayGameButton', { duration: 0.7, y: 25, opacity: 0, ease: 'power1.inOut' }, 'ctaIn+=0.5')
    .to('.PlayGameButton', { duration: 0.5, scale: 1.1, yoyo: true, repeat: -1, delay: 2 }, 'ctaIn+=1');
    tl.play(0)
}

function startPreCountdown() { 
    document.querySelector('.exampleWord').innerHTML = wordObjArray[0].word;
    var preCountDownDuration = 3;
    gsap.to('.preCountDown span', {duration: 0.8, scale: 3, opacity: 0, repeat: preCountDownDuration-1, repeatDelay:0.2, delay:0.5});
    gsap.to('.preCountDown', preCountDownDuration, {
        opacity: 1,
        delay: 1.5,
        onStart: function () {
            gsap.to('.preCountDown span', {duration: 0.8, scale: 3, opacity: 0, repeat: preCountDownDuration-1, repeatDelay:0.2});
            // gsap.fromTo('.preCountDown span', { duration: 2, scale: 0.6, opacity: 0 }, { scale: 1.5, opacity: 1, repeat: preCountDownDuration-1});
        },
        onUpdate: function () {
            document.querySelector('.preCountDown span').innerHTML = Math.floor(preCountDownDuration - this.progress() * preCountDownDuration);
            // gsap.set('.countdownBarInner', { width: 100 / preCountDownDuration * Math.ceil(this.progress() * preCountDownDuration) + '%' });
        },
        onComplete: function () {
            document.querySelector('.preCountDown').style.display = 'none';
            document.querySelector('.countdown').style.display = 'flex';
            document.querySelector('.countdownBarInner').style.background = '#FFF000';
            document.querySelector('.gameElementContainer p').innerHTML = 'Type out what it can do:';
            startGame();
        }
    });

}

function startGame() {

    document.querySelector('.exampleWord').innerHTML = wordObjArray[0].word;
    checkUserInput();
    setTimeout(() => {
        document.querySelector('#mobileTextInputfield').focus();    
    }, 1000);
    
    console.log('set Focus2');
    
    startCountdown(15);

}

function startCountdown(seconds) {
    window.countdownbaranimation = gsap.fromTo('.countdownBarInner', {width: '100%'},{
        duration: seconds, width: 0, ease: 'linear',
        onUpdate: function () {
            document.querySelector('.countdownText.countdown span').innerHTML = Math.round(seconds - this.progress() * seconds);               
    }, onComplete: function () {
            document.querySelector('.countdownText.countdown').innerHTML = '&nbsp;';
            document.querySelector('.countdownText.countdown').style.display = 'none';
            document.querySelector('.gameElementContainer p').style.display = 'none';
            document.querySelector('.countdownBarInner').style.width = '100%';
            document.querySelector('.countdownBarInner').style.background = '#E60A14';
            document.querySelector('.exampleWord').innerHTML = 'TIMES UP!';
            document.querySelector('.exampleWord').style.color = '#fff';
            document.querySelector('.typedWord').innerHTML = '&nbsp;';
            document.querySelector('.typedWord').style.display = 'none';

            window.gameFinished = true;
            goToEndScreen('fail');
    }});
}

function checkUserInput() { 
    window.characterCurrentCount = 0;
    window.completedWords = 0;
    window.wordInput = wordObjArray[0].characters;
    window.characterTotalCount = window.wordInput.length;
    window.inputExceptions = ['Shift', 'CapsLock', 'Control', 'Alt', 'Tab', 'Space', 'Enter', 'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Meta', 'Escape', 'Home', 'End', 'PageUp', 'PageDown', 'Insert', 'ContextMenu', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'];
    window.wrongCharacterAnimationIsPlaying = false;
    document.querySelector('.upcomingCharacterHint').innerHTML += wordInput[characterCurrentCount];
    
    
    document.querySelector('body').addEventListener('keyup', keyPress, true);
}
function keyPress(e) {    
    // const scrollHeight = document.body.scrollHeight;
    // console.log(document.body.scrollHeight);
    // console.log('checkkk');
    
    
    // const scrollingElement = (document.body);
    // scrollingElement.scrollTop = scrollingElement.scrollHeight;

    window.upcomingCharacter = characterCurrentCount + 1;

    if (window.gameFinished == true) {
        return;
    }

    if (mobileAndTabletCheck() == true) {
        var mobileInput = [];

        var input = document.querySelector('#mobileTextInputfield').value;
        input.split('').forEach((char) => {
            mobileInput.push(char);
        });
        
        var input = mobileInput[mobileInput.length - 1];
    }
    else {
        var input = e.key;    
    }        


    if (input.toLowerCase() == wordInput[characterCurrentCount] || input == wordInput[characterCurrentCount].toLowerCase() || input.toLowerCase() == wordInput[characterCurrentCount].toLowerCase()) {
        document.querySelector('.typedWord').innerHTML += wordInput[characterCurrentCount];
        if (wordInput[characterCurrentCount + 1] !== undefined) {
            document.querySelector('.upcomingCharacterHint').innerHTML += wordInput[characterCurrentCount+1];    
        }
        
        characterCurrentCount++;
    }
    else {
        if(inputExceptions.includes(input)) {
            return;
        }    
        if (wrongCharacterAnimationIsPlaying == true) {
            return;
        }   
        gsap.to('.wordInputContainer', {
            duration: 0.1, x: -10, yoyo: true, repeat: 3
            , onStart: function () {
                wrongCharacterAnimationIsPlaying = true;
            }
            , onComplete: function () {
                wrongCharacterAnimationIsPlaying = false;
            }
        });
    }
    
    if (characterCurrentCount == characterTotalCount) {
        completedWords++;
        if (completedWords >= wordObjArray.length) { 
            goToEndScreen('win');
            window.gameFinished = true;
            // return;
        }
        else {
            document.querySelector('.typedWord').innerHTML = '';
            document.querySelector('.upcomingCharacterHint').innerHTML = '';            
            gsap.to('.upcomingCharacterHint', { duration: 0, opacity: 0 });

            gsap.to(['.exampleWord'], {
                duration: 0.3, scale: 1.5, opacity: 0, onComplete: function () {
                    document.querySelector(['.exampleWord']).innerHTML = wordObjArray[completedWords].word;
                    gsap.fromTo(['.exampleWord'], { duration: 0.3, scale: 0.6, opacity: 0 }, {
                        scale: 1, opacity: 1, onComplete: function () {
                            gsap.to('.upcomingCharacterHint', { duration: 0.3, opacity: 1 });
                        }
                    });
                    
                }
            })
            // document.querySelector('.exampleWord').innerHTML = wordObjArray[completedWords].word;

            wordInput = wordObjArray[completedWords].characters;
            characterTotalCount = wordInput.length;
            characterCurrentCount = 0;
            document.querySelector('.upcomingCharacterHint').innerHTML += wordInput[characterCurrentCount]
            // document.querySelector('.upcomingCharacterHint').innerHTML += wordInput[characterCurrentCount + 1];
        }        
    }
}


function goToEndScreen(result) {
    document.querySelector('#mobileTextInputfield').blur();
    window.countdownbaranimation.pause();
    document.querySelector('.endScreenCTA').style.display = 'flex';

    if (result == 'win') {
        document.querySelector('.endScreenCTA').innerHTML = 'Enter to win';
        document.querySelector('.countdownBarInner').style.background = '#0AD000';
        document.querySelector('.countdownBarInner').style.width = '100%';
        document.querySelector('.exampleWord').innerHTML = 'COMPLETED!';
        document.querySelector('.exampleWord').style.color = '#fff';
        document.querySelector('.upcomingCharacterHint').style.display = 'none';
        document.querySelector('.typedWord').style.display = 'none';
        document.querySelector('.gameElementContainer p').style.display = 'none';
        
        // Add confetti animation
        const confettiSettings = {
            target: 'confetti-canvas',
            color: ['#FF0000', '#00FF00', '#0000FF'],
            clock: 25,
            rotate: true,
            max: 100,
            start_from_edge: true,
            props: ["square"],
        };
        window.confetti = new ConfettiGenerator(confettiSettings);
        window.confetti.render();
        document.querySelector('.endScreenCTA').addEventListener('click', goToForm, true);
    }
    if (result == 'fail') { 
        document.querySelector('.upcomingCharacterHint').style.display = 'none';
        document.querySelector('.exampleWord').innerHTML = 'Times Up!';
        document.querySelector('.exampleWord').style.color = '#fff';
        document.querySelector('.upcomingCharacterHint').style.display = 'none';
        document.querySelector('.typedWord').style.display = 'none';
        document.querySelector('.gameElementContainer p').style.display = 'none';
        document.querySelector('.endScreenCTA').innerHTML = 'Try Again';
        document.querySelector('.endScreenCTA').addEventListener('click', resetGame, true);

        gsap.to('.endScreenCTA', {duration: 0.5, scale: 1.1, yoyo: true, repeat: -1, delay: 1});
    }

    document.querySelector('body').removeEventListener('keyup', () => {
    });
}

function goToForm() {
    window.confetti.clear();
    document.querySelector('.formScreenContainer').style.display = 'flex';
    document.querySelector('.gameElementContainer').style.display = 'none';
    document.querySelector('.productContainer').style.display = 'none';
    document.querySelector('.endScreenCTA').removeEventListener('click', goToForm, true);
}

function resetGame() {  
    document.querySelector('.endScreenCTA').removeEventListener('click', resetGame, true);
    location.reload();
}

function prepareWordArray() { 
    var words = [
        "Sous Vide",
        "Cooking Pilot",
        "Slow Cooking"
    ];

    var NewWordArray = words.map((word) => {
        return word.split('');
    });

    var wordInputArray = [];
    words.forEach((word, index) => {
        var wordObj = {
            word: words[index],
            characters: NewWordArray[index]
        }
        wordInputArray.push(wordObj);
    });    
    return wordInputArray;
}

function mobileAndTabletCheck() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};