import {useQuery} from '@tanstack/react-query'
import React from 'react'
import axios from 'axios'
import { GlobalContext } from './Context/Context'
const url = "https://api.unsplash.com/search/photos/?client_id=SVWhd79ogS3gpL8EaAgPBqIkdn3n4e4R1FwRBmJQvMk"

const Gallery = () => {

    const {searchTerm} = GlobalContext();

    const response = useQuery({
      queryKey: ["images",searchTerm],
      queryFn: async () => {
        const result = await axios.get(`${url}&query=${searchTerm}`);
        return result.data;
      }
    });
    console.log(response);

    if (response.isLoading) {
      return <section className='image-container'>
        <h4>Loading .....</h4>
      </section>
    }

    if (response.isError) {
      return <section className='image-container'>
        <h4>Error.....</h4>
      </section>
    }

    const results = response.data.results

    if (results.length < 1) {
      return <section className='image-container'>
                <h4>No Results found .....</h4>
              </section>
    }

    return <section className='image-container'>
      {results.map((item) => {
        const url = item?.urls?. regular;
        return (
          <img src={url}
            key={
              item.id
            }
            description={
              item.alt_description
            }
            className='image'></img>
        );
      })} 
  </section>
}

export default Gallery
