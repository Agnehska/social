import { makeAutoObservable } from "mobx";
import { postDataApi } from "../utils/fetchDataAPI";

class UserStore{
  user = {
    fullname: '',
    username: '',
    email: '',
    password: '',
    gender: '',
    story: '',
    phone: '',
    address: '',
    avatar: '',
    website: '',
    following: [],
    friends: [],
  };
  errorBack = '';
  token = '';

  constructor(){
    makeAutoObservable(this)
  }

  registerUser = async (userInfo) => {
    this.user = userInfo
    try{
      const res = await postDataApi('register', userInfo);
      console.log('after reg', res)
      this.errorBack = ''
    } catch (e){
      console.log(e.response.data.msg)
      this.errorBack = e.response.data.msg
    }
    console.log(this.user)
  }

  loginUser = async (userInfo) => {
    this.user = {...userInfo}
    try{
      const res = await postDataApi('login', userInfo);
      console.log('after login', res.data.user);
      this.errorBack = '';
      this.token = res.data.access_token;
      console.log(this.token)
      this.user = structuredClone(res.data.user)
      localStorage.setItem('login', true)
    } catch (e){
      console.log(e.response.data.msg);
      this.errorBack = e.response.data.msg;
    }
    console.log(this.user);
  }
}

export default new UserStore();