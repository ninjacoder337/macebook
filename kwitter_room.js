

function logout() {
    localStorage.removeItem("room_name");
    localStorage.removeItem("user_name");
    window.location.replace("index.html");
}