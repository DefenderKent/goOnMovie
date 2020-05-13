import React from "react";
import {
  required,
  maxLengthCreator
} from "./../../utils/validators/validators";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import { Input } from "./../common/FormControls/FormControls";
import styles from "./../common/FormControls/FormControls.module.css";
let maxLength30 = maxLengthCreator(30);
const LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"Email"}
          name={"email"}
          component={Input}
          validate={[required, maxLength30]}
        />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          name={"password"}
          type={"password"}
          component={Input}
          validate={[required, maxLength30]}
        />
      </div>
      <div>
        <Field component={Input} name={"rememberMe"} type={"checkbox"} />
        remember me
      </div>
      {props.error && (
        <div className={styles.formSummaryError}>{props.error}</div>
      )}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};
const LoginReduxForm = reduxForm({
  form: "login"
})(LoginForm);

const Login = props => {
  const onSubmit = formData => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <>
      <h2>Login</h2>
      <LoginReduxForm onSubmit={onSubmit} />
    </>
  );
};
const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});
export default connect(mapStateToProps, { login })(Login);
