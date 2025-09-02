Kakao.init('a63c9071d01e11f1bae2413778a64427');
Kakao.isInitialized();

console.log(Kakao.isInitialized());

document.getElementById("kakao-login-btn").addEventListener("click", () => {
    Kakao.Auth.authorize({
        redirectUri : 'https://kimsanghott.github.io/auth-demo/kakao-callback.html'
    })
})
