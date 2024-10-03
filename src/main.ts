
import './styles/main.scss';
// Import styles (Cat UI)
import "./styles/cat_ui/main.scss";
/*import "./styles/cat_ui/title.main.scss";
import "./styles/cat_ui/button.main.scss";
import "./styles/cat_ui/input.a.scss";*/
// ... existing code ...
/*
export const mainWords:Array<string> = [
    "a",
    "again",
    "all",
    "also",
    "and",
    "another",
    "any",
    "around",
    "as",
    "ask",
    "at",
    "back",
    "because",
    "become",
    "before",
    "begin",
    "both",
    "but",
    "by",
    "call",
    "can",
    "change",
    "child",
    "come",
    "could",
    "course",
    "day",
    "develop",
    "each",
    "early",
    "end",
    "even",
    "eye",
    "face",
    "fact",
    "few",
    "first",
    "follow",
    "from",
    "general",
    "get",
    "give",
    "good",
    "govern",
    "group",
    "hand",
    "have",
    "he",
    "head",
    "help",
    "here",
    "high",
    "hold",
    "home",
    "how",
    "however",
    "if",
    "increase",
    "interest",
    "it",
    "know",
    "large",
    "last",
    "lead",
    "leave",
    "life",
    "like",
    "line",
    "little",
    "look",
    "make",
    "man",
    "may",
    "mean",
    "might",
    "more",
    "must",
    "need",
    "never",
    "new",
    "no",
    "now",
    "number",
    "of",
    "off",
    "old",
    "on",
    "one",
    "open",
    "or",
    "order",
    "out",
    "over",
    "own",
    "part",
    "people",
    "person",
    "place",
    "plan",
    "play",
    "point",
    "possible",
    "present",
    "problem",
    "program",
    "public",
    "real",
    "right",
    "run",
    "say",
    "see",
    "seem",
    "show",
    "small",
    "some",
    "stand",
    "state",
    "still",
    "such",
    "system",
    "take",
    "than",
    "that",
    "the",
    "then",
    "there",
    "these",
    "they",
    "thing",
    "think",
    "this",
    "those",
    "time",
    "to",
    "under",
    "up",
    "use",
    "very",
    "way",
    "what",
    "when",
    "where",
    "while",
    "will",
    "with",
    "without",
    "work",
    "world",
    "would",
    "write",
    "you",
    "she",
    "set",
    "we",
    "long",
    "in",
    "many",
    "do",
    "after",
    "which",
    "so",
    "same",
    "other",
    "house",
    "during",
    "much",
    "just",
    "consider",
    "since",
    "should",
    "only",
    "tell",
    "about"
  ]
// Create a function to generate a random sentence
function generateRandomSentence(words: string[]): string {
    const sentenceLength = Math.floor(Math.random() * 10) + 10; // Between 3 and 7 words
    let sentence = '';
    
    for (let i = 0; i < sentenceLength; i++) {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        sentence += (i === 0 ? randomWord.charAt(0).toUpperCase() + randomWord.slice(1) : randomWord) + ' ';
    }
    
    return sentence.trim() + '';
}

// Create the variable with the random sentence
const randomSentence = generateRandomSentence(mainWords);

// Modify the input event to use the new sentence
/*input_text?.addEventListener("input", (e: InputEvent) => {    
    paragraph_text!.textContent = (e.target as HTMLInputElement).value;

    if((e.target as HTMLInputElement).value === randomSentence){
        console.log("Correct");
    }
});


addEventListener("DOMContentLoaded",(e:Event) => {
    text_placeholder!.textContent = randomSentence;
})

input_text?.addEventListener("input", (e: InputEvent) => {
    const inputValue = (e.target as HTMLInputElement).value;
    const inputWords = inputValue.split(' ');
    const sentenceWords = randomSentence.split(' ');
    
    let highlightedText = '';
    
    inputWords.forEach((word, index) => {
        if (word === sentenceWords[index] || word === '') {
            highlightedText += word + ' ';
        } else {
            highlightedText += `<span style="color: red;">${word}</span> `;
        }
    });
    
    paragraph_text!.innerHTML = highlightedText.trim();

    if(inputValue === randomSentence){
        console.log("Correct");
    }
});

addEventListener("DOMContentLoaded", (e: Event) => {
    paragraph_text!.textContent = randomSentence;

});
// ... rest of the code ...



// ... resto del código ...

// ... existing code ...

input_text?.addEventListener("input", (e: InputEvent) => {
    const inputValue = (e.target as HTMLInputElement).value;
    const inputWords = inputValue.split(' ');
    const sentenceWords = randomSentence.split(' ');
    
    let highlightedText = '';
    
    sentenceWords.forEach((word, index) => {
        if (inputWords[index] === undefined) {
            highlightedText += `<span style="color: gray;">${word}</span> `;
        } else if (inputWords[index] === word) {
            highlightedText += `<span style="color: green;">${word}</span> `;
        } else {
            const correctPart = word.slice(0, inputWords[index].length);
            const incorrectPart = inputWords[index].slice(correctPart.length);
            const remainingPart = word.slice(inputWords[index].length);
            highlightedText += `<span style="color: green;">${correctPart}</span><span style="color: red;">${incorrectPart}</span><span style="color: gray;">${remainingPart}</span> `;
        }
    });
    
    paragraph_text!.innerHTML = highlightedText.trim();

    if(inputValue === randomSentence){
        console.log("Correct");
    }
});

*/
/*


import { words as INITIAL_WORDS } from './word/data.ts'

  const $time = document.querySelector('time');
  const $paragraph = document.querySelector('p');
  const $input = document.querySelector('input');
  const $game = document.querySelector('#game')
  const $results = document.querySelector('#results')
  const $wpm = $results!.querySelector('#results-wpm')
  const $accuracy = $results!.querySelector('#results-accuracy')
  const $button = document.querySelector('#reload-button')

  const INITIAL_TIME = 30;

  let words = []
  let currentTime = INITIAL_TIME
  let playing: boolean

  initGame()
  initEvents()

  function initGame() {
    $game!.style.display = 'flex'
    $results!.style.display = 'none'
    $input!.value = ''

    playing = false

    words = INITIAL_WORDS.toSorted(
      () => Math.random() - 0.5
    ).slice(0, 50)
    currentTime = INITIAL_TIME

    $time!.textContent = currentTime.toString()

    $paragraph!.innerHTML = words.map((word: string, index: number) => {
      const letters = word.split('')

      return `<word>
        ${letters
          .map(letter => `<letter>${letter}</letter>`)
          .join('')
        }
      </word>
      `
    }).join('')

        const $firstWord = $paragraph!.querySelector('word')
    $firstWord!.classList.add('active')
    $firstWord!.querySelector('letter')!.classList.add('active')
  }

  function initEvents() {
    document.addEventListener('keydown', () => {
      $input!.focus()
      if (!playing) {
        playing = true
        const intervalId = setInterval(() => {
          currentTime--
          $time!.textContent = currentTime.toString()

          if (currentTime === 0) {
            clearInterval(intervalId)
            gameOver()
          }
        }, 1000)
      }
    })
    $input!.addEventListener('keydown', onKeyDown)
    $input!.addEventListener('keyup', onKeyUp)
    $button!.addEventListener('click', initGame)

  }

  function onKeyDown(event: KeyboardEvent) {
    const $currentWord = $paragraph!.querySelector('word.active')
    const $currentLetter = $currentWord!.querySelector('letter.active')

    const { key } = event
    if (key === ' ') {
      event.preventDefault()

      const $nextWord = $currentWord!.nextElementSibling
      const $nextLetter = $nextWord!.querySelector('letter')

      $currentWord!.classList.remove('active', 'marked')
      $currentLetter!.classList.remove('active')

      $nextWord!.classList.add('active')
      $nextLetter!.classList.add('active')

      $input!.value = ''

      const hasMissedLetters = $currentWord!.querySelectorAll('letter:not(.correct)').length > 0

      const classToAdd = hasMissedLetters ? 'marked' : 'correct'
      $currentWord!.classList.add(classToAdd)

      return
    }

    if (key === 'Backspace') {
      const $prevWord = $currentWord!.previousElementSibling
      const $prevLetter = $currentLetter!.previousElementSibling

      if (!$prevWord && !$prevLetter) {
        event.preventDefault()
        return
      }

      const $wordMarked = $paragraph!.querySelector('word.marked')
      if ($wordMarked && !$prevLetter) {
        event.preventDefault()
        $prevWord!.classList.remove('marked')
        $prevWord!.classList.add('active')

        const $letterToGo = $prevWord!.querySelector('letter:last-child')

        $currentLetter!.classList.remove('active')
        $letterToGo!.classList.add('active')

        $input!.value = [
          ...$prevWord!.querySelectorAll('letter.correct, letter.incorrect')
        ].map($el => {
          return $el.classList.contains('correct') ? $el.innerText : '*'
        })
          .join('')
      }
    }
  }

  function onKeyUp() {
    // recuperamos los elementos actuals
    const $currentWord = $paragraph!.querySelector('word.active')
    const $currentLetter = $currentWord!.querySelector('letter.active')

    const currentWord = $currentWord!.innerText!.trim()
    $input!.maxLength = currentWord.length

    const $allLetters = $currentWord!.querySelectorAll('letter')

    $allLetters.forEach($letter => $letter.classList.remove('correct', 'incorrect'))

    $input!.value.split('').forEach((char, index) => {
      const $letter = $allLetters[index]
      const letterToCheck = currentWord[index]

      const isCorrect = char === letterToCheck
      const letterClass = isCorrect ? 'correct' : 'incorrect'
      $letter.classList.add(letterClass)
    })

    $currentLetter!.classList.remove('active', 'is-last')
    const inputLength = $input!.value.length
    const $nextActiveLetter = $allLetters[inputLength]

    if ($nextActiveLetter) {
      $nextActiveLetter.classList.add('active')
    } else {
      $currentLetter!.classList.add('active', 'is-last')
      // TODO: gameover si no hay próxima palabra
    }
  }

  function gameOver() {
    $game!.style.display = 'none'
    $results!.style.display = 'flex'

    const correctWords = $paragraph!.querySelectorAll('word.correct').length
    const correctLetter = $paragraph!.querySelectorAll('letter.correct').length
    const incorrectLetter = $paragraph!.querySelectorAll('letter.incorrect').length

    const totalLetters = correctLetter + incorrectLetter

    const accuracy = totalLetters > 0
      ? (correctLetter / totalLetters) * 100
      : 0

    const wpm = correctWords * 60 / INITIAL_TIME
    $wpm!.textContent = wpm
    $accuracy!.textContent = `${accuracy.toFixed(2)}%`
  }*/

    import { words as INITIAL_WORDS } from './word/data.ts';
