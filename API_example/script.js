let qrcd;

function initMap() {
  var qrcd = new POST(document.getElementById('qr'), {
    frame_name: 'no-frame',
    qr_code_text: 'https://www.qr-code-generator.com/',
    image_format: 'SVG',
    qr_code_logo: 'scan-me-square'
  });
}
