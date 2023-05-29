import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

function ViewContact() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "contact"));
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
                <span>{item?.data?.email}</span> <br />
                <span>{item?.data?.name}</span> <br />
                <span>{item?.data?.phone}</span>
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

export default ViewContact;
