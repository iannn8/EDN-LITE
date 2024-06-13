const question = [
{
    question: "Berikut ini ukuran persegi panjang yang sebangun dengan persegi panjang berukuran 15cm x 14cm adalah?", 
    answer: [
        { Text:"10 cm x 6 cm", correct:false },
        { Text:"20 cm x 16 cm", correct:false },
        { Text:"30 cm x 28 cm", correct:true },
        { Text:"40 cm x 36 cm", correct:false },
    ]
}, 
{
    question: "Hasil dari 24 x 3 + 15 : 3/4 - 7 adalah?", 
    answer: [
        { Text:"85", correct:true },
        { Text:"100", correct:false },
        { Text:"28", correct:false },
        { Text:"87", correct:false },
    ]  
},
{
    question: "Seorang pemborong memperkirakan dapat menyelesaikan proyek selama 60 hari dengan 20 pekerja. Setelah dikerjakan selama 15 hari, proyek terhenti selama 9 hari. Agar proyek selesai tepat waktu, maka diperlukan tambahan pekerja sebanyak?", 
    answer: [
        { Text:"10 orang", correct:false },
        { Text:"25 orang", correct:false },
        { Text:"15 orang", correct:false },
        { Text:"5 orang", correct:true },
    ]  
},
{
    question: " Dua suku berikutnya dari barisan 3, 4, 6, 9, ..... adalah?", 
    answer: [
        { Text:"13,19", correct:false },
        { Text:"13,17", correct:false },
        { Text:"13,18", correct:true },
        { Text:"12,15", correct:false },
    ]  
},
{
    question: " Sebuah tanah berbentuk setengah lingkaran dengan diameter 42 m. Di sekeliling tanah tersebut akan ditanami pohon kelapa dengan jarak antar pohon 3 m. Banyak pohon kelapa yang dibutuhkan adalah?", 
    answer: [
        { Text:"36", correct:true },
        { Text:"46", correct:false },
        { Text:"48", correct:false },
        { Text:"67", correct:false },
    ]  
},
    

];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex= 0;
    score= 0;
    nextButton.innerHTML= "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = question[ currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answer.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.Text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", SelectAnswer)
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function SelectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect =selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else {
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;

    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `selamat jawa kamu menjawab ${score} dari ${question.length}!`
    nextButton.innerHTML= "play again";
    nextButton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < question.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();
