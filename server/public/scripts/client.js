var myApp = angular.module('myApp', []);

function pic(u, d) {
    return {
        image: u,
        description: d, 
        showPic: true,
        showDesc: true,
        heartCounter: 0,
        viewCounter: 0,
        comments: ['']
    }
}

myApp.controller('galleryController', function($http){
    var gallery = this;
    var imageLikes = 0;

    var pictures = [
        pic('https://i.imgur.com/eGMLOdN.jpg', 'The fancy bike.'),
        pic('https://i.imgur.com/T05RHQ0.jpg', 'The baking.'),
        pic('https://i.imgur.com/AoxShhG.jpg', 'The husband.'),
        pic('https://i.imgur.com/zeCVdgH.jpg', 'The next step.'),
        pic('https://i.imgur.com/H2MYrM5.jpg', 'The kids.'),
        pic('https://i.imgur.com/kmu0BOv.jpg', 'The trouble.'),
        pic('https://i.imgur.com/gJFGrXT.jpg', 'The goofball.'),
        pic('https://i.imgur.com/0YvtuT6.jpg', 'The cat.'),
        pic('https://i.imgur.com/1J6rXpv.jpg', 'The yard.'),
        pic('https://i.imgur.com/dts31g1.jpg', 'The quotes.'),
        pic('https://i.imgur.com/CcNmNn7.jpg', 'The family time.')
    ];

    gallery.pictures = pictures;

    gallery.showCard = function(i) {
        console.log('image clicked', i);
        pictures[i].showPic = false;
        pictures[i].showDesc = false;
        pictures[i].commentSection = false;
    };

    gallery.showPicture = function(i) {
        console.log('description clicked', i);
        pictures[i].showPic = true;
        pictures[i].showDesc = true;
        pictures[i].commentSection = false;
    }

    gallery.showComments = function(i){
        console.log('comment icon clicked', i);
        pictures[i].showPic = false;
        pictures[i].showDesc = true;
        pictures[i].commentSection = true;
    }

    gallery.addComment = function(i) {
        console.log('submit button clicked', i);
        //picture[i].comments.push(gc.comment);  
    }

}) //end of gallery controller

