import { createContext , useState  , useEffect } from "react";
import { useNavigate } from "react-router-dom";
const { Configuration, OpenAIApi } = require("openai");

const imageDataNew = [
    {
      url: "https://cdn.openai.com/labs/images/3D%20render%20of%20a%20cute%20tropical%20fish%20in%20an%20aquarium%20on%20a%20dark%20blue%20background,%20digital%20art.webp?v=1",
      prompt:
        "3D render of a cute tropical fish in an aquarium on a dark blue background, digital art",
    },
    {
      url: "https://cdn.openai.com/labs/images/An armchair in the shape of an avocado.webp?v=1",
      prompt: "An armchair in the shape of an avocado",
    },
    {
      url: "https://cdn.openai.com/labs/images/A futuristic neon lit cyborg face.webp?v=1",
      prompt: "A futuristic neon lit cyborg face",
    },
    {
      url: "https://cdn.openai.com/labs/images/A 3D render of an astronaut walking in a green desert.webp?v=1",
      prompt: "A 3D render of an astronaut walking in a green desert",
    },
    {
      url: "https://cdn.openai.com/labs/images/A computer from the 90s in the style of vaporwave.webp?v=1",
      prompt: "A computer from the 90s in the style of vaporwave",
    },
    {
      url: "https://cdn.openai.com/labs/images/A van Gogh style painting of an American football player.webp?v=1",
      prompt: "A van Gogh style painting of an American football player",
    },
    {
      url: "https://cdn.openai.com/labs/images/A cartoon of a monkey in space.webp?v=1",
      prompt: "A cartoon of a monkey in space",
    },
    {
      url: "https://cdn.openai.com/labs/images/High quality photo of a monkey astronaut.webp?v=1",
      prompt: "High quality photo of a monkey",
    },
    {
      url: "https://cdn.openai.com/labs/images/A cyberpunk monster in a control room.webp?v=1",
      prompt: "A cyberpunk monster in a control room",
    },
    {
      url: "https://cdn.openai.com/labs/images/A photo of a Samoyed dog with its tongue out hugging a white Siamese cat.webp?v=1",
      prompt:
        "A photo of a Samoyed dog with its tongue out hugging a white Siamese",
    },
    {
      url: "https://cdn.openai.com/labs/images/A sunlit indoor lounge area with a pool with clear water and another pool with translucent pastel pink water, next to a big window, digital art.webp?v=1",
      prompt:
        "A sunlit indoor lounge area with a pool with clear water and another pool with translucent pastel pink water, next to a big window, digital art",
    },
    {
      url: "https://cdn.openai.com/labs/images/A handpalm with a tree growing on top of it.webp?v=1",
      prompt: "A handpalm with a tree growing on top of it",
    },
    {
      url: "https://cdn.openai.com/labs/images/3D render of a pink balloon dog in a violet room.webp?v=1",
      prompt: "3D render of a pink balloon dog in a violet room",
    },
    {
      url: "https://cdn.openai.com/labs/images/A Shiba Inu dog wearing a beret and black turtleneck.webp?v=1",
      prompt: "A Shiba Inu dog wearing a beret and black turtleneck",
    },
    {
      url: "https://cdn.openai.com/labs/images/A 3D render of a rainbow colored hot air balloon flying above a reflective lake.webp?v=1",
      prompt:
        "A 3D render of a rainbow colored hot air balloon flying above a reflective lake",
    },
    {
      url: "https://cdn.openai.com/labs/images/Two futuristic towers with a skybridge covered in lush foliage, digital art.webp?v=1",
      prompt:
        "Two futuristic towers with a skybridge covered in lush foliage, digital art",
    },
  ];

export const DataContext  = createContext()


const DataProvider = ({children}) => {
    let navigate  = useNavigate()
    const [imageData , setImageData] = useState([])
    const [userPrompt , setUserPrompt] = useState("")
    const [currentImage , setCurrentImage] = useState("")
    const [historyData , setHistoryData] = useState([])
    const [loading , setLoading] = useState(true)


    const configuration = new Configuration({
        apiKey: "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"
    });

    const openai = new OpenAIApi(configuration);

    const handleImage = (url) => {
        setCurrentImage(url.url)
        const myImage = [...historyData , url.url]
        setHistoryData(myImage)
      }
      
    const generateNewImage = async() => {
        navigate("/imgenerator")
        const imageParameters = {
                 prompt: userPrompt,
                 n: 1,
                 size: "256x256",
               }
               const response = await openai.createImage(imageParameters);
               const urlData = response.data.data
               localStorage.setItem("img" , urlData[0].url)
               setImageData(urlData) 
               setLoading(false)
        }


 return(
     <DataContext.Provider value = {{imageData , setImageData , userPrompt , setUserPrompt , imageDataNew,
     currentImage , setCurrentImage , historyData , setHistoryData  , handleImage , generateNewImage , loading , setLoading }}>
        {children}
     </DataContext.Provider>
 )
}

export default DataProvider