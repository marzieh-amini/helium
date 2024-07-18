
const Modal = ({ title, description,onClose })=> {
    return (
      <div className="modal" onClick={onClose} >
        <div className="modal__container" >
            <div className="icon">
                
        <i className="fa fa-exclamation"></i>
            </div>
        <h2>{title} </h2>
        <p>{description} </p>
          <button className="modal__close-button" onClick={onClose}>X</button>
        </div>
      </div>
    );
  }
  

  export default Modal;