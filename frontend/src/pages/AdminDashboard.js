import React from "react";

function AdminDashboard() {
  const stats = [
    { title: "Total Users", value: "1,250" },
    { title: "Total Jobs", value: "320" },
    { title: "Applications", value: "890" },
    { title: "Recruiters", value: "75" },
  ];

  const jobs = [
    {
      id: 1,
      company: "Google",
      role: "Frontend Developer",
      location: "Noida",
      status: "Active",
    },
    {
      id: 2,
      company: "Microsoft",
      role: "Backend Developer",
      location: "Delhi",
      status: "Pending",
    },
    {
      id: 3,
      company: "Amazon",
      role: "UI/UX Designer",
      location: "Bangalore",
      status: "Active",
    },
  ];

  return (
    <div style={styles.container}>
      
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h2 style={styles.logo}>Job Portal</h2>

        <ul style={styles.menu}>
          <li style={styles.menuItem}>Dashboard</li>
          <li style={styles.menuItem}>Manage Users</li>
          <li style={styles.menuItem}>Manage Jobs</li>
          <li style={styles.menuItem}>Applications</li>
          <li style={styles.menuItem}>Recruiters</li>
          <li style={styles.menuItem}>Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div style={styles.main}>
        
        {/* Header */}
        <div style={styles.header}>
          <div>
            <h1>Admin Dashboard</h1>
            <p>Manage your job portal system</p>
          </div>

          <button style={styles.logoutBtn}>Logout</button>
        </div>

        {/* Stats */}
        <div style={styles.statsContainer}>
          {stats.map((item, index) => (
            <div key={index} style={styles.card}>
              <h3>{item.title}</h3>
              <h1>{item.value}</h1>
            </div>
          ))}
        </div>

        {/* Recent Jobs */}
        <div style={styles.tableContainer}>
          <h2>Recent Job Posts</h2>

          <table style={styles.table}>
            <thead>
              <tr>
                <th>Company</th>
                <th>Role</th>
                <th>Location</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {jobs.map((job) => (
                <tr key={job.id}>
                  <td>{job.company}</td>
                  <td>{job.role}</td>
                  <td>{job.location}</td>
                  <td>
                    <span
                      style={{
                        color:
                          job.status === "Active" ? "green" : "orange",
                        fontWeight: "bold",
                      }}
                    >
                      {job.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    background: "#f4f6f9",
    fontFamily: "Arial",
  },

  sidebar: {
    width: "250px",
    background: "#111827",
    color: "white",
    padding: "20px",
  },

  logo: {
    marginBottom: "40px",
  },

  menu: {
    listStyle: "none",
    padding: 0,
  },

  menuItem: {
    padding: "15px 10px",
    marginBottom: "10px",
    cursor: "pointer",
    borderRadius: "8px",
    background: "#1f2937",
  },

  main: {
    flex: 1,
    padding: "30px",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
  },

  logoutBtn: {
    padding: "10px 20px",
    background: "#ef4444",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },

  statsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginBottom: "40px",
  },

  card: {
    background: "white",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },

  tableContainer: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  },
};

export default AdminDashboard;