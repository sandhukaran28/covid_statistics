import React from 'react'
import MainCell from './MainCell'
import '../pages/Vaccine.css'

function VaccinationCell() {
    return (
        <div style={{ display: "flex" , justifyContent: 'space-evenly'}}>
           <MainCell name="Tot Vaccination Doses" ins="+670433" total="1822.41 + Lakh" color="red"/>
           <MainCell name="Dose-1 Vaccinations" ins="+601605" total="1417.56 + Lakh" color="blue"/>
           <MainCell name="Dose-2 Vaccinations" ins="+68828" total="404.85 + Lakh" color="green"/>
           <MainCell name="AEFI Reported" ins="+3" total="20469" color="grey"/>
    </div>
        )
}

export default VaccinationCell
