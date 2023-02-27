import React from "react";

const InterventionDetail = ({interventionClick}) => {
  return (
    <div className="interventionDetail">
      <div className="topCard">
        <img src={`../assets/png/Logo${interventionClick}.jpg`} alt="" />
        <div className="titre">
          <span className="type">Maintenance</span>
          <span className="sepa">-</span>
          <span className="produit">Vélo d'appartement</span>
        </div>
      </div>
      <div className="middleCard">
        <span className="titre">Informations Importantes :</span>
        <div className="adresse">
          <span className="princi">Adresse : </span>
          <span className="secon">lorem ipsum</span>
        </div>
        <div className="probleme">
          <span className="princi">Probleme : </span>
          <span className="secon">Lorem ipsum</span>
          <button>Voir les photos</button>
        </div>
        <div className="description">
          <span className="princi">Description :</span>
          <span className="secon">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
            consequatur quas magnam nesciunt odio dolorum ipsa esse asperiores
            provident quia laudantium placeat excepturi laboriosam architecto,
            amet necessitatibus adipisci reiciendis facilis. Doloribus enim
            tempore assumenda explicabo id, ad ratione modi accusantium eaque
            nostrum provident excepturi sit praesentium dolorum, repudiandae
            tempora corrupti unde perferendis ex facere reiciendis odit iusto?
            Earum, nihil maxime!
          </span>
        </div>
      </div>
      <div className="bottomCard">
        <img src="../assets/png/velo.jpg" alt="" />
        <div className="produit">
          <span className="nom">Vélo appartement</span>
          <span className="marque">Cybex</span>
          <span className="ref">Ref : 548522452248</span>
        </div>
        <div className="assignement">
          <select name="" id="" value={""} onChange={() => {}}>
            <option value="" disabled>
              technicien
            </option>
            <option value="">Fabienne</option>
          </select>
          <input type="date" name="" id="" />
          <button>Assigner a ce technicien</button>
        </div>
      </div>
    </div>
  );
};

export default InterventionDetail;
