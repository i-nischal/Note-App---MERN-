import React, { useState } from "react";
import toast from "react-hot-toast";
import Navbar from "../Components/Navbar";
import RateLimitedUI from "../Components/RateLimitedUI";

function Home() {
  const [isRateLimited, setIsRateLimited] = useState(false);
  return (
    <div className="min-h-screen">
      <Navbar />

      {isRateLimited && <RateLimitedUI />}
    </div>
  );
}

export default Home;
