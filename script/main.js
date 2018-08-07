var mainPage = document.querySelector('.main');
var profilePage = document.querySelector('.profile');
var signInPage = document.querySelector('.signin');


var switchMain = document.querySelector('.switch-main');
switchMain.addEventListener('click', function() {
    router('main')
})

var switchProfile = document.querySelector('.switch-profile');
switchProfile.addEventListener('click', function() {
    router('profile')
})

var switchSignin = document.querySelector('.switch-signin');
switchSignin.addEventListener('click', function() {
    router('signin')
})

var router = function(page) {
    profilePage.classList.add('none');
    mainPage.classList.add('none');
    signInPage.classList.add('none');

    routes[page]()
}

var routes = {
    main: function() { mainPage.setAttribute('class', 'main'); },
    profile: function() { profilePage.setAttribute('class', 'profile'); },
    signin: function() { signInPage.setAttribute('class', 'signin'); },
}