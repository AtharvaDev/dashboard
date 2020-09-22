import ReactEcharts from "echarts-for-react";
import React, { useEffect, useState } from "react";
import "./OrderTrend.css";
import firebase from "../../firebase";

function useDate() {
  // const [userTable, setUserTable] = useState([]);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    firebase
      .database()
      .ref("orders")
      .on("value", (snapshot) => {
        // setUserTable(snapshot.val());
        let table = snapshot.val();
        let date = [...table];
        date = date.map((data) => {
          return data.date;
        });
        setDates(date);
      });
  }, []);

  return dates;
}

function useAmount() {
    // const [userTable, setUserTable] = useState([]);
    const [amount, setAmount] = useState([]);
  
    useEffect(() => {
      firebase
        .database()
        .ref("orders")
        .on("value", (snapshot) => {
          // setUserTable(snapshot.val());
          let table = snapshot.val();
          let amount = [...table];
          amount = amount.map((data) => {
            return data.amount;
          });
          setAmount(amount);
        });
    }, []);
  
    return amount;
  }



function OrderTrend() {
  const dates = useDate();
  const amount = useAmount();


  return (
    <div className="orderTrend">
      <ReactEcharts
        option={{
          xAxis: {
            type: "category",
            data: dates,
          },
          yAxis: {
            type: "value",
          },
          series: [
            {
              data: amount,
              type: "line",
            },
          ],
        }}
      />
    </div>
  );
}

export default OrderTrend;
