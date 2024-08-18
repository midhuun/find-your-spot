interface Place {
    place: string;
    description: string;
    totalNumberOfDays: number; // Changed to camelCase for TypeScript convention
    bestWith: string; // Changed to camelCase for TypeScript convention
    distance: string;
    estimatedTime: string;
    activitiesToDo: string[]; // Array of strings
    estimatedBudget: string;
    placeExactNameWithFullAddress: string; // Changed to camelCase for TypeScript convention
  }
  export default function Places({text}:{text:Place}){

  return (
    <div>
      {text.place}
    </div>
  )
}


