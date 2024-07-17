import { Header } from "@/components/header";
import { useNavigate, useParams } from "react-router-dom";

export function ProductsDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleProduct = () => {
    navigate("/products");
  };

  return (
    <>
      <div>
        <button>
          <h1 onClick={handleProduct}>Faturas do usuários{id}</h1>
        </button>
      </div>
    </>
  );
}
