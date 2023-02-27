import React from "react";
import SideShow from "./SideShow.js" ;

const DetailsClient = ({clientClick}) => {
  return (
    <div className="DetailsClientDiv">
        <div className="HeaderDetailsClient">
            <img src={`../assets/png/Logo${clientClick}.jpg`} alt="" />
            <div className="ClientsNomRegion">
                <p>{clientClick}</p>
                <p className="ClientRegion">Région Rhônes Alpes</p>
            </div>
            <p className="Statut">Maintenue</p>
        </div>
        <div className="ContainerDetailsClient">
            <div className="formChoix">
                <select name="techni" id="" placeholder='Techniciens' defaultValue={""}>
                    <option value="" disabled>Techniciens</option>
                    <option value="">Manu</option>
                    <option value="">jerome</option>
                </select>
                <select name="techni" id="" placeholder='Techniciens' defaultValue={""}>
                    <option value="" disabled>Machine a réparer</option>
                    <option value="">Velo</option>
                    <option value="">Tapis</option>
                </select>
            </div>
            <SideShow/>
        </div>
    </div>

  );
};

export default DetailsClient;