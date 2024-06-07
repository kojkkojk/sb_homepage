const generateRandomNumber = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1)) + min;
 };
 
 const generateGameArray = (length) => {
   const games = [];
   
   for (let i = 0; i < length; i++) {
     const game = {
       game: `게임이름${i + 1}`,
       max: generateRandomNumber(2, 5),
       now: generateRandomNumber(1, 4)
     };
     games.push(game);
   }
 
   return games;
 };
 
 const gameArray = generateGameArray(30);
 console.log(gameArray);