import classes from "./Modal.module.css"

import React from 'react';

import {createPortal} from 'react-dom';

const Backdrop=(props) => {
 return (
  <div className={classes.backdrop} onClick={props.onClick}>

  </div>
 )
}
const ModalOverLay=props => {
 return (
  <div className={classes.modal}>
   <div className={classes.content}>{props.children}</div>
  </div>
 )
}
const portalElement=document.getElementById('overlays')
const Modal=(props) => {
 return (
  <React.Fragment>
   {/*<Backdrop></Backdrop>
   <ModalOverLay>{props.children}</ModalOverLay>*/}
   {createPortal(<Backdrop onClick={props.onClick} />,portalElement)}
   {createPortal(<ModalOverLay>{props.children}</ModalOverLay>,portalElement)}
  </React.Fragment>

 )
}
export default Modal