let quiz = [
    {
        question: "What is the capital of Nigeria?",
        choices: ["Lagos", "Kano", "Abuja", "Port-harcout"],
        answer: "Abuja"
    },
    {
        question: "What is the largest ocean in the world?",
        choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"       
    },
    {
        question: "What is the highest mountain in the world?",
        choices: ["Mount Everest", "Aso Rock", "Kilimanjaro", "Obodu Hills"],
        answer: "Mount Everest"
    }
];

let form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    let score = 0;

    for (let i = 0; i < quiz.length; i++) {
        let question = quiz[i];
        let userAnswer = form.elements[`question-${i + 1}`].value;

        if (userAnswer === question.answer) {
            score++;
        }
    }
    console.log(`you scored ${score} out of ${quiz.length}`);
});