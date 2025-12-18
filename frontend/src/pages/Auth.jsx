import { useState } from "react";
import Frame from "../components/Frame";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { loginUser, registerUser } from "../service/api";

export default function Auth() {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async () => {
    try {
      const res =
        mode === "login"
          ? await loginUser({
              email: form.email,
              password: form.password,
            })
          : await registerUser(form);

      if (res.data?.access_token) {
        localStorage.setItem("access_token", res.data.access_token);
      }

      alert("Success");
    } catch (err) {
      alert(err.response?.data?.detail || "Error");
    }
  };

  return (
    <Frame>
      <Header />

      <section className="grid grid-cols-1 md:grid-cols-12 border-b border-line">
        <div className="md:col-span-6 md:border-r border-line p-12">
          <h1 className="text-2xl mb-4">
            {mode === "login" ? "Sign in" : "Create account"}
          </h1>

          <div className="space-y-4 max-w-sm">
            {mode === "register" && (
              <>
                <input
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                  className="border border-line p-3 w-full"
                />
                <input
                  name="phone"
                  placeholder="Phone"
                  onChange={handleChange}
                  className="border border-line p-3 w-full"
                />
              </>
            )}

            <input
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="border border-line p-3 w-full"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="border border-line p-3 w-full"
            />

            <button
              onClick={submit}
              className="bg-black text-white py-3 w-full text-xs tracking-wide"
            >
              {mode === "login" ? "SIGN IN" : "REGISTER"}
            </button>

            <button
              className="text-xs underline"
              onClick={() => setMode(mode === "login" ? "register" : "login")}
            >
              {mode === "login"
                ? "Create an account"
                : "Already have an account?"}
            </button>
          </div>
        </div>

        <div className="md:col-span-6 h-[300px] md:h-auto bg-neutral-200">
          <img src="/img/auth.jpg" className="w-full h-full object-cover" />
        </div>
      </section>

      <Footer />
    </Frame>
  );
}
