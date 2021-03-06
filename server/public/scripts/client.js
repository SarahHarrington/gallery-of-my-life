var myApp = angular.module('myApp', []);

function pic(u, d) {
    return {
        image: u,
        description: d, 
        showPic: true,
        showDesc: true,
        heartCounter: 0,
        viewCounter: 0,
        comments: []
    }
}

myApp.controller('galleryController', function($http){
    var gallery = this;
    var imageLikes = 0;
    var comment = '';

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

    gallery.viewCounter = function(i){
        pictures[i].viewCounter = pictures[i].viewCounter + 1
    }

    gallery.likeCounter = function(i) {
        console.log('heart clicked', i);
        pictures[i].heartCounter = pictures[i].heartCounter + 1;
    }

    gallery.showCard = function(i) {
        console.log('image clicked', i);
        pictures[i].showPic = false;
        pictures[i].showDesc = false;
        // pictures[i].commentSection = false;
    };

    gallery.showPicture = function(i) {
        console.log('description clicked', i);
        pictures[i].showPic = true;
        pictures[i].showDesc = true;
        // pictures[i].commentSection = false;
    }

    gallery.showComments = function(i){
        console.log('comment icon clicked', i);
        pictures[i].showPic = false;
        pictures[i].showDesc = true;
        pictures[i].commentSection = true;
        gallery.commentsSection = pictures[i].comments;
    }

    gallery.addComment = function(i, picture) {
        console.log('submit button clicked', picture);
        console.log('this is index', i);
        
        pictures[i].comments.push(picture.comment); 
        picture.comment = ''; 
        gallery.commentsSection = pictures[i].comments;
        console.log('array of comments', gallery.commentsSection);
        gallery.commentCount = gallery.commentsSection.length;
        console.log(gallery.commentCount);
        console.log('pictures', pictures);
    }

    gallery.backToPicture = function(i) {
        console.log('picture icon clicked', i);
        pictures[i].showPic = true;
        pictures[i].commentSection = false;
    }

}) //end of gallery controller

