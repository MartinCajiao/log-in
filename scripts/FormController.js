// ui/FormController.js
export class FormController {

  constructor(authService) {
    this.authService = authService;
  }

  init() {
    // Login form
    this.submitButton = document.getElementById("submit");
    this.emailInput = document.getElementById("email");
    this.passwordInput = document.getElementById("password");

    // Signup form
    this.signupButton = document.getElementById("sign-up");
    this.signupEmailIn = document.getElementById("email-signup");
    this.confirmSignupEmailIn = document.getElementById("confirm-email-signup");
    this.signupPasswordIn = document.getElementById("password-signup");
    this.confirmSignupPasswordIn = document.getElementById("confirm-password-signup");
    this.createacctbtn = document.getElementById("create-acct-btn");

    // UI switching
    this.main = document.getElementById("main");
    this.createacct = document.getElementById("create-acct");
    this.returnBtn = document.getElementById("return-btn");

    // Listeners
    this.submitButton.addEventListener("click", () => this.handleLogin());
    this.createacctbtn.addEventListener("click", () => this.handleSignup());
    this.signupButton.addEventListener("click", () => this.showSignup());
    this.returnBtn.addEventListener("click", () => this.showLogin());
  }

  showSignup() {
    this.main.style.display = "none";
    this.createacct.style.display = "block";
  }

  showLogin() {
    this.main.style.display = "block";
    this.createacct.style.display = "none";
  }

  async handleSignup() {
    console.log("Email enviado:", signupEmail);
    console.log("Password enviada:", signupPassword);
    let signupEmail = this.signupEmailIn.value;
    let confirmSignupEmail = this.confirmSignupEmailIn.value;
    let signupPassword = this.signupPasswordIn.value;
    let confirmSignupPassword = this.confirmSignupPasswordIn.value;

    // Validaciones
    if (signupEmail !== confirmSignupEmail) {
      alert("Emails do not match.");
      return;
    }

    if (signupPassword !== confirmSignupPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!signupEmail || !signupPassword) {
      alert("Please fill all fields.");
      return;
    }

    // Llamada al servicio
    try {
      await this.authService.signUp(signupEmail, signupPassword);
      alert("Account created successfully!");
      this.showLogin();
    } catch (error) {
      alert("Error creating account. Try again.");
    }
  }

  async handleLogin() {
    let email = this.emailInput.value;
    let password = this.passwordInput.value;

    try {
      await this.authService.signIn(email, password);
      alert("Success! Welcome back!");
       window.location.href = "../index.html";
    } catch (error) {
      alert("Error logging in. Try again.");
    }
  }
}
