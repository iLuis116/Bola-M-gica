const questionInput = document.getElementById('question');
const answerInput = document.getElementById('answer');

    const ask = function(){
        let pregunta = questionInput.value;
        let respuesta = magicBall();
        answerInput.value = respuesta;
    }

const magicBall = function(){

    const randomNumber = Math.floor(Math.random() * 8);
    let eightBall = "";
    if (randomNumber === 0) {
    eightBall ='Es probable';
        } else if (randomNumber === 1){
    eightBall ='Pregunta de nuevo';
        } else if (randomNumber === 2){
    eightBall ='Estas en lo cierto';
        } else if (randomNumber === 3){
    eightBall ='No sabria decirte';
        } else if (randomNumber === 4){
    eightBall ='Mejor no lo hagas';
        } else if (randomNumber === 5){
    eightBall ='No';
        } else if (randomNumber === 6){
    eightBall ='Quizas no';
        } else if (randomNumber === 7){
    eightBall ='Pura pinche fé y no mamadas';    
        }
    return eightBall ;
}