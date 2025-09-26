class Wordle {
    constructor() {
        this.wordList = [
            'ABOUT', 'ABOVE', 'ABUSE', 'ACTOR', 'ACUTE', 'ADMIT', 'ADOPT', 'ADULT', 'AFTER', 'AGAIN',
            'AGENT', 'AGREE', 'AHEAD', 'ALARM', 'ALBUM', 'ALERT', 'ALIEN', 'ALIGN', 'ALIKE', 'ALIVE',
            'ALLOW', 'ALONE', 'ALONG', 'ALTER', 'AMONG', 'ANGER', 'ANGLE', 'ANGRY', 'APART', 'APPLE',
            'APPLY', 'ARENA', 'ARGUE', 'ARISE', 'ARRAY', 'ASIDE', 'ASSET', 'AUDIO', 'AUDIT', 'AVOID',
            'AWARD', 'AWARE', 'BADLY', 'BASIC', 'BEACH', 'BEGAN', 'BEGIN', 'BEING', 'BELOW', 'BENCH',
            'BILLY', 'BIRTH', 'BLACK', 'BLAME', 'BLIND', 'BLOCK', 'BLOOD', 'BOARD', 'BOAST', 'BOOST',
            'BOOTH', 'BOUND', 'BRAIN', 'BRAND', 'BRAVE', 'BREAD', 'BREAK', 'BREED', 'BRIEF', 'BRING',
            'BROAD', 'BROKE', 'BROWN', 'BUILD', 'BURST', 'BUYER', 'CABLE', 'CALIF', 'CARRY', 'CATCH',
            'CAUSE', 'CHAIN', 'CHAIR', 'CHAOS', 'CHARM', 'CHART', 'CHASE', 'CHEAP', 'CHECK', 'CHEST',
            'CHIEF', 'CHILD', 'CHINA', 'CHOSE', 'CIVIL', 'CLAIM', 'CLASS', 'CLEAN', 'CLEAR', 'CLICK',
            'CLIMB', 'CLOCK', 'CLOSE', 'CLOUD', 'COACH', 'COAST', 'COULD', 'COUNT', 'COURT', 'COVER',
            'CRAFT', 'CRASH', 'CRAZY', 'CREAM', 'CRIME', 'CROSS', 'CROWD', 'CROWN', 'CRUDE', 'CURVE',
            'CYCLE', 'DAILY', 'DANCE', 'DATED', 'DEALT', 'DEATH', 'DEBUT', 'DELAY', 'DEPTH', 'DOING',
            'DOUBT', 'DOZEN', 'DRAFT', 'DRAMA', 'DRANK', 'DREAM', 'DRESS', 'DRILL', 'DRINK', 'DRIVE',
            'DROVE', 'DYING', 'EAGER', 'EARLY', 'EARTH', 'EIGHT', 'ELITE', 'EMPTY', 'ENEMY', 'ENJOY',
            'ENTER', 'ENTRY', 'EQUAL', 'ERROR', 'EVENT', 'EVERY', 'EXACT', 'EXIST', 'EXTRA', 'FAITH',
            'FALSE', 'FAULT', 'FIBER', 'FIELD', 'FIFTH', 'FIFTY', 'FIGHT', 'FINAL', 'FIRST', 'FIXED',
            'FLASH', 'FLEET', 'FLOOR', 'FLUID', 'FOCUS', 'FORCE', 'FORTH', 'FORTY', 'FORUM', 'FOUND',
            'FRAME', 'FRANK', 'FRAUD', 'FRESH', 'FRONT', 'FRUIT', 'FULLY', 'FUNNY', 'GIANT', 'GIVEN',
            'GLASS', 'GLOBE', 'GOING', 'GRACE', 'GRADE', 'GRAND', 'GRANT', 'GRASS', 'GRAVE', 'GREAT',
            'GREEN', 'GROSS', 'GROUP', 'GROWN', 'GUARD', 'GUESS', 'GUEST', 'GUIDE', 'HAPPY', 'HARRY',
            'HEART', 'HEAVY', 'HENCE', 'HENRY', 'HORSE', 'HOTEL', 'HOUSE', 'HUMAN', 'IDEAL', 'IMAGE',
            'INDEX', 'INNER', 'INPUT', 'ISSUE', 'JAPAN', 'JIMMY', 'JOINT', 'JONES', 'JUDGE', 'KNOWN',
            'LABEL', 'LARGE', 'LASER', 'LATER', 'LAUGH', 'LAYER', 'LEARN', 'LEASE', 'LEAST', 'LEAVE',
            'LEGAL', 'LEVEL', 'LEWIS', 'LIGHT', 'LIMIT', 'LINKS', 'LIVES', 'LOCAL', 'LOOSE', 'LOWER',
            'LUCKY', 'LUNCH', 'LYING', 'MAGIC', 'MAJOR', 'MAKER', 'MARCH', 'MARIA', 'MATCH', 'MAYBE',
            'MAYOR', 'MEANT', 'MEDIA', 'METAL', 'MIGHT', 'MINOR', 'MINUS', 'MIXED', 'MODEL', 'MONEY',
            'MONTH', 'MORAL', 'MOTOR', 'MOUNT', 'MOUSE', 'MOUTH', 'MOVED', 'MOVIE', 'MUSIC', 'NEEDS',
            'NEVER', 'NEWLY', 'NIGHT', 'NOISE', 'NORTH', 'NOTED', 'NOVEL', 'NURSE', 'OCEAN', 'OFFER',
            'OFTEN', 'ORDER', 'OTHER', 'OUGHT', 'PAINT', 'PANEL', 'PAPER', 'PARTY', 'PEACE', 'PETER',
            'PHASE', 'PHONE', 'PHOTO', 'PIANO', 'PIECE', 'PILOT', 'PITCH', 'PLACE', 'PLAIN', 'PLANE',
            'PLANT', 'PLATE', 'POINT', 'POUND', 'POWER', 'PRESS', 'PRICE', 'PRIDE', 'PRIME', 'PRINT',
            'PRIOR', 'PRIZE', 'PROOF', 'PROUD', 'PROVE', 'QUEEN', 'QUICK', 'QUIET', 'QUITE', 'RADIO',
            'RAISE', 'RANGE', 'RAPID', 'RATIO', 'REACH', 'READY', 'REALM', 'REBEL', 'REFER', 'RELAX',
            'REPAY', 'REPLY', 'RIGHT', 'RIGID', 'RIVAL', 'RIVER', 'ROBIN', 'ROGER', 'ROMAN', 'ROUGH',
            'ROUND', 'ROUTE', 'ROYAL', 'RURAL', 'SCALE', 'SCENE', 'SCOPE', 'SCORE', 'SENSE', 'SERVE',
            'SEVEN', 'SHALL', 'SHAPE', 'SHARE', 'SHARP', 'SHEET', 'SHELF', 'SHELL', 'SHIFT', 'SHINE',
            'SHIRT', 'SHOCK', 'SHOOT', 'SHORT', 'SHOWN', 'SIGHT', 'SIMON', 'SIXTH', 'SIXTY', 'SIZED',
            'SKILL', 'SLEEP', 'SLIDE', 'SMALL', 'SMART', 'SMILE', 'SMITH', 'SMOKE', 'SOLID', 'SOLVE',
            'SORRY', 'SOUND', 'SOUTH', 'SPACE', 'SPARE', 'SPEAK', 'SPEED', 'SPEND', 'SPENT', 'SPLIT',
            'SPOKE', 'SPORT', 'STAFF', 'STAGE', 'STAKE', 'STAND', 'START', 'STATE', 'STEAM', 'STEEL',
            'STEEP', 'STEER', 'STEVE', 'STICK', 'STILL', 'STOCK', 'STONE', 'STOOD', 'STORE', 'STORM',
            'STORY', 'STRIP', 'STUCK', 'STUDY', 'STUFF', 'STYLE', 'SUGAR', 'SUITE', 'SUPER', 'SWEET',
            'TABLE', 'TAKEN', 'TASTE', 'TAXES', 'TEACH', 'TEAMS', 'TERRY', 'TEXAS', 'THANK', 'THEFT',
            'THEIR', 'THEME', 'THERE', 'THESE', 'THICK', 'THING', 'THINK', 'THIRD', 'THOSE', 'THREE',
            'THREW', 'THROW', 'THUMB', 'TIGHT', 'TIMER', 'TIRED', 'TITLE', 'TODAY', 'TOPIC', 'TOTAL',
            'TOUCH', 'TOUGH', 'TOWER', 'TRACK', 'TRADE', 'TRAIN', 'TREAT', 'TREND', 'TRIAL', 'TRIBE',
            'TRICK', 'TRIED', 'TRIES', 'TRUCK', 'TRULY', 'TRUNK', 'TRUST', 'TRUTH', 'TWICE', 'UNCLE',
            'UNDER', 'UNDUE', 'UNION', 'UNITY', 'UNTIL', 'UPPER', 'UPSET', 'URBAN', 'USAGE', 'USUAL',
            'VALID', 'VALUE', 'VIDEO', 'VIRUS', 'VISIT', 'VITAL', 'VOCAL', 'VOICE', 'WASTE', 'WATCH',
            'WATER', 'WHEEL', 'WHERE', 'WHICH', 'WHILE', 'WHITE', 'WHOLE', 'WHOSE', 'WOMAN', 'WOMEN',
            'WORLD', 'WORRY', 'WORSE', 'WORST', 'WORTH', 'WOULD', 'WRITE', 'WRONG', 'WROTE', 'YOUNG',
            'YOUTH'
        ];

        this.word = this.wordList[Math.floor(Math.random() * this.wordList.length)];
        this.attempts = 0;
        this.guesses = [];
    }

    guess(word) {
        word = word.toUpperCase();
        if (word.length !== 5) {
            return "Word must be 5 letters long";
        }
        if (!/^[A-Z]+$/.test(word)) {
            return "Word must contain only letters";
        }
        if (!this.wordList.includes(word)) {
            return "Word not in word list";
        }

        this.guesses.push(word);
        this.attempts++;

        const result = [];
        const targetChars = this.word.split('');
        const guessChars = word.split('');

        // First pass: find correct positions
        for (let i = 0; i < 5; i++) {
            if (guessChars[i] === targetChars[i]) {
                result.push('correct');
                targetChars[i] = null;
                guessChars[i] = null;
            } else {
                result.push(null);
            }
        }

        // Second pass: find present letters
        for (let i = 0; i < 5; i++) {
            if (guessChars[i] !== null) {
                const index = targetChars.indexOf(guessChars[i]);
                if (index !== -1) {
                    result[i] = 'present';
                    targetChars[index] = null;
                } else {
                    result[i] = 'absent';
                }
            }
        }

        return result;
    }

    // Your original is_won method
    isWon() {
        return this.guesses.length > 0 && this.guesses[this.guesses.length - 1] === this.word;
    }

    // Your original is_game_over method
    isGameOver() {
        return this.isWon() || this.attempts >= 6;
    }
}

