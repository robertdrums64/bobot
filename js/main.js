$(document).ready(function(){
    const mainOne = $(".container-one");
    const mainTwo = $(".container-two");
    const mainThree = $(".container-three");

    $(mainOne).load('./pages/head.html');
    $(mainTwo).load('./pages/body.html');
    $(mainThree).load('./pages/legs.html');

});