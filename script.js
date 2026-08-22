const hashes = {
    x64: '81b26c2ed0adf40254968a66111f30ce74d42a363a16ed1ee7b206750ca1bdea',
    x32: 'ff2db327468393e936895c3b5448a371cf8d507cee231847b77cf834580f1c20'
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





