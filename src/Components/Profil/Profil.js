
// import React, {  } from 'react'
import { render } from '@testing-library/react'
import React, {Component, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'


        
function Profil() {
            
            const [isLoggedIn, setIsLoggedIn] = useState(false);
            const [isAdmin, setAdmin] = useState(false);

        const params = useParams();
        console.log(params);
    
    const userId = params.id;
    console.log(userId);
    const url = "http://localhost:5000/profil/"+userId;
    console.log(url);
    
    useEffect(() => {

        axios.get(url)
        .then(response =>{
            console.log("test!");
            if(response.headers['Cookies']){
                console.log("Headers");
                console.log(response.headers);
            } else {
                console.log('pas de cookie');
            }
        })
        .catch(error =>{
            console.log(error);
        })
});
    



  return (
    <div>Profil
        Params 
        <p> Cookies  = </p>
    </div>
  )
}

export default Profil