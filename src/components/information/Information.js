import React, { useEffect, useState } from "react";
import "./Information.css";
import firebase from "../../firebase";

function useDate() {
  const [userTable, setUserTable] = useState([]);

  useEffect(() => {
    firebase
      .database()
      .ref("orders")
      .on("value", (snapshot) => {
        let temp = snapshot.val();
        setUserTable(temp[6]);
      });
  }, []);

  return userTable;
}

function Information() {
  const temp = useDate();
  //   let temp = data.date
  console.log("ad ka dta", { temp });

  return (
    <div className="info">
      <div className="tile">
        <p>Today’s order-{temp.qty} </p>
        <p>Current Week Order- 450</p>
      </div>
      <div className="tile">
        <p>Today’s order amount- {temp.amount}</p>
        <p>Current Week amount- 450</p>
      </div>
      <div className="tile">
        <p>MTD order- 200</p>
        <p>Last Month Order- 450</p>
      </div>
      <div className="tile">
        <p>MTD order amount- 200</p>
        <p>Last Month amount- 450</p>
      </div>
    </div>
  );
}

export default Information;
