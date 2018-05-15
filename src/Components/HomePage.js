import React from 'react';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import '../styles/index.css';

class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            schools: schools
      } 
    }  
    componentDidMount(){
    //   this.loadSchoolData();
    }
    // loadSchoolData = () =>{
    //   fetch('http://localhost:3000')
    //     .then(res=>res.json())
    //       .then(json=>{
    //         this.setState({schools: json});
    //   })
    // }
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

const schools = [
    
        {
        "id": "01",
        "name": "Nexus",        
        "township": "Kamayut",
        "location": "Yangon",        
        "email": "info@nexus.com",
        "type": "private",                
        "business_description": "Language School"
        },
        {
        "id": "02",
        "name": "NIEC",        
        "township": "Kamayut",
        "location": "Yangon",        
        "email": "info@niec.com",
        "type": "private",                
        "business_description": "International School",
        "international": true
        },
        {
        "id": "03",
        "name": "SDEC",        
        "township": "Bahan",
        "location": "Yangon",        
        "email": "info@sdec.com",
        "type": "private",        
        "business_description": "International School",
        "international": true
        },
        {
        "id": "04",
        "name": "CAE",        
        "township": "Chan Aye Thar Zan",
        "location": "Mandalay",        
        "email": "info@cae.com",
        "type": "private",        
        "business_description": "Private High School"
        },
        {
        "id": "05",
        "name": "Pyin Nyar Kabar",        
        "township": "Thaketa",
        "location": "Yangon",        
        "email": "info@pyinnyarkabar.com",
        "type": "private",        
        "business_description": "Private High School"
        },
        {
        "id": "06",
        "name": "Art & Craft",        
        "township": "Chan Aye Thar Zan",
        "location": "Mandalay",        
        "email": "info@artandcraft.com",
        "type": "private",        
        "subjects": [
            "art-craft"
        ],
        "business_description": "Art & Craft School"
        },
        {
        "id": "07",
        "name": "Aozora Co.,Ltd",        
        "township": "Tarmwe",
        "location": "Yangon",        
        "email": "aozorajlc0034@gmail.com",
        "type": "private",    
        "subjects": [
            "japanese"
        ],
        "business_description": "Japanese Language School"
        }        
    ]