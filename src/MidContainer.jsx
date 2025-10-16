import './App.css';

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function MidContainer(){
    return(
        <div className='middle'>

            <div>
                <input 
                    className="input-field"
                    type="text"
                    placeholder="Search your Product"
                    name="search-value"
                />
                <div className="btns-div">
                    <button>Search & Synthesize</button>
                    <button>Save Quary</button>
                    <button>Set Alert</button>
                </div>
            </div>

            <div className='mid-container'>
                
                <div className='scroll-div'>
                    <ScrollableTabsButtonAuto />
                </div>

                <div className='mid-sub-container'>
                    <h5>AI-Generated Reasearch Summary</h5>
                    <br></br>
                    <h5>Key Findings:</h5>

                    <ul>
                    </ul>
                    
                    <br />
                    <h5>Limitations:</h5>
                    <br />

                    <div className='options'>
                        <p>Edit Options:</p>
                        <div className='summary-btns'>
                            <button>Refine</button>
                            <button>Edit</button>
                            <button>Reurn Summary</button>
                        </div>
                    </div>

                    <div className='options'>
                        <p>Export Options:</p>

                        <div className='summary-btns'>
                            <button>PDF Report</button>
                            <button>Excel Data</button>
                            <button>Citations Only</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: { xs: 320, sm: 520 }, bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="AI Summary" />
        <Tab label="Source Articles (147)" />
        <Tab label="Treand Analysis ☆" />
        <Tab label="Regulatory Package ☆" />
        
      </Tabs>
    </Box>
  );
}


