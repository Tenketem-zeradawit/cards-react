import CardList from "./CardList";
import image from "./outdoor-lifestyle-image-fashionable-black-woman-bright-wool-sweater-colorful-headband-hairs.jpg"
import image1 from "./webdeveloper.jpg"
import image2 from "./doctor.jpg"



const cardData= [
{
  image:image,
  title :"Photographer",
  description:" A creative professional who captures and edits images for personal, artistic, or commercial use"
},
{
  image:image1,
  title :"Web Developer",
  description:"A tech professional who creates and maintains functional, user-friendly websites."
},
{
  image:image2,
  title :"Doctor",
  description:"A healthcare expert who diagnoses, treats, and prevents illnesses to improve patient health."
}
];
function App() {
  return (
    <>

  {/* <CardList data = {cardData} /> */}

  <CardList   data = {cardData}/>

    </>
  );
}

export default App
