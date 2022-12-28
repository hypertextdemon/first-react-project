function Modal(props) {
    function cancel() {
        props.onCancel();
    }
    function confirm() {
        props.onConfirm();
    }

    return (
        <div>
            <p>Are you sure?</p>
            <button onClick={cancel}>Cancel</button>
            <button onClick={confirm}>Confirm</button>
        </div>
    )
}
export default Modal;