import './styles/main.scss';
import "./styles/cat_ui/main.scss";


const $time = document.querySelector('time') as HTMLElement;
const $paragraph = document.querySelector('p') as HTMLElement;
const $input = document.querySelector('input') as HTMLInputElement;
const $game = document.querySelector('#game') as HTMLElement;
const $results = document.querySelector('#results') as HTMLElement;
const $wpm = $results?.querySelector('#results-wpm') as HTMLElement;
const $accuracy = $results?.querySelector('#results-accuracy') as HTMLElement;
const $button = document.querySelector('#reload-button') as HTMLElement;

const INITIAL_TIME = 30;

let words: string[] = [];
let currentTime = INITIAL_TIME;
let playing: boolean;

initGame();
initEvents();

function initGame() {
  if ($game && $results && $input && $time && $paragraph) {
    $game.style.display = 'flex';
    $results.style.display = 'none';
    $input.value = '';

    playing = false;

    words = INITIAL_WORDS.sort(() => Math.random() - 0.5).slice(0, 50);
    currentTime = INITIAL_TIME;

    $time.textContent = currentTime.toString();

    $paragraph.innerHTML = words.map((word: string) => {
      const letters = word.split('');
      return `<word>
        ${letters.map(letter => `<letter>${letter}</letter>`).join('')}
      </word>`;
    }).join('');

    const $firstWord = $paragraph.querySelector('word');
    $firstWord?.classList.add('active');
    $firstWord?.querySelector('letter')?.classList.add('active');
  }
}

