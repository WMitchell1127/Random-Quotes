const jokes = [
    
    
        {                  
        joke: 'What do you call a boomerang that won’t come back?',
        answer: 'A stick.'
    },
        {
        joke:'Why do you never see elephants hiding in trees?',
        answer: 'Because they’re so good at it.'
    },
        {
        joke: 'What does a zombie vegetarian eat?',
        answer: '“GRRRAAAIINS!”'
    },
        {
        joke: 'What do Alexander the Great and Winnie the Pooh have in common?',
        answer: 'Their middle name.'
    },
            {
        joke: 'Did you know the first French fries weren’t actually cooked in France?',
        answer: 'They were cooked in Greece.'
    },
            {
        joke: 'When does a tailor need to go on vacation?',
        answer: 'When they seem stressed.'
    },
            {
        joke: 'What is heavy forward but not backward?',
        answer: 'A ton.'
    },
            {
        joke: 'Why can’t you tell dad jokes until you have kids?',
        answer: 'It’s a faux pas.'
    },
            {        
        joke: 'Want to hear a joke about construction?',
        answer: 'I’m still working on it.'
    },
        {
        joke: 'I’m very pleased with my new fridge magnet.',
        answer: 'So far I’ve got twelve fridges.'
    },
        {        
        joke: 'I’m reading a book about anti-gravity.',
        answer: 'It’s impossible to put down.'
    },
        {        
        joke: 'I wouldn’t buy anything with velcro.',
        answer: 'It’s a total rip-off.'
    },
        {         
        joke: 'I invented a new word today:',
        answer: 'Plagiarism.'
    },
        {        
        joke: 'Why is Orion’s belt the worst constellation?',
        answer: 'It’s a waist of space.'
    },
        {
        joke: 'What was the most ground-breaking invention?',
        answer: 'A shovel.'
    },
        {      
        joke: 'I can’t believe I got fired from the calendar factory.',
        answer: 'All I did was take a day off.'
    },
        {      
        joke: 'Why aren’t koalas actual bears?',
        answer: 'They don’t meet the koalafications.'
    },
        {      
        joke: 'Why do flamingoes life one leg up?',
        answer: 'If they lifted both they’d fall.'
    },
        {      
        joke: 'What do you call a three-footed aardvark?',
        answer: 'A yardvark.'
    },
        {      
        joke: 'I couldn’t quite remember how to throw a boomerang.',
        answer: 'Eventually, it came back to me.'
    },
        {      
        joke: 'Why did the man decide to sell his vacuum?',
        answer: 'It was just collecting dust.'
    },
        {      
        joke: 'What has four wheels and flies?',
        answer: 'A garbage truck.'
    },
        {      
        joke: 'Why shouldn’t you try writing with a broken pencil?',
        answer: 'It’s pointless.'
    },
        {      
        joke: 'Why do scuba divers fall backwards into the water?',
        answer: 'If they fell forward they’d still be in the boat.'
    },
        {      
        joke: 'Did you hear the joke about the roof?',
        answer: 'Never mind, it’s over your head.'
    },
        {      
        joke: 'What do you call a dinosaur with an extensive vocabulary?',
        answer: 'A thesaurus.'
    },
        {      
        joke: 'Why is “R” only a pirate’s second favorite letter?',
        answer: 'Because their first love is the C.'
    },
        {      
        joke: 'Why do fish live in salt water?',
        answer: 'Because pepper makes them sneeze.'
    },
        {      
        joke: 'What do you call a bear with no teeth?',
        answer: 'A gummy bear.'
    },
        {      
        joke: 'What did the buffalo say when his kid left for college?',
        answer: 'Bison.'
    }        
]
    const jokesBtn = document.querySelector('#jokesBtn');
    const jokeAnswer = document.querySelector('#Answer');
    const joker = document.querySelector('#joker-box');

    jokesBtn.addEventListener('click', displayJoke);

    function displayJoke(){
        let number = Math.floor(Math.random()*jokes.length);
        Answer.innerHTML = jokes[number].answer;
        joker.innerHTML = jokes[number].joke;
    }






