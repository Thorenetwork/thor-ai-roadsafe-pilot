
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { useState } from "react";
import LanguageSelector from "./components/LanguageSelector";
import PoweredByPopup from "./components/PoweredByPopup";
import Index from "./pages/Index";
import Monitoring from "./pages/Monitoring";
import Emergency from "./pages/Emergency";
import Analytics from "./pages/Analytics";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import ChatSupport from "./components/ChatSupport";

const queryClient = new QueryClient();

const App = () => {
  const [showLanguageSelector, setShowLanguageSelector] = useState(true);

  const handleLanguageSelected = () => {
    setShowLanguageSelector(false);
  };

  if (showLanguageSelector) {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <LanguageProvider>
            <LanguageSelector onLanguageSelect={handleLanguageSelected} />
          </LanguageProvider>
        </TooltipProvider>
      </QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/monitoring" element={<Monitoring />} />
              <Route path="/emergency" element={<Emergency />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <ChatSupport />
            <PoweredByPopup />
          </BrowserRouter>
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
