import { useEffect } from "react";

const [data, setData] = useState(null);
const [error, setError] = useState(null);
const [isLoading, setIsLoading] = useState(true);

//FOR FETCHING 1 DATA
useEffect(() => {
        const fetchData = async (url) => {
            try{
                const response = await fetch(url, {mode:"corse"});
                if(response.status>=400){
                    throw new Error(`This is an HTTP error: The status is ${response.status}`);
                }
                const imgData = await response.json();
                setData(imgData);
                setIsLoading(false);
            }catch(error){
                setError(error);
            }
            
        }
    
})


//FOR FETCHING MULTIPLE DATA
useEffect(() => {

        const fetchData = async () => {
            const fetchData1 = sdfasdfasf;
            const fetchData2 = sdfasdfasf;
            const fetchData3 = sdfasdfasf;
                try{
                    const {response1,response2,response3} = await Promise.all([fetchData1,fetchData2,fetchData3]);
                    const data1 = response1.json();
                    const data2 = response2.json();
                    const data3 = response3.json(); 

                    
                    setIsLoading(false)
                }catch(error){

                }
        }
},[])

//FOR POSTING DATA
useEffect(() => {
    const postData = async (url, payload) => {
        try {
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          });
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error posting data:', error);
        }
      }
},[])

// FOR PUTTING DATA

useEffect (() => {
    const postData = async(url, payload) => {
        try {
          const response = await fetch(url, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          });
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error updating data:', error);
        }
      }
},[])
    