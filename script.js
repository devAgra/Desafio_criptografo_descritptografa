const inputText = document.getElementById('input-text');
const cryptBtn = document.getElementById('crypt-btn');
const decryptBtn = document.getElementById('decrypt-btn');
const outputImage = document.getElementById('output-image');
const outputText = document.getElementById('output-text');
const copyBtn = document.getElementById('copy-btn');

// Função para criptografar o texto
function crypt() {
    const text = inputText.value.toLowerCase();
    let cryptedText = '';

    for (let i = 0; i < text.length; i++) {
        switch (text[i]) {
            case 'e':
                cryptedText += 'enter';
                break;
            case 'i':
                cryptedText += 'imes';
                break;
            case 'a':
                cryptedText += 'ai';
                break;
            case 'o':
                cryptedText += 'ober';
                break;
            case 'u':
                cryptedText += 'ufat';
                break;
            default:
                cryptedText += text[i];
        }
    }

    outputImage.style.display = 'none';
    outputText.textContent = cryptedText;
}

// Função para descriptografar o texto
function decrypt() {
    const text = inputText.value.toLowerCase();
    let decryptedText = text.replace(/enter/g, 'e')
                            .replace(/imes/g, 'i')
                            .replace(/ai/g, 'a')
                            .replace(/ober/g, 'o')
                            .replace(/ufat/g, 'u');

    outputImage.style.display = 'none';
    outputText.textContent = decryptedText;
}

// Função para copiar o texto
function copyText() {
    const text = outputText.textContent;
    navigator.clipboard.writeText(text);
    alert('Texto copiado para a área de transferência!');
}

// Eventos de clique nos botões
cryptBtn.addEventListener('click', crypt);
decryptBtn.addEventListener('click', decrypt);
copyBtn.addEventListener('click', copyText);