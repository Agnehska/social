import { makeAutoObservable } from "mobx";
import { getDataApi, postDataApi } from "../utils/fetchDataAPI";

const initialUser = {
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

class UserStore{
  user = initialUser;
  errorBack = '';
  token = '';

  constructor(){
    makeAutoObservable(this)
  }

  registerUser = async (userInfo) => {
    this.user = userInfo
    try{
      const res = await postDataApi('register', userInfo);
      console.log('after reg', res.data.msg)
      this.errorBack = ''
    } catch (e){
      console.log(e.response.data.msg)
      this.errorBack = e.response.data.msg
    }
    console.log(this.user)
    return this.errorBack
  }

  loginUser = async (userInfo) => {
    this.user = userInfo
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
    return this.errorBack
  }
  logoutUser = async () => {
    try{
      const res = await getDataApi('logout', this.user.token);
      this.user = initialUser;
      // console.log('after logout', res.data, this.user);
      this.errorBack = '';
    } catch (e){
      console.log(e.response.data.msg);
      this.errorBack = e.response.data.msg;
    }
  }
}

const userStore = new UserStore()
export default userStore;