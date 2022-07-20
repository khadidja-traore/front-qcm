
// import React, {  } from 'react'
import { render } from '@testing-library/react'
import React, {Component, useEffect, useState} from 'react'
import {Link, useParams, Outlet} from 'react-router-dom'
import axios from 'axios'

       
function Profil() {
            
        const [isLoggedIn, setIsLoggedIn] = useState(false);
        const [isAdmin, setAdmin] = useState(false);
        const [email, setEmail] = useState('');
        const [username, setUsername] = useState('');

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
                console.log(response.headers);
                console.log(response.data);
                console.log(response.data.admin);
                setAdmin(response.data.admin);
                setIsLoggedIn(true);
                setEmail(response.data.email);
                setUsername(response.data.username);
              
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

    var urlCreate = "/create/"+userId;
    var urlEdit = "/edit/"+userId;
    var urlFill = "/fill/"+userId;
    var urlAffiche = "/view/"+userId;

  return (
    <div class="container mt-5">

      
    <div class="row">
        <div class="col d-flex justify-content-center">

            <div class="card">
                <div class="card-body">
                  <h5 class="card-title text-center">Profil</h5>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Username : {username} </li>
                  <li class="list-group-item">Email : {email} </li>
                  <li class="list-group-item"> Mot de passe : ******** </li>
                </ul>
                <div class="card-body">

                {isAdmin && <Link to={urlCreate} class="card-link">Créer un QCM </Link> }
                {isAdmin &&  <Link to={urlEdit} class="card-link">Modifier les QCMs</Link> }
                
                <Link to={urlFill} class="card-link">Faire un QCM</Link>
                <Link to={urlAffiche} class="card-link">Voir ses réponses</Link>
           
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Profil