
var urlList = []
var box = document.querySelector('.photo-collection')

document.getElementById('send-btn').addEventListener('click', function() {
    const url = document.querySelector('#url-input').value;
    console.log(url);

    urlList.push(url)
    console.log(urlList);
    
    box.innerHTML += `<img src="${url}" alt="" class="photo">`
    document.querySelector('#url-input').value =''
});

window.addEventListener('beforeunload', function (e) {
    var confirmationMessage = 'Are you sure you want to leave this page?';
    e.returnValue = confirmationMessage; // For most browsers
    return confirmationMessage; // For some older browsers
});


