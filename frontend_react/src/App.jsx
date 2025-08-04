import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [teas, setTeas] = useState([]);
  const [newTea, setNewTea] = useState({ id: '', name: '', origin: '' });

  const API_URL = 'http://127.0.0.1:8000';

  useEffect(() => {
    fetchTeas();
  }, []);

  const fetchTeas = async () => {
    try {
      const res = await axios.get(`${API_URL}/teas`);
      setTeas(res.data);
    } catch (error) {
      console.error('Error fetching teas:', error);
    }
  };

  const addTea = async () => {
    try {
      await axios.post(`${API_URL}/teas`, newTea);
      setNewTea({ id: '', name: '', origin: '' });
      fetchTeas();
    } catch (error) {
      console.error('Error adding tea:', error);
    }
  };

  const deleteTea = async (id) => {
    try {
      await axios.delete(`${API_URL}/teas/${id}`);
      fetchTeas();
    } catch (error) {
      console.error('Error deleting tea:', error);
    }
  };

  const updateTea = async (id) => {
    try {
      await axios.put(`${API_URL}/teas/${id}`, newTea);
      setNewTea({ id: '', name: '', origin: '' });
      fetchTeas();
    } catch (error) {
      console.error('Error updating tea:', error);
    }
  };

  return (
    <div className="container">
      <h2>🍵 Shubhrajit’s Tea Inventory 🍵</h2>

      <div className="form">
        <input
          type="number"
          placeholder="ID"
          value={newTea.id}
          onChange={(e) => setNewTea({ ...newTea, id: parseInt(e.target.value) || '' })}
        />
        <input
          type="text"
          placeholder="Name"
          value={newTea.name}
          onChange={(e) => setNewTea({ ...newTea, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Origin"
          value={newTea.origin}
          onChange={(e) => setNewTea({ ...newTea, origin: e.target.value })}
        />

        <div className="button-group">
          <button onClick={addTea}>➕ Add</button>
          <button onClick={() => updateTea(newTea.id)}>✏️ Update</button>
        </div>
      </div>

      <div className="tea-list">
        {teas.map((tea) => (
          <div className="tea-card" key={tea.id}>
            <p><strong>ID:</strong> {tea.id}</p>
            <h3>{tea.name}</h3>
            <p><em>Origin:</em> {tea.origin}</p>
            <button className="delete-btn" onClick={() => deleteTea(tea.id)}>❌ Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
