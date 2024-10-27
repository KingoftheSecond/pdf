// Hàm để hiển thị phần tương ứng và ẩn các phần khác
function showSection(sectionId) {
    // Ẩn tất cả các phần
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.style.display = "none"; // Ẩn tất cả các phần
    });

    // Hiện phần được chọn
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = "block"; // Hiện phần được chọn
    }
}

// Gọi hàm showSection để hiển thị phần giới thiệu khi tải trang
showSection('gioithieu');
// Đăng ký tài khoản
document.getElementById("registerForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;

    if (newUsername && newPassword) {
        localStorage.setItem("username", newUsername);
        localStorage.setItem("password", newPassword);

        console.log("Đăng ký thành công. Username: ", newUsername, " Password: ", newPassword);
        document.getElementById("registerSuccess").innerText = "Registration successful!";
        document.getElementById("registerForm").reset();
    } else {
        console.log("Đăng ký thất bại. Vui lòng kiểm tra lại.");
    }
});

// Đăng nhập
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    console.log("Tài khoản nhập: ", username);
    console.log("Mật khẩu nhập: ", password);
    console.log("Tài khoản lưu trữ: ", storedUsername);
    console.log("Mật khẩu lưu trữ: ", storedPassword);

    if (username === storedUsername && password === storedPassword) {
        console.log("Đăng nhập thành công");
        window.location.href = "home.html"; // Chuyển hướng tới trang home
    } else {
        console.log("Đăng nhập thất bại. Sai tài khoản hoặc mật khẩu.");
        document.getElementById("error").innerText = "Incorrect username or password!";
    }
});
