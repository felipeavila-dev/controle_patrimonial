import * as C from './style';
import { ProductForm } from '../../components/ProductForm';

export const ProductDetail = () => {
  // const params = useParams();
  // const [product, setProduct] = useState(getProductById(String(params.id)));


  // {"id":"1","title":"Notebook Dell i3","model":"Inspiron 5555","quantity":3,"department":"Compras","category":"Notebook"}
  return(
    <C.Container>
      <C.FormArea>
        <ProductForm />
      </C.FormArea>
    </C.Container>
  );
}