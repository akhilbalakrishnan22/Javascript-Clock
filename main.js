const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const strokesHours = document.getElementById('strokesHours');
const strokesMinutes = document.getElementById('strokesMinutes');

function strokeClock(elementWrapper, deg, strokeTotal) {
    let degRotate = 0;
    for (let index = 0; index < strokeTotal; index++) {
        const span = document.createElement('span');
        degRotate += deg;
        span.style.transform = `rotateZ(${degRotate}deg)`;
        elementWrapper.append(span);
    }
}

strokeClock(strokesHours, 30, 12);
strokeClock(strokesMinutes, 6, 60);

function animate() {
    requestAnimationFrame(animate)
    const date = new Date();
    const hrs = date.getHours() * 30;
    const mins = date.getMinutes() * 6;
    const secs = date.getSeconds() * 6;

    hours.style.transform = `rotateZ(${hrs + (mins / 12)}deg)`;
    minutes.style.transform = `rotateZ(${mins}deg)`;
    seconds.style.transform = `rotateZ(${secs}deg)`;
}
animate()