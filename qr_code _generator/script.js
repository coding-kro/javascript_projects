const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const qrContainer = document.querySelector('.qr-body');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');

let size = sizes.value;

generateBtn.addEventListener('click', (e) => {
  e.preventDefault();
  isEmptyInput();
});

sizes.addEventListener('change', (e) => {
  size = e.target.value;
  isEmptyInput();
});

downloadBtn.addEventListener('click', () => {
  let img = document.querySelector('.qr-body img');
  if (img !== null) {
    let imgAtrr = img.getAttribute('src');
    downloadBtn.setAttribute('herf', imgAtrr);
  } else {
    downloadBtn.setAttribute(
      'herf',
      $`{document.querySelector('canvas').toDataURL()}`
    );
  }
});

function isEmptyInput() {
  qrText.value.length > 0
    ? generateQRCode()
    : alert('Enter the text or URL to generate your QR code');
}

function generateQRCode() {
  qrContainer.innerHTML = '';
  new QRCode(qrContainer, {
    text: qrText.value,
    height: size,
    width: size,
    colorLight: '#fff',
    colorDark: '#000',
  });
}
