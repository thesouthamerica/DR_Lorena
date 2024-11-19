// Seleciona o cabeçalho
const header = document.querySelector('header');

// Monitora a posição do mouse para exibir o cabeçalho
document.addEventListener('mousemove', (event) => {
  if (event.clientY <= 50) {
    // Se o mouse estiver próximo do topo da tela
    header.classList.add('visible');
  } else {
    // Esconde o cabeçalho se o mouse não estiver próximo
    header.classList.remove('visible');
  }
});

// Funcionalidade para o botão de cookies
document.getElementById('btn-cookie').addEventListener('click', () => {
  document.querySelector('.cookie-consent').style.display = 'none';
});