// Game state variables
let game = new Wordle();
let currentRow = 0;
let currentTile = 0;
let currentGuess = '';

// DOM elements
const gameBoard = document.getElementById('gameBoard');
const keyboard = document.getElementById('keyboard');
const messageEl = document.getElementById('message');

// Initialize the game
function initGame() {
    createGameBoard();
    setupEventListeners();
    showMessage('Start guessing! Enter a 5-letter word.');
}

// Create the 6x5 grid of tiles
function createGameBoard() {
    gameBoard.innerHTML = '';
    for (let row = 0; row < 6; row++) {
        const rowEl = document.createElement('div');
        rowEl.classList.add('row');
        rowEl.setAttribute('id', `row-${row}`);

        for (let col = 0; col < 5; col++) {
            const tile = document.createElement('div');
            tile.classList.add('tile');
            tile.setAttribute('id', `tile-${row}-${col}`);
            rowEl.appendChild(tile);
        }

        gameBoard.appendChild(rowEl);
    }
}

// Set up event listeners
function setupEventListeners() {
    keyboard.addEventListener('click', handleKeyboardClick);
    document.addEventListener('keydown', handleKeyPress);
}

// Handle virtual keyboard clicks
function handleKeyboardClick(event) {
    if (event.target.classList.contains('key')) {
        const key = event.target.getAttribute('data-key');
        processKey(key);
    }
}

