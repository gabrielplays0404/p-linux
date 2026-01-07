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
document.querySelectorAll('.mini-terminal').forEach(item => {
    item.style.cursor = 'pointer';
    item.title = 'Clique para copiar';
    
    item.addEventListener('click', () => {
        const text = item.innerText;
        navigator.clipboard.writeText(text);
        
        const originalText = item.innerText;
        item.innerText = 'Copiado!';
        item.style.color = '#fff';
        
        setTimeout(() => {
            item.innerText = originalText;
            item.style.color = '#2ecc71';
        }, 1500);
        function copyEmail(event) {
    // Impede qualquer comportamento padrão do link
    event.preventDefault();
    
    const meuEmail = "ContatoPaperLinux@proton.me"; // <-- COLOQUE SEU EMAIL AQUI
    const textSpan = document.getElementById("emailText");
    
    navigator.clipboard.writeText(meuEmail).then(() => {
        const originalText = textSpan.innerText;
        textSpan.innerText = "Copiado!";
        
        // Feedback visual rápido
        setTimeout(() => {
            textSpan.innerText = originalText;
        }, 2000);
    }).catch(err => {
        alert("E-mail: " + meuEmail); // Fallback caso o navegador bloqueie o clipboard
    });
}


