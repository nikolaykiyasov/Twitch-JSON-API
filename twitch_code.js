var channels = [ "freecodecamp", "ESL_SC2", "shroud", "Starladder5", "Dendi", "Starladder1", "Dota2RuHub"];
 var str= '';
var status = '';
$(document).ready(function(){
  channels.forEach(function(channel){
    function makeURL(typeName,nameChannel){
      return 'https://wind-bow.gomix.me/twitch-api/' + typeName + '/' + nameChannel + '?callback=?';
    };
    $.getJSON(makeURL('streams', channel), function(data){
     
      data.stream === null ? status = "offline" : status = "online";
    });
     $.getJSON(makeURL('channels', channel), function(data) {
     var logo = data.logo != null ? data.logo : "https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F",
         name = data.display_name != null ? data.display_name : channel;   
     
       str += '<div class="output ' +
         status + '"><img src ="' + logo + '" class="logo">'+
         '<div class="linkChannel"><a href = "' + data.url +
         '" target="_blank">' + name + '</a></div>'+
         '<p id="title">' + status + '</p></div>';
       $(".twitch").html(str);
     });    
 
 });
});
  
  
  
  