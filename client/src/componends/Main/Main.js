import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Main.css'
import rasm from './img/landing.png'
import orange from './img/orange.png'
import { useState } from 'react';
const Main =() => {

    const [mevalar, setMevalar] = useState([
        { img: { orange }, p: 'Orange, 1 pc', p1: 3, p2: '-', p3: '+', p5: 'Add', p4: 1, id: 0 },
        { img: { orange }, p: 'Orange, 1 pc', p1: 3, p2: '-', p3: '+', p5: 'Add', p4: 1, id: 1 },
        { img: { orange }, p: 'Orange, 1 pc', p1: 3, p2: '-', p3: '+', p5: 'Add', p4: 1, id: 2 },
        { img: { orange }, p: 'Orange, 1 pc', p1: 3, p2: '-', p3: '+', p5: 'Add', p4: 1, id: 3 },
        { img: { orange }, p: 'Orange, 1 pc', p1: 3, p2: '-', p3: '+', p5: 'Add', p4: 1, id: 4 },
        { img: { orange }, p: 'Orange, 1 pc', p1: 3, p2: '-', p3: '+', p5: 'Add', p4: 1, id: 5 }
    ]);
    let basket = JSON.parse(localStorage.getItem("basket" || "[]")) || [];
    const [son,setSon] = useState(0)
    const incrementP4ById = (id) => {
        const newMevalar = mevalar.map(item => {
            if (item.id === id) {                                  
                return { ...item, p4:item.p4 + 1,p1: item.p1 +3};
            }
            
             else {
                return item;
            }
        })

        setMevalar(newMevalar);
        
        
    }
    const incrementP4ById2 = (id) => {
        const newMevalar = mevalar.map(item => {
            if (item.p4 > 1 && item.id === id) {                                  
                return { ...item, p4:item.p4 - 1,p1: item.p1 -3};
            }
            
             else {
                return item;
            }
        })

        setMevalar(newMevalar);
        
        
    }
    // const [cartitems,setCartitem] = useState([])
    // const hand = (mevalar) =>{
    //     const mevex = cartitems.find((item)=> item.id === mevalar.id);
    //     if(mevex){
    //         setCartitem(cartitems.map((item)=>item.id === mevalar.id ? {...mevex, }))
    //     }
    // }
    
    
    const saveToLocalStorage = (id) => {
        
        const item = mevalar.find((item) => item.id === id);
        if (item) {
            basket.push(mevalar[id])
          localStorage.setItem(`item-${item.id}`, JSON.stringify(basket));
        }

        const newMevalar = mevalar.map(item => {
            if (item.id === id) {                                  
                return { ...item, p4:item.p4 *0 +1,p1:item.p1*0 +3};
            }
            
             else {
                return item;
            }})
            setMevalar(newMevalar)
        setSon(son + item.p4 )
   

            
      };
      localStorage.setItem('cbfg',    JSON.stringify(  { img: ' ', p: ' 1', p1: '1', p2: '1 ', p3: ' 1', p5: '1 ', p4: ' 1', id: '1 ' }))
      let bs0 = localStorage.getItem( 'item-0') || localStorage.getItem('cbfg')
      let bs1 = localStorage.getItem( 'item-1') || localStorage.getItem('cbfg')
      let bs2 = localStorage.getItem( 'item-2') || localStorage.getItem('cbfg')
      let bs3 = localStorage.getItem( 'item-3') || localStorage.getItem('cbfg')
      let bs4 = localStorage.getItem( 'item-4') || localStorage.getItem('cbfg')
      let bs5 = localStorage.getItem( 'item-5') || localStorage.getItem('cbfg')
      let dw0 = JSON.parse(bs0) 
      let dw1 = JSON.parse(bs1) 
      let dw2 = JSON.parse(bs2) 
      let dw3 = JSON.parse(bs3) 
      let dw4 = JSON.parse(bs4) 
      let dw5 = JSON.parse(bs5) 
 
 let obj = JSON.parse(localStorage.getItem(dw0[0],dw1[0],dw2[0],dw3[0],dw4[0],dw5[0] || "[]")) || "malumot topilmadi";

    
    //   const obj = [JSON.parse( bs0)] 
      
      console.log(bs0);
      console.log(mevalar);
     
    const bas = function(id){
        localStorage.setItem('bass',JSON.stringify(mevalar[id]))
    }
  


    const mevalar2 = [{
        img:{orange},
        p:'Orange, 1 pc',
        p1:'$3',
        p2:'-',
        p3:'+',
        p5:'Add',
        p4:'0'
       
    },{
        img:{orange},
        p:'Orange, 1 pc',
        p1:'$3',
        p2:'-',
        p3:'+',
        p5:'Add',
        p4:'0'
       
    },{
        img:{orange},
        p:'Orange, 1 pc',
        p1:'$3',
        p2:'-',
        p3:'+',
        p5:'Add',
        p4:'0'
        
    },{
        img:{orange},
        p:'Orange, 1 pc',
        p1:'$3',
        p2:'-',
        p3:'+',
        p5:'Add',
        p4:'0'
    },{
        img:{orange},
        p:'Orange, 1 pc',
        p1:'$3',
        p2:'-',
        p3:'+',
        p5:'Add',
        p4:'0'
    },{
        img:{orange},
        p:'Orange, 1 pc',
        p1:'$3',
        p2:'-',
        p3:'+',
        p5:'Add',
        p4:'0'
    },{
        img:{orange},
        p:'Orange, 1 pc',
        p1:'$3',
        p2:'-',
        p3:'+',
        p5:'Add',
        p4:'0'
    },{
        img:{orange},
        p:'Orange, 1 pc',
        p1:'$3',
        p2:'-',
        p3:'+',
        p5:'Add',
        p4:'0'
    },]
   
   
  
 


    return (
        <div className='Wrapp'>
            <div className="kj"><span>{son}</span></div>
              <Navbar/>
              
            <div className="sec1">
          
           

            <div className="right">
<div className="yoz1">
<span className='sp2'>Let’s now shopFor daily food& necessary.</span>
<span className='sp3'>Freshness and Speed at your Fingertips: Get groceries delivered in 30 Minutes with our website or mobile app.</span>
</div>
<div className="btnn1">
<button className='bt1 gh'>Order Now</button>
<button className='bt2 gh'><svg width="31" height="37" viewBox="0 0 31 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.8231 28.5549C29.2762 29.8127 28.6288 30.9704 27.8788 32.0348C26.8564 33.4859 26.0193 34.4903 25.3742 35.0481C24.3741 35.9636 23.3027 36.4325 22.1553 36.4591C21.3316 36.4591 20.3382 36.2258 19.1819 35.7525C18.0218 35.2814 16.9556 35.0481 15.9808 35.0481C14.9584 35.0481 13.8619 35.2814 12.6891 35.7525C11.5145 36.2258 10.5682 36.4725 9.84475 36.4969C8.74447 36.5436 7.64775 36.0614 6.55305 35.0481C5.85435 34.4414 4.98042 33.4015 3.93348 31.9282C2.8102 30.3549 1.88671 28.5305 1.16324 26.4506C0.388415 24.204 0 22.0285 0 19.9223C0 17.5097 0.52369 15.4289 1.57263 13.6852C2.39701 12.2845 3.49372 11.1797 4.86635 10.3686C6.23897 9.55751 7.72209 9.14419 9.31928 9.11774C10.1932 9.11774 11.3393 9.38685 12.7634 9.91572C14.1836 10.4464 15.0955 10.7155 15.4953 10.7155C15.7942 10.7155 16.8072 10.4008 18.5245 9.7735C20.1485 9.19174 21.5191 8.95086 22.6419 9.04575C25.6845 9.29018 27.9703 10.4841 29.4905 12.6352C26.7694 14.2765 25.4233 16.5753 25.4501 19.5243C25.4747 21.8214 26.3118 23.7329 27.9569 25.2506C28.7025 25.955 29.5352 26.4994 30.4615 26.8861C30.2606 27.4661 30.0486 28.0216 29.8231 28.5549ZM22.845 1.22021C22.845 3.02062 22.1843 4.70165 20.8673 6.25761C19.2779 8.10733 17.3554 9.17619 15.2707 9.00752C15.2442 8.79153 15.2288 8.5642 15.2288 8.32532C15.2288 6.59693 15.9846 4.74721 17.3269 3.23481C17.997 2.46906 18.8493 1.83234 19.8828 1.32442C20.9141 0.824083 21.8896 0.547384 22.8071 0.5C22.8339 0.740687 22.845 0.981389 22.845 1.22018V1.22021Z" fill="#101010"/>
<path d="M29.8231 28.5549C29.2762 29.8127 28.6288 30.9704 27.8788 32.0348C26.8564 33.4859 26.0193 34.4903 25.3742 35.0481C24.3741 35.9636 23.3027 36.4325 22.1553 36.4591C21.3316 36.4591 20.3382 36.2258 19.1819 35.7525C18.0218 35.2814 16.9556 35.0481 15.9808 35.0481C14.9584 35.0481 13.8619 35.2814 12.6891 35.7525C11.5145 36.2258 10.5682 36.4725 9.84475 36.4969C8.74447 36.5436 7.64775 36.0614 6.55305 35.0481C5.85435 34.4414 4.98042 33.4015 3.93348 31.9282C2.8102 30.3549 1.88671 28.5305 1.16324 26.4506C0.388415 24.204 0 22.0285 0 19.9223C0 17.5097 0.52369 15.4289 1.57263 13.6852C2.39701 12.2845 3.49372 11.1797 4.86635 10.3686C6.23897 9.55751 7.72209 9.14419 9.31928 9.11774C10.1932 9.11774 11.3393 9.38685 12.7634 9.91572C14.1836 10.4464 15.0955 10.7155 15.4953 10.7155C15.7942 10.7155 16.8072 10.4008 18.5245 9.7735C20.1485 9.19174 21.5191 8.95086 22.6419 9.04575C25.6845 9.29018 27.9703 10.4841 29.4905 12.6352C26.7694 14.2765 25.4233 16.5753 25.4501 19.5243C25.4747 21.8214 26.3118 23.7329 27.9569 25.2506C28.7025 25.955 29.5352 26.4994 30.4615 26.8861C30.2606 27.4661 30.0486 28.0216 29.8231 28.5549ZM22.845 1.22021C22.845 3.02062 22.1843 4.70165 20.8673 6.25761C19.2779 8.10733 17.3554 9.17619 15.2707 9.00752C15.2442 8.79153 15.2288 8.5642 15.2288 8.32532C15.2288 6.59693 15.9846 4.74721 17.3269 3.23481C17.997 2.46906 18.8493 1.83234 19.8828 1.32442C20.9141 0.824083 21.8896 0.547384 22.8071 0.5C22.8339 0.740687 22.845 0.981389 22.845 1.22018V1.22021Z" fill="#101010"/>
</svg> Download for iOS</button>
</div>
            </div>
            <div className="left">
<img src={rasm} alt="" />
            </div>
            </div>
            
<div className="sec2">
    <div className="vib">
<a href="" id='sp123'>Categories</a>
<a href="">Sales</a>
<a href="">Fruits</a>
<a href="">Vegetables</a>
<a href="">Greenery</a>
<a href="">Cereals</a>
<a href="">Pasta</a>
<a href="">Dairy</a>
<a href="">Beverages</a>
<a href="">Bread</a>
<a href="">Sweets</a>
    </div>

    <div className='map'>
    {
             mevalar.map((item,i)=>(
                <div className="carts" key={i}>
                    <div className="c1">
                        <img src={orange} alt="" />
                        <span className='sp100'>{item.p}</span>
                        <span className='sp101'>{item.p1}</span>
                    </div>
                    <div className="c2">
                        <button className='pl'onClick= {() => incrementP4ById2(item.id)}></button>
                        <span className='sn'>{item.p4}</span>
                        <button className='mn' onClick={() => incrementP4ById(item.id)}>{item.p3}</button>
                        <button className='ad' onClick={() => saveToLocalStorage(item.id)}>{item.p5}</button>
                    </div>
                </div>
            ))
        }
    </div>

    <div className="filter">
<div className="yf">
<span className='sp102'>Filter</span>
<span className='sp103'>Price</span>
</div>
<div className="yi">
<input className='inp1' type="text" placeholder='from' />
<input className='inp2' type="text" placeholder='to' />
</div>
<div className="yb">
<button>popularity</button>
<button>a-z</button>
<button>z-a</button>

</div>
<div className="lm">
<div className="lb">
    <button className='ik'></button>
</div>
<span className='ds'>Discount</span>
</div>
    </div>
</div>
<div className="sec3">
<div className="vib">
<a href="" id='sp123'>Categories</a>
<a href="" id='sp123'>Filter</a>

    </div>

    <div className='map2'>
        {mevalar2.map((item)=>(
    <div className="carts">
    <div className="c1">
<img src={orange} alt="" />
<span className='sp100'>{item.p}</span>
<span className='sp101'>{item.p1}</span>
    </div>
    <div className="c2">
<button className='pl'></button>
<span className='sn'>{item.p4}</span>
<button className='mn'>{item.p3}</button>
<button className='ad'>{item.p5}</button>
    </div>
</div>
))}
    </div>

  
</div>
<div className="basket">
{/* {
    
        obj.map((item,i)=>(
           <div className="carts" key={i}>
               <div className="c1">
                   <img src={orange} alt="" />
                   <span className='sp100'>{item.p}</span>
                   <span className='sp101'>{item.p1}</span>
               </div>
               <div className="c2">
                   <button className='pl'></button>
                   <span className='sn'>{item.p4}</span>
                   <button className='mn' onClick={() => incrementP4ById(item.id)}>{item.p3}</button>
                   <button className='ad' onClick={() => saveToLocalStorage(item.id)}>{item.p5}</button>
               </div>
           </div>
       ))
   
    
   
}  */}

</div>
            <Footer/>
        </div>
    );
};


export default Main;