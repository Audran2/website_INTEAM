import React from "react";

const ReportDetail = ({rapportClick}) => {
  return (
    <div className="reportDetail">
      <div className="topCard">
        <div className="techni">
          <img src="../assets/png/useravatar.png" alt="" />
          <span className="nomtechni">George Fields</span>
        </div>
        <div className="titre">
          <span className="nomClient">{rapportClick.client}</span>
          <span className="sepa">-</span>
          <span className="produit">Tapis de course</span>
        </div>
        <span className={rapportClick.status + " status"}>{rapportClick.status}</span>
      </div>
      <div className="middleCard">
        <img
          src="../assets/png/tapiscourse.jpg"
          alt=""
          className="productImage"
        />
        <div className="infoReparation">
          <span className="date">{new Date(rapportClick.date).toLocaleDateString('fr-FR')}</span>
          <div className="liste">
            <span className="nameListe">Réparation effectuée</span>
            <ul>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </div>
          <span className="duree">2h30 d'intervention</span>
        </div>
      </div>
      <div className="bottomCard">
        <div className="infoComplementaire">
          <span className="titre">Infos complémentaires</span>
          <span className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum harum eaque inventore, eveniet architecto perferendis at temporibus natus quis fuga. Odit facilis cumque aliquid soluta pariatur cupiditate quos dolores quidem!
          Neque officia debitis quos distinctio earum, fugiat porro necessitatibus labore dicta excepturi voluptates, laudantium harum praesentium delectus eum vero placeat. Excepturi neque delectus reprehenderit similique totam fugiat voluptatibus consectetur vel.</span>
        </div>
        <div className="infoMachine">
          <span className="titre">Informations machines</span>
          <ul>
            <li>Nom</li>
            <li>Références</li>
            <li>Client</li>
            <li>Marque</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReportDetail;
