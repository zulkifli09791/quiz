const questions = [
    {
        question: "Siapa penemu bola lampu?",
        options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Albert Einstein"],
        answer: "Thomas Edison"
    },
    {
        question: "Apa ibu kota Indonesia?",
        options: ["Jakarta", "Bali", "Bandung", "Surabaya"],
        answer: "Jakarta"
    },
    {
        question: "apakah denang akan bonyok",
        options: ["bonyok", "sehat", "ninja masagenae"],
        answer: "bonyok"
    },
];

let currentQuestionIndex = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    const questionEl = document.getElementById('question');
    const optionsEl = document.getElementById('options');
    const nextBtn = document.getElementById('next-btn');

    questionEl.innerText = question.question;
    optionsEl.innerHTML = '';

    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => selectOption(option));
        optionsEl.appendChild(button);
    });

    nextBtn.classList.add('hidden');
}

function selectOption(option) {
    const question = questions[currentQuestionIndex];
    const nextBtn = document.getElementById('next-btn');

    if (option === question.answer) {
        alert("Benar!");
    } else {
        alert("Salah! Kamu Dongo: " + question.answer);
    }

    nextBtn.classList.remove('hidden');
}

document.getElementById('next-btn').addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        alert("Kuis selesai!");
        currentQuestionIndex = 0; // Reset untuk kuis baru jika ingin
        startQuiz();
    }
});

// Mulai kuis saat halaman dimuat
startQuiz();
