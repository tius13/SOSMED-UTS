function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');

    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`.menu-item[onclick*="${pageId}"]`).classList.add('active');
}

document.querySelector('.settings-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const bio = document.getElementById('bio').value;

    console.log("Form Submitted: ", { username, email, password, confirmPassword, bio });
});
