Kakao.init('a63c9071d01e11f1bae2413778a64427');
Kakao.isInitialized();

console.log(Kakao.isInitialized());

document.getElementById("kakao-login-btn").addEventListener("click", () => {
    Kakao.Auth.authorize({
        redirectUri : 'http://128.0.0.1:5500/kakao-callback.html'
    })
})
