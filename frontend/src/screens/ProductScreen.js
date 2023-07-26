import { useParams } from 'react-router-dom';

function ProductScreen() {
  //Deconstruyendo los parametros de la URL y almacenándolos en un variable.
  const params = useParams();
  const { slug } = params;

  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
}

export default ProductScreen;