// Handle physical keyboard presses
function handleKeyPress(event) {
    if (game.isGameOver()) return;

    const key = event.key.toLowerCase();

    if (key === 'enter') {
        processKey('enter');
    } else if (key === 'backspace') {
        processKey('backspace');
    } else if (key.match(/[a-z]/) && key.length === 1) {
        processKey(key);
    }
}

// Process key input
function processKey(key) {
    if (game.isGameOver()) return;

    if (key === 'enter') {
        submitGuess();
    } else if (key === 'backspace') {
        deleteLetter();
    } else if (key.match(/[a-z]/) && currentTile < 5) {
        addLetter(key);
    }
}

// Add letter to current tile
function addLetter(letter) {
    if (currentTile < 5) {
        const tile = document.getElementById(`tile-${currentRow}-${currentTile}`);
        tile.textContent = letter.toUpperCase();
        tile.classList.add('filled');
        currentGuess += letter.toUpperCase();
        currentTile++;
    }
}

// Delete last letter
function deleteLetter() {
    if (currentTile > 0) {
        currentTile--;
        const tile = document.getElementById(`tile-${currentRow}-${currentTile}`);
        tile.textContent = '';
        tile.classList.remove('filled');
        currentGuess = currentGuess.slice(0, -1);
    }
}

// Submit current guess
function submitGuess() {
    if (currentTile !== 5) {
        showMessage('Not enough letters!');
        return;
    }

    // Use your original guess method
    const result = game.guess(currentGuess);

    // If it's an error message (string), show it
    if (typeof result === 'string') {
        showMessage(result);
        return;
    }

    // Update the tiles with results
    updateTiles(result);

    // Update keyboard colors
    updateKeyboard(currentGuess, result);

    // Check game state
    if (game.isWon()) {
        showMessage('🎉 Congratulations! You won!', 'success');
    } else if (game.isGameOver()) {
        showMessage(`😔 Game over! The word was: ${game.word}`, 'error');
    } else {
        showMessage(`${game.attempts} / 6 attempts used`);
    }

    // Move to next row
    if (!game.isGameOver()) {
        currentRow++;
        currentTile = 0;
        currentGuess = '';
    }
}

