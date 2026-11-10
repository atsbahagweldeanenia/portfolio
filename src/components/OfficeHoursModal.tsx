import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle2, User, Mail, Phone } from 'lucide-react';
import { Profile } from '../types/portfolio';

interface OfficeHoursModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: Profile;
}

export const OfficeHoursModal: React.FC<OfficeHoursModalProps> = ({ isOpen, onClose, profile }) => {
  const [purpose, setPurpose] = useState('Academic Advising & Course Assistance');
  const [selectedSlot, setSelectedSlot] = useState('Monday, 10:00 AM – 10:30 AM');
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [affiliation, setAffiliation] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  if (!isOpen) return null;

  const slots = [
    'Monday, 10:00 AM – 10:30 AM',
    'Monday, 11:00 AM – 11:30 AM',
    'Tuesday, 10:00 AM – 10:30 AM',
    'Wednesday, 10:00 AM – 10:30 AM',
    'Wednesday, 11:30 AM – 12:00 PM',
    'Thursday, 10:30 AM – 11:00 AM',
  ];

  const purposes = [
    'Academic Advising & Course Assistance',
    'B.Sc. / M.Sc. Thesis & Antenna Research Supervision',
    'Department of Electronics & Communication Inquiry',
    'Laboratory & Project Consultation',
    'Recommendation Letter Discussion',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName || !studentEmail) return;

    const code = 'ECE-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmationCode(code);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStudentName('');
    setStudentEmail('');
    setNotes('');
    setAffiliation('');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-slate-900 text-slate-100 rounded-2xl border border-slate-800 shadow-2xl max-w-lg w-full overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-start justify-between gap-4 bg-slate-950/60">
          <div>
            <div className="text-xs uppercase tracking-wider font-semibold text-sky-400 mb-1">
              Department of Electronics & Communication Engineering
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Consultation & Office Hours
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              {profile.officeLocation} · {profile.officeHours}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-800/60 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Appointment Confirmed
                </h3>
                <p className="text-xs text-slate-400">
                  Confirmation Code: <span className="font-mono font-bold text-sky-400">{confirmationCode}</span>
                </p>
              </div>

              <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700 text-left text-xs space-y-1.5 text-slate-300">
                <div>
                  <span className="font-semibold text-white">Visitor:</span> {studentName} ({studentEmail})
                </div>
                <div>
                  <span className="font-semibold text-white">Time:</span> {selectedSlot}
                </div>
                <div>
                  <span className="font-semibold text-white">Topic:</span> {purpose}
                </div>
                <div>
                  <span className="font-semibold text-white">Location:</span> {profile.officeLocation}
                </div>
                <div>
                  <span className="font-semibold text-white">Department:</span> {profile.department}
                </div>
              </div>

              <div className="flex gap-2 justify-center pt-2">
                <button
                  onClick={handleReset}
                  className="px-4 py-2 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  Book Another Slot
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2 text-xs font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Purpose of Session
                </label>
                <select
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-700 bg-slate-800 text-white focus:outline-none focus:ring-1 focus:ring-sky-400"
                >
                  {purposes.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Select Time Slot
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-36 overflow-y-auto p-1">
                  {slots.map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => setSelectedSlot(s)}
                      className={`p-2 text-xs rounded-lg text-left transition-colors border ${
                        selectedSlot === s
                          ? 'bg-sky-950/60 border-sky-400 text-sky-300 font-semibold'
                          : 'border-slate-800 text-slate-400 hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3 text-slate-400" />
                        <span className="truncate">{s}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="Full name"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-700 bg-slate-800 text-white focus:outline-none focus:ring-1 focus:ring-sky-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={studentEmail}
                    onChange={(e) => setStudentEmail(e.target.value)}
                    placeholder="email@example.com"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-700 bg-slate-800 text-white focus:outline-none focus:ring-1 focus:ring-sky-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Student ID / University Role
                </label>
                <input
                  type="text"
                  value={affiliation}
                  onChange={(e) => setAffiliation(e.target.value)}
                  placeholder="e.g. ECE 4th Year / Researcher"
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-700 bg-slate-800 text-white focus:outline-none focus:ring-1 focus:ring-sky-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Notes / Questions
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Specific antenna design question, course concept, or paper draft..."
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-700 bg-slate-800 text-white focus:outline-none focus:ring-1 focus:ring-sky-400 resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors shadow-sm"
                >
                  Book Appointment
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
