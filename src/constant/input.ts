const SIGNUP_FORM = [
  {
    title: "Your name",
    _type: "text",
    _name: "yourName",
    require: true,
  },
  {
    title: "Email",
    _type: "email",
    _name: "email",
    require: true,
  },
  {
    title: "Password",
    _type: "password",
    _name: "password",
    require: true,
  },
];
const SIGNIN_FORM = [
  {
    title: "Email",
    _type: "email",
    _name: "email",
  },
  {
    title: "Password",
    _type: "password",
    _name: "password",
  },
];
const FORGOT_PASSWORD_FORM = [
  {
    title: "Email",
    _type: "email",
    _name: "email",
  },
];
export { SIGNUP_FORM, SIGNIN_FORM, FORGOT_PASSWORD_FORM };
