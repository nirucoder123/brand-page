const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="/img/brand_logo.png" alt="logo" />
      </div>
      <ul>
        <li href="#">Home</li>
        <li href="#">Location</li>
        <li href="#">Contact</li>
        <li href="#">About</li>
      </ul>
      <button>Login</button>
    </nav>
  );
};
export default Navigation;
