import React, {useEffect, useReducer, useRef, useState} from 'react'
import axios from 'axios'
import {useParams}  from 'react-router-dom'


function Edit() {

    let [questionnaires, setQuestionnaires] = useState([]);
    const [user, setUser] = useState({});

    // let questionnaires = [];


    const initialState = {
        loading: true,
        error: '',
        posts: {}
    }

    const reducer = (state, action) =>{
        switch (action.type){
            case 'FETCH_SUCCESS' :
                return {
                    loading : false,
                    posts: action.payload,
                    error: ''
                }
            case 'FETCH_ERROR' :
                return{
                    loading: false,
                    posts: {},
                    error: "Something went wrong !"
                }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const params = useParams();
    const userId = params.id;
    const url = "http://localhost:5000/edit/"+userId;

    useEffect( () =>{
        axios.get(url)
        .then(response =>{
            dispatch({type: 'FETCH_SUCCESS', payload: response.data })
            // console.log(response.data);
            // setQuestionnaires(response.data.data);
            // setQuestionnaires([...questionnaires, response.data.data ]);
            if (questionnaires.length <= 0) {
                setQuestionnaires([...questionnaires, response.data])
            }
            setUser(response.data.user);
            
            // questionnaires = response.data.data;
            // console.log('Questionnaires ');
            // console.log(response.data.data);
            // console.log(questionnaires);
            // console.log('Utilisateur ');
            // console.log(response.data.user);

            // console.log(questionnaires[0].titreQuestionnaire);
        })
        .catch( error => {
            dispatch({type: 'FETCH_ERROR'})
        })
    }, []);

    var ques = questionnaires;

    // const createForm = () =>{

    //     var form = '';

    //     // questionnaires= [1,2,3];

    //     console.log(user);
    //     console.log(questionnaires);

    //     questionnaires.map((questionnaire, index) => {
            
    //         form = form + '<form action="/qcm/edit/" method="post">';
    //         form.concat('<input type="hidden" name="_method" value="PUT"/>');
    //         form.concat('<label for="titre" class="descri">Titre du questionnaire</label>');
    //         form.concat('<input type="text" id="titre" name="titre" value={questionnaire.titreQuestionnaire}/> <br/>');
    //         form.concat('<input type="submit" value="Enregistrer" class="confirmed"/></form>');
    //     });

    //     console.log(form);
    //     return form;

    // }



    
    // console.log(user);
    console.log(ques);


    // console.log('Questionnaires ');
    //         // console.log(response.data.data);
            // console.log(questionnaires[1].data);
    //         console.log('Utilisateur ');
    //         console.log(user);

    


    // console.log(questionnaires[0].data[0].titreQuestionnaire);

  return (

    <div>

        <h1> Editez Vos QCM </h1>

        {/* <p> {questionnaires[0].titreQuestionnaire}</p> */}
        <p> {user.email}</p>
        {/* <p> {questionnaires[0].data[0]._id}</p> */}





        {/* {questionnaires[0].data[0].map((questionnaire, index) => {
            <form action="/qcm/edit/" method="post"> 

                <input type="hidden" name="_method" value="PUT"/>
    
                <label for="titre" class="descri">Titre du questionnaire</label>
                <input type="text" id="titre" name="titre" value={questionnaire.titreQuestionnaire}/>
                <br/>
                
                <input type="submit" value="Enregistrer" class="confirmed"/>

            </form>
        })} 

    */}




      
    </div>
    


    
   
//     <React.Fragment>

//         <h1> Editez Vos QCM </h1>
//         {state.loading ? 'Loading' : 
        
//         state.posts.map((post, index) => {
//             return(
//                 <div key={index} >

//                     <h2>lastname : {post.lastname}</h2>
//                     <p>firstname : {post.firstname}</p>
//                     <h2>email : {post.email}</h2>
//                     <hr />
//                 </div>
//             )
//         })
//         }
//         {state.error ? 'error': null}
//     </React.Fragment>

)
}
export default Edit