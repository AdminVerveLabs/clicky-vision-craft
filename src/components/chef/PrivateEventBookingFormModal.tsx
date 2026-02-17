import { useState } from "react";
import { X, User, FileText, Package, CheckCircle, MessageSquare, ArrowLeft, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import chefKitchen from "@/assets/chef-joey-kitchen.jpg";

interface PrivateEventBookingFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const stepsMeta = [
  { label: "Basics", sub: "Tell us who you are", icon: User },
  { label: "Details", sub: "About your event", icon: FileText },
  { label: "Package", sub: "Choose your tier", icon: Package },
  { label: "Confirm", sub: "Review & submit", icon: CheckCircle },
];

const occasionOptions = [
  "Birthday", "Anniversary", "Bachelorette", "Girls' Night", "Retirement", "Other",
];

const locationOptions = ["Our Kitchen", "Your Home", "Your Venue", "Virtual"];
const packageOptions = ["Intimate – $125/pp", "Celebration – $165/pp", "Grand – $200/pp"];
const addOnOptions = ["Custom Cake ($150)", "Wine Upgrade ($20/pp)", "Décor Package ($250)"];

interface FormData {
  name: string;
  email: string;
  phone: string;
  occasion: string;
  groupSize: string;
  preferredDate: string;
  location: string;
  packageTier: string;
  addOns: string[];
  specialRequests: string;
}

const initialForm: FormData = {
  name: "", email: "", phone: "",
  occasion: "", groupSize: "", preferredDate: "", location: "",
  packageTier: "", addOns: [], specialRequests: "",
};

const PrivateEventBookingFormModal = ({ isOpen, onClose }: PrivateEventBookingFormModalProps) => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  if (!isOpen) return null;

  const set = (key: keyof FormData, val: string) => {
    setForm((f) => ({ ...f, [key]: val }));
    setErrors((e) => ({ ...e, [key]: false }));
  };

  const toggleAddOn = (a: string) => {
    setForm((f) => ({
      ...f,
      addOns: f.addOns.includes(a) ? f.addOns.filter((x) => x !== a) : [...f.addOns, a],
    }));
  };

  const validate = (): boolean => {
    const errs: Record<string, boolean> = {};
    if (step === 0) {
      if (!form.name.trim()) errs.name = true;
      if (!form.email.trim()) errs.email = true;
    } else if (step === 1) {
      if (!form.occasion) errs.occasion = true;
      if (!form.groupSize.trim()) errs.groupSize = true;
      if (!form.location) errs.location = true;
    } else if (step === 2) {
      if (!form.packageTier) errs.packageTier = true;
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const next = () => { if (validate()) setStep((s) => Math.min(s + 1, 3)); };
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const submit = () => {
    toast.success("We'll be in touch within 24 hours!", {
      description: "Thanks for your inquiry — Chef Joey is excited to make your celebration unforgettable.",
    });
    setForm(initialForm);
    setStep(0);
    onClose();
  };

  const progress = ((step + 1) / 4) * 100;

  const selectClass = (hasError: boolean) =>
    `w-full h-10 rounded-lg border ${hasError ? "border-destructive" : "border-input"} bg-background px-3 py-2 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 appearance-none cursor-pointer`;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-dark/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-3xl max-w-[900px] w-full max-h-[90vh] overflow-hidden shadow-2xl flex">
        {/* Left Panel */}
        <div className="hidden md:flex w-[38%] relative flex-col justify-between overflow-hidden">
          <img src={chefKitchen} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-orange-dark/85 via-orange/80 to-orange-dark/90" style={{ background: "linear-gradient(to bottom, hsla(25, 80%, 25%, 0.85), hsla(var(--orange) / 0.8), hsla(25, 80%, 25%, 0.9))" }} />
          <div className="relative z-10 p-8 flex-1 flex flex-col">
            <h3 className="font-serif text-xl font-bold text-white mb-8">Your Journey</h3>
            <div className="space-y-1 flex-1">
              {stepsMeta.map((s, i) => {
                const Icon = s.icon;
                const isActive = i === step;
                const isDone = i < step;
                return (
                  <div key={s.label} className="flex items-start gap-3 py-3">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                        isDone
                          ? "bg-white text-orange"
                          : isActive
                          ? "bg-white text-orange shadow-lg shadow-white/20"
                          : "bg-white/15 text-white/50"
                      }`}
                    >
                      {isDone ? <CheckCircle className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
                    </div>
                    <div>
                      <p className={`font-sans text-sm font-semibold ${isActive || isDone ? "text-white" : "text-white/40"}`}>
                        {s.label}
                      </p>
                      {isActive && (
                        <p className="font-sans text-xs text-white/60 mt-0.5">{s.sub}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-auto pt-6 border-t border-white/15">
              <p className="font-serif text-lg font-bold text-white">Chef Joey</p>
              <p className="font-sans text-xs text-white/50">Crafting unforgettable culinary experiences</p>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex-1 flex flex-col overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-gray-light flex items-center justify-center text-gray hover:text-dark transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="p-8 md:p-10 flex-1">
            <h2 className="font-serif text-[26px] font-extrabold text-dark mb-1">Plan Your Private Event</h2>
            <p className="font-sans text-sm text-gray mb-8">
              Step {step + 1} of 4 — {stepsMeta[step].sub}
            </p>

            {/* Step 0: Basics */}
            {step === 0 && (
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-sans text-sm font-medium text-dark mb-1.5 block">Name *</label>
                    <Input value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Your full name" className={`rounded-lg ${errors.name ? "border-destructive" : ""}`} />
                  </div>
                  <div>
                    <label className="font-sans text-sm font-medium text-dark mb-1.5 block">Email *</label>
                    <Input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="you@email.com" className={`rounded-lg ${errors.email ? "border-destructive" : ""}`} />
                  </div>
                </div>
                <div>
                  <label className="font-sans text-sm font-medium text-dark mb-1.5 block">Phone</label>
                  <Input type="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="(555) 123-4567" className="rounded-lg" />
                </div>
              </div>
            )}

            {/* Step 1: Details */}
            {step === 1 && (
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-sans text-sm font-medium text-dark mb-1.5 block">Occasion *</label>
                    <select value={form.occasion} onChange={(e) => set("occasion", e.target.value)} className={selectClass(!!errors.occasion)}>
                      <option value="">Select an occasion</option>
                      {occasionOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="font-sans text-sm font-medium text-dark mb-1.5 block">Guest Count *</label>
                    <Input type="number" value={form.groupSize} onChange={(e) => set("groupSize", e.target.value)} placeholder="e.g. 12" className={`rounded-lg ${errors.groupSize ? "border-destructive" : ""}`} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-sans text-sm font-medium text-dark mb-1.5 block">Preferred Date</label>
                    <Input type="date" value={form.preferredDate} onChange={(e) => set("preferredDate", e.target.value)} className="rounded-lg" />
                  </div>
                  <div>
                    <label className="font-sans text-sm font-medium text-dark mb-1.5 block">Location *</label>
                    <select value={form.location} onChange={(e) => set("location", e.target.value)} className={selectClass(!!errors.location)}>
                      <option value="">Select location</option>
                      {locationOptions.map((l) => <option key={l} value={l}>{l}</option>)}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Package */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="font-sans text-sm font-medium text-dark mb-1.5 block">Package Tier *</label>
                  <select value={form.packageTier} onChange={(e) => set("packageTier", e.target.value)} className={selectClass(!!errors.packageTier)}>
                    <option value="">Select a package</option>
                    {packageOptions.map((p) => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
                <div>
                  <label className="font-sans text-sm font-medium text-dark mb-2 block">Add-Ons</label>
                  <div className="space-y-3">
                    {addOnOptions.map((a) => (
                      <label key={a} className="flex items-center gap-3 cursor-pointer">
                        <Checkbox checked={form.addOns.includes(a)} onCheckedChange={() => toggleAddOn(a)} />
                        <span className="font-sans text-sm text-dark">{a}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="font-sans text-sm font-medium text-dark mb-1.5 block">Special Requests</label>
                  <Textarea value={form.specialRequests} onChange={(e) => set("specialRequests", e.target.value)} placeholder="Dietary restrictions, themes, or anything else..." className="rounded-lg" rows={3} />
                </div>
              </div>
            )}

            {/* Step 3: Confirm */}
            {step === 3 && (
              <div>
                <h3 className="font-serif text-[20px] font-bold text-dark mb-5">Review Your Inquiry</h3>
                <div className="bg-cream rounded-xl border border-border divide-y divide-border">
                  {[
                    ["Name", form.name],
                    ["Email", form.email],
                    ["Phone", form.phone || "—"],
                    ["Occasion", form.occasion],
                    ["Guest Count", form.groupSize],
                    ["Preferred Date", form.preferredDate || "Flexible"],
                    ["Location", form.location],
                    ["Package", form.packageTier],
                    ["Add-Ons", form.addOns.length ? form.addOns.join(", ") : "None"],
                    ["Special Requests", form.specialRequests || "None"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between px-5 py-3">
                      <span className="font-sans text-sm font-medium text-gray">{label}</span>
                      <span className="font-sans text-sm text-dark text-right max-w-[55%]">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-8 md:px-10 pb-8 space-y-4">
            <Progress value={progress} className="h-1.5 bg-gray-light [&>div]:bg-orange" />
            <div className="flex justify-between items-center">
              {step > 0 ? (
                <button onClick={back} className="inline-flex items-center gap-2 rounded-full font-sans text-sm font-semibold px-6 py-2.5 border-2 border-orange text-orange hover:bg-orange-pale transition-colors cursor-pointer">
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
              ) : <div />}
              {step < 3 ? (
                <button onClick={next} className="inline-flex items-center gap-2 rounded-full font-sans text-sm font-semibold px-8 py-2.5 bg-orange text-white shadow-[0_4px_14px_hsl(var(--orange)/0.3)] hover:-translate-y-0.5 transition-all cursor-pointer">
                  Next <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button onClick={submit} className="inline-flex items-center gap-2 rounded-full font-sans text-sm font-semibold px-8 py-2.5 bg-orange text-white shadow-[0_4px_14px_hsl(var(--orange)/0.3)] hover:-translate-y-0.5 transition-all cursor-pointer">
                  <MessageSquare className="w-4 h-4" /> Plan My Event
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateEventBookingFormModal;
