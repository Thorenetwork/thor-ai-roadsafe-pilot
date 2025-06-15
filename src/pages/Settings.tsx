
import React from "react";
import Navigation from "../components/Navigation";
import { Settings as SettingsIcon, User, Bell, Shield, Database, Globe, Smartphone } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Settings = () => {
  const { t } = useLanguage();

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
                  <a href="#" className="flex items-center space-x-3 px-3 py-2 bg-blue-50 text-blue-700 rounded-lg">
                    <User className="h-5 w-5" />
                    <span>{t("accountSettings")}</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                    <Bell className="h-5 w-5" />
                    <span>{t("notifications")}</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                    <Shield className="h-5 w-5" />
                    <span>{t("security")}</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                    <Database className="h-5 w-5" />
                    <span>{t("dataManagement")}</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                    <Globe className="h-5 w-5" />
                    <span>{t("language")}</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                    <Smartphone className="h-5 w-5" />
                    <span>{t("mobileApp")}</span>
                  </a>
                </nav>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">{t("accountSettingsHeader")}</h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t("fullName")}</label>
                      <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2" value={t("fullName") === "Full Name" ? "Amit Sharma" : "अमित शर्मा"} readOnly />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t("email")}</label>
                      <input type="email" className="w-full border border-gray-300 rounded-lg px-3 py-2" value="amit@example.com" readOnly />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t("phoneNumber")}</label>
                      <input type="tel" className="w-full border border-gray-300 rounded-lg px-3 py-2" value={t("phoneNumber") === "Phone Number" ? "+91 98765 43210" : "+९१ ९८७६५ ४३२१०"} readOnly />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t("position")}</label>
                      <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2" value={t("position") === "Position" ? "Safety Manager" : "सुरक्षा प्रबंधक"} readOnly />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t("company")}</label>
                    <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2" value={t("company") === "Company" ? "Thore Network Safety Solutions" : "Thore Network सुरक्षा सॉल्यूशंस"} readOnly />
                  </div>
                  <div className="border-t pt-6">
                    <h4 className="text-md font-medium text-gray-900 mb-4">{t("notificationPreferences")}</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">{t("safetyAlerts")}</p>
                          <p className="text-sm text-gray-600">{t("safetyAlertDesc")}</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked readOnly />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">{t("weeklyReports")}</p>
                          <p className="text-sm text-gray-600">{t("weeklyReportsDesc")}</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked readOnly />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">{t("systemUpdates")}</p>
                          <p className="text-sm text-gray-600">{t("systemUpdatesDesc")}</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" readOnly />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="border-t pt-6">
                    <h4 className="text-md font-medium text-gray-900 mb-4">{t("aiModelSettings")}</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{t("riskSensitivity")}</label>
                        <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                          <option>{t("highMoreAlerts")}</option>
                          <option>{t("mediumBalanced")}</option>
                          <option>{t("lowFewerAlerts")}</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{t("updateFrequency")}</label>
                        <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                          <option>{t("realTime")}</option>
                          <option>{t("everyMinute")}</option>
                          <option>{t("every5Minutes")}</option>
                        </select>
                      </div>
                    </div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
