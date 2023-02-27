import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';



const Importation = () => {
    
    
    const [showDiv, setShowDiv] = useState([false, false, false, false]);
    const handleButtonClick = (id) => {
        const newShowDiv = [false, false, false, false]
        newShowDiv[id] = !newShowDiv[id]
        setShowDiv(newShowDiv)
    }
    const [file, setFile] = useState();

    const fileReader = new FileReader();

    const handleOnChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (file) {
            fileReader.onload = function (event) {
            };
            fileReader.readAsText(file);
        }
    };

    const [name, setName] = useState("");
    const [prenom, setPrenom] = useState("");
    const [entreprise, setEntreprise] = useState("");
    const [siret, setSiret] = useState("");
    const [date, setDate] = useState("");
    const [nature, setNature] = useState("");
    const [mail, setMail] = useState("");
    const [numero, setNumero] = useState("");
    const [marque, setMarque] = useState("");
    const [statue, setStatue] = useState("");
    const [reference, setReference] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted");
        console.log("Nom: ", name);
        console.log("Prenom: ", prenom);
        console.log("Entreprise: ", entreprise);
        console.log("Siret: ", siret);
        console.log("Date: ", date);
        console.log("Nature: ", nature);
        console.log("Mail: ", mail);
        console.log("Numero: ", numero);
        console.log("Marque: ", marque);
        console.log("Statue: ", statue);
        console.log("Reference: ", reference);
    };



    return (
        <div className='page-main'>
            <Navbar />
            <div className="container">
                <div className="pageContainer">
                    <SearchBar />
                    <h1>IMPORTATION</h1>
                    <div className='importationContainer'>

                        <div className='importationClient' id='0'>
                            <h1>Importation des clients</h1>
                            <button onClick={()=>handleButtonClick(0)} className='triangle'>
                                <img src={showDiv[0] ? '../assets/png/Polygonhaut.png' : '../assets/png/Polygonbas.png'} alt="" />
                            </button>                   
                            {showDiv[0] && (
                            <div className='importation'>
                                <form className='formulaire'>
                                    <input
                                        type={"file"}
                                        id={"csvFileInput"}
                                        accept={".csv, .xml, .xlx"}
                                        onChange={handleOnChange} className='bouton'/>
                                        <button onClick={(e) => { handleOnSubmit(e);}}>
                                            Importer
                                        </button>
                                </form>
                                <form onSubmit={handleSubmit}>
                                    <label>
                                        Nom du client:
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(event) => setName(event.target.value)}
                                        />
                                    </label>
                                    <label>
                                        Prénom du client:
                                        <input
                                            type="text"
                                            value={prenom}
                                            onChange={(event) => setPrenom(event.target.value)}
                                        />
                                    </label>
                                    <label>
                                        Nom de l'entreprise:
                                        <input
                                            type="text"
                                            value={entreprise}
                                            onChange={(event) => setEntreprise(event.target.value)}
                                        />
                                    </label>
                                    <label>
                                        Siret de l'entreprise:
                                        <input
                                            type="number"
                                            value={siret}
                                            onChange={(event) => setSiret(event.target.value)}
                                        />
                                    </label>
                                    <label>
                                        Date d'enregistrement:
                                        <input
                                            type="date"
                                            value={date}
                                            onChange={(event) => setDate(event.target.value)}
                                        />
                                    </label>
                                    <button type="submit" className='submit'>Submit</button>
                                </form>
                            </div>
                            )}
                        </div>


                        <div className='importationIntervention' id='1'>
                            <h1>Importation des interventions</h1>
                            <button onClick={()=>handleButtonClick(1)} className='triangle'>
                            <img src={showDiv[1] ? '../assets/png/Polygonhaut.png' : '../assets/png/Polygonbas.png'} alt="" />
                            </button>                   
                            {showDiv[1] && (
                            <div className='importation'>
                                <form className='formulaire'>
                                    <input
                                        type={"file"}
                                        id={"csvFileInput"}
                                        accept={".csv, .xml, .xlx"}
                                        onChange={handleOnChange} className='bouton'/>
                                    <button onClick={(e) => { handleOnSubmit(e);}}>
                                        Importer
                                    </button>
                                </form>
                                <form onSubmit={handleSubmit}>
                                    <label>
                                        Nom du technicien affecter à l'intervention:
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(event) => setName(event.target.value)}
                                        />
                                    </label>
                                    <label>
                                        Nature de l'intervention:
                                        <input
                                            type="text"
                                            value={nature}
                                            onChange={(event) => setNature(event.target.value)}
                                        />
                                    </label>
                                    <label>
                                        Date d'intervention:
                                        <input
                                            type="date"
                                            value={entreprise}
                                            onChange={(event) => setEntreprise(event.target.value)}
                                        />
                                    </label>
                                    <button type="submit" className='submit'>Submit</button>
                                </form>
                            </div>
                            )}
                        </div>


                        <div className='importationTechnicien' id='2'>
                            <h1>Importation des techniciens</h1>
                            <button onClick={()=>handleButtonClick(2)} className='triangle'>
                            <img src={showDiv[2] ? '../assets/png/Polygonhaut.png' : '../assets/png/Polygonbas.png'} alt="" />
                            </button>                   
                            {showDiv[2] && (
                            <div className='importation'>
                                <form className='formulaire'>
                                    <input
                                        type={"file"}
                                        id={"csvFileInput"}
                                        accept={".csv, .xml, .xlx"}
                                        onChange={handleOnChange} className='bouton'/>
                                    <button onClick={(e) => { handleOnSubmit(e);}}>
                                        Importer
                                    </button>
                                </form>
                                <form onSubmit={handleSubmit}>
                                    <label>
                                        Nom du technicien:
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(event) => setName(event.target.value)}
                                        />
                                    </label>
                                    <label>
                                        Prénom du technicien:
                                        <input
                                            type="text"
                                            value={prenom}
                                            onChange={(event) => setPrenom(event.target.value)}
                                        />
                                    </label>
                                    <label>
                                        Adresse mail du technicien:
                                        <input
                                            type="mail"
                                            value={mail}
                                            onChange={(event) => setMail(event.target.value)}
                                        />
                                    </label>
                                    <label>
                                        Numéro du technicien:
                                        <input
                                            type="number"
                                            value={numero}
                                            onChange={(event) => setNumero(event.target.value)}
                                        />
                                    </label>
                                    <button type="submit" className='submit'>Submit</button>
                                </form>
                            </div>
                            )}
                        </div>


                        <div className='importationMachine' id='3'>
                            <h1>Importation des machines</h1>
                            <button onClick={()=>handleButtonClick(3)} className='triangle'>
                            <img src={showDiv[3] ? '../assets/png/Polygonhaut.png' : '../assets/png/Polygonbas.png'} alt="" />
                            </button>                   
                            {showDiv[3] && (
                            <div className='importation'>
                                <form className='formulaire'>
                                    <input
                                        type={"file"}
                                        id={"csvFileInput"}
                                        accept={".csv, .xml, .xlx"}
                                        onChange={handleOnChange} className='bouton'/>
                                    <button onClick={(e) => { handleOnSubmit(e);}}>
                                        Importer
                                    </button>
                                </form>
                                <form onSubmit={handleSubmit}>
                                    <label>
                                        Nom de la machine:
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(event) => setName(event.target.value)}
                                        />
                                    </label>
                                    <label>
                                        Marque de la machine:
                                        <input
                                            type="text"
                                            value={marque}
                                            onChange={(event) => setMarque(event.target.value)}
                                        />
                                    </label>
                                    <label>
                                        Statue de garantie:
                                        <input
                                            type="text"
                                            value={statue}
                                            onChange={(event) => setStatue(event.target.value)}
                                        />
                                    </label>
                                    <label>
                                        Référence de la machine:
                                        <input
                                            type="number"
                                            value={reference}
                                            onChange={(event) => setReference(event.target.value)}
                                        />
                                    </label>
                                    <button type="submit" className='submit'>Submit</button>
                                </form>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );

};

export default Importation;