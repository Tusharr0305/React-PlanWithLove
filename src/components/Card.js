// import { useState } from "react";
// function Card({id, image,info,price,name,removeTour}){
//     const [ReadMore,setReadMore]=useState(false);
//     const desc= ReadMore?info:`${info.substring(0,200)}...`;
//     function readMoreF(){
//        setReadMore(!ReadMore);
//     }
//     return (
//         <div className="card">
//         <img src={image} className="image" ></img>
//         <div>
//             <p>₹ {price}</p>
//             <p>{name}</p>
//         </div>
//         <div>
//             <p>{desc}
//             <span onClick={readMoreF} >{ReadMore?`show Less`:`ReadMore`}</span> </p>
//         </div>
//         <button onClick={removeTour(id)}> NotIntrested</button>
//         </div>
//     )
// }
// export default Card;

import { useState } from "react";


function Card({id, image,info,price,name, removeTour})  {
    const[readmore,setReadmore] = useState(false);
    
    const description = readmore ? info :`${info.substring(0,200)}....`;
    function readmoreHandler() {
        setReadmore(!readmore);
    }


    return (
        
        <div className="card">

            <img src={image} className="image"></img>

            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price font-bold"> ₹ {price}</h4>
                    <h4 className="tour-name font-bold">{name}</h4>
                </div>

                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? `Show Less`: `Read More`}
                    </span>
                </div>
            </div>

            <button className="btn-red" onClick={() => removeTour(id)}>
                Not Interested
            </button>
        </div>
        
    );
}

export default Card;