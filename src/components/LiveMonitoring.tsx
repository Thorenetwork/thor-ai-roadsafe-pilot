
import React from "react";
import { MapPin, Users, Car, AlertTriangle, Clock } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const LiveMonitoring = () => {
  const { t, language } = useLanguage();

  const vehicles =
    language === "en"
      ? [
          { id: "MH01AB1234", driver: "Raj Sharma", location: "Mumbai-Pune Highway", status: "Safe", speed: "78 km/h" },
          { id: "DL03CD5678", driver: "Priya Gupta", location: "Delhi Connaught Place", status: "Alert", speed: "45 km/h" },
          { id: "KA05EF9012", driver: "Amit Kumar", location: "Bangalore Electronic City", status: "Safe", speed: "52 km/h" },
          { id: "TN07GH3456", driver: "Sunita Reddy", location: "Chennai OMR", status: "Safe", speed: "60 km/h" },
          { id: "WB09IJ7890", driver: "Ravi Das", location: "Kolkata Salt Lake", status: "Alert", speed: "35 km/h" }
        ]
      : [
          { id: "MH01AB1234", driver: "राज शर्मा", location: "मुंबई-पुणे हाईवे", status: "सुरक्षित", speed: "७८ किमी/घंटा" },
          { id: "DL03CD5678", driver: "प्रिया गुप्ता", location: "दिल्ली कनॉट प्लेस", status: "चेतावनी", speed: "४५ किमी/घंटा" },
          { id: "KA05EF9012", driver: "अमित कुमार", location: "बंगलुरु इलेक्ट्रॉनिक सिटी", status: "सुरक्षित", speed: "५२ किमी/घंटा" },
          { id: "TN07GH3456", driver: "सुनीता रेड्डी", location: "चेन्नई OMR", status: "सुरक्षित", speed: "६० किमी/घंटा" },
          { id: "WB09IJ7890", driver: "रवि दास", location: "कोलकाता सॉल्ट लेक", status: "चेतावनी", speed: "३५ किमी/घंटा" }
        ];

  const alerts =
    language === "en"
      ? [
          { id: 1, type: "Over Speed", location: "NH-48, Gurgaon", time: "2 minutes ago", severity: "medium" },
          { id: 2, type: "Hard Braking", location: "Bandra-Worli Sea Link", time: "5 minutes ago", severity: "high" },
          { id: 3, type: "Route Deviation", location: "Hyderabad Hi-Tech City", time: "8 minutes ago", severity: "low" },
          { id: 4, type: "Fatigue Warning", location: "Ahmedabad S.G. Road", time: "12 minutes ago", severity: "high" }
        ]
      : [
          { id: 1, type: "अधिक गति", location: "NH-48, गुड़गांव", time: "२ मिनट पहले", severity: "medium" },
          { id: 2, type: "तेज़ ब्रेकिंग", location: "बांद्रा-वर्ली सी लिंक", time: "५ मिनट पहले", severity: "high" },
          { id: 3, type: "मार्ग विचलन", location: "हैदराबाद हाय-टेक सिटी", time: "८ मिनट पहले", severity: "low" },
          { id: 4, type: "थकान चेतावनी", location: "अहमदाबाद S.G. रोड", time: "१२ मिनट पहले", severity: "high" }
        ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{t("liveMonitoringTitle")}</h1>
          <p className="text-gray-600 mt-1">{t("liveMonitoringSubtitle")}</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-green-50 px-4 py-2 rounded-lg flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-700 font-medium">
              {language === "en" ? "1,923" : "१,९२३"} {t("vehiclesActive")}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{t("totalVehicles")}</p>
              <p className="text-2xl font-bold text-gray-900">{language === "en" ? "2,847" : "२,८४७"}</p>
            </div>
            <Car className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{t("activeDrivers")}</p>
              <p className="text-2xl font-bold text-gray-900">{language === "en" ? "1,923" : "१,९२३"}</p>
            </div>
            <Users className="h-8 w-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{t("activeAlerts")}</p>
              <p className="text-2xl font-bold text-gray-900">{language === "en" ? "23" : "२३"}</p>
            </div>
            <AlertTriangle className="h-8 w-8 text-red-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{t("coveredCities")}</p>
              <p className="text-2xl font-bold text-gray-900">{language === "en" ? "12" : "१२"}</p>
            </div>
            <MapPin className="h-8 w-8 text-purple-500" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <Car className="h-5 w-5 text-blue-500 mr-2" />
              {t("liveVehicleTracking")}
            </h3>
          </div>
          <div className="divide-y divide-gray-200">
            {vehicles.map((vehicle) => (
              <div key={vehicle.id} className="p-4 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <div className="font-mono text-sm font-medium text-gray-900">{vehicle.id}</div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          vehicle.status === (language === "en" ? "Safe" : "सुरक्षित")
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {vehicle.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{vehicle.driver}</p>
                    <p className="text-sm text-gray-500">{vehicle.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{vehicle.speed}</p>
                    <p className="text-xs text-gray-500">{t("currentSpeed")}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
              {t("safetyAlerts")}
            </h3>
          </div>
          <div className="divide-y divide-gray-200">
            {alerts.map((alert) => (
              <div key={alert.id} className="p-4 hover:bg-gray-50">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          alert.severity === "high"
                            ? "bg-red-500"
                            : alert.severity === "medium"
                            ? "bg-yellow-500"
                            : "bg-green-500"
                        }`}
                      ></span>
                      <p className="text-sm font-medium text-gray-900">{alert.type}</p>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{alert.location}</p>
                    <div className="flex items-center space-x-1 mt-2">
                      <Clock className="h-3 w-3 text-gray-400" />
                      <p className="text-xs text-gray-500">{alert.time}</p>
                    </div>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      alert.severity === "high"
                        ? "bg-red-100 text-red-800"
                        : alert.severity === "medium"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {t(
                      alert.severity === "high"
                        ? "high"
                        : alert.severity === "medium"
                        ? "medium"
                        : "low"
                    )}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{t("aiMonitoringSystemStatus") || "AI Monitoring System Status"}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 border border-indigo-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{t("modelAccuracy")}</p>
                <p className="text-xl font-bold text-indigo-600">{language === "en" ? "94.2%" : "९४.२%"}</p>
              </div>
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-indigo-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{t("responseTime")}</p>
                <p className="text-xl font-bold text-green-600">{language === "en" ? "1.8" : "१.८"} {t("seconds")}</p>
              </div>
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-indigo-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{t("dataProcessing")}</p>
                <p className="text-xl font-bold text-purple-600">{language === "en" ? "99.7%" : "९९.७%"}</p>
              </div>
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveMonitoring;
