document.getElementById('signUpButton').addEventListener('click', function(){
    window.location.href='contact.html'
});

function togglesharemenu(){
    const menu = document.getElementById('shareMenu');
    menu.style.display = menu.style.display === 'none' ? 'block' :'none';
}