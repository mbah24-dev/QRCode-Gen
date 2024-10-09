/* Selection des elements du DOM*/
const qrText = document.getElementById('qr-text');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');

//Le conteneur pour affficher le QR Code
const qrContainer = document.querySelector('.qr-body');

generateBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    isEmptyInput()
});

downloadBtn.addEventListener('click', ()=>{
    let img = document.querySelector('.qr-body img');

    if(img !== null){
        let imgAtrr = img.getAttribute('src');
        downloadBtn.setAttribute("href", imgAtrr);

        downloadBtn.setAttribute("download", "QR_Code_img.png");
    }
    else{
        alert("Vous devez generer le QR CODE avant , Merci !")
    }
});

function isEmptyInput(){
    qrText.value.length > 0 ? generateQRCode() : alert("Entrez le texte ou l'URL pour générer votre QR code");
}

function generateQRCode(){
    qrContainer.innerHTML = '';
    new QRCode(qrContainer, {
        text: qrText.value,
        height: 100,
        width: 100,
        colorLight: "#fff",
        colorDark: "#000"
    });
}
