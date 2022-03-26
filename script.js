const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// prompt  to seclect media stream. pass to video element. then play
async function seclectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () =>{
            videoElement.play();
        };

    } catch (error) {
        console.log('error seclectMediaStream');
    }
}
seclectMediaStream();
//
button.addEventListener('click', async () => {
    // disable button
    button.disabled = true;
    // start picture in picture
    await videoElement.requestPictureInPicture();
    // reset button
    button.disabled = false;
});