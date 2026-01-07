const hashes = {
    x64: '2f4591b141e959cdcbea8852b9e8b0adf00797362dc103ac0b3394b6434025a1',
    x32: '132f248ca101c859ef05a8a40107e8555d2cae58a40084b28d2bffd7a322ab53'
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
            });
        }
    });
});