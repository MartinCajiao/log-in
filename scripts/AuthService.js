// auth/AuthService.js
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

export class AuthService {

  constructor(app) {
    this.auth = getAuth(app);
  }

  async signUp(email, password) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  async signIn(email, password) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
}
