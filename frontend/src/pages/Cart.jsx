import { useState } from "react";
import Frame from "../components/Frame";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { createOrder } from "../service/api";

export default function Cart() {
  const [items, setItems] = useState([
    { product_id: 1, name: "Rosy Delight", price: 100, quantity: 1 },
  ]);

  const [customer, setCustomer] = useState({
    customer_name: "",
    customer_phone: "",
    customer_email: "",
    customer_address: "",
  });

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const submitOrder = async () => {
    try {
      await createOrder({
        ...customer,
        user_id: 1, // replace later with real user
        items: items.map((i) => ({
          product_id: i.product_id,
          quantity: i.quantity,
        })),
      });

      alert("Order placed successfully");
    } catch (err) {
      alert("Order failed");
    }
  };

  return (
    <Frame>
      <Header />

      <section className="grid grid-cols-1 md:grid-cols-12 border-b border-line">
        {/* CART */}
        <div className="md:col-span-7 md:border-r border-line p-10">
          <h2 className="text-xl mb-6">Your Cart</h2>

          {items.map((i, idx) => (
            <div
              key={idx}
              className="flex justify-between border-b border-line py-4"
            >
              <div>
                <p>{i.name}</p>
                <p className="text-xs text-neutral-500">${i.price}</p>
              </div>

              <input
                type="number"
                min="1"
                value={i.quantity}
                onChange={(e) => {
                  const q = [...items];
                  q[idx].quantity = Number(e.target.value);
                  setItems(q);
                }}
                className="border border-line w-16 p-1"
              />
            </div>
          ))}

          <p className="mt-6 text-right">
            Total: <strong>${total}</strong>
          </p>
        </div>

        {/* CHECKOUT */}
        <div className="md:col-span-5 p-10">
          <h2 className="text-xl mb-6">Checkout</h2>

          {Object.keys(customer).map((key) => (
            <input
              key={key}
              placeholder={key.replace("_", " ")}
              className="border border-line p-3 w-full mb-3"
              onChange={(e) =>
                setCustomer({ ...customer, [key]: e.target.value })
              }
            />
          ))}

          <button
            onClick={submitOrder}
            className="bg-black text-white py-3 w-full text-xs tracking-wide"
          >
            PLACE ORDER
          </button>
        </div>
      </section>

      <Footer />
    </Frame>
  );
}
