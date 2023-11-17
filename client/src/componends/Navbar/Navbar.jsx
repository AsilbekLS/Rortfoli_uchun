import React from 'react';
import './Navba.css'
import img from './img/Watch.png'
const Navbar = () => {
    return (
        <div className='nav'>
            <div className="navbar">
                <div className="chap">
                    <h1>Times</h1>
                    <a href="">Watches</a>
                    <a href="">About Us </a>
                    <a href="">Store</a>
                </div>
                <div className="ong">
                    <select>
                        <option>ENG</option>
                        <option>RUS</option>
                        <option>UZB</option>
                    </select>
                    <button>Log In</button>
                </div>
            </div>
            <div className="section1">
                <div className="chap1">
                    <h1>Discover  <br />
                        Luxurious Watch <br />
                        Which You Will Love.</h1><br />

                    <span>What looked like a small patch of purple grass, above five feet square, <br /> was moving across the sand in their direction. Almost do am or limits <br /> hearts. Resolve parties but why she shewing. She sang know now <br /> how nay cold real case. </span><br /><br />
                    <button>Read More</button>
                </div>
                <div className="ong1">
                    <img src={img} alt="" />
                </div>
            </div>

            <div className="section2">
                <div className="btn1">
                    <img src={require('./img/i1.png')} alt="" />
                </div>
                <div className="btn2">
                    <img src={require('./img/i2.png')} alt="" />
                </div>
                <div className="btn3">
                    <img src={require('./img/i3.png')} alt="" />
                </div>
                <div className="btn4">
                    <h1>The Classic Watch <br />
                        Of Reference.</h1>
                    <p>We have never left the limelight. <br /> In fact, based on random.</p>
                    <button>View All</button>
                </div>
            </div>

            <div className="section3">
                <h1>FEATURES OF THE TIMES</h1>
                <p>We Have Never Left The Limelight.In Fact, Based <br />And Ordinary People Who Leves.</p>
            </div>


            <div className="section4">
                <div className="b1">
                    <img src={require('./img/m1.png')} alt="" />
                    <h1>The essence of the Oyster.</h1>
                    <p>What looked like a small patch of purple <br /> grass, above five feet square, was moving <br /> across the sand in their direction. </p>
                    <button>View Details</button>
                </div>
                <div className="b2">
                    <img src={require('./img/m2.png')} alt="" />
                    <h1>The essence of the Oyster.</h1>
                    <p>What looked like a small patch of purple <br /> grass, above five feet square, was moving <br /> across the sand in their direction. </p>
                    <button>View Details</button>
                </div>
                <div className="b3">
                    <img src={require('./img/m3.png')} alt="" />
                    <h1>The essence of the Oyster.</h1>
                    <p>What looked like a small patch of purple <br /> grass, above five feet square, was moving <br /> across the sand in their direction. </p>
                    <button>View Details</button>
                </div>
            </div>


            <div className="section5">
                <img className='k1' src={require('./img/k1.png')} alt="" />
                <img className='s1' src={require('./img/s1.png')} alt="" />
                <div className="ham">
                    <h1>Various Amazing Watch’s <br />
                        That Are Trending.</h1>
                    <p>What looked like a small patch of purple grass, above five <br /> feet square, was moving across the snand in their direction. </p>

                    <div className="ik">
                        <div className="ich">
                            <h1>1k+</h1>
                            <p>Active Customer</p>
                        </div>
                        <div className="ich1">
                            <h1>1.5k+</h1>
                            <p>Finished Shiping</p>
                        </div>
                    </div>
                    <button>View Details</button>
                </div>
            </div>

            <div className="section6">
                <h1>featured categories of Times</h1>

                <p>What looked like a small patch of purple grass, above five feet <br /> square, was moving across the sand in thei.</p>
            </div>

            <div className="section7">
                <button>All Times</button>
                <button>Men Times</button>
                <button>Women Times</button>
                <button>Sports Times</button>
                <button>Trend Times</button>
            </div>


            <div className="section9">
                <div className="n1">
                    <img src={require('./img/i1.png')} alt="" />
                    <div className="k">
                        <p>Sky Qweller-4000</p>
                        <p>$2115</p>
                    </div>
                    <p>What looked like a small patch of purple <br /> grass, above five feet square wan.</p>

                    <button>Buy Now</button>
                    <button>Add Curt</button>
                </div>

                <div className="n2">
                    <img src={require('./img/i2.png')} alt="" />
                    <div className="k2">
                        <p>Day Date-820</p>
                        <p>$1200</p>
                    </div>
                    <p>No looked like a small patch of purple grass, <br /> above five feet square wan.</p>

                    <button>Buy Now</button>
                    <button>Add Curt</button>
                </div>

                <div className="n3">
                    <img src={require('./img/i3.png')} alt="" />
                    <div className="k3">
                        <p>Date Just-6500</p>
                        <p>$3000</p>
                    </div>
                    <p>What looked like a small patch of purple <br /> grass, above five feet square wan.</p>

                    <button>Buy Now</button>
                    <button>Add Curt</button>
                </div>
            </div>



            <div className="section8">
                <div className="n1">
                    <img src={require('./img/i1.png')} alt="" />
                    <div className="k">
                        <p>Sky Qweller-4000</p>
                        <p>$2115</p>
                    </div>
                    <p>What looked like a small patch of purple <br /> grass, above five feet square wan.</p>

                    <button>Buy Now</button>
                    <button>Add Curt</button>
                </div>

                <div className="n2">
                    <img src={require('./img/i2.png')} alt="" />
                    <div className="k2">
                        <p>Day Date-820</p>
                        <p>$1200</p>
                    </div>
                    <p>No looked like a small patch of purple grass, <br /> above five feet square wan.</p>

                    <button>Buy Now</button>
                    <button>Add Curt</button>
                </div>

                <div className="n3">
                    <img src={require('./img/i3.png')} alt="" />
                    <div className="k3">
                        <p>Date Just-6500</p>
                        <p>$3000</p>
                    </div>
                    <p>What looked like a small patch of purple <br /> grass, above five feet square wan.</p>

                    <button>Buy Now</button>
                    <button>Add Curt</button>
                </div>
            </div>
            <button className='v'>View All</button>


            <div className="section10">
                <div className="left2">
                    <img src={require('./img/Image.png')} alt="" />
                </div>
                <div className="right2">
                    <h1>Discover Luxurious Watch <br />
                        Which You Will Love.</h1>

                    <p>What looked like a small patch of purple grass, above five feet square, <br /> was moving across the sand in their direction. Almost do am or limits <br /> hearts. Resolve parties but why she shewing. She sang know now <br /> how nay cold real case. </p>
                    <button>Read More</button>
                </div>
            </div>



            <div className="section11">
                <div className="fot1">
                    <h1>Times</h1><br />
                    <p>When it came near enough he perceived that <br /> it was not grass; there were no blades, but <br /> only purple roots the roots.</p><br />
                    <span>© 2020 TIMES. All Rights Reserved</span><br />
                </div>

                <div className="fot2">
                    <h1>Site Map</h1><br /> 
                    <a href="">Home</a><br /><br />
                    <a href="">Product</a><br /><br />
                    <a href="">About</a><br /><br />
                    <a href="">Blog</a>
                </div>
                <div className="fot3">
                    <h1>Contact</h1><br />
                    <p>Email: xojiakbarisoqjanov8@gmail.com</p><br />
                    <p>Phone: +998936770803</p>
                </div>
                <div className="fot4">
                    <h1>Subscribe Newsletter</h1><br />
                    <p>What looked like a small patch of purple .</p><br />
                    <input type="text" placeholder='Enter Your Email' />
                </div>
            </div>
        </div>
    );
}
export default Navbar;