function Modal({ children, showModal, setShowModal }) {
  return (
    <>
      {showModal && document.getElementById("my_modal_1").showModal()}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => setShowModal((prev) => !prev)}
            >
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">
            Please enter your current email and password
          </h3>
          <small>
            It`s required to confirm your authorization before updating email
            and/or password.
          </small>
          {children}
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                className="btn"
                onClick={() => setShowModal((prev) => !prev)}
              >
                Close
              </button>
            </form>
          </div>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button onClick={() => setShowModal((prev) => !prev)}>close</button>
        </form>
      </dialog>
    </>
  );
}

export default Modal;
