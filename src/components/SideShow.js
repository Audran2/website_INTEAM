import React, { useState } from 'react';

const SideShow = () => {
const [tableMachineVisible, setTableMachineVisible] = useState(false);

const handleDetailsClick = () => {
setTableMachineVisible(!tableMachineVisible);
};

return (
<div className='SideShowDiv'>
<div className='SideShowHeader'>
<img className='imgMachine' src='..\assets\png\velo.jpg' alt='' />
<p> Velo</p>
<p> Nombre de machine : 4</p>
<img src='..\assets\svg\details.svg' alt='' onClick={handleDetailsClick} />
</div>
<div className={tableMachineVisible ? 'tableMachine visible' : 'tableMachine hidden'}>
<div className='infosMachine'>
<p>Velo Eléctrique</p>
<p>Ref: 4554452189545</p>
<p>Cybex</p>
</div>
<div className='infosMachine'>
<p>Velo Eléctrique</p>
<p>Ref: 4554452189545</p>
<p>Cybex</p>
</div>
<div className='infosMachine'>
<p>Velo Eléctrique</p>
<p>Ref: 4554452189545</p>
<p>Cybex</p>
</div>
<div className='infosMachine'>
<p>Velo Eléctrique</p>
<p>Ref: 4554452189545</p>
<p>Cybex</p>
</div>
</div>
</div>
);
};

export default SideShow;