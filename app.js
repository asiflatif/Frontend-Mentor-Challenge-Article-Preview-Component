//selector
const shareButton = document.getElementById('shareButton');
const shareToggle = document.getElementById('shareToggle');

//event listener
window.addEventListener('click', getClickEvent);

//function
function getClickEvent(e) {

    const item = e.target;
    if (item.classList[0] === 'card-share-button') {
        shareToggle.classList.toggle('hidden');

    } else {
        shareToggle.classList.add('hidden');
    }
    // if (e.target === null || (e.target != shareButton && e.target.parentElement != shareButton && e.target.parentElement.parentElement != shareButton)) {
    //     shareToggle.classList.add('hidden');
    //     shareButton.classList.remove('active');
    // } else {
    //     shareToggle.classList.toggle('hidden');
    //     shareButton.classList.toggle('active');
    // }

}