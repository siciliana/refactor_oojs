function Die() {
  this.faceValue = 0
}



$(document).ready(function() {

  DieHandler = {
    dice: [],

    addDie: function() {
      this.dice.push(new Die())
      this.renderDice();
    },

    renderDice: function() {
      $('.die').remove();
      $.each(this.dice, this.displayDie);
    },

    displayDie: function(index, die) {
      $('.dice').append('<div class="die">' + die.faceValue + '</div>')
    },

    rollDice: function() {
      var value = Math.floor((Math.random()*6)+1);
      console.log(this);
      $.each(this.dice, this.displayDie(value))
    }


  $('#roller button.add').on('click', function() {
    DieHandler.addDie();
  });

  $('#roller button.roll').on('click', function() {
    DieHandler.rollDice()

  //   $('.die').each(function(k, die) {
  //     var value = Math.floor((Math.random()*6)+1);
  //     $(die).text(value);
  //   });
  });
});
