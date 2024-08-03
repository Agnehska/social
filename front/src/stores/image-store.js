import { makeAutoObservable } from "mobx";
import { getDataApi } from "../utils/fetchDataAPI";

class ImageStore {
  imageInfo = {
    filename: ''
  }

  constructor(){
    makeAutoObservable(this)
  }

  addImage = async (image) => {
    this.image = {...image}
    console.log(this.image)
  }

  getImage = async () => {
    try{
      const res = await getDataApi('images');
      console.log('images', res)
    } catch (e){
      console.log(e.response.data.msg);
      this.errorBack = e.response.data.msg;
    }
  }
}

export default ImageStore;