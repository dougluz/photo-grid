import React, { useState, useEffect } from 'react'
import { client } from '../../api/client'
import './feed.css'
import { LikeButton } from '../LikeButton/index'


export const Feed = () => {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const { data } = await client.get('curated', {
          params: {
            per_page: 10
          }
        })
        setPhotos(data.photos)
      } catch (error) {
        console.error(error)
      }
    };

    fetchPhotos()
  }, [])

  return <div className='container feed'>
    {photos.map(({ src }) => (
      <figure>
        <img className='feed-image' src={src.large} />
        <LikeButton />
      </figure>
      // <img className='feed-image' src={src.large} />            
    ))}
  </div>
}