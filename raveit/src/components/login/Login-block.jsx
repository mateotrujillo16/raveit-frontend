const Login = () => {
  return (
    <div className="login">
      <div className="login__logo">
        <img src="./" alt="spotify-logo"/>
      </div>
      <h1 className="login__title">Login to continue.</h1>
      <div className="login__fields">
        <input type="text" name="username" placeholder="Email or username"/>
        <input type="password" name="password" placeholder="Password"/>
      </div>
      <div className="login__secondary">

      </div>
      <div className="login__signup">
        <span>
          Don't have an account?
          <a href="https://www.google.com">sign up</a>
        </span>

        <a href="https://www.google.com">reset password</a>
      </div>
    </div>
  );
}

export default Login;