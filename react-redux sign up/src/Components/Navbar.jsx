import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../App.css'

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.Auth);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around', padding: '8px', backgroundColor: 'cyan' }}>
        <Link to="/">Home</Link>
        {currentUser?.role === "Admin" && <Link to="/add">Add Product</Link>}
        <Link to="/product">Product</Link>
        <Link to="/signIn"><button>SignIn</button></Link>
        <Link to="/signUp"><button>SignUp</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
