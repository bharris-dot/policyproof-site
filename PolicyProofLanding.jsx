import { motion } from "framer-motion";
import { useState } from "react";

export default function PolicyProofLanding() {
  const [form, setForm] = useState({
    pms: "",
    doors: "",
    limits: "",
    ai: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Form submitted: " + JSON.stringify(form, null, 2));
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <header className="bg-blue-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl font-bold sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            PolicyProof
          </motion.h1>
          <motion.p
            className="mt-4 text-lg sm:text-xl text-blue-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Effortless Insurance Compliance for Property Managers
          </motion.p>
        </div>
      </header>

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold text-blue-900">
            Total Property Peace of Mind
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Easily collect, verify, and approve insurance for your owners,
            ensuring every door is covered with active policies that meet your
            requirements. Avoid costly pitfalls and lawsuits with our flexible
            Master Liability coverage and integrated compliance software.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white shadow-inner">
        <div className="max-w-lg mx-auto px-4">
          <h3 className="text-xl font-bold text-blue-900 mb-6 text-center">
            Sign Up for PolicyProof
          </h3>
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-gray-50 p-6 rounded-2xl shadow-lg"
          >
            <div>
              <label className="block font-medium mb-2">
                Which property management system do you use?
              </label>
              <input
                type="text"
                name="pms"
                value={form.pms}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-2">
                How many doors do you manage?
              </label>
              <input
                type="number"
                name="doors"
                value={form.doors}
                onChange={handleChange}
                min="1"
                className="w-full border rounded-lg px-3 py-2"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-2">
                Minimum general liability limits required:
              </label>
              <input
                type="text"
                name="limits"
                value={form.limits}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-2">
                How are you required to be added as additional insured?
              </label>
              <textarea
                name="ai"
                value={form.ai}
                onChange={handleChange}
                rows="3"
                className="w-full border rounded-lg px-3 py-2"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      <footer className="mt-auto py-6 bg-gray-100 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Obie Insurance |{" "}
        <a
          href="https://www.obieinsurance.com/property-managers"
          className="underline"
        >
          Learn More
        </a>
      </footer>
    </div>
  );
}
