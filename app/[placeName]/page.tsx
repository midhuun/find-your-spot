'use client';
import Image from "next/image";
import { use, useEffect, useState } from "react";
import Loading from "../loading"; // Import the Loading component
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Link from "next/link";
import { useParams } from 'next/navigation'
export default function Home() {
  const params = useParams<{placeName: string }>()
  const [results,setResults] = useState<Place[]>([]);
  const result = results?.find((result:Place)=>result.id === params.placeName)
  useEffect(() => {
    const results = localStorage.getItem('results')
     setResults(results?JSON.parse(results):"")
  }, []);
  const similar = results.filter((result)=>result.id !== params.placeName );
   console.log(similar);
   
    interface Place {
        id:string;
        place: string;
        description: string;
        totalNumberOfDays: number; // Changed to camelCase for TypeScript convention
        bestWith: string; // Changed to camelCase for TypeScript convention
        distance: string;
        estimatedTime: string;
        activitiesToDo: string[]; // Array of strings
        estimatedBudget: string;
        placeExactNameWithFullAddress: string;
        link?:ImageItem[] // Changed to camelCase for TypeScript convention
      }
      const imageStyle = {
        border: '1px solid #fff',
        
      }
      interface ImageItem {
        link: string;
        image:any;
      }
  return (
    <main className="w-full py-5 md:py-10 px-2 lg:px-5">
    <div className="flex  gap-5 lg:px-5 lg:pb-5 items-center">
      <div className='w-7 h-7 m-2 rounded-full  border-2'>
      <Link href='/'>  
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>

      </Link>
        </div>
    </div>
    <div className=" lg:flex " >
      <div className='lg:w-[50%] w-[95%]'>
      <Carousel autoPlay={true} showThumbs={false}>
        {result?.link?.map((item: any, index: number) => (
          <div
            key={index}
            className="lg:h-[600px] h-[250px]  max-w-[150px] lg:w-[450px] shadow-md "
          >
            <Image
              fill={true}
              objectFit="cover"
              style={imageStyle}
              loader={() => item.link}
              className="object-contain"
              src={item.link}
              alt="Hello"
            />
          </div>
        ))}
      </Carousel>
      </div>
      <div className='flex flex-col gap-4 py-4 px-2 lg:px-7'>
      <p className="lg:text-xl text-md font-bold lg:px-5">{result?.place}</p>
      <p className='text-[12px]  lg:text-lg text-gray-800 lg:px-5'>{result?.description}</p>
      <div className="flex gap-3">
        <p className="font-bold lg:text-xl text-sm lg:px-5">Total Number of Days:</p>
        <p className=''>{result?.totalNumberOfDays}</p>
      </div>
      <div className="flex items-center gap-3">
        <p className="font-bold lg:px-5 lg:text-xl text-sm">Best With:</p>
        <p className=''>{result?.bestWith}</p>
      </div>
      <p className="font-bold lg:px-5 lg:text-xl text-sm">Activities to do:</p>
      <div className="flex gap-3  lg:px-5 flex-wrap">
      {result?.activitiesToDo?.map((activity,index)=>{
        return(
         <div key={index} className=" lg:px-5 font-light px-2 rounded-md text-sm py-2 border hover:bg-blue-500 hover:text-white">{activity}</div>
        )
      }
    )}
    </div>
      </div>
    </div>
 <div className="similar pt-5 lg:pt-10 px-3 ">
  <p className="font-bold text-md lg:text-xl  py-5">Similar Places</p>
  <div className="flex gap-6 overflow-x-scroll">
    {similar?.map((item:any,index:number)=>
    <div className="lg:h-[250px] h-[150px] w-[180px] flex flex-col gap-3  lg:w-[250px]" key={index}>
     <Carousel showArrows={false}   showThumbs={false}>
            {item.link?.map((links:ImageItem,index:number)=>{
            return(
              <Link href={`/${item.id}`} key={index}>
              <div className="lg:h-[200px] h-[150px] w-[180px] lg:w-[180px] shadow-md" >
            <Image fill={true} objectFit="cover" style={imageStyle} loader={() => links.link} className="object-contain" src={links.link} alt="Hello" />
              </div>
              </Link>
            
      )}
      )}
            </Carousel>
      <p className="font-normal text-md">{item.place}</p>
    </div>)}
    </div>
  </div> 
  </main>
  
  );
}
