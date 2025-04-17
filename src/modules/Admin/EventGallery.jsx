// components/EventGallery.jsx
import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export default function EventGallery() {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    const querySnapshot = await getDocs(collection(db, "event"));
    const imageData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setImages(imageData);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="p-4 grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((img) => (
        <div key={img.id} className="relative group">
          <img src={img.imageUrl} alt="event" className="rounded-lg w-full" />
          {/* Later we will add edit/delete here */}
        </div>
      ))}
    </div>
  );
}