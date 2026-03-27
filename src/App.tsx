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
import BlogPage from "./pages/BlogPage";
import NotFound from "./pages/NotFound";

// Classes sub-pages
import OpenClassesPage from "./pages/classes/OpenClassesPage";
import PrivateEventsPage from "./pages/classes/PrivateEventsPage";
import SpecialOccasionsPage from "./pages/classes/SpecialOccasionsPage";
import FriendsPage from "./pages/classes/FriendsPage";
import KidsPartyPage from "./pages/classes/KidsPartyPage";
import CateringPage from "./pages/classes/CateringPage";
import ValentinesDayPage from "./pages/classes/ValentinesDayPage";
import SignatureCreolePage from "./pages/classes/SignatureCreolePage";
import KidsBakePage from "./pages/classes/KidsBakePage";

// Teams sub-pages
import TeamEventsPage from "./pages/teams/TeamEventsPage";
import AllHandsPage from "./pages/teams/AllHandsPage";
import OnboardingPage from "./pages/teams/OnboardingPage";
import ClientEntertainmentPage from "./pages/teams/ClientEntertainmentPage";
import HolidayPage from "./pages/teams/HolidayPage";
import CustomExperiencesPage from "./pages/teams/CustomExperiencesPage";
import CateringTeamsPage from "./pages/teams/CateringTeamsPage";
import TeamCreolePage from "./pages/teams/TeamCreolePage";
import HealthyMealPrepPage from "./pages/teams/HealthyMealPrepPage";

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
            <Route path="/blog" element={<BlogPage />} />

            {/* Classes sub-pages */}
            <Route path="/classes/open-classes" element={<OpenClassesPage />} />
            <Route path="/classes/private-events" element={<PrivateEventsPage />} />
            <Route path="/classes/special-occasions" element={<SpecialOccasionsPage />} />
            <Route path="/classes/friends" element={<FriendsPage />} />
            <Route path="/classes/kids-party" element={<KidsPartyPage />} />
            <Route path="/classes/catering" element={<CateringPage />} />

            {/* Teams sub-pages */}
            <Route path="/teams/team-events" element={<TeamEventsPage />} />
            <Route path="/teams/all-hands" element={<AllHandsPage />} />
            <Route path="/teams/onboarding" element={<OnboardingPage />} />
            <Route path="/teams/client-entertainment" element={<ClientEntertainmentPage />} />
            <Route path="/teams/holiday" element={<HolidayPage />} />
            <Route path="/teams/custom" element={<CustomExperiencesPage />} />
            <Route path="/teams/catering" element={<CateringTeamsPage />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
