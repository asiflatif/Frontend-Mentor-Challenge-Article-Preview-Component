const shareButton = document.getElementById('shareButton');
const shareToggle = document.getElementById('shareToggle');
// window.addEventListener('click', function() {
//     alert("ASD");
// });

window.addEventListener('click', (e) => {

    if (e.target === null || (e.target != shareButton && e.target.parentElement != shareButton && e.target.parentElement.parentElement != shareButton)) {
        shareToggle.classList.add('hidden');
        shareButton.classList.remove('active');
    } else {
        shareToggle.classList.toggle('hidden');
        shareButton.classList.toggle('active');
    }

});