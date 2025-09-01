import { auth } from "./firebase/firebase-init.js";
import { deleteAccount, logout } from "./firebase/firebase-auth.js";
import {onAuthStateChanged} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js" //로그인 상태 감지 함수

onAuthStateChanged(auth, (user) => {
    if(!user){
        alert("로그인이 필요합니다.");
        window.location.href = "login.html";
    }
})

document.getElementById("logout-button").addEventListener("click", async () => {
    try{
        const confirmed = confirm("로그아웃하시겠습니까?");
        if(confirmed){
            await logout();
            window.location.href = "login.html";
        }
        else{
            return;
        }
    }
    catch(error){
        console.log("로그아웃 실패 : ", error.message);
        alert("로그아웃에 실패했습니다. 다시 시도해주세요.")
    }
})

document.getElementById("delete-account-button").addEventListener("click", async () => {
    try{
        const confirmed = confirm("회월탈퇴를 진행하시겠습니까?")
        if(!confirmed) return;
        await deleteAccount();
    }
    catch(error){
        console.error("계정 삭제 실패 : ", error);
        alert("계정을 삭제할 수 없습니다. 다시 시도해주세요.")
    }
})