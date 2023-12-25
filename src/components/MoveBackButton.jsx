import { useMoveBack } from "../hooks/useMoveBack";
function MoveBackButton() {
  return (
    <button
      onClick={useMoveBack()}
      className="btn  text-accent btn-ghost btn-sm  mb-6 mt-2"
    >
      &larr; Go back
    </button>
  );
}

export default MoveBackButton;
