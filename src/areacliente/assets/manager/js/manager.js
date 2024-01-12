$(window).load(function() {
    $('.loading').css('display', 'none');
    $('#main-content').css('display', 'block');
});

var urlDelete;

$(function(){
    $('select.styled').customSelect();
});

// DELETAR ITEM LISTA
$('.js-btn-destroy').click(function(e){
    $('#modalDestroy').modal('show');

    urlDelete = $(this).attr('href');

    e.preventDefault();
});

$('.js-btn-confirm-destroy').on( "click", function() {
    window.location = urlDelete;
});