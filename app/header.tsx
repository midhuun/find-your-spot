// components/GeneratedContent.js
'use client';
import { use, useEffect, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Loading from "./loading"; // Import the Loading component
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
import Link from "next/link";
import clsx from 'clsx';
const key = 'AIzaSyA57_uWh9T3uvs-FmPEqqLo_58ileqY0pU'; // Use environment variable for the API key
const genAI = new GoogleGenerativeAI(key);
interface Place {
  place: string;
  id:string
  description: string;
  totalNumberOfDays: number; // Changed to camelCase for TypeScript convention
  bestWith: string; // Changed to camelCase for TypeScript convention
  distance: string;
  estimatedTime: string;
  activitiesToDo: string[]; // Array of strings
  estimatedBudget: string;
  placeLocation: string;
  link?:ImageItem[];
  activitiesPlaceName:string[];
  result:string,
  approxBudget:string
   // Changed to camelCase for TypeScript convention
}
interface Link{
  contextLink:string
}
interface ImageItem {
  link: string;
  image:Link
}

const GeneratedContent = () => {
  const [place, setPlace] = useState(''); // State for user input
  const [text, setText] = useState<Place[]>([]); // State for fetched text
  const [type, settype] = useState("friends");
  const [loading, setLoading] = useState(false); // State for loading status
  const [error, setError] = useState(""); // State for error messages
  const [peoples, setpeoples] = useState<number>(1);
  const [viewMore,setViewMore] = useState<boolean>(false);
  const [transport,setTransport] =useState<any>({
    Car:{
      label:"Car",
      active:false
    },
    Bike:{
      label:"Bike",
      active:false
    },
    Bus:{
      label:"Bus",
      active:false
    }
  })
  const [within, setwithin] = useState("50");
  const [isFilterOpen,setisFilterOpen] = useState(false);
  const [days, setdays] = useState("4");
  const [travel, setTravel] = useState<any>( {Family:{
    label:"Family",
    active:false
  },
  Friends:{
    label:"Friends",
    active:false
  },
  Couples:{
    label:"Couples",
    active:false
  }});
  const [budget, setbudget] = useState('1000');
  function updateTravel(label: string) {
    setTransport((prev:any) => {
      const updatedTransport:any = { ...prev };
  
      // Update active state
      Object.keys(updatedTransport).forEach((key) => {
        if (key === label) {
          updatedTransport[key].active = true;
        } else {  
          updatedTransport[key].active = false;
        }
      });
  
      return updatedTransport;
    });
  
    console.log(transport);
  }
  function updateBestWith(label: string) {
      setTravel((prev:any) => {
      const updatedTravel:any = { ...prev };
      // Update active state
      Object.keys(updatedTravel).forEach((key) => {
        if (key === label) {
          updatedTravel[key].active = true;
        } else {  
          updatedTravel[key].active = false;
        }
      });
  
      return updatedTravel;
    });
  
    console.log(travel);
  }
  useEffect(() => {
    const results = localStorage.getItem('results')
     setText(results?JSON.parse(results):"")
  }, []);
  
  const handleInputChange = (e:any) => {
    setPlace(e.target.value); // Update input state
  };

  
  const handleSubmit = async (e:any) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true); // Set loading state
    setError(""); // Reset error state
    try {
      const prompt = `Give a atleast 13 json result in the format of {id(placeName without space- unique),place,description(minimum 60 words),totalNumberOfDays,bestwith(Friends,Family,Couples),distance,BudgetToCoverThisPlace(in an array like food:300,entry:50 -amount should be in inr),estimatedTime,activitiesToDo,placeLocation(placeName-district)} the question is give me a famous tourist spots nearby ${place} in the budget of ${budget} ,with ${peoples} people who are${type}  by car within ${within} km for ${days} dont include anything just give array of objects dont give as strings`; // Use user input as the prompt
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(prompt);
      const res = await result.response;
      const fetchedText = await res.text();
      const jsonString = fetchedText.replace(/```json\n|\n```/g, '')
      const parsedData = JSON.parse(jsonString);
      const fetchImagesForPlaces = async (parsedData: Place[]) => {
        try {
          // Create an array of promises
          const updatedDataPromises = parsedData.map(async (data: Place) => {
            try {
              const res = await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyBtk7nRRPNkQEbMrEq9AuH-BzWZJnvR4Bk&q=${data.placeLocation}&searchType=image&cx=a407bccf188d84ee4`);
              const result = await res.json();
              
              // Return a new object with imageLink added
              return {
                ...data,
                link: result.items // Handle the case where items might be empty
              };
            } catch (error) {
              console.error('Error fetching image:', error);
              return data; // Return the original data if there's an error
            }
          });
      
          // Wait for all promises to resolve
          const updatedData:Place[] = await Promise.all(updatedDataPromises);
          console.log(updatedData);
          setText(updatedData);
          localStorage.clear();
          localStorage.setItem('results',JSON.stringify(updatedData));
        } catch (error) {
          console.error('Error in fetchImagesForPlaces:', error);
        }
      };
     fetchImagesForPlaces(parsedData)      
      // Update state with the fetched text
    } catch (err) {
      console.log(err);
      
    } finally {
      setLoading(false); // Reset loading state
    }
  
  }; 
  const imageStyle = {
    borderRadius: '12px',
    border: '1px solid #fff',
    
  }
 const transportPlace = Object.keys(transport);
 const bestWith = Object.keys(travel);
function decrease(n:string){
    switch(n){
      case 'i':
        setpeoples(peoples+1);
        break;
      case 'd':
        if(peoples<2){
          setpeoples(1)
        }
        else{
          setpeoples(peoples-1)
        }
    }
   }
   console.log(text);
  return (
    <>
    <div className="w-full  flex justify-between">
    <div className="p-2">
      <form className="w-full m-1 mb-5 flex items-center justify-between"  onSubmit={handleSubmit}>
      <div className='h-10 w-10 flex justify-center items-center'>
      <Link href='/'>
      <Image alt="Logo"  objectFit="contain" style={imageStyle}  height={10} width={30} src='/logo.jpg' />
      </Link>
      </div>
        <div className="flex gap-5 justify-center items-center">
          <div className="relative flex   items-center">
        <input className="lg:h-[40px] h-6 px-2 py-3 placeholder:text-[12px] rounded-sm placeholder:text-gray-400 w-[150px] lg:w-[350px] p-3 border-2 md:rounded-xl"
          type="text"
          value={place}
          onChange={handleInputChange}
          placeholder="Search "
          required
        />
        <button className='absolute right-3' type="submit" disabled={loading}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 md:h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
        </button>
        </div>
        <div  className="flex cursor-pointer lg:relative items-center gap-4 border p-1 lg:p-[6px] rounded-sm">
        <div onClick={()=>setisFilterOpen(!isFilterOpen)} className="flex cursor-pointer  items-center gap-2 lg:gap-4  rounded-sm">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
</svg>
 <p className='select-none lg:text-[16px] text-[12px]'>Filters</p>
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-3">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
</div>
 <div className={clsx('absolute top-0 lg:top-12 lg:bottom-[-470px] left-0  z-[20] h-screen p-2 lg:p-0 min-w-full lg:min-h-[450px] lg:min-w-[450px] bg-white border',{'hidden':!isFilterOpen})}>
  <div className=' p-2 lg:text-md text-[12px] w-full'>
        <div className="budget py-2 lg:py-3 w-full flex justify-center gap-3 lg:gap-5 flex-col">
          <p className="">Budget Range <span className='font-sm'>(₹ {budget})</span></p>
          <input value={budget} step='100' onChange={((e)=>setbudget(e.target.value))} type="range" className="w-[60%] h-[5px] bg-gray-300 rounded-lg appearance-none cursor-pointer range-thumb focus:outline-none" min='1000' max='300000' />
        </div>
        <hr />
        <div className="budget py-2 lg:py-3 w-full flex justify-center gap-2 flex-col">
          <p className="">Number of Peoples</p>
          <div className="flex gap-3 p-1">
              <div  className="border select-none flex cursor-pointer justify-center items-center text-[12px] rounded-full h-7 w-7" onClick={()=>decrease('d')}>-</div>
              <div className="border select-none flex justify-center items-center text-[12px] rounded-full h-7 w-7">{peoples}</div>
              <div  className="border select-none cursor-pointer flex justify-center items-center text-[12px] rounded-full h-7 w-7"  onClick={()=>decrease('i')}>+</div>
          </div>
          <hr />
        </div>
        <div className="budget py-2 lg:py-3 w-full flex justify-center lg:gap-2 flex-col">
          <p className="">Traveling with</p>
          <div className="flex gap-3 p-2">
            {bestWith.map((item,index)=>(
              <div key={index}  className={clsx('border select-none flex cursor-pointer justify-center items-center text-[12px] rounded-md h-7 p-3',{
                'bg-blue-500 text-white':travel[item].active
              }
            )} onClick={()=>updateBestWith(item)} >{item}</div>
            ))}
          </div>
          <hr />
        </div>
        <div className="budget py-2 lg:py-3 w-full flex justify-center lg:gap-2 flex-col">
          <p className="">Transport</p>
          <div className="flex gap-3 p-2">
            {transportPlace.map((item,index)=>(
              <div onClick={()=>updateTravel(item)} key={index} className={clsx('border select-none flex cursor-pointer justify-center items-center text-[12px] rounded-md h-7 p-3',{
                'bg-blue-500 text-white':transport[item].active
              }
            )}>{item}</div>
            ))}
          </div>
          <hr />
        </div>
        <div className='w-full flex justify-center items-center'>
          <button onClick={()=>setisFilterOpen(!isFilterOpen)} className='px-4 text-[14px] rounded-md py-2 bg-blue-500 text-white'> Apply</button>
        </div>
  </div>
 </div>
        </div>
        </div>
        <div></div>
      </form>
      {loading && <Loading />} {/* Show loading component while loading */}
      {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error */}
      <div className="flex justify-center flex-wrap gap-5">{text.length > 0 && text.map((result:Place,index)=>{
        return(
          <div key={index}  className="w-[90%] md:w-[32%] ">
            <Carousel   showThumbs={false}>
            {result.link?.map((item:ImageItem,index)=>{
            return(
              <Link href={`/${result.id}`} key={index}>
              <div className="lg:h-[300px]  h-[250px] max-w-[150px] lg:w-[450px] shadow-md  rounded-md" >
            <Image sizes="(max-width:450px)" fill={true} objectFit="cover" style={imageStyle} loader={() => item.link} className="object-contain" src={item.link} alt="Hello" />
              </div>
              </Link>
            
      )}
      )}
            </Carousel>
            <div className="w-full flex justify-between items-center">
            <h1 className="font-bold text-[14px] lg:text-lg p-3" >{result.place}</h1>
            <p className="flex text-gray-600 items-center text-[8px] lg:text-[12px] font-bold"><span className="px-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-3">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>
</span>{result.distance} to visit</p>
</div>
     <p className="text-gray-600 text-[12px] lg:text-[14px] max-w-[450px] px-3 pb-6">{!viewMore?result.description.split(" ").slice(0,18).join(" "):result.description} <span><button onClick={()=>setViewMore(!viewMore)} className='text-blue-500'>{viewMore?"View less":"View more..."}</button></span></p>
            </div>
            
        )
      })}</div>
    </div>
    </div>
    </>
  );
};

export default GeneratedContent;