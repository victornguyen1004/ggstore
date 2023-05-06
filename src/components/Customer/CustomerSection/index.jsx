import { useState, useEffect } from "react";
import { ApiBaseUrl } from "../../../global/global-variables";
import CustomerContainer from "../CustomerContainer";
import CustomerItem from "../CustomerItem";

function CustomerSection() {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    const url = `${ApiBaseUrl}/customers`;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        const data = json.data;
        console.log(data);
        setCustomers(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="mb-8 text-center text-2xl font-bold">
        Trusted Customers
      </div>
      <CustomerContainer>
        {customers.map((customer, key) => {
          return (
            <CustomerItem
              key={key}
              image={customer.imgUrl}
              href={customer.link}
            />
          );
        })}
      </CustomerContainer>
    </>
  );
}

export default CustomerSection;
