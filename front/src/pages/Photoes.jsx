import React, { useEffect, useState } from "react";
import OneImage from "../components/OneImage";
import { observer } from 'mobx-react-lite';
import ImageStore from "../stores/image-store";

export const Photoes = observer(() => {
  const [images, setImages] = useState([]);
  const [image, setImage] = useState(null);
  const {imageInfo, addImage, getImage} = ImageStore;

  

  useEffect(() => {
    fetch("http://localhost:5000/api/images")
      .then((data) => data.json())
      .then((info) => setImages(info.files));
    // getImage()
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', image);
    fetch("http://localhost:5000/api/upload", {
      method: "POST",
      body: formData,
    })
    .then(res => res.json())
    .then((res) => {
      console.log(res);
      setImages([...images, res.file])
    });
  }

  return (
    <>
      <form className="mt-5 " onSubmit={handleSubmit}>
        <input 
          className="p-2 mr-5 " 
          type="file" 
          name='file'
          placeholder="Add new image" 
          accept="image/*,.png,.jpg,.gif,"
          onChange={(event) => {setImage(event.target.files[0]); console.log(event.target.files)}}
        />
        <button
          className="bg-blue-300 text-black-500 text-xl rounded-md px-3 py-2 text-sm font-medium"
        >
          Add image
        </button>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-4">
        {images.map((image) => {
          return <OneImage image={image} key={image._id} />;
        })}
      </div>
    </>
  );
});
