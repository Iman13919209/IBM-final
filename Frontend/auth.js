document.getElementById("signUpForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("Sign up button clicked");
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch("https://ibm-final.onrender.com/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password })
    });

    const data = await res.json();
    alert(data.message);
    if(res.status==201){
        window.location.href="login.html";
    }
});

document.getElementById("loginForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("login button clicked");
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch("https://ibm-final.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    if (data.token) {
        localStorage.setItem("token", data.token);
        alert("Login Successful!");
        // Toastify({
        //     text: "This is a toast",
        //     className: "info",
        //     style: {
        //       background: "linear-gradient(to right, #00b09b, #96c93d)",
        //     }
        //   }).showToast();
        window.location.href = "index.html"; // Redirect to homepage
    } else {
        alert(data.message);
    }
});
