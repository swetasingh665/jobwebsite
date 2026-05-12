import React, { useState } from "react";
import googleLogo from "../assets/google.png";
import "./Companies.css";

function Companies() {
  const [search, setSearch] = useState("");
  const [followed, setFollowed] = useState({});

  // ✅ Proper companies array
  const companies = [
    {
      id: 1,
      name: "Google",
      logo: googleLogo, // local image
    },
    {
      id: 2,
      name: "Microsoft",
      logo: "https://logo.clearbit.com/microsoft.com",
    },
    {
      id: 3,
      name: "Amazon",
      logo: "https://logo.clearbit.com/amazon.com",
    },
    {
      id: 4,
      name: "Apple",
      logo: "https://logo.clearbit.com/apple.com",
    },
    {
      id: 5,
      name: "Meta",
      logo: "https://logo.clearbit.com/meta.com",
    },
    {
      id: 6,
      name: "Netflix",
      logo: "https://logo.clearbit.com/netflix.com",
    },
    {
      id: 7,
      name: "Tesla",
      logo: "https://logo.clearbit.com/tesla.com",
    },
    {
      id: 8,
      name: "Adobe",
      logo: "https://logo.clearbit.com/adobe.com",
    },
    {
      id: 9,
      name: "IBM",
      logo: "https://logo.clearbit.com/ibm.com",
    },
    {
      id: 10,
      name: "Intel",
      logo: "https://logo.clearbit.com/intel.com",
    },
  ];

  // ✅ Follow toggle
  const toggleFollow = (id) => {
    setFollowed((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // ✅ Search filter
  const filtered = companies.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="companies">
      <h2>Companies</h2>

      <input
        type="text"
        placeholder="Search company..."
        className="search-box"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="company-grid">
        {filtered.map((company) => (
          <div className="company-card" key={company.id}>
            <img
              src={company.logo}
              alt={company.name}
              className="company-logo"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/60?text=Logo";
              }}
            />

            <h3>{company.name}</h3>

            <button
              className={
                followed[company.id] ? "following-btn" : "follow-btn"
              }
              onClick={() => toggleFollow(company.id)}
            >
              {followed[company.id] ? "Following" : "Follow"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Companies;