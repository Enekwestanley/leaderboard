import addScore from './addScores.js';

// to get data from the api
const renderScores = () => {
  const scoresItem = document.getElementById('scoreRender');
  scoresItem.innerHTML = '';
  const getScores = async () => {
    const request = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zl4d7ivkemo/scores/',
    );
    const data = await request.json();
    const score = data.result;

    score.forEach((element) => {
      addScore(element.user, element.score);
    });
    return data.result;
  };
  getScores();
};
export default renderScores;