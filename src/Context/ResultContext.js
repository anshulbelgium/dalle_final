import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Openai from "../api";

import Pic1 from '../Assets/images/dummy/pic-1.jfif';
import Pic2 from '../Assets/images/dummy/pic-2.jfif';
import Pic3 from '../Assets/images/dummy/pic-3.jfif';
import Pic4 from '../Assets/images/dummy/pic-4.jfif';
import Pic5 from '../Assets/images/dummy/pic-5.jfif';
import Pic6 from '../Assets/images/dummy/pic-6.jfif';
import Pic7 from '../Assets/images/dummy/pic-7.jfif';
import Pic8 from '../Assets/images/dummy/pic-8.jfif';

export const ResultContext = createContext();

const imageDataNew = [
  {
    url: Pic1,
    prompt:
      "Depicting a serene and magical forest scene illuminated by moonlight",
  },
  {
    url: Pic2,
    prompt: "Futuristic cityscape at sunset, showcasing advanced architecture and flying vehicles",
  },
  {
    url: Pic3,
    prompt: "Underwater paradise with vibrant coral reefs, exotic fish, and a hidden treasure chest",
  },
  {
    url: Pic4,
    prompt: "Portrays a whimsical and enchanting fairytale castle nestled in the clouds",
  },
  {
    url: Pic5,
    prompt: "Bustling market square in a historic European city, capturing the vibrant colors and lively atmosphere",
  },
  {
    url: Pic6,
    prompt: "Showcasing a breathtaking sunrise over a picturesque mountain range, with misty valleys and soaring eagles",
  },
  {
    url: Pic7,
    prompt: "Illustrates a futuristic space station orbiting a distant planet, with astronauts conducting scientific experiments",
  },
  {
    url: Pic8,
    prompt: "Idyllic countryside landscape during autumn, with golden-hued trees, a charming farmhouse, and grazing farm animals",
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

const MyProvider = ({ children }) => {
  const navigate = useNavigate();
  
  const [value, setValue] = useState([])
  const [userPrompt, setUserPrompt] = useState("")
  const [history, setHistory] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [iframe , setIframe] = useState("")


  const generateImage = async (data) => {
    setIsLoading(true);
    try {
      
      const imageParameters = {
        prompt: data || userPrompt,
        n: 2,
        size: "256x256",
      }
      const response = await Openai.createImage(imageParameters);
      const urlData = response.data.data;

      setTimeout(() => {
        setValue(urlData);
        localStorage.setItem("imageUrl", JSON.stringify(urlData));
        setIsLoading(false);
  
        const parameter = userPrompt;
        const newParameter = parameter.split(' ').join('-');
        navigate(`/result?search=${newParameter}`);
      }, 5000);

      // setTimeout(() => {
      //   setValue(imageDataNew);
      //   setIsLoading(false);
      //   const parameter = userPrompt;
      //   const newParameter = parameter.split(" ").join("-");
      //   navigate(`/result?search=${newParameter}`);
      // }, 3000);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  const handleImage = (url) => {
    setHistory([...history, url]);
  };
  // console.log(history)

  return (
    <ResultContext.Provider
      value={{
        value,
        setValue,
        userPrompt,
        setUserPrompt,
        imageDataNew,
        generateImage,
        handleImage,
        iframe, 
        setIframe,
        history,
        isloading,
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export default MyProvider;
