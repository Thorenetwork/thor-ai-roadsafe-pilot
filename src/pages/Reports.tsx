
import React from 'react';
import Navigation from '../components/Navigation';
import { FileText, Download, Calendar, Filter, TrendingUp, AlertTriangle, Shield, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Reports = () => {
  const { t, language } = useLanguage();

  const reports =
    language === "en"
      ? [
          {
            title: "Weekly Safety Report",
            date: "20 Dec 2024",
            type: "Safety",
            status: t("reportStatusReady"),
            icon: Shield,
            description: "All safety metrics and incidents for this week"
          },
          {
            title: "Monthly Performance Report",
            date: "15 Dec 2024",
            type: "Performance",
            status: t("reportStatusReady"),
            icon: TrendingUp,
            description: "Vehicle productivity and efficiency analysis"
          },
          {
            title: "Driver Evaluation Report",
            date: "10 Dec 2024",
            type: "Human Resource",
            status: t("reportStatusInProgress"),
            icon: Users,
            description: "Driver performance and training needs"
          },
          {
            title: "Incident Analysis Report",
            date: "5 Dec 2024",
            type: "Incident",
            status: t("reportStatusReady"),
            icon: AlertTriangle,
            description: "Detailed analysis of accidents and near misses"
          }
        ]
      : [
          {
            title: "साप्ताहिक सुरक्षा रिपोर्ट",
            date: "२० दिसंबर २०२४",
            type: "सुरक्षा",
            status: t("reportStatusReady"),
            icon: Shield,
            description: "इस सप्ताह के सभी सुरक्षा मेट्रिक्स और घटनाएँ"
          },
          {
            title: "मासिक प्रदर्शन रिपोर्ट",
            date: "१५ दिसंबर २०२४",
            type: "प्रदर्शन",
            status: t("reportStatusReady"),
            icon: TrendingUp,
            description: "वाहन उत्पादकता और दक्षता विश्लेषण"
          },
          {
            title: "चालक मूल्यांकन रिपोर्ट",
            date: "१० दिसंबर २०२४",
            type: "मानव संसाधन",
            status: t("reportStatusInProgress"),
            icon: Users,
            description: "चालक प्रदर्शन और प्रशिक्षण आवश्यकताएँ"
          },
          {
            title: "घटना विश्लेषण रिपोर्ट",
            date: "५ दिसंबर २०२४",
            type: "घटना",
            status: t("reportStatusReady"),
            icon: AlertTriangle,
            description: "दुर्घटनाओं और नज़दीकी चूकों का विस्तृत विश्लेषण"
          }
        ];

  const metrics =
    language === "en"
      ? [
          { label: t("allReports"), value: "128", change: "+8%" },
          { label: t("monthlyReports"), value: "24", change: "+5%" },
          { label: t("safetyScore"), value: "94.2%", change: "+2.1%" },
          { label: t("complianceRate"), value: "98.5%", change: "+1.3%" }
        ]
      : [
          { label: t("allReports"), value: "१२८", change: "+८%" },
          { label: t("monthlyReports"), value: "२४", change: "+५%" },
          { label: t("safetyScore"), value: "९४.२%", change: "+२.१%" },
          { label: t("complianceRate"), value: "९८.५%", change: "+१.३%" }
        ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="ml-64 p-8">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{t("safetyReports")}</h1>
              <p className="text-gray-600 mt-1">{t("reportsSubtitle")}</p>
            </div>
            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                <Download className="h-4 w-4" />
                <span>{t("downloadReport")}</span>
              </button>
              <button className="flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
                <Filter className="h-4 w-4" />
                <span>{t("filter")}</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{metric.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                    <p className="text-sm text-green-600 font-medium">{metric.change}</p>
                  </div>
                  <FileText className="h-8 w-8 text-blue-500" />
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-lg">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <FileText className="h-5 w-5 text-blue-500 mr-2" />
                {t("recentReports")}
              </h3>
            </div>
            <div className="divide-y divide-gray-200">
              {reports.map((report, index) => (
                <div key={index} className="p-6 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <report.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-medium text-gray-900">{report.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{report.description}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4 text-gray-400" />
                            <span className="text-sm text-gray-500">{report.date}</span>
                          </div>
                          <span className="text-sm text-gray-500">
                            {t("reportType")}: {report.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          report.status === t("reportStatusReady")
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {report.status}
                      </span>
                      <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-800">
                        <Download className="h-4 w-4" />
                        <span className="text-sm">{t("download")}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{t("reportCategories")}</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">{t("safetyReport")}</span>
                  <span className="font-medium text-gray-900">{language === "en" ? "42" : "४२"}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">{t("performanceReport")}</span>
                  <span className="font-medium text-gray-900">{language === "en" ? "38" : "३८"}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">{t("complianceReport")}</span>
                  <span className="font-medium text-gray-900">{language === "en" ? "28" : "२८"}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">{t("incidentReport")}</span>
                  <span className="font-medium text-gray-900">{language === "en" ? "20" : "२०"}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{t("createCustomReport")}</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t("reportTypeLabel")}</label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                    <option>{t("safetyReport")}</option>
                    <option>{t("performanceMetrics")}</option>
                    <option>{t("driverEvaluation")}</option>
                    <option>{t("incidentReportSingular")}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t("period")}</label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                    <option>{t("lastWeek")}</option>
                    <option>{t("lastMonth")}</option>
                    <option>{t("lastThreeMonths")}</option>
                    <option>{t("customRange")}</option>
                  </select>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  {t("generateReport")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
