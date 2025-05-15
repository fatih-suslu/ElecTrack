export default function Cart({
  selectedDevices,
  handleClearCart,
  handleUpdateDevice,
}) {
  const totalDailyConsumption = selectedDevices.reduce(
    (acc, device) =>
      acc + (device.power * device.usageHours * device.count) / 1000,
    0
  );

  const totalWeeklyConsumption = selectedDevices.reduce(
    (acc, device) =>
      acc +
      ((device.power * device.usageHours * device.count) / 1000) *
        device.weeklyUsage,
    0
  );

  return (
    <div className="flex flex-col gap-4 p-4">
      {selectedDevices.length > 0 ? (
        selectedDevices.map((device) => {
          const dailyConsumption =
            ((device.power * device.usageHours) / 1000) * device.count;
          const weeklyConsumption = dailyConsumption * device.weeklyUsage;

          return (
            <div
              key={device.id}
              className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg shadow-md bg-white items-center"
            >
              <img
                src={device.url}
                alt={device.name}
                className="w-20 h-20 object-contain flex-shrink-0"
              />
              <div className="grid grid-cols-1 md:grid-cols-7 gap-4 w-full text-sm font-medium text-gray-800">
                <div className="truncate text-gray-800 font-bold text-center md:text-left">
                  {device.name}
                </div>

                <div className="flex flex-col md:flex-row items-center gap-2">
                  <span className="text-gray-800">Adet:</span>
                  <input
                    type="number"
                    value={device.count}
                    min="1"
                    max="50"
                    onChange={(e) =>
                      handleUpdateDevice(device.id, "count", e.target.value)
                    }
                    className="border p-1 w-full md:w-16 text-center"
                  />
                </div>

                <div className="flex flex-col md:flex-row items-center gap-2">
                  <span className="text-gray-800">Güç:</span>
                  <input
                    type="number"
                    value={device.power}
                    onChange={(e) =>
                      handleUpdateDevice(device.id, "power", e.target.value)
                    }
                    className="border p-1 w-full md:w-20 text-center"
                  />
                </div>

                <div className="flex flex-col md:flex-row items-center gap-2">
                  <span className="text-gray-800">Günlük:</span>
                  <input
                    type="number"
                    value={device.usageHours}
                    min="1"
                    max="24"
                    onChange={(e) =>
                      handleUpdateDevice(
                        device.id,
                        "usageHours",
                        e.target.value
                      )
                    }
                    className="border p-1 w-full md:w-20 text-center"
                  />
                </div>

                <div className="flex flex-col md:flex-row items-center gap-2">
                  <span className="text-gray-800">Haftalık:</span>
                  <input
                    type="number"
                    value={device.weeklyUsage}
                    min="1"
                    max="7"
                    onChange={(e) =>
                      handleUpdateDevice(
                        device.id,
                        "weeklyUsage",
                        e.target.value
                      )
                    }
                    className="border p-1 w-full md:w-20 text-center"
                  />
                </div>

                <div className="text-blue-700 font-semibold text-center md:text-left">
                  Günlük Tüketim: {dailyConsumption.toFixed(2)} kWh
                </div>
                <div className="text-blue-700 font-semibold text-center md:text-left">
                  Haftalık Tüketim: {weeklyConsumption.toFixed(2)} kWh
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-gray-700 font-medium text-center md:text-left">
          Henüz cihaz seçilmedi.
        </p>
      )}

      {selectedDevices.length > 0 && (
        <div className="mt-6 p-4 text-green-600 bg-white font-bold text-lg border rounded-lg shadow-md text-center md:text-left">
          <p>Toplam Günlük Tüketim: {totalDailyConsumption.toFixed(2)} kWh</p>
          <p>
            Toplam Haftalık Tüketim: {totalWeeklyConsumption.toFixed(2)} kWh
          </p>
        </div>
      )}

      {selectedDevices.length > 0 && (
        <div className="flex justify-center md:justify-end mt-6">
          <button
            onClick={handleClearCart}
            className="px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-700 transition cursor-pointer"
          >
            SEÇİLENLERİ TEMİZLE
          </button>
        </div>
      )}
    </div>
  );
}
