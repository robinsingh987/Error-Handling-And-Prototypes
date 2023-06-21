class User {
    constructor(userN, p) {
      this.userName = userN;
      this.password = p;
    }
    get getPassword() {
      let maskedPassword = '';
      for(let i = 0; i < this.password.length; i++) {
          maskedPassword += "*";
      }
      return maskedPassword;
    }
    setPassword(newPassword) {
      if(newPassword.length >=   8 && !isNaN(parseFloat(newPassword)) && newPassword !== newPassword.toLowerCase()) {
          this.password = newPassword;
      }
      else {
          console.log("Invalid password");
      }
    }
  }
  
