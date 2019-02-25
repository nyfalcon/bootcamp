//javascript, jQuery
var topics = ["pasta","puppies","plants","push","panic","plenty"];
    console.log(topics);

for (i in topics){
        $('.buttonOptions').append("<button value='"+topics[i]+"'>"+topics[i]+"</button>");
       // $('.buttonOptions').append("<button onclick='"+getGiphy()+"'>"+topics[i]+"</button>");
        
    }

// Add button value to search query




    // -------------------Search for Giphy using test entry-------------------------------------

function getData() {
    var text = $("#searchText").val()
    console.log(text);
   

var xhr = $.get("https://api.giphy.com/v1/gifs/search?q="+text+"&api_key=oHDwzVJyXJIq4CSRhvaz6qP9ooWufmsx&limit=10");
xhr.done(function(response) { 
    console.log("success got data", response); 

var jiffs = response.data

for (i in jiffs){
    $('.inner').append("<img src='"+jiffs[i].images.original.url+"'/>");
    $('.inner').append("<figcaption>Rated:"+jiffs[i].rating+"<figcaption/>");
    
}

});

}

