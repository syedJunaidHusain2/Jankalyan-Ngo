import React, { useState, useEffect } from "react";
import { auth, db } from "../../firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { uploadToCloudinary } from "../../utils/uploadToCloudinary";
import "./AdminPanel.scss";

const AdminPanel = () => {
  const [formData, setFormData] = useState({ title: "", date: "", image: null });
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [section, setSection] = useState("event");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const snapshot = await getDocs(collection(db, section));
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setItems(data);
    };
    fetchItems();
  }, [section]);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      await deleteDoc(doc(db, section, id));
      setItems((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.image) return alert("Please select an image.");

    setLoading(true);
    try {
      const imageUrl = await uploadToCloudinary(formData.image);
      const payload = {
        imageUrl,
        ...(section === "news" && {
          title: formData.title,
          date: formData.date,
        }),
        uploadedAt: Date.now(),
      };
      await addDoc(collection(db, section), payload);
      alert("Upload successful!");
      setFormData({ title: "", date: "", image: null });
      setPreview(null);
    } catch (err) {
      console.error("Error uploading:", err);
      alert("Upload failed. Check console.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    signOut(auth).then(() => {
      sessionStorage.removeItem("isAdmin");
      window.location.href = "/";
    });
  };

  return (
    <div className="admin-panel">
<header className="admin-header">
  <h2>🛠️ Admin Panel</h2>
  <nav className="admin-actions">
    <button
      onClick={() => setSection("event")}
      className={section === "event" ? "active" : ""}
    >
      📸 Events
    </button>
    <button
      onClick={() => setSection("news")}
      className={section === "news" ? "active" : ""}
    >
      📰 News
    </button>
    <button onClick={handleLogout} className="logout-btn">
      🚪 Logout
    </button>
  </nav>
</header>


      <form className="admin-form" onSubmit={handleSubmit}>
        {section === "news" && (
          <>
            <input type="text"
              name="title"
              placeholder="News Title"
              value={formData.title}
              onChange={handleInputChange}
              maxLength={20}
              required />
            <input type="date" name="date" value={formData.date} onChange={handleInputChange} required />
          </>
        )}
        <input type="file" name="image" accept="image/*" onChange={handleInputChange} required />
        {preview && <img className="image-preview" src={preview} alt="preview" />}
        <button type="submit" disabled={loading}>{loading ? "Uploading..." : "Upload"}</button>
      </form>

      <div className="uploaded-list">
        <h3>📋 Uploaded {section === "event" ? "Events" : "News"}</h3>
        <div className="card-grid">
          {items.map(item => (
            <div key={item.id} className="admin-card">
              <img src={item.imageUrl} alt="uploaded" />
              {section === "news" && (
                <>
                  <h4>{item.title}</h4>
                  <p>{new Date(item.date).toLocaleDateString()}</p>
                </>
              )}
              <button className="delete-btn" onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
