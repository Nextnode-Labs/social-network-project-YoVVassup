import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from './../Common/FormControls/FormsControls.module.css'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input}
                       validate={[required]}
                       type={"text"}
                       placeholder={'Email'}
                       name={'email'}/>
            </div>
            <div>
                <Field component={Input}
                       validate={[required]}
                       type={"password"}
                       placeholder={'Password'}
                       name={'password'}/>
            </div>
            <div>
                <Field component={Input}
                       type={"checkbox"}
                       name={'rememberMe'}/> remember me
            </div>
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h2>Login</h2>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login}) (Login);