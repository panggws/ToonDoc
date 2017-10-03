var arr_keyword = ['Harrisonville','64083','Raymore','64070','Belton','64701','Odessa','64012','Richmond','64076','Lone Jack','64085','Lake Lotawana','64063','Grain Valley','64029','Lexington','64067','Higginsville','64037']; // Array of keywords
for( var i = 0; arr_keyword.length > i; i++ ){ // loop keyword to check with user search
    if( getParameterByName('s').toLowerCase() == arr_keyword[i].toLowerCase() ){
        $('#toc > .row').each(function(){
            if( $(this).find('a').text() == 'Dr. Vinyl of The Heartland' ){ // find specific location to move to top
                $('#toc > hr').after($(this).next());
                $('#toc > hr').after($(this));
            }
        });
    }
}

// function that grab GET variable from URL
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}