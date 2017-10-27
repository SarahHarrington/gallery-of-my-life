var myApp = angular.module('myApp', []);

myApp.controller('galleryController', function($http){
    var gallery = this;

    var pictures = [
        {image: 'sarahharrington', description: 'my github image'},
        {image: 'sarahharrington', description: 'my github image' }
    ];

    gallery.pictures = pictures;


}) //end of gallery controller