// Update tiles with color results
function updateTiles(result) {
    for (let i = 0; i < 5; i++) {
        const tile = document.getElementById(`tile-${currentRow}-${i}`);
        const status = result[i];

        // Add flip animation
        tile.classList.add('flip');

        setTimeout(() => {
            // Add color class based on result
            tile.classList.add(status);
        }, 300); // Half way through flip animation
    }
}

// Update keyboard key colors
function updateKeyboard(guess, result) {
    for (let i = 0; i < guess.length; i++) {
        const letter = guess[i].toLowerCase();
        const key = document.querySelector(`[data-key="${letter}"]`);
        const status = result[i];

        if (key) {
            // Only update if this is better than current state
            if (status === 'correct' || !key.classList.contains('correct')) {
                key.classList.remove('correct', 'present', 'absent');
                key.classList.add(status);
            }
        }
    }
}

// Show message to user
function showMessage(text, type = '') {
    messageEl.textContent = text;
    messageEl.className = 'message ' + type;
}

// Start new game
function newGame() {
    game = new Wordle();
    currentRow = 0;
    currentTile = 0;
    currentGuess = '';

    // Reset board
    createGameBoard();

    // Reset keyboard
    document.querySelectorAll('.key').forEach(key => {
        key.classList.remove('correct', 'present', 'absent');
    });

    showMessage('New game started! Enter a 5-letter word.');
}

// Start the game when page loads
document.addEventListener('DOMContentLoaded', initGame);