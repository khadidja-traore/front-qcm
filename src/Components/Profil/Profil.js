
// import React, {  } from 'react'
import { render } from '@testing-library/react'
import React, {Component, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

// class Profil extends Component {

    
    //     constructor(props) {
//       super(props)
    
//       this.state = {
    //          isLoggedIn: false,
    //          isAdmin: false,
//       }
//     }


//     useEffect(()=>{
//         axios.get(`http://localhost:5000/profil/`)
//             .then(response =>{
    //                 setLoading(false)
    //                 setPost(response.data)
    //                 setError('')
//             })
//             .catch(error =>{
//                 setLoading(false)
//                 setPost({})
//                 setError('Something Went Wrong !')
//             })
//     }, []);
    



//    render(){
//     return (
//             <div>
//                 Bienvenue sur notre site de QCM.

//                 <a href="/login" class="button Inscription">Connexion</a>

//                 <a href="/signin" class="button Inscription">Inscription</a>

//             </div>
//         )

//    } 
// }

// export default Profil

// class Profil extends Component {

    //     constructor(props) {
        //       super(props)
    
        //       this.state = {
//          isLoggedIn: false,
//          isAdmin: false,
//       }
//     }

//     useEffect(() => {
//         axios.get(`http://localhost:5000/profil/`)
//         .then(response =>{
//             if(response.headers['Cookies']){
    //                 console.log(response.headers['Cookies']);
    //             } else {
        //                 console.log('pas de cookie');
//             }
//         })
//         .catch(error =>{
    //             console.log(error);
    //         })
// }, []);
    


//   render() {
    //     return (
        //       <div>Profil</div>
        //     )
        //   }
        // }
        
        // export default Profil
        
        
        function Profil() {
            
            const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setAdmin] = useState(false);

        const params = useParams();
        console.log(params);
    
    
    useEffect(() => {

        var url = "http://localhost:5000/profil/"+params.id;
        axios.get(url)
        .then(response =>{
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
}, []);
    



  return (
    <div>Profil
        Params = {params}
        <p> Cookies  = </p>
    </div>
  )
}

export default Profil