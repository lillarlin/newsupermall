import axios from 'axios'
export function request(config){
         const instence=axios.create({
           baseURL:'http://152.136.185.210:7878/api/m5',
           timeout:5000
         })
         instence.interceptors.response.use(res=>{return res.data},err=>console.log(err))
         return instence(config)
}