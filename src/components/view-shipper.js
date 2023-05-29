import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

function ViewShipper() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "shipper"));
        const fetchedData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.length > 0 ? (
        data.map((item) => (
          <div
            key={item.id}
            style={{ margin: "10px", backgroundColor: "gray" }}>
            <div>
              <div style={{ margin: "20px", backgroundColor: "wheat" }}>
                <span>{item?.data?.defineYourself}</span> <br />
                <span>{item?.data?.expectations}</span>
              </div>
              <div style={{ margin: "20px", backgroundColor: "wheat" }}>
                <span>{item?.data?.howHeardAbout}</span> <br />
                <span>{item?.data?.shippingCompany}</span>
              </div>
              <div style={{ margin: "20px", backgroundColor: "wheat" }}>
                <span>{item?.data?.whatToShip}</span> <br />
                <span>{item?.data?.whyChooseArkan}</span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No data available.</p>
      )}
      {/* Make UI n put data */}
    </div>
  );
}

export default ViewShipper;
