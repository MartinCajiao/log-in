// main.js
import { app } from "./firebaseConfig.js";
import { AuthService } from "./AuthService.js";
import { FormController } from "./FormController.js";

const authService = new AuthService(app);
const formController = new FormController(authService);

formController.init();
