import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Fill() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [user, setUser] = useState(false);
    const [titreList, setTitreList] = useState([]);
    const [questions, setQuestions] = useState([]);

    const params = useParams();
    const userId = params.id;

    useEffect(() => {

    const fetch = () => {  axios.get(`http://localhost:5000/fill/${userId}`)
        .then(response =>{
            console.log("test!");
            console.log(response.headers);
            console.log(response.data);
            // console.log(response.data.admin);
            setTitreList(response.data.titres);
            setQuestions(response.data.data);
            // setIsLoggedIn(true);
            // setEmail(response.data.email);
            // setUsername(response.data.username);
          
            // if(response.headers['Cookies']){
            //     console.log("Headers");
            //     console.log(response.headers);
            // } else {
            //     console.log('pas de cookie');
            // }
        })
        .catch(error =>{
            console.log(error);
        })

    }

    fetch();

    }, []);
    
    const test = () => {
        console.log(titreList);
        console.log(questions);
    }


    const Liste = () => {
        const res = titreList.map((titre)=> {
            return (

                <div>
                <h1> {titre} </h1>

                {/* {
                    questions.map((question)=>{
                        return <p> {question.titreQuestionnaire} </p>
                    })
                } */}
                </div>
            ) 
        }).join('');
        return res;
    }

    const affichetitre = (titre) => {
        return <h1> {titre} </h1>
    }

    // const affichechampquestions = (reponse) => {
    //     return <h1> {titre} </h1>
    // }


    return (
        <div>
         

<h1> C'est parti ! </h1>
    <p className="descri" onClick={test}>Retrouvez ici tous nos quiz </p>
    <div className="line" ></div>   

    {/* {Liste} */}

    {
         titreList.map((titre)=> {
            return (

                <div>
                {/* <h1> {titre} </h1> */}
                {affichetitre(titre)}

                {
                    questions.map((question)=>{

                        if ( question.titreQuestionnaire == titre)
                            return (
                                <form action={`http://localhost:5000/submit-qcm/${userId}/${question.id}`} method="post">

                                    {question.questions.map((champ, index) =>  {
                                        <div>
                                            {champ.description}
                                            <br/>
                                            <br/>
                                            {index++}
                                            ({champ.reponse1})
                                            
                                            
                                        </div>
                                    })}

                                    <p> {question.titreQuestionnaire} </p>
                                </form>
                            )
                    })
                }
                </div>
            )   
        })
        
    }



    </div> )
}

export default Fill