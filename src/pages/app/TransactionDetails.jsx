import MoveBackButton from "../../components/MoveBackButton";
import { useParams } from "react-router-dom";
function TransactionDetails() {
  const { id } = useParams();

  return (
    <main>
      <MoveBackButton />
      Transaction details page for {id}
    </main>
  );
}

export default TransactionDetails;
