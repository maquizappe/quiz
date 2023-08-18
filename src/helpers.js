// funciones para nuestra aplicacion

export const shuffleAnswers = question => {
    const unshuffledAnswers = [
        question.correctAnswer,
        ...question.incorrectAnswers
    ]

    return unshuffledAnswers.map(unshuffledAnswers => ({
        sort: Math.random(), 
        value: unshuffledAnswers,
    })).sort((a,b)=> a.sort - b.sort).map(a=>a.value) 
    
    // estamos generando un array de objetos aleatorios sobre las respuestas.
};