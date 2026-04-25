

  const tableData = {
  orders: {
    heading: [
      { name: "Customer", key: "name" },
      { name: "Product", key: "Product" },
      { name: "Date", key: "Date" },
      { name: "Status", key: "Status" },
      { name: "Amount", key: "Amount" },
    ],
    rows: [
      {
        name: "John Doe",
        email: "john@gmail.com",
        Product: "Premium Plan",
        Date: "Jan 15, 2025",
        Status: "Completed",
        Amount: "$299.00",
      },
      {
        name: "Anna Smith",
        email: "anna@example.com",
        Product: "Enterprise License",
        Date: "Jan 14, 2025",
        Status: "Processing",
        Amount: "$1,499.00",
      },
      {
        name: "Mike Johnson",
        email: "mike@example.com",
        Product: "Team Bundle",
        Date: "Jan 13, 2025",
        Status: "Completed",
        Amount: "$599.00",
      },
      {
        name: "Emily White",
        email: "emily@example.com",
        Product: "Starter Plan",
        Date: "Apr 12, 2025",
        Status: "Pending",
        Amount: "$199.00",
      },
      {
        name: "Robert Brown",
        email: "robert@example.com",
        Product: "Pro Annua",
        Date: "May 20, 2025",
        Status: "Completed",
        Amount: "$299.00",
      },
    ],
  },

  users: {
    heading: [
      { name: "Customer", key: "name" },
      { name: "Role", key: "role" },
      { name: "Status", key: "status" },
      { name: "Joined", key: "joined" },
      { name: "Last Active", key: "last_active" },
    ],
    rows: [
      {
        name: "John Doe",
        email: "john@gmail.com",
        role: "Administrator",
        status: "active",
        joined: "Jan 15, 2024",
        last_active: "2 mins ago",
      },
      {
        name: "Anna Smith",
        email: "anna@example.com",
        role: "Editor",
        status: "active",
        joined: "FEB 22, 2024",
        last_active: "15 mins ago",
      },
      {
        name: "Mike Johnson",
        email: "mike@example.com",
        role: "User",
        status: "away",
        joined: "MAR 15, 2024",
        last_active: "2 hrs ago",
      },
      {
        name: "Emily White",
        email: "emily@example.com",
        role: "Moderator",
        status: "active",
        joined: "APR 15, 2024",
        last_active: "20 mins ago",
      },
      {
        name: "Robert Brown",
        email: "robert@example.com",
        role: "User",
        status: "offline",
        joined: "MAY 15, 2024",
        last_active: "3 days ago",
      },
       {
      
      name: "Sarah Lee",
      email: "sarah@example.com",
      role: "Editor",
      status: "active",
      joined: "JUN 8, 2024",
      last_active: "2 mins ago",
      actions: "edit",
    },
    {
      
      name: "David Kim",
      email: "david@example.com",
      role: "User",
      status: "active",
      joined: "JUL 22, 2024",
      last_active: "2 mins ago",
      actions: "edit",
    },
    {
      
      name: "Lisa Martinez",
      email: "lisa@example.com",
      role: "Moderator",
      status: "away",
      joined: "Jan 15, 2024",
      last_active: "2 mins ago",
      actions: "edit",
    },
    ],
  },
};

export default tableData;