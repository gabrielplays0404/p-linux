const hashes = {
    x64: '51ba0fb5d9a960173c73368aae6a3251b320592607907037ef0a6e82094c8acf',
    x32: '5214797f3fe7850b0af2feb3986f1cf9f4508301c341fddefb1b29319902fab9'
};

// Alerta SHA256 antes do download
function alertarSHA(versao) {
    alert("O download do Paper Linux (" + versao + ") será iniciado via Proton/Drive.\n\nSHA256 para conferência:\n" + hashes[versao]);
}

// Copiar comando do terminal
function copyCommand() {
    const textToCopy = document.getElementById('cmd-text').innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
        const btnIcon = document.querySelector('.terminal-box button i');
        if (btnIcon) {
            btnIcon.className = 'fas fa-check';
            setTimeout(() => { btnIcon.className = 'fas fa-copy'; }, 2000);
        }
    });
}

// Botão Voltar ao topo
window.onscroll = function() {
    const btnTop = document.getElementById("btnTop");
    if (btnTop) {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            btnTop.style.display = "block";
        } else {
            btnTop.style.display = "none";
        }
    }
};

function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Rolagem Suave
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});





