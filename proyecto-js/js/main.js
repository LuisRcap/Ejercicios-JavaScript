$(document).ready(() =>
{
    // Slider
    $('.galeria').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive: true
    });

    // POSTS
    var posts = [
        {
            title: 'Prueba de titulo 1',
            date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis leo vel metus viverra, at consequat arcu eleifend. Nunc bibendum felis eget mi fringilla, ac posuere augue tristique. Quisque quam dui, venenatis eu nulla sit amet, varius interdum nisl. Donec sed maximus purus, dictum venenatis libero. In pretium justo vitae sapien tristique imperdiet. Pellentesque suscipit ornare augue, at blandit mi dictum id. Proin auctor auctor eros, in laoreet massa interdum at.'
        },
        {
            title: 'Prueba de titulo 2',
            date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis leo vel metus viverra, at consequat arcu eleifend. Nunc bibendum felis eget mi fringilla, ac posuere augue tristique. Quisque quam dui, venenatis eu nulla sit amet, varius interdum nisl. Donec sed maximus purus, dictum venenatis libero. In pretium justo vitae sapien tristique imperdiet. Pellentesque suscipit ornare augue, at blandit mi dictum id. Proin auctor auctor eros, in laoreet massa interdum at.'
        },
        {
            title: 'Prueba de titulo 3',
            date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis leo vel metus viverra, at consequat arcu eleifend. Nunc bibendum felis eget mi fringilla, ac posuere augue tristique. Quisque quam dui, venenatis eu nulla sit amet, varius interdum nisl. Donec sed maximus purus, dictum venenatis libero. In pretium justo vitae sapien tristique imperdiet. Pellentesque suscipit ornare augue, at blandit mi dictum id. Proin auctor auctor eros, in laoreet massa interdum at.'
        },
        {
            title: 'Prueba de titulo 4',
            date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis leo vel metus viverra, at consequat arcu eleifend. Nunc bibendum felis eget mi fringilla, ac posuere augue tristique. Quisque quam dui, venenatis eu nulla sit amet, varius interdum nisl. Donec sed maximus purus, dictum venenatis libero. In pretium justo vitae sapien tristique imperdiet. Pellentesque suscipit ornare augue, at blandit mi dictum id. Proin auctor auctor eros, in laoreet massa interdum at.'
        },
        {
            title: 'Prueba de titulo 5',
            date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis leo vel metus viverra, at consequat arcu eleifend. Nunc bibendum felis eget mi fringilla, ac posuere augue tristique. Quisque quam dui, venenatis eu nulla sit amet, varius interdum nisl. Donec sed maximus purus, dictum venenatis libero. In pretium justo vitae sapien tristique imperdiet. Pellentesque suscipit ornare augue, at blandit mi dictum id. Proin auctor auctor eros, in laoreet massa interdum at.'
        },
        {
            title: 'Prueba de titulo 6',
            date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis leo vel metus viverra, at consequat arcu eleifend. Nunc bibendum felis eget mi fringilla, ac posuere augue tristique. Quisque quam dui, venenatis eu nulla sit amet, varius interdum nisl. Donec sed maximus purus, dictum venenatis libero. In pretium justo vitae sapien tristique imperdiet. Pellentesque suscipit ornare augue, at blandit mi dictum id. Proin auctor auctor eros, in laoreet massa interdum at.'
        }
    ];

    posts.forEach((item, index) =>
    {
        var post = `
            <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>
                    ${item.content}
                </p>

                <a href="#" class="button-more">Leer más</a>
            </article>
        `;
        $('#posts').append(post);
    });

    // Selector de tema
    var theme = $('#theme');

    $('#to-green').click(function()
    {
        theme.attr('href', 'css/green.css');
    });

    $('#to-red').click(function()
    {
        theme.attr('href', 'css/red.css');
    });

    $('#to-blue').click(function()
    {
        theme.attr('href', 'css/blue.css');
    });

});