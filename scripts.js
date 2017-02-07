(function( $ ) {
    'use strict';
    window.fbAsyncInit = function() {
        FB.init({
            appId      : '201789086951728',
            xfbml      : true,
            version    : 'v2.8'
        });
        FB.AppEvents.logPageView();
    };

    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    /*$.ajaxSetup({ cache: true });
    $.getScript('//connect.facebook.net/en_US/sdk.js', function(){
        FB.init({
            appId: '201789086951728',
            secret: 'a7913df8bf18a07226964b204e38a727',
            version: 'v2.7' // or v2.1, v2.2, v2.3, ...
        });
        $('#loginbutton,#feedbutton').removeAttr('disabled');
        FB.getLoginStatus(updateStatusCallback);
    });

    FB.getLoginStatus(function(response) {
        //statusChangeCallback(response);
        if (response.status === 'connected') {
            console.log('Logged in.');
        }
        else {
            FB.login();
        }
    });*/
})( jQuery );