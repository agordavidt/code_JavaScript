let quiz = [
    {
        question: "What is the capital of Nigeria?",
        choices: ["Lagos", "Port Harcout", "Abuja", "Kano"],
        answer: "Abuja"
    },
    {
        question: "What is the largest ocean in the world?",
        choices: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "What is th highest mountain in the world?",
        choices: ["Mount Everest", "K2", "Kilimanjaro", "Aso Rock"],
        answer: "Mount Everest"
    }
];
let score = 0;

for (let i = 0; i < quiz.length; i++) {
    let question = quiz[i];
    let userAnswer = prompt(question.question);

    if (userAnswer === question.answer) {
        score++;
    }
}

console.log(`You scored ${score} out of ${quiz.length}`);