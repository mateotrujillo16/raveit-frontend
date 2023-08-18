const Login = () => {
  return (
    <div className="login">
      <div className="login__logo">
        <img />
      </div>
      <div>
        <label htmlFor="username">Email address or username</label>
        <input type="text" name="username" placeholder="Email address or username"/>

        <label htmlFor="username">Password</label>
        <input type="text" name="password" placeholder="Password"/>
      </div>
      <div className="login__secondary">

      </div>
      <div className="login__signup">
        <span>
          Don't have an account?
          <a href="#">sign up</a>
        </span>

        <a href="#">reset password</a>
      </div>
    </div>
  );
}

export default Login;