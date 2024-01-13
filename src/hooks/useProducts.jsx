import { useState, useEffect } from "react";
import { getProductByCategory } from "../services";
import { collection, getDocs, doc, getDoc, getFirestore } from "firebase/firestore";

/**
 * @description Custom Hook for get products
 * @returns {Array}
 */

export const useGetProducts = () => {
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        const db = getFirestore();

        const productsCollection = collection(db, 'products');

        getDocs(productsCollection).then((snapshot) => {
          setProductsData(
            snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() }))
          );
        })
      }, []);

      return { productsData }
}

export const useGetProductById = (collectionName = 'products', id) => {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const docRef = doc(db, collectionName, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProductData({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, [collectionName, id]);

  return { productData };
};


export const useGetProductByCategory = (id) => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    getProductByCategory(id)
      .then((response) => {
        setProductsData(response.data.products)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return { productsData }
}