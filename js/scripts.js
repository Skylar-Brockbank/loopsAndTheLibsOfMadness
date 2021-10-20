$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const pNounInput = $("input#pluralNounOne").val();
    const verbInput = $("input#verbOne").val();
    const adverbInput = $("input#adverbOne").val();

    $(".pNoun").append(pNounInput);
    $(".verb").append(verbInput);
    $(".adverb").append(adverbInput);

    $("#story").show();

    event.preventDefault();
  });
});