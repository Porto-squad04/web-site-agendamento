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

// FUNÇÃO VALOR DO SERVIÇO

const select = document.getElementById('clienteServico');
const valorDiv = document.getElementById('valor');
const inputField = document.getElementById('inputValor');

select.addEventListener('change', () => {
    const escolha = select.value;
    let valor;

    switch (escolha) {
        case 'consul':
            valor = parseFloat(inputField.value) || 0;
            break;
        case 'alSala':
            valor = parseFloat(inputField.value) || 0;
            break;
        case 'alEq':
            valor = parseFloat(inputField.value) || 0;
            break;
        default:
            valor = 0;
    }

    valorDiv.innerHTML = `<sup>R$</sup><span>${valor.toFixed(2)}</span>`;
});