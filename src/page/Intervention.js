import React, { useState } from 'react';
import FilterBar from '../components/FilterBar';
import InterventionDetail from '../components/InterventionDetail';
import InterventionInfo from '../components/InterventionInfo';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';

const Intervention = () => {
    const [interventionClick, setInterventionClick] = useState("")
    const interventionClicked = (info) => {
        setInterventionClick(info)
    }
    return (
        <div className='page-main'>
            <Navbar/>
            <div className="container">
                <div className="pageContainer">
                    <SearchBar />
                    <FilterBar inputName={"Region"}/>
                    <div className="displayIntervention">
                        <InterventionInfo interventionClicked={interventionClicked}/>
                        <InterventionDetail interventionClick={interventionClick}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intervention;