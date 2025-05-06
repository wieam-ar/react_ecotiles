import React from 'react';
import bathImage from '../assets/bath_1_.png';
import frameImage from '../assets/Frame.png';
import kitchenImage from '../assets/kitchen_1_.png';
import woodImage from '../assets/wood_flooring-parquet-floors_1_.png';

const Rooms = () => {
  // 🏠 Data for our room pictures and titles
  const roomData = [
    { image: bathImage, title: "Carrelage" },
    { image: frameImage, title: "Cuisines" },
    { image: kitchenImage, title: "Sanitaires" },
    { image: woodImage, title: "Marbre sur mesure" }
  ];

  return (
    <div className="rooms-container">
      {/* 🖼️ Mapping through our room data to create picture elements */}
      <div className="pictures-grid">
        {roomData.map((room, index) => (
          <div key={index} className="picture-item">
            <img src={room.image} alt={room.title} />
            <span>{room.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;