// components/Loading.tsx
import './globals.css'
const Loading = () => {
  const array:any = new Array(15).fill(1);
  console.log(array)
    return (
      <div className="loading flex flex-wrap gap-5">
     {array.map((_:unknown,index:string)=>{
       return(
        <>
     <div className="skeleton-container">
    <div className="skeleton loading"></div>
    <div className="skeleton loading"></div>
    <div className="skeleton loading"></div>
</div>
          </>
       )
     })}
       
        {/* You can add a spinner or any other loading animation here */}
      </div>
    );
  };
  
  export default Loading;