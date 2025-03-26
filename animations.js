// document.addEventListener('mousemove', function(event) {
//     var cloud = document.querySelector('.cloud');
//     var x = event.clientX / window.innerWidth - 0.5;
//     var y = event.clientY / window.innerHeight - 0.5;
//     cloud.style.transform = 'rotateY(' + (x * 30) + 'deg) rotateX(' + (-y * 30) + 'deg)';
// });
//
// document.addEventListener('wheel', function(event) {
//     var cloud = document.querySelector('.cloud');
//     var scale = parseFloat(cloud.style.transform.match(/scale\(([^)]+)\)/)[1] || 1);
//     scale += event.deltaY * -0.001;
//     cloud.style.transform += ' scale(' + scale + ')';
// });
