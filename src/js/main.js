import './lib/lib';
import $ from './lib/lib';

$('button').click(function () {
    $('div').eq(2).toggleClass('active');
});

$('div').click(function () {
    console.log($(this).index());

});


