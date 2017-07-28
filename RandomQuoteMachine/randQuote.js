$(document).ready(quote);

$("#new").on("click", quote);

//function that retrieves a new random quote and updates the view for the quote
function quote(){
  
  $.ajax({
    url:  'https://api.forismatic.com/api/1.0/',
     jsonp: "jsonp",
      dataType: "jsonp",
      data: {
        method: "getQuote",
        lang: "en",
        format: "jsonp"
      } 
  }).done(function(response){
        $("#quote").html(response.quoteText);
    
        if(response.quoteAuthor)
              $("#quote-author").html( response.quoteAuthor );
         else
            $("#quote-author").html( "unkown");
    
  }); 
  return true;
}

// function to update the tweet data text
function updateTweet(){
  var tweetMsg = "\"" + $("#quote").html()+ "\" -" +   $("#quote-author").html();
  $("#twitter-share-button").htm("data-text", tweetMsg);
}

