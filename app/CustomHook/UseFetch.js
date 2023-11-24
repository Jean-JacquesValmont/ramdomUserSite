import { useState, useEffect } from 'react'

const useFetch = (url,number) => {

    const [dataFetch, setDataFetch] = useState([])

    useEffect(() => {
        
    const fetchData = async () => {
        try {
        const response = await fetch(url);
        const data = await response.json();
        setDataFetch(data);
        } 
        catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
        }
    };

    fetchData(); }, [number]);

  return (
    dataFetch
  )
}

export default useFetch