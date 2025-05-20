import './App.css';
import { useState, useEffect } from 'react';
import { database } from './Firebase/configFb';
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';

function App() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const usersRef = collection(database, 'users');

  useEffect(() => {
    fetchUsers();       
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.email || !form.password) return alert('Fill all fields');
    setLoading(true);
    try {
      await addDoc(usersRef, form);
      setForm({ email: '', password: '' });
      fetchUsers();
    } catch {
      alert('Failed to add user');
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const snapshot = await getDocs(usersRef);
      setUsers(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    } catch {
      alert('Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (id) => {
    try {
      await updateDoc(doc(database, 'users', id), {
        email: 'Updated',
        password: '1234',
      });
      fetchUsers();
    } catch {
      alert('Failed to update');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(database, 'users', id));
      setUsers(users.filter((u) => u.id !== id));
    } catch {
      alert('Failed to delete');
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>

      <div className="mb-6 space-y-2">
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full border px-3 py-2 rounded"
        />
        <input
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          type="password"
          className="w-full border px-3 py-2 rounded"
        />
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Submitting...' : 'Add User'}
        </button>
      </div>

      <h2 className="text-xl font-semibold mb-2">Users</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="space-y-2">
          {users.map((user) => (
            <li
              key={user.id}
              className="p-3 bg-gray-100 rounded flex justify-between items-center"
            >
              <div>
                <p className="font-medium">{user.email}</p>
                <p className="text-sm text-gray-600">{user.password}</p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleUpdate(user.id)}
                  className="text-blue-600"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="text-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