function initEvents() {
  document.addEventListener('keydown', () => {
    $input?.focus();
    if (!playing) {
      playing = true;
      const intervalId = setInterval(() => {
        currentTime--;
        if ($time) $time.textContent = currentTime.toString();

        if (currentTime === 0) {
          clearInterval(intervalId);
          gameOver();
        }
      }, 1000);
    }
  });
  $input?.addEventListener('keydown', onKeyDown);
  $input?.addEventListener('keyup', onKeyUp);
  $button?.addEventListener('click', initGame);
}

function onKeyDown(event: KeyboardEvent) {
  const $currentWord = $paragraph?.querySelector('word.active');
  const $currentLetter = $currentWord?.querySelector('letter.active');

  const { key } = event;
  if (key === ' ') {
    event.preventDefault();

    const $nextWord = $currentWord?.nextElementSibling as HTMLElement;
    const $nextLetter = $nextWord?.querySelector('letter');

    $currentWord?.classList.remove('active', 'marked');
    $currentLetter?.classList.remove('active');

    $nextWord?.classList.add('active');
    $nextLetter?.classList.add('active');

    if ($input) $input.value = '';

    const hasMissedLetters = $currentWord?.querySelectorAll('letter:not(.correct)').length ?? 0 > 0;

    const classToAdd = hasMissedLetters ? 'marked' : 'correct';
    $currentWord?.classList.add(classToAdd);

    return;
  }

  if (key === 'Backspace') {
    const $prevWord = $currentWord?.previousElementSibling as HTMLElement;
    const $prevLetter = $currentLetter?.previousElementSibling as HTMLElement;

    if (!$prevWord && !$prevLetter) {
      event.preventDefault();
      return;
    }

    const $wordMarked = $paragraph?.querySelector('word.marked');
    if ($wordMarked && !$prevLetter) {
      event.preventDefault();
      $prevWord?.classList.remove('marked');
      $prevWord?.classList.add('active');

      const $letterToGo = $prevWord?.querySelector('letter:last-child');

      $currentLetter?.classList.remove('active');
      $letterToGo?.classList.add('active');

      if ($input && $prevWord) {
        $input.value = Array.from($prevWord.querySelectorAll('letter.correct, letter.incorrect'))
          .map($el => ($el.classList.contains('correct') ? $el.textContent : '*'))
          .join('');
      }
    }
  }
}

