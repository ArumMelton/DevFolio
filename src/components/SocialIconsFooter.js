import React, {useState, useEffect} from "react";
import axios from 'axios';
import LineIcon from 'react-lineicons';

function Socialiconsfooter(props){
  const [socialLinks, setSocialLinks] = useState({});

  useEffect(() => {
    axios.get('/api/information')
      .then(response =>{
        setSocialLinks(response.data.socialLinks);
      })
  }, [])

  return (
    <ul  className={props.bordered ? 'mi-socialicons mi-socialicons-bordered' : 'mi-socialicons'}>
      {!socialLinks.facebook ? null : <li>
        <a style={{maxWidth:"18px", minWidth:"9px", height:"auto"}} rel="noopener noreferrer" target="_blank" href={socialLinks.facebook}>
          <LineIcon name="facebook"/>
        </a>
      </li>}
      {!socialLinks.twitter ? null : <li>
        <a style={{maxWidth:"18px", minWidth:"9px", height:"auto"}} rel="noopener noreferrer" target="_blank" href={socialLinks.twitter}>
          <LineIcon name="twitter"/>
        </a>
      </li>}
      {!socialLinks.instagram ? null : <li>
        <a style={{maxWidth:"18px", minWidth:"9px", height:"auto"}} rel="noopener noreferrer" target="_blank" href={socialLinks.instagram}>
          <LineIcon name="instagram"/>
        </a>
      </li>}
      {!socialLinks.soundcloud ? null : <li>
        <a style={{maxWidth:"18px", minWidth:"9px", height:"auto"}} rel="noopener noreferrer" target="_blank" href={socialLinks.soundcloud}>
          <LineIcon name="soundcloud"/>
        </a>
      </li>}
      {!socialLinks.spotify ? null : <li>
        <a style={{maxWidth:"18px", minWidth:"9px", height:"auto"}} rel="noopener noreferrer" target="_blank" href={socialLinks.spotify}>
          <LineIcon name="spotify"/>
        </a>
      </li>}
      {!socialLinks.pinterest ? null : <li>
        <a style={{maxWidth:"18px", minWidth:"9px", height:"auto"}} rel="noopener noreferrer" target="_blank" href={socialLinks.pinterest}>
          <LineIcon name="pinterest"/>
        </a>
      </li>}
      {!socialLinks.behance ? null : <li>
        <a style={{maxWidth:"18px", minWidth:"9px", height:"auto"}} rel="noopener noreferrer" target="_blank" href={socialLinks.behance}>
          <LineIcon name="behance"/>
        </a>
      </li>}
      {!socialLinks.linkedin ? null : <li>
        <a style={{maxWidth:"18px", minWidth:"9px", height:"auto"}} rel="noopener noreferrer" target="_blank" href={socialLinks.linkedin}>
          <LineIcon name="linkedin"/>
        </a>
      </li>}
      {!socialLinks.dribbble ? null : <li>
        <a style={{maxWidth:"18px", minWidth:"9px", height:"auto"}} rel="noopener noreferrer" target="_blank" href={socialLinks.dribbble}>
          <LineIcon name="dribbble"/>
        </a>
      </li>}
      {!socialLinks.github ? null : <li>
        <a style={{maxWidth:"18px", minWidth:"9px", height:"auto"}} rel="noopener noreferrer" target="_blank" href={socialLinks.github}>
          <LineIcon name="github"/>
        </a>
      </li>}
    </ul>
  );
}

export default Socialiconsfooter;
