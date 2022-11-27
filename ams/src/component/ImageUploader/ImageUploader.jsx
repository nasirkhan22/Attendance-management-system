import React from 'react'
import './imageIploader.css'
import { useState } from 'react';


export default function ImageUploader() {
  const [ImageU, setImageU] = useState(null);

  const fileChangedHandler = event => {
    setImageU({ selectedFile: event.target.files[0] });

  }



  async function uploadHandler() {
    const Image = ImageU.selectedFile;
    console.log(Image);
    const response = await fetch('http://localhost:1337/api/Image', {
      method: 'POST',
      headers: {
        'Content-Type': 'image/png',
      },
      body: ({
        Image,
      }),

    })
    const data = await response.json();

  }


  return (
    <div>
      <div>
        <input className="ImagePicker" type="file" onChange={fileChangedHandler} />
        <button className="ButtonSubmitImage" onClick={uploadHandler}>Upload!</button>
      </div>
      {/* /////// */}
    </div>

  )
}
