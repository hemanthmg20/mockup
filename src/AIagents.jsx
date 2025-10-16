import './Agents.css';
import './App.css';

export default function AIagents(){

    const sources = ["PubMed (External)", "Embase (External)", "Internal Safety DB", "ClinicalTrials.gov","SharePoint Docs"];
    const publications = ["Systematic Reviews","Meta-analyses", "Clinical Trials","Observational Studies"];

    return(
        <div className='left'>

            <div className='left-container'>

                <h4>AI Agents</h4>

                <div className='card-status'>
                    <h6 className='flex'><div className='green-dot'></div> Literature Monitor ☆</h6>
                    <p>Tracking 12 topics, 3 new alerts</p>
                </div>

                <div className='card-status'>
                    <h6 className='flex'><div className='green-dot'></div> Regulatory Assistant ☆</h6>
                    <p>Ready for compliance queries</p>
                </div>

                <div>
                    {/* <br /> */}
                    <h4>Data Sources</h4>
                    <div className='list-input'>
                        {
                            sources.map((item,index) => (
                                <Checkbox key={index} item = {item} />
                            ))
                        }
                    </div>
                </div>

                <div>
                    {/* <br /> */}
                    <h4>Publication Types</h4>
                    <div className='list-input'>
                        {
                            publications.map((item,index) => (
                                <Checkbox key={index} item = {item} />
                            ))
                        }
                    </div>
                </div>

                <div className='date-range'>
                    <h4>Date Range</h4>
                    <input type="date" />
                    <input type="date" />
                </div>
            </div>
        </div>
    )
}

function Checkbox({ item }){
    return(
        <>
        <label>
            <input 
                type='checkbox'
            /> {item}
        </label>
        </>
    )
}