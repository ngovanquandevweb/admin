document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
    const signInForm = document.querySelector('.sign-in form');
    const signUpForm = document.querySelector('.sign-up form');
    const emailInputSignIn = signInForm.querySelector('.sign-in input[type="email"]');
    const passwordInputSignIn = signInForm.querySelector('.sign-in input[type="password"]');
    const emailInputSignUp = signUpForm.querySelector('.sign-up input[type="email"]');
    const passwordInputSignUp = signUpForm.querySelector('.sign-up input[type="password"]');
    const loginButton = signInForm.querySelector('.sign-in button');
    const registerButton = signUpForm.querySelector('.sign-up button');

    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });

    // Thêm sự kiện submit cho form đăng nhập
    signInForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của form

        const email = emailInputSignIn.value.trim();
        const password = passwordInputSignIn.value.trim();

        // Đây là nơi bạn thêm logic xác thực đăng nhập
        // Ví dụ đơn giản, kiểm tra email và password cứng để đăng nhập thành công
        if (email === 'user@example.com' && password === 'password') {
            localStorage.setItem('loggedIn', 'true');
            window.location.href = 'index.html'; // Chuyển hướng đến trang chính sau khi đăng nhập thành công
        } else {
            alert('Thông tin đăng nhập không chính xác'); // Thông báo lỗi nếu đăng nhập không thành công
        }
    });

    // Thêm sự kiện submit cho form đăng ký
    signUpForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của form

        const email = emailInputSignUp.value.trim();
        const password = passwordInputSignUp.value.trim();

        // Đây là nơi bạn có thể thêm logic để xử lý đăng ký tài khoản
        // Ví dụ đơn giản, chỉ lưu thông tin đăng ký vào localStorage
        localStorage.setItem('registeredEmail', email);
        localStorage.setItem('registeredPassword', password);

        alert('Đăng ký thành công!'); // Thông báo khi đăng ký thành công
        container.classList.remove("active"); // Đóng form đăng ký sau khi đăng ký thành công
    });

    // Kiểm tra nếu người dùng đã đăng nhập, nếu có thì chuyển hướng đến trang chính
    window.addEventListener('load', function() {
        if (localStorage.getItem('loggedIn') === 'true' && window.location.pathname === '/login.html') {
            window.location.href = 'index.html';
        }
    });
});