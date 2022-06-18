import React from 'react'

const Cards = (props) => {
  return (
    <>
       
       {/* <div class="main"> */}
        {/* <div class="card_outer"> */}
           {/* <h1>cars</h1> */}
            <div class="inner_card"> 
                <div class="cards">
                    <div class="innner">
                        <div class="image">
                            <img src={props.data.v_model_image} alt="loading" />
                        </div>
                        <div class="text_field">
                            <div class="space">
                                <a href="" class="heading"><h2>{props.data.v_model_display_name}</h2></a>
                            </div>
                            <div class="space">
                                <p>{props.data.v_model_min_price} Lakh-{props.data.v_model_max_price} Lakh</p>
                            </div>
                            <div class="space">
                                <button>View More Offer</button>
                            </div>
                         </div>    
                    </div>
                 </div>      
                 
                    

         
          </div>
     {/* <h2>view mmore</h2> */}
               
        {/* </div> */}
    {/* </div> */}

       {/* <h1>{props.data.v_model_name}</h1>
        <img src={props.data.v_model_image} alt="loading" /> */}
    </>
  )
}

export default Cards