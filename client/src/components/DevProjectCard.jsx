import React, {useState, useEffect} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from '@mui/material/Button';
import Chip from "@mui/material/Chip";
import { apply } from "../utils/api.js";

const DevProjectCard = ({project, accountInfo}) => {
  const [hasApplied, setHasApplied] = useState();

  useEffect(() => {
    setHasApplied(project.applied.some((applicant) => applicant === accountInfo._id));
  }, [project, accountInfo]);

  const onApply = () => {
    apply(project._id, accountInfo._id);
    setHasApplied(true);
  }

  return(
    <>
      <Card style={{ margin: '1em 0em 1em 0em', width: '100%'}}>
        <CardContent style={{ display: 'flex', flexDirection: 'column'}}>
            <div style={{ display: 'flex', flexDirection: 'row'}}>
              <h3 style={{margin: '0', padding: '0.5em'}}> { project.title } </h3>
              <div style={{ marginLeft: 'auto', display: 'flex', flexDirection: 'row', gap: '5px'}}>
                <Button disabled={hasApplied} color="success" onClick={onApply} style={{width: 'fit-content', padding: '0.5em'}}>
                  {hasApplied ? "Applied" : "Apply"}
                </Button>
              </div>
            </div>
            <div style={{display: 'flex', flexFlow: 'wrap', alignItems: 'center'}}>
              {
                project.technologies.map((technology, index) => (
                  <Chip style={{margin: '0.1em 0.2em'}} color='default' key={index} label={`${technology}`}/>
                ))
              }
            </div>
            <div style={{padding: '0.5em'}}>
                <p> Description: </p>
                <p style={{marginLeft: '2em'}}> { project.description } </p>
            </div>
        </CardContent>
      </Card>
    </>
  )
}

export default DevProjectCard;