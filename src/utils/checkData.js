import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export const checkData = async (singleID) => {
  const querySnapshot = await getDocs(collection(db, "products"));
  const data = querySnapshot.docs.map((doc) => {
    const id = doc.id;
    const data = doc.data();
    const productID = doc.data().productID;

    return {
      id,
      data,
      productID,
    };
  });

  console.log("Array -> ", data);

  // if data match, return true & id (assigned by firebase)
  // else false
  const isPresent = data.find(({ productID }) => productID === singleID);

  const bool = true;

  console.log("Product Id", isPresent);

  if (isPresent) {
    return {
      isPresent,
      bool,
    };
  } else {
    return {
      isPresent: {
        id: "0",
        data: {},
        productID: 0,
      },
      bool: false,
    };
  }
};
