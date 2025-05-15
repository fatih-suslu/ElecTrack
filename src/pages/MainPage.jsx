import { useState, useRef } from "react";
import DeviceList from "../components/DeviceList";
import Cart from "../components/Cart";

export default function MainPage() {
  const [selectedDevices, setSelectedDevices] = useState(
    JSON.parse(localStorage.getItem("selectedDevices")) || []
  );

  const cartRef = useRef(null);

  const handleSelectDevice = (device) => {
    const updatedDevices = selectedDevices.some((d) => d.id === device.id)
      ? selectedDevices.filter((d) => d.id !== device.id)
      : [...selectedDevices, device];

    setSelectedDevices(updatedDevices);
    localStorage.setItem("selectedDevices", JSON.stringify(updatedDevices));
  };

  const handleUpdateDevice = (id, key, value) => {
    const updatedDevices = selectedDevices.map((device) =>
      device.id === id ? { ...device, [key]: Number(value) } : device
    );

    setSelectedDevices(updatedDevices);
    localStorage.setItem("selectedDevices", JSON.stringify(updatedDevices));
  };

  const handleClearCart = () => {
    setSelectedDevices([]);
    localStorage.removeItem("selectedDevices");
  };

  const scrollToCart = () => {
    cartRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="px-6 md:px-20 bg-blue-300">
      <div className="flex justify-between p-4 ">
        <h1 className="text-2xl font-bold ">Cihazlarınızı seçiniz:</h1>
        {selectedDevices.length > 0 && (
          <h2
            className="text-xl font-bold text-gray-600 cursor-pointer hover:text-green-500 transition rounded-lg p-3 bg-white shadow-md"
            onClick={scrollToCart}
          >
            Seçilmiş Cihaz: {selectedDevices.length}
          </h2>
        )}
      </div>

      <DeviceList
        selectedDevices={selectedDevices}
        handleSelectDevice={handleSelectDevice}
      />

      <div ref={cartRef}>
        <Cart
          selectedDevices={selectedDevices}
          handleClearCart={handleClearCart}
          handleUpdateDevice={handleUpdateDevice}
        />
      </div>
    </div>
  );
}
