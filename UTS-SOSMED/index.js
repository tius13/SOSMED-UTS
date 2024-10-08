   // Data pengguna (contoh)
   let userData = {
    username: "Harry",
    email: "harry@example.com",
    password: "password123",
    bio: "Hello, I am Harry!",
    profilePicture: "./image/profile-1.jpeg",
    handle: "@Heryy"
};

// Menampilkan data pengguna di profil
function updateProfileDisplay() {
    document.getElementById('profileUsername').innerText = userData.username;
    document.getElementById('profileHandle').innerText = userData.handle;
    document.getElementById('profileImage').src = userData.profilePicture;
    document.getElementById('profileBio').innerText = userData.bio; // Update bio di profil
    document.getElementById('bio').value = userData.bio; // Update bio di form
}

// Fungsi untuk menangani perubahan pengaturan
document.getElementById('settingsForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir

    // Mengambil nilai dari input
    const newUsername = document.getElementById('username').value;
    const newEmail = document.getElementById('email').value;
    const newPassword = document.getElementById('password').value;
    const newHandle = document.getElementById('confirm-password').value; // Misalkan handle adalah konfirmasi password
    const newBio = document.getElementById('bio').value;

    // Memperbarui data pengguna
    userData.username = newUsername;
    userData.email = newEmail;
    userData.password = newPassword;
    userData.handle = newHandle;
    userData.bio = newBio;

    // Menampilkan perubahan di profil
    updateProfileDisplay();

    // Kosongkan formulir
    document.getElementById('settingsForm').reset();
});

// Memperbarui tampilan awal profil
updateProfileDisplay();

// Event listener untuk tombol Post
document.getElementById('postButton').addEventListener('click', function() {
    const postInput = document.getElementById('postInput').value;
    const imageUpload = document.getElementById('imageUpload').files[0];

    // Cek apakah pengguna memasukkan teks atau mengunggah gambar
    if (!postInput && !imageUpload) {
        alert("Please enter some text or upload an image.");
        return;
    }

    // Buat elemen posting baru
    const postContainer = document.createElement('div');
    postContainer.classList.add('post'); // Kelas untuk styling

    // Tambahkan teks posting jika ada
    if (postInput) {
        const postText = document.createElement('p');
        postText.innerText = postInput;
        postContainer.appendChild(postText);
    }

    // Tambahkan gambar jika ada
    if (imageUpload) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const postImage = document.createElement('img');
            postImage.src = event.target.result;
            postImage.alt = "Uploaded Image";
            postContainer.appendChild(postImage);
        };
        reader.readAsDataURL(imageUpload);
    }

    // Tambahkan posting baru ke feed di atas postingan lama
    document.getElementById('feedContainer').prepend(postContainer);

    // Kosongkan input setelah posting
    document.getElementById('postInput').value = '';
    document.getElementById('imageUpload').value = '';
});

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications') {
            document.querySelector('.notifications-popup').
            style.display = 'none';
        } else {
            document.querySelector('.notifications-popup').
            style.display = 'block';
            document.querySelector('#notifications .notification-count').
            style.display = 'none';
        }
    })
})

const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1) {
            user.style.display = 'flex'; 
        } else {
            user.style.display = 'none';
        }
    })
}

messageSearch.addEventListener('keyup', searchMessage);

messageNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messageNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})


// Fungsi untuk menampilkan halaman yang berbeda
function showPage(page) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => {
        p.classList.remove('active');
    });
    document.getElementById(page).classList.add('active');

    // Mengatur item menu aktif
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
    const activeMenuItem = Array.from(menuItems).find(item => item.onclick.toString().includes(page));
    if (activeMenuItem) {
        activeMenuItem.classList.add('active'); // Menambahkan kelas aktif ke item yang diklik
    }
}