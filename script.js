// script.js
document.getElementById('askButton').addEventListener('click', function() {
    const answers = [
        'Yes', 'No', 'Maybe', 'Ask again later', 'Definitely', 
        'Absolutely not', 'It is certain', 'Very doubtful', 
        'Yes, in due time', 'No, not now', 'You may rely on it',
        'Outlook not so good', 'Without a doubt', 'Cannot predict now'
    ];

    const randomIndex = Math.floor(Math.random() * answers.length);
    const answer = answers[randomIndex];

    const answerElement = document.getElementById('answer');
    answerElement.textContent = answer;
});
