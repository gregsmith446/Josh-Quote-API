/*global $ */ //this line is for the editor - telling it to ignore

// https://talaikis.com/random_quotes_api/
// https://dev.twitter.com/web/tweet-button/web-intent
// https://fonts.google.com/
// http://fontawesome.io/icons/
console.log("show me");

var qGenerator = {
    quote: "", //needs empty quotes because the variable is 
    author: "", //not undefined but null
    getQuote: function(){
        console.log("getQuote")
        var that = this;//getQuote is the key and sets equal to function
        $.ajax({ //ajax call. creates another object.  Get me the API!
            method: "GET",
            url: "https://talaikis.com/api/quotes/random/",
            dataType: "json",
            success: function(data){ //success only runs if it gets data back, whereas "done" will run no matter what //the data will 
                console.log(data);
                that.quote = data.quote;
                that.author = data.author;
                that.displayQuote();
            }
        });                            
    },
    displayQuote: function(){
        console.log("display")
        document.getElementById("insertQuote").innerHTML = qGenerator.quote;
        document.getElementById("insertAuthor").innerHTML = qGenerator.author;

    }
};

qGenerator.getQuote();

document.getElementById("newQuote").onclick = function() {
    qGenerator.getQuote();
};

document.getElementById("postTwitter").onclick = function() {
    window.open("https://twitter.com/intent/tweet?text=" + "" + qGenerator.quote + "")
};