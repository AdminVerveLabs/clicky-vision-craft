import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "@/components/chef/Nav";
import HomePage from "./pages/HomePage";
import TeamsPage from "./pages/TeamsPage";
import ClassesPage from "./pages/ClassesPage";
import TeamBuildingPage from "./pages/TeamBuildingPage";
import PublicClassesPage from "./pages/PublicClassesPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/teams" element={<TeamsPage />} />
            <Route path="/classes" element={<ClassesPage />} />
            <Route path="/team-building" element={<TeamBuildingPage />} />
            <Route path="/public-classes" element={<PublicClassesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
