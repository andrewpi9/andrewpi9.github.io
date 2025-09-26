import random

class Wordle:
    def __init__(self):
        self.word_list = [
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
        ]
        self.word = random.choice(self.word_list)
        self.attempts = 0
        self.guesses = []

    def guess(self, word):
        word = word.upper()
        if len(word) != 5:
            return "Word must be 5 letters long"
        if not word.isalpha():
            return "Word must contain only letters"
        if word not in self.word_list:
            return "Word not in word list"

        self.guesses.append(word)
        self.attempts += 1

        result = []
        target_chars = list(self.word)
        guess_chars = list(word)

        # First pass: find correct positions
        for i in range(5):
            if guess_chars[i] == target_chars[i]:
                result.append('correct')
                target_chars[i] = None
                guess_chars[i] = None
            else:
                result.append(None)

        # Second pass: find present letters
        for i in range(5):
            if guess_chars[i] is not None:
                if guess_chars[i] in target_chars:
                    result[i] = 'present'
                    target_chars[target_chars.index(guess_chars[i])] = None
                else:
                    result[i] = 'absent'

        return result

    def is_won(self):
        return len(self.guesses) > 0 and self.guesses[-1] == self.word

    def is_game_over(self):
        return self.is_won() or self.attempts >= 6