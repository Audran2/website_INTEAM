import React from 'react';

const FilterBar = ({inputName}) => {
    return (
        <div className='filterBar'>
            <input type="date" name="" id="" />
            <select name="techni" id="" value={""} onChange={()=>{}}>
                <option value="" disabled>Techniciens</option>
                <option value="rr">Manu</option>
                <option value="re">Le boss</option>
            </select>
            <select name={inputName} id="" value={""} onChange={()=>{}}>
                <option value="" disabled>{inputName}</option>
                
            </select>
        </div>
    );
};

export default FilterBar;