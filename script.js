function generateQR() {
  document.querySelector("#qrcode").style.display = "block";
  document.querySelector("#img").style.display = "none";
  document.querySelector("#container2").style.display = "none";
  let qrText = document.querySelector("#text").value;
  if (qrText.trim().length == 0) {
    document.querySelector("#qrcode .error").innerHTML =
      "Please enter some text to generate QR code";
    document.querySelector("#qrcode").style.display = "none";
  } else {
    document.querySelector("#img").style.display = "block";
    document.querySelector("#container2").style.display = "flex";
    document.querySelector("#qrcode .error").innerHTML = "";
    var img = document.querySelector("#img");
    img.crossOrigin = "Anonymous";
    img.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText;
  }
}

function downloadQR() {
  var filename = document.querySelector("#filename").value;
  if (filename.trim().length == 0) {
    filename = "QR_Code";
  }
  var img = document.querySelector("#img");
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  canvas.toBlob(function (blob) {
    var link = document.querySelector("#download");
    link.href = URL.createObjectURL(blob);
    link.download = filename + ".png";
  });
}
document.querySelector("#download").addEventListener("click", downloadQR);
