import React, { Component } from 'react'
import { render } from 'react-dom'
import './button.css'

// export const LikeButton = ({ children }) => (
//   <ion-icon name="heart-outline" class='image-button'></ion-icon>
// )

export class LikeButton extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      LikedIcon: false,
    }
  } 

  render() {
    return (
      <a className="btn btn-primary" onClick={()=>this.setState({ LikedIcon: !this.state.LikedIcon })}>
        { this.state.LikedIcon
          ? <ion-icon name="heart" class='liked-button'></ion-icon>
          : <ion-icon name="heart-outline" class='likebutton-outline'></ion-icon>          
        }
      </a>
    );
  }

}
