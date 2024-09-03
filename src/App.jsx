import { useState } from "react";
import "./App.css";
import data from "./data.js";
import List from "./components/List.jsx";
import { Route, Routes, useLocation } from "react-router-dom";

import Andrew from "./components/Andrew/Andrew.jsx";
import Kong from "./components/Kong/Kong.jsx";
import Kob from "./components/Kob/Kob.jsx";
import Bm from "./components/Bm/Bm.jsx";
import Boss from "./components/Boss/Boss.jsx";
import Tick from "./components/Tick/Tick.jsx";
import Sack from "./components/Sack/Sack.jsx";
import Alex from "./components/Alex/Alex.jsx";
import Peter from "./components/Peter/Peter.jsx";
import Ning from "./components/Ning/Ning.jsx";
import Paeng from "./components/Paeng/Paeng.jsx";
import Jed from "./components/Jed/Jed.jsx";
import Bank from "./components/Bank/Bank.jsx";
import Vidone from "./components/Vidone/Vidone.jsx";
import Khumphou from "./components/Khumphou/Khumphou.jsx";

function App() {
  const [grades, setgrades] = useState(null);

  return (
    <div className="flex flex-col items-center gap-y-5 w-full overflow-x-hidden my-8 ">
      <Routes>
        <Route path="/" element={<List students={data} grades={grades} />} />
        <Route path="/andrew" element={<Andrew />} />
        <Route path="/kong" element={<Kong />} />
        <Route path="/kob" element={<Kob />} />
        <Route path="/bm" element={<Bm />} />
        <Route path="/boss" element={<Boss />} />
        <Route path="/tick" element={<Tick />} />
        <Route path="/sack" element={<Sack />} />
        <Route path="/alex" element={<Alex />} />
        <Route path="/peter" element={<Peter />} />
        <Route path="/ning" element={<Ning />} />
        <Route path="/paeng" element={<Paeng />} />
        <Route path="/jed" element={<Jed />} />
        <Route path="/bank" element={<Bank />} />
        <Route path="/vidone" element={<Vidone />} />
        <Route path="/jua" element={<Khumphou />} />
      </Routes>
    </div>
  );
}

export default App;
