import React, {useState} from 'react';
import Question from './QuestQuizz';

const Quiz = () => {
    const questions = [
      {
        question: '1ª) Wath of this instruments is a cello?',
        options: [
          { label: 'Violino', image: 'https://th.bing.com/th/id/OIP.KBS23lshqRu4LcIRoOlv-QHaFj?rs=1&pid=ImgDetMain' },
          { label: 'Violao', image: 'https://http2.mlstatic.com/violo-folk-eletrico-aco-giannini-honey-burst-gf-1d-kit-1-D_NQ_NP_623720-MLB26258558526_102017-F.jpg' },
          { label: 'Cello', image: 'https://th.bing.com/th/id/R.e0f81c2f7853d2b65de28552a17a44e4?rik=zZGnycdDOaGnnw&pid=ImgRaw&r=0' },
          { label: 'saxsofone', image: 'https://d1aeri3ty3izns.cloudfront.net/media/38/386261/1200/preview_1.jpg'},
        ],
        correctAnswer: 'Cello',
      },
      {
        question: '2ª) Which one of this parties is the volute?',
        options:[
            {label: 'Volute', image: 'https://th.bing.com/th/id/OIP.UyMVoPOCIt3E4XKQ_jwo3AHaEU?pid=ImgDet&rs=1'},
            {label: 'sax', image: 'https://d1aeri3ty3izns.cloudfront.net/media/38/386261/1200/preview_1.jpg'},
            {label: 'Mirror', image: 'https://th.bing.com/th/id/OIP.QxUhsDmYMKIb97jMmOoXPQHaEo?pid=ImgDet&rs=1'}
        ],
        correctAnswer: 'Volute',
      },
      {
        question: '3ª) Which the images below is the sol note?',
        options:[
            {label: 'linha3', image: 'https://lh6.googleusercontent.com/proxy/5wHDd3K9qnwmOQu6MOKEx-1rbDP5ujLIre7HjYojwQcwfzFV80zgLxt1qXSIjp1Obltf_vg2OMKFxhjIFqn6bORFC6GBXsDL-uQ1wIktwD0=s0-d'},
            {label: 'linha2', image: 'https://i.pinimg.com/736x/a8/d6/ba/a8d6bad085e38a8928c97a87ecee743d--music-activities.jpg'},
            {label: 'linha1', image: 'https://th.bing.com/th/id/OIP.t-okCtUmcFtKRqa88vsoXQHaEm?pid=ImgDet&rs=1'}
        ],
        correctAnswer: 'linha3',
      },
      {
        question: '4ª) For which objective the cello is commum used to play?',
        options:[
          {label: 'orchestra', image: 'https://th.bing.com/th/id/R.434e712fdc15a1060ae1efe09a85562d?rik=p3%2fPgYcnbF01dQ&pid=ImgRaw&r=0'},
          {label: 'band', image: 'https://th.bing.com/th/id/R.13d5bccae8400ab8962f1b1f62d52f43?rik=n4y2uATAfmarVg&pid=ImgRaw&r=0'},
          {label: 'pop', image: 'https://th.bing.com/th/id/R.ad9d8c2a173376f4a3abdb4f7213fb79?rik=75bfVCepugtg%2bQ&pid=ImgRaw&r=0'}
        ],
        correctAnswer: 'orchestra',
      },
      {
        question: '5ª) What the parts below is the right tool used on the Cello?',
        options:[
          { label: 'strInstru', image: 'https://th.bing.com/th/id/R.ad9a28c8fc6a7916ce98578b6d2863d0?rik=okymRMIqPV2%2flg&pid=ImgRaw&r=0'},
          { label: 'sax', image: 'https://http2.mlstatic.com/4-protetor-de-chaves-sax-soprano-alto-tenor-D_NQ_NP_848011-MLB20470200503_102015-F.jpg'},
          { label: 'tubaRotor', image: 'https://th.bing.com/th/id/OIP.bvB3g3jzSNqli-wy-Ba2qgHaHa?rs=1&pid=ImgDetMain'}
        ],
        correctAnswer: 'strInstru',
      }
      // Adicione outras perguntas...
    ];
  
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
  
    const handleAnswer = (selectedOption) => {
      if (selectedOption.label === questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }
  
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        // Quiz completo
        alert(`Quiz completo! Pontuação: ${score}/${questions.length}`);
      }
    };
  
    return (
      <div>
        <Question
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          handleAnswer={handleAnswer}
        />
      </div>
    );
  };
  
  export default Quiz;