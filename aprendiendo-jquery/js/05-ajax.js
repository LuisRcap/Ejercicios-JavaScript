$(document).ready(() =>
{
    //Load
    //$('#datos').load("https://reqres.in/");

    // GET y POST JQuery
    $.get("https://reqres.in/api/users", {page: 2}, function(response)
    {
        response.data.forEach((element, index) => 
        {
            $('#datos').append("<p>" + element.first_name + " " + element.last_name + "</p>");    
        });
    });
});