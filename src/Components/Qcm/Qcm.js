import React, {useState} from 'react'

function Qcm() {

    const [formValue, setFormValue] = useState({
        titleqcm: '',
        titlequestion: '',
        answer1:'',
        answer2:'',
        answer3:'',
        answer4:'',
    });
    const {titleqcm, titlequestion, answer1,answer2, answer3, answer4,} = formValue;
    
    const handleInputcomplet = (event) => {

        const {name, value} = event.target; 

        setFormValue((prevState => {
            return {...prevState, [name]: value};
        }))
    }

  return (
    <div>

    <h1>Créez votre QCM</h1>

    <label>Titre du questionnaire</label>
    <br />
    <input name="titleqcm" value={titleqcm} onChange={handleInputcomplet}></input>
    <br />
    <br />
    <label>Nom de votre Question</label>
    <br />
    <input name="titlequestion" value={titlequestion} onChange={handleInputcomplet}></input>
    <br />
    <label>Réponse 1</label>
    <br />
    <input name="answer1" value={answer1} onChange={handleInputcomplet}></input>
    <br />
    <label>Réponse 2</label>
    <br />
    <input name="answer2" value={answer2} onChange={handleInputcomplet}></input>
    <br />
    <label>Réponse 3</label>
    <br />
    <input name="answer3" value={answer3} onChange={handleInputcomplet}></input>
    <br />
    <label>Réponse 4</label>
    <br />
    <input name="answer4" value={answer4} onChange={handleInputcomplet}></input>
    <br />
    <br />
    <input type="submit" value="Enregistrer" className="btn btn-success"></input>

    </div>

)
  }


export default Qcm