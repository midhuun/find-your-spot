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
  estimatedBudget?: string;
  placeLocation: string;
  link?:ImageItem[];
  activitiesPlaceName?:string[];
  result?:string,
  approxBudget?:string
  BudgetToCoverThisPlace?:any
   // Changed to camelCase for TypeScript convention
}
interface Link{
  kind?:string
  contextLink:string,
  height?:number
  width?:number
  byteSize?:number
  thumbnailLink?:string,
  thumbnailHeight?:number
  thumbnailWidth?:number
}
interface ImageItem {
  kind?:string
  title?:string
  link: string;
  image:Link
  height?:string;
  width?:number;
  thumbnailHeight?:number
  thumbnailWidth?:number
  htmlTitle?:string
  displayLink?:string
  snippet?:string
  htmlSnippet?:string
  mime?:string
  fileFormat?:string
}

const GeneratedContent = () => {
  const [place, setPlace] = useState(''); // State for user input
  const [text, setText] = useState<Place[]>([{"id":"SoochiparaFalls","place":"Soochipara Falls","description":"Soochipara Falls, also known as Sentinel Rock Waterfalls, is a breathtaking cascade nestled amidst the lush greenery of Wayanad. The falls plunge from a height of approximately 200 meters, creating a mesmerizing spectacle of nature. The surrounding area is a paradise for nature lovers, offering scenic trails, dense forests, and the soothing sound of cascading water. Visitors can enjoy a refreshing dip in the cool waters at the base of the falls or simply admire the beauty of this natural wonder from a distance.","totalNumberOfDays":1,"bestWith":"friends","distance":"25 km","BudgetToCoverThisPlace":[{"food":300},{"entry":50}],"estimatedTime":"2 hours","activitiesToDo":["Hiking","Swimming","Picnicking","Photography"],"placeLocation":"Soochipara - Wayanad","link":[{"kind":"customsearch#result","title":"Soochipara Falls - Wikipedia","htmlTitle":"<b>Soochipara</b> Falls - Wikipedia","link":"https://upload.wikimedia.org/wikipedia/commons/f/fd/Soochipara_Falls%2C_Wayanad_Kerala%2C_2013_%28Landscape%29.jpeg","displayLink":"en.wikipedia.org","snippet":"Soochipara Falls - Wikipedia","htmlSnippet":"<b>Soochipara</b> Falls - Wikipedia","mime":"image/jpeg","fileFormat":"image/jpeg","image":{"contextLink":"https://en.wikipedia.org/wiki/Soochipara_Falls","height":1936,"width":2592,"byteSize":2055060,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxfugrDeGyjvhEWWfTLPd3Cf69jTg_6Os5epF3W-68G_eut3saoNjk7Gs&s","thumbnailHeight":112,"thumbnailWidth":150}},{"kind":"customsearch#result","title":"4K】Soochipara Waterfalls | Wayanad | Kerala - YouTube","htmlTitle":"4K】<b>Soochipara</b> Waterfalls | <b>Wayanad</b> | Kerala - YouTube","link":"https://i.ytimg.com/vi/3WuVaFJje9k/maxresdefault.jpg","displayLink":"www.youtube.com","snippet":"4K】Soochipara Waterfalls | Wayanad | Kerala - YouTube","htmlSnippet":"4K】<b>Soochipara</b> Waterfalls | <b>Wayanad</b> | Kerala - YouTube","mime":"image/jpeg","fileFormat":"image/jpeg","image":{"contextLink":"https://www.youtube.com/watch?v=3WuVaFJje9k","height":720,"width":1280,"byteSize":323004,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH_rROIasI3op3pQXNn7FSDNlp-17dsMx5Wfj48B9SeKOw-GkiMcxWJpQ&s","thumbnailHeight":84,"thumbnailWidth":150}},{"kind":"customsearch#result","title":"Soochipara Waterfalls Wayanad, Kerala","htmlTitle":"<b>Soochipara</b> Waterfalls <b>Wayanad</b>, Kerala","link":"https://www.tourmyindia.com/states/kerala/images/soochipara-waterfalls-wayanad-1.jpg","displayLink":"www.tourmyindia.com","snippet":"Soochipara Waterfalls Wayanad, Kerala","htmlSnippet":"<b>Soochipara</b> Waterfalls <b>Wayanad</b>, Kerala","mime":"image/jpeg","fileFormat":"image/jpeg","image":{"contextLink":"https://www.tourmyindia.com/states/kerala/soochipara-waterfalls-wayanad.html","height":341,"width":467,"byteSize":92271,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ONGnr5CsFWdMxlFkD6CvMvlmxdpj6pMXTlh3Mv13Epe-ouYIoCVUBQ&s","thumbnailHeight":93,"thumbnailWidth":128}},{"kind":"customsearch#result","title":"Soochipara Falls Wayanad (Timings, History, Entry Fee, Images ...","htmlTitle":"<b>Soochipara</b> Falls <b>Wayanad</b> (Timings, History, Entry Fee, Images ...","link":"https://wayanadtourism.co.in/images/places-to-visit/headers/soochipara-falls-wayanad-tourism-entry-fee-timings-holidays-reviews-header.jpg","displayLink":"wayanadtourism.co.in","snippet":"Soochipara Falls Wayanad (Timings, History, Entry Fee, Images ...","htmlSnippet":"<b>Soochipara</b> Falls <b>Wayanad</b> (Timings, History, Entry Fee, Images ...","mime":"image/jpeg","fileFormat":"image/jpeg","image":{"contextLink":"https://wayanadtourism.co.in/soochipara-falls-wayanad","height":640,"width":1280,"byteSize":123490,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr3LXuz2wicmpGNGqGZUICtZqrxx0kqtt6gLyda-lv1xbPTyGmpy-sQOk&s","thumbnailHeight":75,"thumbnailWidth":150}},{"kind":"customsearch#result","title":"Reasons Soochipara Waterfalls Should Be Your Next Escape","htmlTitle":"Reasons <b>Soochipara</b> Waterfalls Should Be Your Next Escape","link":"https://www.lanternstay.com/wp-content/uploads/2023/09/100816080236BannerImageSOOCHIPPARAWATERFALLSIMAGE-15_20180118201857.jpg","displayLink":"www.lanternstay.com","snippet":"Reasons Soochipara Waterfalls Should Be Your Next Escape","htmlSnippet":"Reasons <b>Soochipara</b> Waterfalls Should Be Your Next Escape","mime":"image/jpeg","fileFormat":"image/jpeg","image":{"contextLink":"https://www.lanternstay.com/blog/reasons-soochipara-waterfalls-should-be-your-next-escape","height":667,"width":1000,"byteSize":98617,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqZE2sifWsX4DOjl2U711sVdAr6Ya7vN3RWO95bLCUY71ciDSeSCdiqw&s","thumbnailHeight":99,"thumbnailWidth":149}},{"kind":"customsearch#result","title":"Discover the Beauty of Soochipara Falls in Vythiri Wayanad","htmlTitle":"Discover the Beauty of <b>Soochipara</b> Falls in Vythiri <b>Wayanad</b>","link":"https://www.sterlingholidays.com/activities/vythiri/sterling-vythiri-wayanad-soochipara-falls.jpg.imgw.1280.1280.jpeg","displayLink":"www.sterlingholidays.com","snippet":"Discover the Beauty of Soochipara Falls in Vythiri Wayanad","htmlSnippet":"Discover the Beauty of <b>Soochipara</b> Falls in Vythiri <b>Wayanad</b>","mime":"image/jpeg","fileFormat":"image/jpeg","image":{"contextLink":"https://www.sterlingholidays.com/destination/vythiri-wayanad/soochipara-falls","height":450,"width":870,"byteSize":111526,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5XZaBEALmBVdkk4nnwjFibMSAtXj-rGek8ybGLQua8Z1dRWKtUWPqF_4&s","thumbnailHeight":75,"thumbnailWidth":145}},{"kind":"customsearch#result","title":"Soochipara Waterfalls Wayanad | Wayanad Sightseeing Places","htmlTitle":"<b>Soochipara</b> Waterfalls <b>Wayanad</b> | <b>Wayanad</b> Sightseeing Places","link":"https://www.wayanadtourpackages.com/wp-content/uploads/2021/05/soochipara-falls-in-wayanad-1.jpg","displayLink":"www.wayanadtourpackages.com","snippet":"Soochipara Waterfalls Wayanad | Wayanad Sightseeing Places","htmlSnippet":"<b>Soochipara</b> Waterfalls <b>Wayanad</b> | <b>Wayanad</b> Sightseeing Places","mime":"image/jpeg","fileFormat":"image/jpeg","image":{"contextLink":"https://www.wayanadtourpackages.com/soochipara-waterfalls-wayanad/","height":300,"width":400,"byteSize":39515,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZjHvRrYwNB1mcANXOeY7Xqw4gGuFRs2irKL6W5MRovMZHf_aZHdV9pg&s","thumbnailHeight":93,"thumbnailWidth":124}},{"kind":"customsearch#result","title":"Soochipara waterfall, Wayanad... Music from the water straight to ...","htmlTitle":"<b>Soochipara</b> waterfall, <b>Wayanad</b>... Music from the water straight to ...","link":"https://static2.tripoto.com/media/filter/tst/img/1375996/TripDocument/1549643073_1549643011007.jpg","displayLink":"www.tripoto.com","snippet":"Soochipara waterfall, Wayanad... Music from the water straight to ...","htmlSnippet":"<b>Soochipara</b> waterfall, <b>Wayanad</b>... Music from the water straight to ...","mime":"image/jpeg","fileFormat":"image/jpeg","image":{"contextLink":"https://www.tripoto.com/wayanad/trips/music-from-the-water-straight-to-the-heart-5c5ce73b65b75","height":1152,"width":576,"byteSize":80526,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-M_ETgUUpX_1NCCCQZBKKZUFAbMch-C9l5X0D6hP2QGrqwPpL9No5UN8&s","thumbnailHeight":150,"thumbnailWidth":75}},{"kind":"customsearch#result","title":"Soochipara Waterfalls in Wayanad, Kerala","htmlTitle":"<b>Soochipara</b> Waterfalls in <b>Wayanad</b>, Kerala","link":"https://www.keralabackwater.com/pictures/package/guide_image/wayanad-tour-vythri-treehouse-84.jpeg","displayLink":"www.keralabackwater.com","snippet":"Soochipara Waterfalls in Wayanad, Kerala","htmlSnippet":"<b>Soochipara</b> Waterfalls in <b>Wayanad</b>, Kerala","mime":"image/jpeg","fileFormat":"image/jpeg","image":{"contextLink":"https://www.keralabackwater.com/wayanad/soochipara-waterfalls.html","height":254,"width":379,"byteSize":32307,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUKKODczLOq10BloADAgzLrBa1EvPbLDnGBvjO4mAHXA6XWW0UAR6VhQ&s","thumbnailHeight":82,"thumbnailWidth":123}},{"kind":"customsearch#result","title":"The Soochipara Falls of Wayanad ( Kerala ) - YouTube","htmlTitle":"The <b>Soochipara</b> Falls of <b>Wayanad</b> ( Kerala ) - YouTube","link":"https://i.ytimg.com/vi/pKuDH8Pdrg8/maxresdefault.jpg","displayLink":"www.youtube.com","snippet":"The Soochipara Falls of Wayanad ( Kerala ) - YouTube","htmlSnippet":"The <b>Soochipara</b> Falls of <b>Wayanad</b> ( Kerala ) - YouTube","mime":"image/jpeg","fileFormat":"image/jpeg","image":{"contextLink":"https://www.youtube.com/watch?v=pKuDH8Pdrg8","height":720,"width":1280,"byteSize":91898,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4tAMNC4t7NogO5LsnsEOFNCx64ZLoH6KZz85fI4nl5EuMFzoLwk6tv3U&s","thumbnailHeight":84,"thumbnailWidth":150}}]},{"id":"ChembraPeak","place":"Chembra Peak","description":"Chembra Peak, standing tall at an elevation of 2,100 meters, is the highest peak in Wayanad. It's a popular destination for trekking enthusiasts, offering panoramic views of the surrounding valleys and mountains. The trek to the summit is challenging but rewarding, with lush forests, cascading waterfalls, and breathtaking vistas along the way. At the top, visitors can witness the iconic heart-shaped lake, a natural wonder that adds to the charm of this scenic peak.","totalNumberOfDays":1,"bestWith":"friends","distance":"35 km","BudgetToCoverThisPlace":[{"food":300},{"entry":50}],"estimatedTime":"3-4 hours","activitiesToDo":["Trekking","Hiking","Photography","Nature Walks"],"placeLocation":"Chembra - Wayanad","link":[{"kind":"customsearch#result","title":"Chembra Peak - Wikipedia","htmlTitle":"<b>Chembra</b> Peak - Wikipedia","link":"https://upload.wikimedia.org/wikipedia/commons/a/af/Chembra.jpg","displayLink":"en.wikipedia.org","snippet":"Chembra Peak - Wikipedia","htmlSnippet":"<b>Chembra</b> Peak - Wikipedia","mime":"image/jpeg","fileFormat":"image/jpeg","image":{"contextLink":"https://en.wikipedia.org/wiki/Chembra_Peak","height":2048,"width":3648,"byteSize":2444506,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUMCcM2n6tB8s_X29L2aFW0HECF7QClHwSHw3vXnsRhzEHQaNTB5e02nI&s","thumbnailHeight":84,"thumbnailWidth":150}},{"kind":"customsearch#result","title":"Chembra peak - ideal place for trekking in Wayanad | Kerala Tourism","htmlTitle":"<b>Chembra</b> peak - ideal place for trekking in <b>Wayanad</b> | Kerala Tourism","link":"https://www.keralatourism.org/images/destination/mobile/chembra_peak_in_wayanad20131119171528_508_1.jpg","displayLink":"www.keralatourism.org","snippet":"Chembra peak - ideal place for trekking in Wayanad | Kerala Tourism","htmlSnippet":"<b>Chembra</b> peak - ideal place for trekking in <b>Wayanad</b> | Kerala Tourism","mime":"image/jpeg","fileFormat":"image/jpeg","image":{"contextLink":"https://www.keralatourism.org/destination/chembra-peak-wayanad/508","height":360,"width":640,"byteSize":90009,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqHIpTYIiuVdYVJ6EbyIpGDfSrEubCDICOvMBOYc9H7fDCastv8iv3BCg&s","thumbnailHeight":77,"thumbnailWidth":137}},{"kind":"customsearch#result","title":"Chembra Peak - Best Place For Trekking In Wayanad","htmlTitle":"<b>Chembra</b> Peak - Best Place For Trekking In <b>Wayanad</b>","link":"https://thewoodsresorts.com/uploads/media/chembra-peak-in-wayanad6287293d75ca6.jpg","displayLink":"thewoodsresorts.com","snippet":"Chembra Peak - Best Place For Trekking In Wayanad","htmlSnippet":"<b>Chembra</b> Peak - Best Place For Trekking In <b>Wayanad</b>","mime":"image/jpeg","fileFormat":"image/jpeg","image":{"contextLink":"https://thewoodsresorts.com/blogs/chembra-peak-trekking-wayanad","height":667,"width":1000,"byteSize":238259,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScB29f_9AA3V5I3CU9UaCGSCbL4tIK2ImwjdXMvOsugWNs7j-hweS4HA&s","thumbnailHeight":99,"thumbnailWidth":149}},{"kind":"customsearch#result","title":"Chembra Peak in Wayanad | Districts of Malabar","htmlTitle":"<b>Chembra</b> Peak in <b>Wayanad</b> | Districts of Malabar","link":"https://www.keralatourism.org/images/malabar/static-banner/large/Chembra_Peak-28022020105008.jpg","displayLink":"www.keralatourism.org","snippet":"Chembra Peak in Wayanad | Districts of Malabar","htmlSnippet":"<b>Chembra</b> Peak in <b>Wayanad</b> | Districts of Malabar","mime":"image/jpeg","fileFormat":"image/jpeg","image":{"contextLink":"https://www.keralatourism.org/malabar/chembra-peak/194","height":432,"width":768,"byteSize":42288,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQa2MLhE2ZHNAK1ziQ_OD6L9QWzZGC9TABDgFdQhV8nvoGJwcoZkKlvQ&s","thumbnailHeight":80,"thumbnailWidth":142}},{"kind":"customsearch#result","title":"CHEMBRA PEAK - Wayanad Tour Packages","htmlTitle":"<b>CHEMBRA</b> PEAK - <b>Wayanad</b> Tour Packages","link":"https://www.wayanadtourpackages.com/wp-content/uploads/2022/12/Chembra-Peak-Wayanad_20180119201400.jpg","displayLink":"www.wayanadtourpackages.com","snippet":"CHEMBRA PEAK - Wayanad Tour Packages","htmlSnippet":"<b>CHEMBRA</b> PEAK - <b>Wayanad</b> Tour Packages","mime":"image/jpeg","fileFormat":"image/jpeg","image":{"contextLink":"https://www.wayanadtourpackages.com/chembra-peak/","height":400,"width":750,"byteSize":33922,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKI7pmucT4CZlJ1H-_PVifobmVPTa8-NEUq3e8NgC1VKW9VV_538ruijc&s","thumbnailHeight":75,"thumbnailWidth":141}},{"kind":"customsearch#result","title":"Chembra Peak - Wikipedia","htmlTitle":"<b>Chembra</b> Peak - Wikipedia","link":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Chembra.jpg/1200px-Chembra.jpg","displayLink":"en.wikipedia.org","snippet":"Chembra Peak - Wikipedia","htmlSnippet":"<b>Chembra</b> Peak - Wikipedia","mime":"image/jpeg","fileFormat":"image/jpeg","image":{"contextLink":"https://en.wikipedia.org/wiki/Chembra_Peak","height":674,"width":1200,"byteSize":176622,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmHJFwoH5wqfN4MOuUHGJ4nqhd3St5H8H9l_GKoV1a2nAd9L_XlRmiHck&s","thumbnailHeight":84,"thumbnailWidth":150}},{"kind":"customsearch#result","title":"The beauty of Chembra Peak, Wayanad. | by Nikhil Sasikumar | Medium","htmlTitle":"The beauty of <b>Chembra</b> Peak, <b>Wayanad</b>. | by Nikhil Sasikumar | Medium","link":"https://miro.medium.com/v2/resize:fit:1158/1*7PSB5UjryZjBTlRkHoGJtQ.jpeg","displayLink":"medium.com","snippet":"The beauty of Chembra Peak, Wayanad. | by Nikhil Sasikumar | Medium","htmlSnippet":"The beauty of <b>Chembra</b> Peak, <b>Wayanad</b>. | by Nikhil Sasikumar | Medium","mime":"image/jpeg","fileFormat":"image/jpeg","image":{"contextLink":"https://medium.com/@Nikhilsasikumar/the-beauty-of-chembra-peak-wayanad-d3e2487ec0ea","height":352,"width":579,"byteSize":55010,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOiuGtew6cTeGTIsMiFUHgb62j2oyULy5f49ShN8xH_DbUI0yv3Ez8lQ&s","thumbnailHeight":81,"thumbnailWidth":134}},{"kind":"customsearch#result","title":"Chembra Peak in Wayanad | Kerala Tourism","htmlTitle":"<b>Chembra</b> Peak in <b>Wayanad</b> | Kerala Tourism","link":"https://www.keralatourism.org/images/picture/hri/The_trek_uphill_2071.jpg","displayLink":"www.keralatourism.org","snippet":"Chembra Peak in Wayanad | Kerala Tourism","htmlSnippet":"<b>Chembra</b> Peak in <b>Wayanad</b> | Kerala Tourism","mime":"image/jpeg","fileFormat":"image/jpeg","image":{"contextLink":"https://www.keralatourism.org/photo-gallery/chembra-peak/2071","height":2848,"width":4288,"byteSize":5022599,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV7avTCAQ_RZ98odp0pqYdV94VXCHBYUlvHdt-293B3ghD4x5r5wvYlS8&s","thumbnailHeight":100,"thumbnailWidth":150}},{"kind":"customsearch#result","title":"Chembra Peak Trip Plan | How to go Wayanad Chembra Peak | Wayanad ...","htmlTitle":"<b>Chembra</b> Peak Trip Plan | How to go <b>Wayanad Chembra</b> Peak | <b>Wayanad</b> ...","link":"https://i.ytimg.com/vi/Y352UeDMbBM/maxresdefault.jpg","displayLink":"m.youtube.com","snippet":"Chembra Peak Trip Plan | How to go Wayanad Chembra Peak | Wayanad ...","htmlSnippet":"<b>Chembra</b> Peak Trip Plan | How to go <b>Wayanad Chembra</b> Peak | <b>Wayanad</b> ...","mime":"image/jpeg","fileFormat":"image/jpeg","image":{"contextLink":"https://m.youtube.com/watch?v=Y352UeDMbBM","height":720,"width":1280,"byteSize":275263,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-s9FArPCmrnERI87XTipIz3SM8IgGTikm5BKKyB5LaJ2h4w2NttkLOw&s","thumbnailHeight":84,"thumbnailWidth":150}},{"kind":"customsearch#result","title":"The best three hours in Wayanad - Review of Chembra Peak, Wayanad ...","htmlTitle":"The best three hours in <b>Wayanad</b> - Review of <b>Chembra</b> Peak, <b>Wayanad</b> ...","link":"https://media-cdn.tripadvisor.com/media/photo-s/10/80/d5/6e/heart-shape-lake-chembra.jpg","displayLink":"www.tripadvisor.com","snippet":"The best three hours in Wayanad - Review of Chembra Peak, Wayanad ...","htmlSnippet":"The best three hours in <b>Wayanad</b> - Review of <b>Chembra</b> Peak, <b>Wayanad</b> ...","mime":"image/jpeg","fileFormat":"image/jpeg","image":{"contextLink":"https://www.tripadvisor.com/ShowUserReviews-g1232778-d1755039-r459555915-Chembra_Peak-Kalpetta_Wayanad_District_Kerala.html","height":367,"width":550,"byteSize":23068,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkB3RV0Dy_V7mVxrcV8M1uNeJEtQF0wGVZRKfPXnu0c3ssiqzxLwCkyOI&s","thumbnailHeight":89,"thumbnailWidth":133}}]},{"id":"EdakkalCaves","place":"Edakkal Caves","description":"The Edakkal Caves are ancient rock shelters located in the Ambukutty Mala region of Wayanad. These caves are renowned for their prehistoric rock carvings, dating back to the Neolithic and Megalithic periods. The carvings depict human figures, animals, tools, and geometric patterns, providing valuable insights into the lives and beliefs of ancient people. The caves are accessible through a moderate trek, offering a unique blend of history, archaeology, and natural beauty.","totalNumberOfDays":1,"bestWith":"friends","distance":"40 km","BudgetToCoverThisPlace":[{"food":300},{"entry":50}],"estimatedTime":"2 hours","activitiesToDo":["Exploring Caves","Historical Study","Photography","Nature Walks"],"placeLocation":"Edakkal - Wayanad","link":[{"kind":"customsearch#result","title":"Edakkal caves - Wikipedia","htmlTitle":"<b>Edakkal</b> caves - Wikipedia","link":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Edakkal_Cave.jpg/1200px-Edakkal_Cave.jpg","displayLink":"en.wikipedia.org","snippet":"Edakkal caves - Wikipedia","htmlSnippet":"<b>Edakkal</b> caves - Wikipedia","mime":"image/jpeg","fileFormat":"image/jpeg","image":{"contextLink":"https://en.wikipedia.org/wiki/Edakkal_caves","height":1800,"width":1200,"byteSize":287056,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVy2D0bwXcxAoQjLdO7CNbvCeS5PNbIqNuhcVcQ5eJkEsA4PP_mjeOJYI&s","thumbnailHeight":150,"thumbnailWidth":100}},{"kind":"customsearch#result","title":"Importance of Edakkal Caves, Wayanad","htmlTitle":"Importance of <b>Edakkal</b> Caves, <b>Wayanad</b>","link":"https://thewoodsresorts.com/uploads/media/edakkal-caves-wayanad61c470581708b.jpg","displayLink":"thewoodsresorts.com","snippet":"Importance of Edakkal Caves, Wayanad","htmlSnippet":"Importance of <b>Edakkal</b> Caves, <b>Wayanad</b>","mime":"image/jpeg","fileFormat":"image/jpeg","image":{"contextLink":"https://thewoodsresorts.com/blogs/importance-of-edakkal-caves-wayanad","height":750,"width":1000,"byteSize":247376,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd7u3-yAQq4RW8jvlTLXnXJprdivIVUjDgxExeHMaiXE5zd3xtDYKVgXc&s","thumbnailHeight":112,"thumbnailWidth":149}},{"kind":"customsearch#result","title":"Edakkal - Wikipedia","htmlTitle":"<b>Edakkal</b> - Wikipedia","link":"https://upload.wikimedia.org/wikipedia/commons/6/6e/Edakkal_Caves.jpg","displayLink":"en.wikipedia.org","snippet":"Edakkal - Wikipedia","htmlSnippet":"<b>Edakkal</b> - Wikipedia","mime":"image/jpeg","fileFormat":"image/jpeg","image":{"contextLink":"https://en.wikipedia.org/wiki/Edakkal","height":707,"width":1000,"byteSize":694700,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI4IsjMeHl41m9dWEY37Kb54Jw34HGuXXplEqlZqKIwl_nvD1lMHpIOl8&s","thumbnailHeight":105,"thumbnailWidth":149}},{"kind":"customsearch#result","title":"Edakkal caves - the earliest centres of human habitation in ...","htmlTitle":"<b>Edakkal</b> caves - the earliest centres of human habitation in ...","link":"https://www.keralatourism.org/images/destination/mobile/edakkal_caves20131106153318_335_1.jpg","displayLink":"www.keralatourism.org","snippet":"Edakkal caves - the earliest centres of human habitation in ...","htmlSnippet":"<b>Edakkal</b> caves - the earliest centres of human habitation in ...","mime":"image/jpeg","fileFormat":"image/jpeg","image":{"contextLink":"https://www.keralatourism.org/destination/edakkal-caves-wayanad/335","height":360,"width":640,"byteSize":77144,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLHHRjqYvTKc4L-51UUl5YAn6ynbrAtladVwsy8iRo6Btxqjd5g4EwQw&s","thumbnailHeight":77,"thumbnailWidth":137}},{"kind":"customsearch#result","title":"Edakkal Caves, Wayanad, Kerala - Wayanad.com","htmlTitle":"<b>Edakkal</b> Caves, <b>Wayanad</b>, Kerala - <b>Wayanad</b>.com","link":"https://www.wayanad.com/admin/userfiles/1494585057_edakal2.jpg","displayLink":"www.wayanad.com","snippet":"Edakkal Caves, Wayanad, Kerala - Wayanad.com","htmlSnippet":"<b>Edakkal</b> Caves, <b>Wayanad</b>, Kerala - <b>Wayanad</b>.com","mime":"image/jpeg","fileFormat":"image/jpeg","image":{"contextLink":"https://www.wayanad.com/pages/edakkal-caves-wayanad","height":240,"width":400,"byteSize":146253,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcimAsBHNcLUXU8Prqgr323OZDnIUPs95Vrqb35VGoUY3J00orlPrmTg&s","thumbnailHeight":74,"thumbnailWidth":124}},{"kind":"customsearch#result","title":"Edakkal Caves | Oldest Human Settlement | Wayanad Tourist Places ...","htmlTitle":"<b>Edakkal</b> Caves | Oldest Human Settlement | <b>Wayanad</b> Tourist Places ...","link":"https://www.keralatourism.org/images/enchanting_kerala/large/edakkal_caves20210607111846_1087_1.jpg","displayLink":"www.keralatourism.org","snippet":"Edakkal Caves | Oldest Human Settlement | Wayanad Tourist Places ...","htmlSnippet":"<b>Edakkal</b> Caves | Oldest Human Settlement | <b>Wayanad</b> Tourist Places ...","mime":"image/jpeg","fileFormat":"image/jpeg","image":{"contextLink":"https://www.keralatourism.org/kerala-article/2021/edakkal-caves/1087","height":576,"width":1024,"byteSize":98041,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIwrDakKjqZnwoaE_0s11AxaHc4kqC6lBA7n0iXO2OqLcV_wsrjPUq2dQ&s","thumbnailHeight":84,"thumbnailWidth":150}},{"kind":"customsearch#result","title":"Edakkal Caves Wayanad, Kerala","htmlTitle":"<b>Edakkal</b> Caves <b>Wayanad</b>, Kerala","link":"https://www.tourmyindia.com/states/kerala/images/Edakkal-Caves-Wayanad-4.jpg","displayLink":"www.tourmyindia.com","snippet":"Edakkal Caves Wayanad, Kerala","htmlSnippet":"<b>Edakkal</b> Caves <b>Wayanad</b>, Kerala","mime":"image/jpeg","fileFormat":"image/jpeg","image":{"contextLink":"https://www.tourmyindia.com/states/kerala/edakkal-caves-wayanad.html","height":341,"width":467,"byteSize":112529,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdHBtSj4uSRHIIlzn5jrisKwTDNo3F2fIT_sXNiyuUliYmcf8CAOcXTg&s","thumbnailHeight":93,"thumbnailWidth":128}},{"kind":"customsearch#result","title":"Edakkal Caves, Wayanad | A beam of light penetrates the myst… | Flickr","htmlTitle":"<b>Edakkal</b> Caves, <b>Wayanad</b> | A beam of light penetrates the myst… | Flickr","link":"https://live.staticflickr.com/8384/8590913367_7c3d3df80c_b.jpg","displayLink":"www.flickr.com","snippet":"Edakkal Caves, Wayanad | A beam of light penetrates the myst… | Flickr","htmlSnippet":"<b>Edakkal</b> Caves, <b>Wayanad</b> | A beam of light penetrates the myst… | Flickr","mime":"image/jpeg","fileFormat":"image/jpeg","image":{"contextLink":"https://www.flickr.com/photos/rajeshvj/8590913367","height":685,"width":1023,"byteSize":252721,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs7aND91V97AWW4XrVOIfwkFhiLllv8yMnQR2NF-iQkEjo-ZL-BfQyOg&s","thumbnailHeight":100,"thumbnailWidth":150}},{"kind":"customsearch#result","title":"EDAKKAL VILLAGE RESORT WAYANAD $89 ($̶9̶7̶) - Ambalavayal Cottage ...","htmlTitle":"<b>EDAKKAL</b> VILLAGE RESORT <b>WAYANAD</b> $89 ($̶9̶7̶) - Ambalavayal Cottage ...","link":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/33/b4/63/edakkal-village-resort.jpg?w=700&h=-1&s=1","displayLink":"www.tripadvisor.com","snippet":"EDAKKAL VILLAGE RESORT WAYANAD $89 ($̶9̶7̶) - Ambalavayal Cottage ...","htmlSnippet":"<b>EDAKKAL</b> VILLAGE RESORT <b>WAYANAD</b> $89 ($̶9̶7̶) - Ambalavayal Cottage ...","mime":"image/jpeg","fileFormat":"image/jpeg","image":{"contextLink":"https://www.tripadvisor.com/Hotel_Review-g3721797-d12514131-Reviews-Edakkal_Village_Resort_Wayanad-Ambalavayal_Sulthan_Bathery_Wayanad_District_Kerala.html","height":467,"width":700,"byteSize":115024,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEazVfyhAd6QBGAyd8oiGMIPJxlLEDOaoWigR_-4kJ8EavEXMmPGz-Yw&s","thumbnailHeight":93,"thumbnailWidth":140}},{"kind":"customsearch#result","title":"Edakkal Caves Wayanad Timings, Entry Fee, Location, distance","htmlTitle":"<b>Edakkal</b> Caves <b>Wayanad</b> Timings, Entry Fee, Location, distance","link":"https://touristplacesinwayanad.com/wp-content/uploads/2022/06/Edakkal-1-1-1024x536.png","displayLink":"touristplacesinwayanad.com","snippet":"Edakkal Caves Wayanad Timings, Entry Fee, Location, distance","htmlSnippet":"<b>Edakkal</b> Caves <b>Wayanad</b> Timings, Entry Fee, Location, distance","mime":"image/png","fileFormat":"image/png","image":{"contextLink":"https://touristplacesinwayanad.com/wayanad-tourist-places/edakkal-caves/","height":536,"width":1024,"byteSize":1040319,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9_hIkro2GqNBRS2voLPws9Nn3J_trqe9thmf97qEn6tP0thFEynnKtoo&s","thumbnailHeight":79,"thumbnailWidth":150}}]}]);  const [type, settype] = useState("friends");
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
  
  }
  console.log(text);
  
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
  
  }
  useEffect(() => {
    const results = localStorage.getItem('results')
    if(results){
     setText(results?JSON.parse(results):"")
    }
    else{
      const results  = localStorage.setItem('results',JSON.stringify(text))
    }
  }, []);
  
  const handleInputChange = (e:any) => {
    setPlace(e.target.value); // Update input state
  };

  
  const handleSubmit = async (e:any) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true); // Set loading state
    setError(""); // Reset error state
    try {
      const prompt = `Give a atleast 13 json result in the format of {id(placeName without space- unique),place,description(minimum 60 words),
      totalNumberOfDays,bestwith(Friends,Family,Couples),distance,BudgetToCoverThisPlace(in an array
       like food:300,entry:50 -amount should be in inr),estimatedTime,activitiesToDo,placeLocation(placeName-district)} the question is give me a famous tourist spots nearby ${place} in the budget of ${budget} ,with ${peoples} people who are${type}  by car within ${within} km for ${days} dont include anything just give array of objects dont give as strings`; // Use user input as the prompt
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
          localStorage.clear();
          setText(updatedData);
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
  return (
    <>
    <div className="w-full  flex justify-between">
    <div className="p-2">
      <form className="w-full m-1 mb-5 flex items-center justify-between"  onSubmit={handleSubmit}>
      <div className='h-10 w-10 flex justify-center items-center'>
      <Link href='/'>
      <Image alt="Logo" style={imageStyle}  height={10} width={30} src='/logo.jpg' />
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
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 md:h-5">
  <path   d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
        </button>
        </div>
        <div  className="flex cursor-pointer lg:relative items-center gap-4 border p-1 lg:p-[6px] rounded-sm">
        <div onClick={()=>setisFilterOpen(!isFilterOpen)} className="flex cursor-pointer  items-center gap-2 lg:gap-4  rounded-sm">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4">
  <path   d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
</svg>
 <p className='select-none lg:text-[16px] text-[12px]'>Filters</p>
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-3">
  <path   d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
</div>
 <div className={clsx('absolute top-0 lg:top-12 lg:bottom-[-470px] left-0  z-[20] h-screen p-2 lg:p-0 min-w-full lg:h-[450px] lg:min-w-[450px] bg-white border',{'hidden':!isFilterOpen})}>
  <div className=' p-2 lg:text-md text-[12px] w-full relative'>
    <div className="absolute right-3 top-3" onClick={()=>setisFilterOpen(false)}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round"  d="M6 18 18 6M6 6l12 12" />
</svg>

    </div>
        <div className="budget py-3 w-full flex items-center lg:items-start justify-center gap-3 lg:gap-5 flex-col">
          <p className="">Budget Range <span className='font-sm'>(₹ {budget})</span></p>
          <input value={budget} step='100' onChange={((e)=>setbudget(e.target.value))} type="range" className="w-[60%] h-[5px] bg-gray-300 rounded-lg appearance-none cursor-pointer range-thumb focus:outline-none" min='1000' max='300000' />
        </div>
        <hr />
        <div className="budget py-3 w-full flex items-center lg:items-start justify-center gap-2 flex-col">
          <p className="">Number of Peoples</p>
          <div className="flex gap-3 p-1">
              <div  className="border select-none flex cursor-pointer justify-center items-center text-[12px] rounded-full h-7 w-7" onClick={()=>decrease('d')}>-</div>
              <div className="border select-none flex justify-center items-center text-[12px] rounded-full h-7 w-7">{peoples}</div>
              <div  className="border select-none cursor-pointer flex justify-center items-center text-[12px] rounded-full h-7 w-7"  onClick={()=>decrease('i')}>+</div>
          </div>
          <hr />
        </div>
        <div className="budget py-3 w-full flex items-center lg:items-start justify-center gap-2 flex-col">
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
        <div className="budget py-3 w-full flex items-center lg:items-start justify-center gap-2 flex-col">
          <p className="">Transport</p>
          <div className="flex gap-3 p-2">
            {transportPlace.map((item,index)=>(
              <div onClick={()=>updateTravel(item)} key={index} className={clsx('border select-none flex cursor-pointer justify-center items-center text-[12px] rounded-md h-7 p-3',{
                'bg-blue-500 text-white':transport[item].active
              }
            )}>{item}</div>
            ))}
          </div>
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
            <Image unoptimized sizes="(max-width:450px)" fill={true} objectFit="cover" style={imageStyle} loader={() => item.link} className="object-contain" src={item.link} alt="Hello" />
              </div>
              </Link>
            
      )}
      )}
            </Carousel>
            <div className="w-full flex justify-between items-center">
            <h1 className="font-bold text-[14px] lg:text-lg p-3" >{result.place}</h1>
            <p className="flex text-gray-600 items-center text-[8px] lg:text-[12px] font-bold"><span className="px-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-3">
  <path   d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>
</span>{result.distance}km to visit</p>
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