import React, { useState } from 'react';
import Chip from "@mui/material/Chip";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Avatar from '@mui/material/Avatar';
import Card from "@mui/material/Card";
import Rating from "@mui/material/Rating";
import { addRating } from "../utils/api";
import TextField from "@mui/material/TextField";

import AttributeSliderGroup from './AttributeSliderGroup';


const DeveloperInfo = ({ onClose, developer }) => {
  const [workRating, setWorkRating] = useState(developer.adminWorkRating || 0);
  const [commRating, setCommRating] = useState(developer.adminCommRating || 0);
  const [adminNotes, setAdminNotes] = useState(developer.adminNotes || '');

  const cancelNotesSubmit = () => {
    setWorkRating(developer.adminWorkRating || 0);
    setCommRating(developer.adminCommRating || 0);
    setAdminNotes(developer.adminNotes || '')
  }

  const handleNotesSubmit = () => {
    addRating(developer._id, "Comm", commRating);
    addRating(developer._id, "Work", workRating);

    const xhttp = new XMLHttpRequest();
    xhttp.open("PATCH", `https://xenah-dev-portal.herokuapp.com/developers/adminNotes/${ developer._id }`, false);
    xhttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({ notes: adminNotes }));

    alert('Notes on developer saved.');
  }

  const isAdminNotesUpdated = (
    workRating !== (developer.adminWorkRating || 0)
    || commRating !== (developer.adminCommRating || 0)
    || adminNotes !== (developer.adminNotes || '')
  );

  return (
    <Modal open={true} onClose={onClose}>
      <Box 
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '40em',
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
          maxHeight: '80vh',
          overflowY: 'auto',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '2em' }}>
          <div style={{width: 'auto' }}>
            <Avatar
              alt={developer.name + ' avatar'}
              sx={{ bgcolor: '#263448', height: 80, width: 80 }}
            >
              { developer.name.substr(0, 1) } 
            </Avatar>
          </div>
          <div style={{ marginLeft: '1em' }}>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <h2 style={{ margin: 0}}>{ developer.name }</h2>
              <h2 style={{ margin: '0 0.3em', marginRight: '0.9em', fontWeight: 'normal', letterSpacing: '0.06em'}}>{ developer.level }</h2>
              <Chip label={developer.school}/>
            </div>
            <p style={{ margin: 0}}>{ developer.email }</p>
            <p style={{ margin: 0}}>Available { developer.timeCommitment }hr/wk </p>
          </div>
        </div>

        <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-start'}}>
          <div>
            <h4 style={{ margin: 0, marginBottom: '0.4em' }}>Technologies</h4>
            <AttributeSliderGroup
              attributes={ developer.technologies.map(({ name, rating }) => [name, rating / 7]) }
            />
          </div>
          
          <div style={{ marginLeft: '2em' }}>
            <h4 style={{ margin: 0, marginBottom: '0.4em' }}>Topics</h4>
            <AttributeSliderGroup
              attributes={ developer.preferredTopics.map(({ name, rating }) => [name, rating / 7])}
            />
          </div>
        </div>
        <br/>
        <h4 style={{ margin: 0 }}>Preferred Languages</h4>
        {developer.preferredLanguages.map((language, index) => (
          <Chip key={index} label={language}/>
        ))}

        <div style={{ marginTop: '1em' }}>
          <h4 style={{ margin: 0 }}>Previous Projects</h4>
          <div style={{ display: 'flex', flewFlow: 'wrap'}}>
            {developer.projects.map((project, idx) => (
              <Card key={idx} style={{ width: '11em', padding: '0.5em', margin: '0.5em'}}>
                <h5 style={{ margin: 0 }}>{ project.name }</h5>
                <p style={{ margin: 0 }}>{ project.description }</p>
              </Card>
            ))}
          </div>
        </div>
        
        <h3 style={{textAlign: "center"}}>Admin Notes</h3>
        <div style={{display: "flex", justifyContent: "space-around"}}>
          <div style={{display: "flex", flexDirection: "column"}}>
            <h4 style={{ margin: 0 }}>Work Ethic</h4>
            <Rating
              name="simple-controlled"
              value={workRating}
              onChange={(event, newValue) => {
                if (newValue) {
                  setWorkRating(newValue);
                }
              }}
              precision={0.5}
            />
          </div>
          <div style={{display: "flex", flexDirection: "column"}}>
            <h4 style={{ margin: 0 }}>Communication Skill</h4>
            <Rating
              name="simple-controlled"
              value={commRating}
              onChange={(event, newValue) => {
                if (newValue) {
                  setCommRating(newValue);
                }
              }}
              precision={0.5}
            />
          </div>
        </div>

        <div>
        <TextField
          multiline
          rows={4}
          label="Admin notes on developer"
          value={adminNotes}
          onChange={(e)=>setAdminNotes(e.target.value)}
          sx={{width: '100%',
              marginTop: '2em'}}
        />
        </div>
        
        {
          isAdminNotesUpdated && (
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2em', marginTop: '1em'}}>
              <Button onClick={() => cancelNotesSubmit()} style={{backgroundColor: 'red', color: 'white'}}>Cancel</Button>
              <Button onClick={() => handleNotesSubmit()} style={{backgroundColor: 'green', color: 'white'}}>Save Changes</Button>
            </div>
          )
        }

        <div>
          <Button onClick={onClose}>Close</Button>
        </div>
      </Box>
    </Modal>
  );
}

export default DeveloperInfo;
