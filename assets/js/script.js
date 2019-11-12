$(function guessNumber(){

  function randomNumber(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

  var goalNumber = randomNumber(1, 100);
  console.log(goalNumber);

  var rowNumber = 0;
  var clueUp = 'Va falloir viser plus haut.';
  var clueDown = 'Un peu trop haut.';
  var victory = 'Félicitations à notre nouveau champion !';
  var failed = 'Bon, peut-être pour la prochaine fois ?';

  $('#playerTry').click(function(){

    let playerProposition = $('#playerZone').val();
    console.log(playerProposition);

    if (rowNumber == 9){
      rowNumber ++;
      $('.mainContainer').removeClass('zackG');
      $('.mainContainer').addClass('loserPicture');
      $('#clue').text(failed+'\nLa réponse pour cette partie était '+goalNumber+'.');
      // alert(failed+'\nLa réponse pour cette partie était '+goalNumber+'.');
    } else if (playerProposition > goalNumber){
      rowNumber ++;
      $('#clue').text(clueDown);
    } else if (playerProposition < goalNumber){
      rowNumber ++;
      $('#clue').text(clueUp);
    } else if (playerProposition == goalNumber){
      $('.mainContainer').removeClass('zackG');
      $('.mainContainer').addClass('winnerPicture');
      $('#clue').text(victory);
      // alert(victory);
    }

    $('#currentRow').text("Tours passés : "+rowNumber+".");
  });
});
