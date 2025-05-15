import devices from "../data/data.json";

export default function DeviceList({ selectedDevices, handleSelectDevice }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
      {devices.map((device) => (
        <div
          key={device.id}
          className="bg-white p-4 border rounded-lg shadow-md flex flex-col items-center justify-center gap-2"
        >
          <h2 className="md:text-xl font-semibold">{device.name}</h2>
          <img
            src={device.url}
            alt={device.name}
            className="w-20 h-20 object-contain"
          />
          <button
            onClick={() => handleSelectDevice(device)}
            className={`py-2 px-6 rounded hover:bg-green-700 transition cursor-pointer ${
              selectedDevices.some((d) => d.id === device.id)
                ? "bg-red-600 text-white"
                : "bg-green-500 text-white"
            }`}
          >
            {selectedDevices.some((d) => d.id === device.id) ? "ÇIKAR" : "EKLE"}
          </button>
        </div>
      ))}
    </div>
  );
}
