export const GradeQuiz = (totalQuestions, answers) => {
    let correctAnswers = 0;

    for (let i = 0; i < answers.length; i++) {
        if (answers[i].option.isCorrect) {
            correctAnswers++;
        }
    }

    return `${correctAnswers}/${totalQuestions}`
    

}