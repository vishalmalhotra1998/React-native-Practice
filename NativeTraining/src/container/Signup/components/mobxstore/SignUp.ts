import {makeObservable, observable, action, computed} from 'mobx';
interface ISignUp {
  name: string;
  email: string;
}
class SignUpData {
  public signUpData: ISignUp = {
    name: '',
    email: '',
  };

  constructor() {
    makeObservable(this, {
      signUpData: observable,
      setSignUp: action,
      nameLength: computed,
    });
  }
  setSignUp = (data: ISignUp) => {
    console.log(':::::::::data::::::::;', data);
    this.signUpData = data;
  };
  get nameLength() {
    return this.signUpData.name.length;
  }
}
const SignUpStore = new SignUpData();
export default SignUpStore;
