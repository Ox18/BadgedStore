import { db, firebase } from "../connection";
import ProductService from "../service/ProductService";

class ProductImpl implements ProductService {
  getAllProducts(): Promise<
    firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>
  > {
    return db.collection("products").get();
  }
}

export default ProductImpl;
