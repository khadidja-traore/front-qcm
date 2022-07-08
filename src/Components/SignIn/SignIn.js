import React, {useState} from 'react'
import axios from 'axios'
// import {Redirect} from '../react-router-dom'
import {useNavigate} from 'react-router-dom'

function SignIn() {

    const [formValue, setFormValue] = useState({
        username : '',
        email: '',
        password: '',
    });

    const {username, email, password} = formValue;

    const handleInputChange = (event) => {

        const {name, value} = event.target; 
        setFormValue((prevState => {
            return {...prevState, [name]: value};
        }))
    }
    const navigate = useNavigate();
    const onSubmit = (event) => {

        event.preventDefault();

        const user = {
            username : {username},
            email : {email},
            password : {password}
        };

        

        // axios.post('http://localhost:5000/api/register', user)
        // .then( response => {
        //     console.log(response.data);
        //     // window.location = 'http://localhost:3000/';
        //     // <Route to='' />
        //     // navigate('http://localhost:3000/');
        // })
        // .catch(err => console.log(err));


    }

    


    return (
        <div class="container-lg d-flex flex-column justify-content-center align-items-center">

        <h1 class="text-center m-5">Inscription</h1>
        <form class="w-75" action='http://localhost:5000/api/register' method="post">
        <div class="mb-3">
          <label for="username" class="form-label">Pseudo</label>
          <input type="text" name="username" value={username} onChange={handleInputChange} class="form-control" id="username" aria-describedby="emailHelp" />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input type="email" value={email} onChange={handleInputChange}class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Mot de passe</label>
          <input type="password" value={password} onChange={handleInputChange} class="form-control" id="exampleInputPassword1" name="password"/>
        </div>
        
        <button type="submit" class="btn btn-primary">Inscription</button>
      </form>

    </div>
    )
}

export default SignIn