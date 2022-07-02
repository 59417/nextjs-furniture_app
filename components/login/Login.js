import { useForm } from 'react-hook-form';
import classes from './Login.module.css';
import { useRouter } from 'next/router';


function Login() {

    const { register, handleSubmit, getValues, setValue, formState } = useForm();

    const onSubmit = (data) => { 
        console.log(data);
        console.log(formState.isSubmitSuccessful);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
            <div>
                <label htmlFor="username">帳號</label>
                <input {...register("username", { required: true })} type="text" placeholder="username"/>
            </div>
            <div>
                <label htmlFor="password">密碼</label>
                <input {...register("password", { required: true })} type="password" placeholder="password"/>
            </div>
            <div className={classes.btns}>
                <button type="submit">登入</button>
            </div>
        </form>
    )
};

export default Login;
