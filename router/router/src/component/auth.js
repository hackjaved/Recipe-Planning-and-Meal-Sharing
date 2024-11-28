import React,{useContext,useEffect,useState} from 'react'
import axios from 'axios'
const AuthContext=React.createContext(null)
const AuthProvider=(props)=>{
    const[user,setUser]=useState(null)
    const [userlist,setUserlist]=useState([])
    const login=(user)=>{
        setUser(user)
    }
    useEffect(()=>{
        axios.get('http://localhost:3003/users')
        .then(res=>{
            setUserlist(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    const logout=()=>{
        setUser(null)
    }
    const signup=(email,password,firstName,lastName)=>{
        axios.post('http://localhost:3003/users',{
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password
        })
        .then(res=>{console.log(res)})
        .catch(err=>{console.log(err)})
    }
    return <AuthContext.Provider value={{user,login,logout,signup,userlist}}>
    {props.children}
    </AuthContext.Provider>
}
const useAuth=()=>{
    return useContext(AuthContext)
}
export{AuthProvider,useAuth}