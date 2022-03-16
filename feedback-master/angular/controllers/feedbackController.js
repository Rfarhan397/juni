myApp.controller('feedbackController',function(){
    
    $('.carousel').carousel({
        interval: false
    });

    this.ratings=[];
    var main=this;

    for(var i=0; i<=9; i++){
        main.ratings.push(i);
    }

 

}); 