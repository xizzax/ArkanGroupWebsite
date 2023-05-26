import {Container, Row, Col} from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import React from 'react'

function AdminDashboard() {

  const location = useLocation();
  const {username, password} = location.state;

  return (
    <div>
      <h1>Admin Dashboard</h1>
    </div>
  );
}

export default AdminDashboard;
