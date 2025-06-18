
import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { Settings as SettingsIcon, User, Bell, Shield, Database, Globe, Smartphone, Download, QrCode, Star } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Settings = () => {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState('account');

  const menuItems = [
    { id: 'account', icon: User, label: t("accountSettings") },
    { id: 'notifications', icon: Bell, label: t("notifications") },
    { id: 'security', icon: Shield, label: t("security") },
    { id: 'data', icon: Database, label: t("dataManagement") },
    { id: 'language', icon: Globe, label: t("language") },
    { id: 'mobile', icon: Smartphone, label: t("mobileApp") },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'account':
        return (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">{t("accountSettingsHeader")}</h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t("fullName")}</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2" value={t("fullName") === "Full Name" ? "Amit Sharma" : "अमित शर्मा"} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t("email")}</label>
                  <input type="email" className="w-full border border-gray-300 rounded-lg px-3 py-2" value="amit@example.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t("phoneNumber")}</label>
                  <input type="tel" className="w-full border border-gray-300 rounded-lg px-3 py-2" value={t("phoneNumber") === "Phone Number" ? "+91 98765 43210" : "+९१ ९८७६५ ४३२१०"} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t("position")}</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2" value={t("position") === "Position" ? "Safety Manager" : "सुरक्षा प्रबंधक"} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t("company")}</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2" value={t("company") === "Company" ? "Thore Network Safety Solutions" : "Thore Network सुरक्षा सॉल्यूशंस"} />
              </div>
              <div className="flex justify-end space-x-4 pt-6">
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                  {t("cancel")}
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  {t("saveChanges")}
                </button>
              </div>
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">{t("notificationPreferences")}</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">{t("safetyAlerts")}</p>
                  <p className="text-sm text-gray-600">{t("safetyAlertDesc")}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">{t("emergencyAlerts")}</p>
                  <p className="text-sm text-gray-600">{t("emergencyAlertDesc")}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">{t("weeklyReports")}</p>
                  <p className="text-sm text-gray-600">{t("weeklyReportsDesc")}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">{t("systemUpdates")}</p>
                  <p className="text-sm text-gray-600">{t("systemUpdatesDesc")}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <div className="border-t pt-6">
                <h4 className="text-md font-medium text-gray-900 mb-4">{t("emailPreferences")}</h4>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                  <option>{t("instantEmail")}</option>
                  <option>{t("hourlyDigest")}</option>
                  <option>{t("dailyDigest")}</option>
                  <option>{t("weeklyDigest")}</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">{t("securitySettings")}</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-md font-medium text-gray-900 mb-4">{t("changePassword")}</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t("currentPassword")}</label>
                    <input type="password" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t("newPassword")}</label>
                    <input type="password" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t("confirmPassword")}</label>
                    <input type="password" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
                  </div>
                </div>
              </div>
              <div className="border-t pt-6">
                <h4 className="text-md font-medium text-gray-900 mb-4">{t("twoFactorAuth")}</h4>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">{t("enableTwoFactor")}</p>
                    <p className="text-sm text-gray-600">{t("twoFactorDesc")}</p>
                  </div>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                    {t("enable")}
                  </button>
                </div>
              </div>
              <div className="border-t pt-6">
                <h4 className="text-md font-medium text-gray-900 mb-4">{t("activeSessions")}</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{t("currentSession")}</p>
                      <p className="text-sm text-gray-600">Chrome • New Delhi • {t("active")}</p>
                    </div>
                    <span className="text-green-600 text-sm font-medium">{t("active")}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{t("mobileSession")}</p>
                      <p className="text-sm text-gray-600">Mobile App • Mumbai • 2 hours ago</p>
                    </div>
                    <button className="text-red-600 text-sm font-medium hover:underline">{t("revoke")}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'data':
        return (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">{t("dataManagementSettings")}</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-md font-medium text-gray-900 mb-4">{t("dataRetention")}</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t("vehicleDataRetention")}</label>
                    <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                      <option>{t("thirtyDays")}</option>
                      <option>{t("sixtyDays")}</option>
                      <option>{t("ninetyDays")}</option>
                      <option>{t("oneYear")}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t("alertDataRetention")}</label>
                    <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                      <option>{t("sixMonths")}</option>
                      <option>{t("oneYear")}</option>
                      <option>{t("twoYears")}</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="border-t pt-6">
                <h4 className="text-md font-medium text-gray-900 mb-4">{t("dataExport")}</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">{t("exportAllData")}</p>
                      <p className="text-sm text-gray-600">{t("exportAllDataDesc")}</p>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      {t("exportData")}
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">{t("downloadReports")}</p>
                      <p className="text-sm text-gray-600">{t("downloadReportsDesc")}</p>
                    </div>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                      {t("download")}
                    </button>
                  </div>
                </div>
              </div>
              <div className="border-t pt-6">
                <h4 className="text-md font-medium text-gray-900 mb-4 text-red-600">{t("dangerZone")}</h4>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-red-900">{t("deleteAccount")}</p>
                      <p className="text-sm text-red-700">{t("deleteAccountDesc")}</p>
                    </div>
                    <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                      {t("deleteAccount")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'language':
        return (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">{t("languageSettings")}</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-md font-medium text-gray-900 mb-4">{t("selectLanguage")}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-blue-300 bg-blue-50 rounded-lg p-4 cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                      <div>
                        <p className="font-medium text-gray-900">English</p>
                        <p className="text-sm text-gray-600">Default language</p>
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-300 rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
                      <div>
                        <p className="font-medium text-gray-900">हिंदी</p>
                        <p className="text-sm text-gray-600">Hindi language</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t pt-6">
                <h4 className="text-md font-medium text-gray-900 mb-4">{t("regionalSettings")}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t("timezone")}</label>
                    <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                      <option>Asia/Kolkata (IST)</option>
                      <option>Asia/Mumbai (IST)</option>
                      <option>Asia/Delhi (IST)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t("dateFormat")}</label>
                    <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                      <option>DD/MM/YYYY</option>
                      <option>MM/DD/YYYY</option>
                      <option>YYYY-MM-DD</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'mobile':
        return (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">{t("mobileAppSettings")}</h3>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
                <div className="flex items-start space-x-4">
                  <Smartphone className="h-8 w-8 text-blue-600 mt-1" />
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{t("downloadMaargApp")}</h4>
                    <p className="text-gray-600 mb-4">{t("mobileAppDesc")}</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button className="flex items-center justify-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                        <Download className="h-4 w-4" />
                        <span>{t("downloadAndroid")}</span>
                      </button>
                      <button className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                        <Download className="h-4 w-4" />
                        <span>{t("downloadIOS")}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="text-md font-medium text-gray-900 mb-4">{t("qrCodeDownload")}</h4>
                <div className="flex items-center space-x-6">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <QrCode className="h-24 w-24 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 mb-2">{t("scanQRCode")}</p>
                    <p className="text-sm text-gray-500">{t("qrCodeDesc")}</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="text-md font-medium text-gray-900 mb-4">{t("mobileFeatures")}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-900">{t("realTimeTracking")}</p>
                      <p className="text-sm text-gray-600">{t("realTimeTrackingDesc")}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-900">{t("instantAlerts")}</p>
                      <p className="text-sm text-gray-600">{t("instantAlertsDesc")}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-900">{t("offlineMode")}</p>
                      <p className="text-sm text-gray-600">{t("offlineModeDesc")}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-900">{t("emergencyButton")}</p>
                      <p className="text-sm text-gray-600">{t("emergencyButtonDesc")}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="text-md font-medium text-gray-900 mb-4">{t("appRating")}</h4>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">4.8/5.0</p>
                    <p className="text-sm text-gray-600">{t("basedOnReviews")}</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="text-md font-medium text-gray-900 mb-4">{t("connectedDevices")}</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Smartphone className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium text-gray-900">iPhone 14 Pro</p>
                        <p className="text-sm text-gray-600">{t("connectedNow")}</p>
                      </div>
                    </div>
                    <span className="text-green-600 text-sm font-medium">{t("active")}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Smartphone className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="font-medium text-gray-900">Samsung Galaxy S23</p>
                        <p className="text-sm text-gray-600">{t("lastSeen")} 2 hours ago</p>
                      </div>
                    </div>
                    <button className="text-red-600 text-sm font-medium hover:underline">{t("disconnect")}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="ml-64 p-8">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{t("settings")}</h1>
              <p className="text-gray-600 mt-1">{t("systemConfig")}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{t("settingsCategory")}</h3>
                <nav className="space-y-2">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                        activeSection === item.id
                          ? 'bg-blue-50 text-blue-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            <div className="lg:col-span-2">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
