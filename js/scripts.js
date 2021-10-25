$(document).ready(function() { 
    let madArray = [];
    $("#formOne").submit(function(event) {
      event.preventDefault(); 
      madArray.push($("#pluralNounOne").val());
      madArray.push($("#verbOne").val());
      madArray.push($("#adverbOne").val());
      spanOutput = $("span").toArray();
      let counter = 0;
      madArray.forEach(function(input) {
        $(spanOutput[counter]).text(input);
        counter++;
      });
      $("#story").show();
    });
});