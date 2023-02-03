function addUser()
{
player_1=document.getElementById("player1NameInput").value;

player_2=document.getElementById("player2NameInput").value;

localStorage.setItem("key1",player_1);

localStorage.setItem("key2",player_2);

window.location="game_page.html";
}