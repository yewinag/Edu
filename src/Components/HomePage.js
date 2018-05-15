import React from 'react';
import update from 'immutability-helper';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import '../styles/index.css';

class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            schools: [
                {
                    "id": "01",
                    "name": "Nexus",
                    "address": [
                      {
                        "main": "Bldg A-6, Level 2, Weggi Yeikthar St., Pyi Yeik Mon Housing, K Centre"
                      }
                    ],
                    "township": "Kamayut",
                    "location": "Yangon",
                    "phone": [
                      "01-504647",
                      "01-504757",
                      "09-263310931"
                    ],
                    "email": "info@nexus.com",
                    "type": "private",
                    "sub-type": [
                      "language-school"
                    ],
                    "subjects": [
                      "english"
                    ],
                    "business_description": "Language School"
                  },
                  {
                    "id": "02",
                    "name": "NIEC",
                    "address": [
                      {
                        "main": "27, Dhamar Yone St., Near Moe Kaung Rd., Near Moe Kaung Pagoda Compound, Ward (13)"
                      }
                    ],
                    "township": "Kamayut",
                    "location": "Yangon",
                    "phone": [
                      "01-8550727",
                      "01-8550728"
                    ],
                    "email": "info@niec.com",
                    "type": "private",
                    "sub-type": [
                      "high-school",
                      "language-school"
                    ],
                    "subjects": [
                      "english"
                    ],
                    "business_description": "International School",
                    "international": true
                  },
                  {
                    "id": "03",
                    "name": "SDEC",
                    "address": [
                      {
                        "main": "22-A/22-C/24-A, Nat Mauk St."
                      }
                    ],
                    "township": "Bahan",
                    "location": "Yangon",
                    "phone": [
                      "09-73206650",
                      "09-5144987",
                      "09-73015969"
                    ],
                    "email": "info@sdec.com",
                    "type": "private",
                    "sub-type": [
                      "pre-school",
                      "primary-school",
                      "secondary-school"
                    ],
                    "business_description": "International School",
                    "international": true
                  },
            ]
        }
    }   
    render(){        
        return(
            <div className="content-body">
                {                    
                    this.state.schools.map( school =>(
                        <Paper key={school.id} className="school-card">                            
                            <Subheader>{school.name}</Subheader>
                            <Subheader>{school.location}</Subheader>
                            <Subheader>{school.email}</Subheader>
                            <RaisedButton 
                                label="view more"
                                secondary={true}
                            />
                        </Paper>                                                    
                    )
                        
                        
                    )
                }
                
            </div>              
        )
    }
}
export default HomePage;