import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Page Animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Home />
      </motion.div>
    </div>
  );
}

export default App;