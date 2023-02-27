import React, { useState } from 'react';
import FilterBar from '../components/FilterBar';
import Navbar from '../components/Navbar';
import ReportDetail from '../components/ReportDetail';
import ReportInfo from '../components/ReportInfo';
import SearchBar from '../components/SearchBar';

const Report = () => {
    const [rapportClick, setRapportClick] = useState({})
    const rapportClicked = (info) => {
        setRapportClick(info)
    }
    return (
        <div className='page-main'>
            <Navbar />
            <div className="container">
                <div className="pageContainer">
                    <SearchBar />
                    <FilterBar inputName="Clients" />
                    <div className="displayReport">
                    <ReportInfo rapportClicked={rapportClicked} dateFilter={null}/>
                    <ReportDetail rapportClick={rapportClick}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Report;