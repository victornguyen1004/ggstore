import customers from "../../../assets/customers";
import CustomerContainer from "../CustomerContainer";
import CustomerItem from "../CustomerItem";

function CustomerSection() {
    return (
      <>
        <div className="mb-8 text-center text-2xl font-bold">
          Trusted Customers
        </div>
        <CustomerContainer>
          {customers.map((customer, key) => {
            return <CustomerItem key={key} image={customer} />;
          })}
        </CustomerContainer>
      </>
    );
}

export default CustomerSection;