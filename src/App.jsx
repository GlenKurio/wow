function App() {
  return (
    <section className="flex flex-col gap-4 items-center justify-center min-h-screen">
      <details>
        <summary>Some short info</summary>
        <p>Oh hello my full description. And More words without meanimg...</p>
      </details>

      <button className="btn btn-primary">DOWNLOAD</button>

      <button className="btn btn-neutral  ">DOWNLOAD</button>
      <button className="btn btn-neutral btn-outline ">DOWNLOAD</button>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-outline btn-primary btn-md"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        open modal
      </button>
      <dialog id="my_modal_1" className="modal ">
        <div className="modal-box ">
          <h3 className="font-bold text-lg text-error-content p-4 bg-error">
            Hello!
          </h3>
          <p className="py-4 text-warning-content p-4 bg-warning">
            Press ESC key or click the button below to close
          </p>
          <p className="py-4 text-info-content bg-info p-4">
            Press ESC key or click the button below to close
          </p>
          <form>
            <input type="text" />
            <button onClick={(e) => e.preventDefault()}>Submit</button>
          </form>
          <p className="py-4 text-success-content p-4 bg-success">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-secondary">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </section>
  );
}

export default App;