function onKeyUp() {
  const $currentWord = $paragraph?.querySelector('word.active');
  const $currentLetter = $currentWord?.querySelector('letter.active');

  const currentWord = $currentWord?.textContent?.trim() ?? '';
  if ($input) $input.maxLength = currentWord.length;

  const $allLetters = $currentWord?.querySelectorAll('letter');

  $allLetters?.forEach($letter => $letter.classList.remove('correct', 'incorrect'));

  if ($input && $allLetters) {
    $input.value.split('').forEach((char, index) => {
      const $letter = $allLetters[index];
      const letterToCheck = currentWord[index];

      const isCorrect = char === letterToCheck;
      const letterClass = isCorrect ? 'correct' : 'incorrect';
      $letter?.classList.add(letterClass);
    });
  }

  $currentLetter?.classList.remove('active', 'is-last');
  const inputLength = $input?.value.length ?? 0;
  const $nextActiveLetter = $allLetters?.[inputLength];

  if ($nextActiveLetter) {
    $nextActiveLetter.classList.add('active');
  } else {
    $currentLetter?.classList.add('active', 'is-last');
  }
}

function gameOver() {
  if ($game && $results && $paragraph && $wpm && $accuracy) {
    $game.style.display = 'none';
    $results.style.display = 'flex';

    const correctWords = $paragraph.querySelectorAll('word.correct').length;
    const correctLetter = $paragraph.querySelectorAll('letter.correct').length;
    const incorrectLetter = $paragraph.querySelectorAll('letter.incorrect').length;

    const totalLetters = correctLetter + incorrectLetter;

    const accuracy = totalLetters > 0
      ? (correctLetter / totalLetters) * 100
      : 0;

    const wpm = correctWords * 60 / INITIAL_TIME;
    $wpm.textContent = wpm.toString();
    $accuracy.textContent = `${accuracy.toFixed(2)}%`;
  }
}

