let userData = {
    username: "Harry",
    email: "harry@example.com",
    password: "password123",
    bio: "Hello, I am Harry!",
    profilePicture: "./image/profile-1.jpeg",
    handle: "@Heryy"
};

function updateProfileDisplay() {
    document.getElementById('profileUsername').innerText = userData.username;
    document.getElementById('profileHandle').innerText = userData.handle;
    document.getElementById('profileImage').src = userData.profilePicture;
    document.getElementById('profileBio').innerText = userData.bio;
    document.getElementById('bio').value = userData.bio;
}

document.getElementById('settingsForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const newUsername = document.getElementById('username').value;
    const newEmail = document.getElementById('email').value;
    const newPassword = document.getElementById('password').value;
    const newHandle = document.getElementById('confirm-password').value;
    const newBio = document.getElementById('bio').value;

    userData.username = newUsername;
    userData.email = newEmail;
    userData.password = newPassword;
    userData.handle = newHandle;
userData.bio = newBio;

    updateProfileDisplay();
    document.getElementById('settingsForm').reset();
});

function showPage(pageId) {
    document.getElementById('feed-section').style.display = 'none';
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

document.getElementById('friends-menu').addEventListener('click', function() {
    showPage('friends-section');
});

document.getElementById('notifications-menu').addEventListener('click', function() {
    showPage('notifications-section');
});

document.getElementById('chat-menu').addEventListener('click', function() {
    showPage('chat-section');
});

document.getElementById('settings-menu').addEventListener('click', function() {
    showPage('settings-section');
});

function showFeed() {
    document.getElementById('feed-section').style.display = 'block';
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
}

const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications') {
document.querySelector('.notifications-popup').style.display = 'none';
        } else {
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    });
});

const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1) {
            user.style.display = 'flex'; 
        } else {
user.style.display = 'none';
        }
    });
}
messageSearch.addEventListener('keyup', searchMessage);

messageNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messageNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
});

function showPage(page) {
const pages = document.querySelectorAll('.page');
    pages.forEach(p => {
        p.classList.remove('active');
    });
    document.getElementById(page).classList.add('active');

    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
    const activeMenuItem = Array.from(menuItems).find(item => item.onclick.toString().includes(page))
if(activeMenuItem){
        activeMenuItem.classList.add('active');
    }
}

function handleLogin(event){
    event.preventDefault(); 
    window.location.href = "index.html"; 
}
