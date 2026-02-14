import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingHearts from "./components/FloatingHearts";
import Index from "./pages/Index";
import OurStory from "./pages/OurStory";
import Gallery from "./pages/Gallery";
import Reasons from "./pages/Reasons";
import CatchMyHeart from "./pages/CatchMyHeart";
import Promises from "./pages/Promises";
import SecretPage from "./pages/SecretPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <FloatingHearts />
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reasons" element={<Reasons />} />
          <Route path="/catch-my-heart" element={<CatchMyHeart />} />
          <Route path="/promises" element={<Promises />} />
          <Route path="/secret" element={<SecretPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
