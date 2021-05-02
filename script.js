// generate a random number
const firstRandomNum=Math.floor(Math.random()*6) + 1
const firstDiceimage = 'images/dice' + firstRandomNum + '.png';

document.querySelectorAll('img')[0].setAttribute('src' , firstDiceimage);

const sRandomNum=Math.floor(Math.random()*6) + 1
const sDiceimage = 'images/dice' + sRandomNum + '.png';

document.querySelectorAll('img')[1].setAttribute('src' , sDiceimage);

if(firstRandomNum > sRandomNum){
  swal({title : "Congratulation",
        text : "The winner is player 1",
      });

}
else if(firstRandomNum < sRandomNum){

  swal({title : "Congratulation",
        text : "The winner is player 2",
      });
}
else{

  swal({
        text : "The Game is Draw",
      });
}
