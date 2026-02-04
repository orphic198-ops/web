const video = document.getElementById('camera');
const canvas = document.getElementById('canvas');
const captureBtn = document.getElementById('capture-btn');
const wall = document.getElementById('wall');

// Access webcam
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => video.srcObject = stream)
    .catch(err => console.error("Camera error: ", err));

// Capture photo
captureBtn.addEventListener('click', () => {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);

    // Add sticker example
    // ctx.drawImage(stickerImage, x, y, width, height);

    const imgURL = canvas.toDataURL('image/png');
    const img = document.createElement('img');
    img.src = imgURL;

    wall.appendChild(img);
});
