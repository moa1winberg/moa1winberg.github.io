
/***************************************************
  
     JS for inserting forismatic API to website.

***************************************************/
openStuff = function () {                         // For "Quote Button"
 $(document).ready(function() {

  var quote; 

  function getNewQuote(){
    $.ajax({
      url: 'http://api.forismatic.com/api/1.0/',
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data:{
        method: 'getQuote',
        lang: 'en',
        format: 'jsonp'
      },
      success: function(response) {
        quote = response.quoteText;
        author = response.quoteAuthor;
        if (quote) {
          $('#quote').text(quote);                // If there is a quote, write on website
        }
        if (author) {
          $('#author').text('-' + ' ' + author);  // If there is a author, write on website
        } else {
          $('#author').text('- unknown');         // If no author info
        }
      }
      });
    }
  getNewQuote(); 
});
};

$(document).ready(function() {                    // Showing on index, same code

  var quote; 

  function getNewQuote(){
    $.ajax({
      url: 'http://api.forismatic.com/api/1.0/',
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data:{
        method: 'getQuote',
        lang: 'en',
        format: 'jsonp'
      },
      success: function(response) {
        quote = response.quoteText;
        author = response.quoteAuthor;
        if (quote) {
          $('#quote').text(quote);
        }
        if (author) {
          $('#author').text('-' + ' ' + author);
        } else {
          $('#author').text('- unknown'); 
        }
      }
      });
    }
  getNewQuote(); 
});

