var myApp = angular.module('myApp', []);

myApp.controller('galleryController', function($http){
    var gallery = this;
    var imageLikes = 0;

    var pictures = [
        {image: 'https://i.imgur.com/eGMLOdN.jpg', description: 'The fancy bike.'},
        {image: 'https://i.imgur.com/T05RHQ0.jpg', description: 'The baking.'},
        {image: 'https://i.imgur.com/AoxShhG.jpg', description: 'The husband.'},
        {image: 'https://i.imgur.com/zeCVdgH.jpg', description: 'The next step.'},
        {image: 'https://i.imgur.com/H2MYrM5.jpg', description: 'The kids.'},
        {image: 'https://i.imgur.com/kmu0BOv.jpg', description: 'The trouble.'},
        {image: 'https://i.imgur.com/gJFGrXT.jpg', description: 'The goofball.'},
        {image: 'https://i.imgur.com/0YvtuT6.jpg', description: 'The cat.'},
        {image: 'https://i.imgur.com/1J6rXpv.jpg', description: 'The yard.'},
        {image: 'https://i.imgur.com/dts31g1.jpg', description: 'The quotes.'},
        {image: 'https://i.imgur.com/CcNmNn7.jpg', description: 'The family time.'}
    ];

    gallery.pictures = pictures;

    gallery.picture = function(picture) {
        console.log('image clicked');
        
    } 

    gallery.description = function(description) {
        console.log('description clicked');
        
    }


}) //end of gallery controller