const hashes = {
    x64: '51ba0fb5d9a960173c73368aae6a3251b320592607907037ef0a6e82094c8acf',
    x32: '5214797f3fe7850b0af2feb3986f1cf9f4508301c341fddefb1b29319902fab9'
};

// Apenas mostra o alerta, o download é feito pelo link do HTML
function alertarSHA(versao) {
    alert("O download da Paper Linux " + versao + " será aberto no Google Drive.\n\nSHA256 para conferência:\n" + hashes[versao]);
}

// Copiar comando do terminal
function copyCommand() {
    const textToCopy = document.getElementById('cmd-text').innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
        const btnIcon = document.querySelector('.terminal-box button i');
        btnIcon.className = 'fas fa-check';
        setTimeout(() => { btnIcon.className = 'fas fa-copy'; }, 2000);
    });
}

// Rolagem Suave Corrigida
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // Compensa a altura do menu fixo
                behavior: 'smooth'
// Adicione isto ao final do seu script.js atual
document.addEventListener('DOMContentLoaded', function() {
    const btnEmail = document.getElementById('copy-email-button');
    const textSpan = document.getElementById('emailText');
    const emailParaCopiar = "contato@paperlinux.com"; // Troque pelo seu e-mail

    if (btnEmail) {
        btnEmail.addEventListener('click', function() {
            // Cria um elemento de texto invisível
            const el = document.createElement('textarea');
            el.value = emailParaCopiar;
            el.setAttribute('readonly', '');
            el.style.position = 'absolute';
            el.style.left = '-9999px';
            document.body.appendChild(el);
            
            // Seleciona e tenta copiar
            el.select();
            const successful = document.execCommand('copy');
            document.body.removeChild(el);

            if (successful) {
                const originalText = textSpan.innerText;
                textSpan.innerText = "Copiado!";
                btnEmail.style.backgroundColor = "#2ecc71"; // Feedback verde

                setTimeout(() => {
                    textSpan.innerText = originalText;
                    btnEmail.style.backgroundColor = ""; // Volta ao normal
                }, 2000);
            } else {
                // Caso falhe, mostra o e-mail em um alerta como último recurso
                alert("Não foi possível copiar automaticamente. E-mail: " + emailParaCopiar);
            }
        });
    }
});




