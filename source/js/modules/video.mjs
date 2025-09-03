import {setAttributes} from './util.mjs';

const videoContainer = document.querySelector('.about-video');
const videoWrapper = videoContainer.querySelector('.about-video__wrapper');
const videoButtonElement = videoContainer.querySelector('.video-button');
const VIDEO_ID = '9TZXsZItgdw';
const iframeConfig = {
  title: 'HTMLAcademy',
  width: '100%',
  height: '100%',
  frameborder: '0',
  allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
  referrerpolicy: 'strict-origin-when-cross-origin',
  allowfullscreen: 'true',
};

const onPlayButtonClick = () => {
  const iframe = document.createElement('iframe');
  iframe.setAttribute('src', `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1`);
  setAttributes(iframe, iframeConfig);
  videoButtonElement.remove();
  videoWrapper.innerHTML = '';
  videoWrapper.classList.remove('about-video__wrapper--filter');
  videoWrapper.appendChild(iframe);
};

function initVideoPlayer() {
  videoButtonElement.addEventListener('click', onPlayButtonClick);
}

export {initVideoPlayer};
