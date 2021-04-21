import { makeAutoObservable } from "mobx";

class UserForm {
  firstName: string;
  lastName: string;

  constructor() {
    this.firstName = "";
    this.lastName = "";
    makeAutoObservable(this);
  }

  setFirstName(firstName: string) {
    this.firstName = firstName;
    console.log(this.firstName);
  }
  setLastName(lastName: string) {
    this.lastName = lastName;
    console.log(this.lastName);
  }
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}

export default new UserForm();
