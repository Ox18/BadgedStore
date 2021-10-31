import firebase from "firebase/compat/app";

interface ProductService {
  getAllProducts(): Promise<
    firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>
  >;
}

export default ProductService;
