import React from 'react';
import "./home.css";


function Home() {
    return (
      <div>
        <section class="ftco-section ftco-intro" style="background-image: url('https://cdn.pixabay.com/photo/2020/05/31/19/26/cherries-5243873_640.jpg');" data-stellar-background-ratio="0.5">
    	<div class="overlay"></div>
    	<div class="container">
    		<div class="row justify-content-center">
    			<div class="col-md-8 text-center">
    				<h2>Together we will explore new things</h2>
    				<a href="" class="icon-video d-flex align-items-center justify-content-center"><span class="fa fa-play"></span></a>
    			</div>
    		</div>
    	</div>
    </section>
      </div>
    );
}

export default Home;








// <div>
// <div className="login">
//     <div className="loginWrapper">
//         <div className="loginLeft">
//             <h3 className="loginLogo">
//                 Welcome to <span style={{ color: "orange" }}>Vikriti</span>
//             </h3>
//             <span className="loginDesc">
//                 Connect with friends and the world around you on Lamasocial.
//             </span>
//         </div>

//         <div className="loginRight">
//             <div className="loginLogo">
//                 Are you a <span onClick={() => handler("Login")} style={{ color: "orange", cursor: "pointer" }}>Buyer</span> or <span onClick={() => handler("Register")} style={{ color: "orange", cursor: "pointer" }}>Seller</span>?
//             </div>

           
//             {option === "Login" ? <Login /> : <Register />}
//         </div>
//     </div>
// </div>
// </div>
