/* FUNÇÃO MENU*/
document.getElementById('open-btn').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
  });
  document.getElementById('logout-btn').addEventListener('click', function() {
    window.location.href = 'index.html';
  });

/*FUNÇÃO BOM DIA*/
window.onload = function() {
  var hora = new Date().getHours();
  var saudacao;

  if (hora >= 5 && hora < 12) {
      saudacao = 'Bom dia! 🌤️';
  } else if (hora >= 12 && hora < 18) {
      saudacao = 'Boa tarde! 🌇';
  } else {
      saudacao = 'Boa noite! 🌙';
  }

  document.getElementById('saudacao').innerText = saudacao;
};