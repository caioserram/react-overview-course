function Modal(props) {
  return (
    <div className="modal">
      <p>Are you sure?</p>
      {/* props can also be functions chaining events.
       *This is interesting because you can have all your state centered in one component and just make some parts of it avaliable
       * to other components by function, protecting and making it easier to maintain */}
      <button className="btn btn--alt" onClick={props.onCancel}>
        Cancel
      </button>
      <button className="btn" onClick={props.onConfirm}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
