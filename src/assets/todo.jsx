import Modal from "./modal";
import { useState } from 'react'

function Todo(props) {
  const [isOpenModal, setIsOpenModal]=useState(false);

  function deleter() {
    setIsOpenModal(true);
  }
  function modalCloser() {
    setIsOpenModal(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleter}>DELETE</button>
      </div>
      {isOpenModal && <Modal onCancel={modalCloser} onConfirm={modalCloser} />}
    </div>
  );
}

export default Todo;