import React, { useState } from 'react';
import { X, Save, RotateCcw, Plus, Trash2, CheckCircle2, User, Briefcase, GraduationCap, Cpu, Layers } from 'lucide-react';
import { PortfolioData, ExperienceItem, DegreeItem, CertificationItem, ProjectItem, SkillItem } from '../types/portfolio';

interface PortfolioEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
  onSave: (updatedData: PortfolioData) => void;
  onReset: () => void;
}

export const PortfolioEditorModal: React.FC<PortfolioEditorModalProps> = ({
  isOpen,
  onClose,
  data,
  onSave,
  onReset,
}) => {
  const [formData, setFormData] = useState<PortfolioData>(JSON.parse(JSON.stringify(data)));
  const [activeTab, setActiveTab] = useState<'profile' | 'experience' | 'education' | 'projects' | 'skills'>('profile');
  const [savedSuccess, setSavedSuccess] = useState(false);

  // New experience form
  const [newExpRole, setNewExpRole] = useState('');
  const [newExpInst, setNewExpInst] = useState('Mekelle University');
  const [newExpPeriod, setNewExpPeriod] = useState('');
  const [newExpDesc, setNewExpDesc] = useState('');

  // New project form
  const [newProjTitle, setNewProjTitle] = useState('');
  const [newProjCat, setNewProjCat] = useState('Research Project');
  const [newProjPeriod, setNewProjPeriod] = useState('');
  const [newProjDesc, setNewProjDesc] = useState('');

  // New skill form
  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillCat, setNewSkillCat] = useState<'hardware' | 'software' | 'networking'>('hardware');

  if (!isOpen) return null;

  const handleProfileChange = (field: keyof typeof formData.profile, value: string) => {
    setFormData(prev => ({
      ...prev,
      profile: {
        ...prev.profile,
        [field]: value,
      },
    }));
  };

  const handleAddExperience = () => {
    if (!newExpRole || !newExpPeriod) return;
    const newExp: ExperienceItem = {
      id: 'exp_' + Date.now(),
      role: newExpRole,
      institution: newExpInst,
      period: newExpPeriod,
      description: newExpDesc,
    };
    setFormData(prev => ({ ...prev, experience: [newExp, ...prev.experience] }));
    setNewExpRole('');
    setNewExpPeriod('');
    setNewExpDesc('');
  };

  const handleDeleteExperience = (id: string) => {
    setFormData(prev => ({ ...prev, experience: prev.experience.filter(e => e.id !== id) }));
  };

  const handleAddProject = () => {
    if (!newProjTitle || !newProjPeriod) return;
    const newProj: ProjectItem = {
      id: 'proj_' + Date.now(),
      title: newProjTitle,
      category: newProjCat,
      period: newProjPeriod,
      description: newProjDesc,
    };
    setFormData(prev => ({ ...prev, projects: [newProj, ...prev.projects] }));
    setNewProjTitle('');
    setNewProjPeriod('');
    setNewProjDesc('');
  };

  const handleDeleteProject = (id: string) => {
    setFormData(prev => ({ ...prev, projects: prev.projects.filter(p => p.id !== id) }));
  };

  const handleAddSkill = () => {
    if (!newSkillName) return;
    const newSkill: SkillItem = {
      name: newSkillName,
      category: newSkillCat,
    };
    setFormData(prev => ({ ...prev, skills: [...prev.skills, newSkill] }));
    setNewSkillName('');
  };

  const handleDeleteSkill = (name: string) => {
    setFormData(prev => ({ ...prev, skills: prev.skills.filter(s => s.name !== name) }));
  };

  const handleSaveAll = () => {
    onSave(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-slate-900 text-slate-100 rounded-2xl border border-slate-800 shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-start justify-between gap-4 bg-slate-950/60">
          <div>
            <div className="text-xs uppercase tracking-wider font-semibold text-sky-400 mb-1">
              Portfolio Customizer
            </div>
            <h2 className="text-2xl font-bold text-white">
              Edit Your Academic Profile
            </h2>
            <p className="text-xs text-slate-400">
              Update your contact info, work experience, degrees, certifications, projects, or skills.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center gap-1 px-6 pt-3 border-b border-slate-800 bg-slate-950/40 overflow-x-auto">
          <button
            onClick={() => setActiveTab('profile')}
            className={`pb-3 text-xs font-semibold border-b-2 whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'profile'
                ? 'border-sky-400 text-sky-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Profile & Contact</span>
          </button>

          <button
            onClick={() => setActiveTab('experience')}
            className={`pb-3 text-xs font-semibold border-b-2 whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'experience'
                ? 'border-sky-400 text-sky-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Experience ({formData.experience.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('education')}
            className={`pb-3 text-xs font-semibold border-b-2 whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'education'
                ? 'border-sky-400 text-sky-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Degrees & Certs</span>
          </button>

          <button
            onClick={() => setActiveTab('projects')}
            className={`pb-3 text-xs font-semibold border-b-2 whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'projects'
                ? 'border-sky-400 text-sky-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Projects ({formData.projects.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('skills')}
            className={`pb-3 text-xs font-semibold border-b-2 whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'skills'
                ? 'border-sky-400 text-sky-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Skills ({formData.skills.length})</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-800/50 flex items-center gap-4">
                <img
                  src={formData.profile.avatarUrl}
                  alt={formData.profile.name}
                  className="w-16 h-16 rounded-full object-cover object-[center_12%] border-2 border-sky-400 shrink-0"
                />
                <div className="flex-1">
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Profile Photo Path
                  </label>
                  <input
                    type="text"
                    value={formData.profile.avatarUrl}
                    onChange={(e) => handleProfileChange('avatarUrl', e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-700 bg-slate-800 text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.profile.name}
                    onChange={(e) => handleProfileChange('name', e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-700 bg-slate-800 text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Academic Title
                  </label>
                  <input
                    type="text"
                    value={formData.profile.title}
                    onChange={(e) => handleProfileChange('title', e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-700 bg-slate-800 text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Department
                  </label>
                  <input
                    type="text"
                    value={formData.profile.department}
                    onChange={(e) => handleProfileChange('department', e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-700 bg-slate-800 text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Institution
                  </label>
                  <input
                    type="text"
                    value={formData.profile.institution}
                    onChange={(e) => handleProfileChange('institution', e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-700 bg-slate-800 text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    value={formData.profile.location}
                    onChange={(e) => handleProfileChange('location', e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-700 bg-slate-800 text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.profile.email}
                    onChange={(e) => handleProfileChange('email', e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-700 bg-slate-800 text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Phone
                  </label>
                  <input
                    type="text"
                    value={formData.profile.phone}
                    onChange={(e) => handleProfileChange('phone', e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-700 bg-slate-800 text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  LinkedIn URL
                </label>
                <input
                  type="text"
                  value={formData.profile.linkedin}
                  onChange={(e) => handleProfileChange('linkedin', e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-700 bg-slate-800 text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Biography / Summary
                </label>
                <textarea
                  rows={3}
                  value={formData.profile.bio}
                  onChange={(e) => handleProfileChange('bio', e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-700 bg-slate-800 text-white resize-none"
                />
              </div>
            </div>
          )}

          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <div className="space-y-6">
              <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700 space-y-2.5">
                <div className="text-xs font-semibold text-sky-400">Add New Work Experience</div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <input
                    type="text"
                    placeholder="Role (e.g. Associate Professor)"
                    value={newExpRole}
                    onChange={(e) => setNewExpRole(e.target.value)}
                    className="px-3 py-1.5 text-xs rounded-lg border border-slate-700 bg-slate-800 text-white"
                  />
                  <input
                    type="text"
                    placeholder="Institution"
                    value={newExpInst}
                    onChange={(e) => setNewExpInst(e.target.value)}
                    className="px-3 py-1.5 text-xs rounded-lg border border-slate-700 bg-slate-800 text-white"
                  />
                  <input
                    type="text"
                    placeholder="Period (e.g. 2024 – Present)"
                    value={newExpPeriod}
                    onChange={(e) => setNewExpPeriod(e.target.value)}
                    className="px-3 py-1.5 text-xs rounded-lg border border-slate-700 bg-slate-800 text-white"
                  />
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Key responsibilities and leadership achievements..."
                    value={newExpDesc}
                    onChange={(e) => setNewExpDesc(e.target.value)}
                    className="flex-1 px-3 py-1.5 text-xs rounded-lg border border-slate-700 bg-slate-800 text-white"
                  />
                  <button
                    onClick={handleAddExperience}
                    className="px-4 py-1.5 text-xs font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg shrink-0"
                  >
                    Add
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                {formData.experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="p-3 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-between gap-3 text-xs"
                  >
                    <div>
                      <div className="font-bold text-white">{exp.role} — {exp.institution}</div>
                      <div className="text-slate-400">{exp.period}</div>
                    </div>
                    <button
                      onClick={() => handleDeleteExperience(exp.id)}
                      className="p-1.5 text-slate-400 hover:text-red-400"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education & Certs Tab */}
          {activeTab === 'education' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs uppercase font-bold text-sky-400 mb-2">Degrees</h4>
                <div className="space-y-2">
                  {formData.degrees.map((deg) => (
                    <div key={deg.id} className="p-3 bg-slate-800 border border-slate-700 rounded-lg text-xs">
                      <div className="font-bold text-white">{deg.degree}</div>
                      <div className="text-slate-400">{deg.institution} · {deg.period} {deg.gpa && `· GPA: ${deg.gpa}`}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase font-bold text-sky-400 mb-2">Certifications</h4>
                <div className="space-y-2">
                  {formData.certifications.map((c) => (
                    <div key={c.id} className="p-3 bg-slate-800 border border-slate-700 rounded-lg text-xs">
                      <div className="font-bold text-white">{c.title} — {c.issuer}</div>
                      <div className="text-slate-400">{c.date} · {c.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className="space-y-6">
              <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700 space-y-2.5">
                <div className="text-xs font-semibold text-sky-400">Add Key Project or Research</div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <input
                    type="text"
                    placeholder="Project Title"
                    value={newProjTitle}
                    onChange={(e) => setNewProjTitle(e.target.value)}
                    className="px-3 py-1.5 text-xs rounded-lg border border-slate-700 bg-slate-800 text-white"
                  />
                  <input
                    type="text"
                    placeholder="Category (e.g. Research Project)"
                    value={newProjCat}
                    onChange={(e) => setNewProjCat(e.target.value)}
                    className="px-3 py-1.5 text-xs rounded-lg border border-slate-700 bg-slate-800 text-white"
                  />
                  <input
                    type="text"
                    placeholder="Period (e.g. 2024)"
                    value={newProjPeriod}
                    onChange={(e) => setNewProjPeriod(e.target.value)}
                    className="px-3 py-1.5 text-xs rounded-lg border border-slate-700 bg-slate-800 text-white"
                  />
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Brief description of research results or methodology..."
                    value={newProjDesc}
                    onChange={(e) => setNewProjDesc(e.target.value)}
                    className="flex-1 px-3 py-1.5 text-xs rounded-lg border border-slate-700 bg-slate-800 text-white"
                  />
                  <button
                    onClick={handleAddProject}
                    className="px-4 py-1.5 text-xs font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg shrink-0"
                  >
                    Add
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                {formData.projects.map((proj) => (
                  <div
                    key={proj.id}
                    className="p-3 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-between gap-3 text-xs"
                  >
                    <div>
                      <div className="font-bold text-white">{proj.title} ({proj.category})</div>
                      <div className="text-slate-400">{proj.period}</div>
                    </div>
                    <button
                      onClick={() => handleDeleteProject(proj.id)}
                      className="p-1.5 text-slate-400 hover:text-red-400"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div className="space-y-6">
              <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700 flex gap-2">
                <input
                  type="text"
                  placeholder="Skill name (e.g. LabVIEW, FPGA, 5G NR)"
                  value={newSkillName}
                  onChange={(e) => setNewSkillName(e.target.value)}
                  className="flex-1 px-3 py-1.5 text-xs rounded-lg border border-slate-700 bg-slate-800 text-white"
                />
                <select
                  value={newSkillCat}
                  onChange={(e) => setNewSkillCat(e.target.value as any)}
                  className="px-3 py-1.5 text-xs rounded-lg border border-slate-700 bg-slate-800 text-white"
                >
                  <option value="hardware">Hardware & Design</option>
                  <option value="software">Software & Tools</option>
                  <option value="networking">Networking & Security</option>
                </select>
                <button
                  onClick={handleAddSkill}
                  className="px-4 py-1.5 text-xs font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg shrink-0"
                >
                  Add
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {formData.skills.map((s) => (
                  <span
                    key={s.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-800 border border-slate-700 rounded-lg text-xs text-slate-200"
                  >
                    <span>{s.name}</span>
                    <button
                      onClick={() => handleDeleteSkill(s.name)}
                      className="text-slate-400 hover:text-red-400 ml-1"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 flex items-center justify-between bg-slate-950/60">
          <button
            onClick={() => {
              if (window.confirm('Reset all details back to the draft information?')) {
                onReset();
                onClose();
              }
            }}
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Draft</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveAll}
              className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg shadow-sm"
            >
              {savedSuccess ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Saved!</span>
                </>
              ) : (
                <>
                  <Save className="w-3.5 h-3.5" />
                  <span>Save Changes</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
