$(document).ready(function(){

  $('button').click(getFlickrs)

});

function getFlickrs(){
  var searchTerm = $('input').val()
  var url = "https://api.flickr.com/services/rest/?format=json&method=flickr.photos.search&api_key=2fd41b49fedfd589dc265350521ab539&tags="+ searchTerm +"&jsoncallback=?"
  $.getJSON(url, imageMaker)
  };

function imageMaker(data){
  var photos = data.photos.photo;
  $('#feed').empty;
  photos.map(function(photo){
    var farmId = photo.farm;
    var serverId = photo.server;
    var id = photo.id;
    var secret = photo.secret;
    photo = "<img src=" +"'http://farm" + farmId + ".staticflickr.com/" + serverId + "/" + id + "_" + secret + ".jpg'" + ">"
    $('#feed').append(photo);
  })

}
//
// http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg

// $.getJSON( "ajax/test.json", function( data ) {
//   var items = [];
//   $.each( data, function( key, val ) {
//     items.push( "<li id='" + key + "'>" + val + "</li>" );
//   });
//
//   $( "<ul/>", {
//     "class": "my-new-list",
//     html: items.join( "" )
//   }).appendTo( "body" );
// });
  /*
API url:

https://www.flickr.com/services/api/request.rest.html

AJAX request URLwith tags=cat (search term = cat):

https://api.flickr.com/services/rest/?format=json&method=flickr.photos.search&api_key=2fd41b49fedfd589dc265350521ab539&tags=cat&jsoncallback=?

JSON Snippet:

jsonFlickrApi({
    "photos": {
        "page": 1,
        "pages": 46641,
        "perpage": 100,
        "total": "4664056",
        "photo": [
            {
                "id": "7790251192",
                "owner": "80992738@N00",
                "secret": "50b0af1b38",
                "server": "8440",
                "farm": 9,
                "title": "Friends",
                "ispublic": 1,
                "isfriend": 0,
                "isfamily": 0
            },

info about creating photo url from son data: http://www.flickr.com/services/api/misc.urls.html

http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg

Example Test:

http://farm9.staticflickr.com/8440/7790251192_50b0af1b38.jpg

*/
