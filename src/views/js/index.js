const socket = io();

const circle = document.querySelector('#circle');

const drawCircle = (position) => {
  const { top, left } = position;
  circle.style.top = top;
  circle.style.left = left;
};

const drag = (e) => {
  const position = {
    top: e.clientY + 'px',
    left: e.clientX + 'px'
  }
  
  drawCircle(position);

  socket.emit('circle position', position);

  // circle.style.top = clientY + "px";
  // circle.style.left = clientX + "px";
}

socket.on('move circle', position => {
  drawCircle(position);
});

document.addEventListener('mousedown', e => {
  document.addEventListener('mousemove', drag);
});

document.addEventListener('mouseup', e => {
  document.removeEventListener('mousemove', drag);
});