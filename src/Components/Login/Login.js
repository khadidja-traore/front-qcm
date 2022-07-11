import React, {useState} from 'react'

function Login() {

    const [formValue, setFormValue] = useState({
        email: '',
        password: '',
    });

    const {email, password} = formValue;

    const handleInputChange = (event) => {

        const {name, value} = event.target; 
        setFormValue((prevState => {
            return {...prevState, [name]: value};
        }))
    }


    return (
        <div>

<section className="login-container">
        <h1>Bienvenue</h1>
        <h2>Veuillez-vous connecter</h2>
        <form action="http://localhost:5000/api/login" method="post">
            <label htmlFor="email">Email </label>
            <input type="email" id="email"  name="email" value={email} onChange={handleInputChange}/>
            <br/>
            <label htmlFor="password">Mot de passe</label>
            <input type="password" id="password" name="password" value={password} onChange={handleInputChange}/>
            <br/>
            <input type="submit" value="Connexion" className="button submit"/>
            <br/>
        </form>

        <a href="/signin" className="button Inscription">Inscription</a>
    </section>
        </div>
    )
}

export default Login