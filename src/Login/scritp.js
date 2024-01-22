$('#action-button').click(()=> {
    $.ajax({
        URL: 'https://api.joind.in/v2.1/talks/10889' , 
        data: {
            format: 'json'
        },
        error() {
            $('info').html('<p>An error has occured</p>');
        } , 
        dataType : 'jsonp' , 
        success(data) {
            let title = $('<h1>').text(data.talks[0].talk_title);
            let description = $('<p>').text(data.talks[0].talk_description);
            $('#info')
            .append(title)
            .append(description);
        }
    })
})