let qr = document.getElementById("qr");
let qrImage = document.getElementById("qrImage");
let qrtxt = document.getElementById("qrtxt");

function generateQR() {
    qrImage.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtxt.value;
}