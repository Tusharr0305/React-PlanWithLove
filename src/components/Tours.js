import Card from './Card';
// import React from "react";

function Tours({tours,removeTour}){
    return(
        <div className='container mx-auto'>
        <h1 className='title' >Plan With Love</h1>
            <div className='flex mx-auto'>
            <div className=' flex flex-row mx-auto flex-wrap'>
            {               
                tours.map( (tour)=>{
                    return <Card key={tour.id} {...tour} removeTour={removeTour} > </Card>
                })
            }
            </div>
            </div>
            

        </div>
    );
}

export default Tours;

// import Card from './Card'
// function Tours({tours, removeTour}) {
//     return (
//         <div className='container'>
//             <div>
//                 <h2 className='title'> Plan With Love</h2>
//             </div>
//             <div className='cards'>
//                 {
//                     tours.map( (tour) => {
//                         return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
//                     } )
//                 }
//             </div>
//         </div>
//     );
// }

// export default Tours;
