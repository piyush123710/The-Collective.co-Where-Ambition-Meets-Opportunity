import React, { useState } from 'react';
import { X, Terminal, CheckCircle, FileText, Cpu, GitBranch, ShieldCheck } from 'lucide-react';
import { DOCUMENTATION_CONTENT } from '../data/mockData';

export const DeveloperHubModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('docs');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn" role="dialog" aria-modal="true" aria-labelledby="dev-hub-title">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-white">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-900/50">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h2 id="dev-hub-title" className="text-lg font-bold font-serif flex items-center gap-2">
                <span>Developer Hub & CI/CD Suite</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono">v2.4.0</span>
              </h2>
              <p className="text-xs text-neutral-400">Comprehensive documentation, automated testing pipelines, and Vercel deployment specs.</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Developer Hub"
            className="text-neutral-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-neutral-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-neutral-800 bg-neutral-900/30 px-6 gap-2">
          <button
            onClick={() => setActiveTab('docs')}
            className={`flex items-center gap-2 py-3 px-4 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'docs' ? 'border-emerald-400 text-emerald-400' : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Documentation Suite</span>
          </button>
          <button
            onClick={() => setActiveTab('tests')}
            className={`flex items-center gap-2 py-3 px-4 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'tests' ? 'border-emerald-400 text-emerald-400' : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Automated Tests ({DOCUMENTATION_CONTENT.testingReport.totalTests})</span>
          </button>
          <button
            onClick={() => setActiveTab('api')}
            className={`flex items-center gap-2 py-3 px-4 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'api' ? 'border-emerald-400 text-emerald-400' : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>API Routes & Auth</span>
          </button>
          <button
            onClick={() => setActiveTab('cicd')}
            className={`flex items-center gap-2 py-3 px-4 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'cicd' ? 'border-emerald-400 text-emerald-400' : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            <GitBranch className="w-4 h-4" />
            <span>CI/CD GitHub Actions</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {activeTab === 'docs' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                <h3 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-2">Architecture Overview</h3>
                <p className="text-sm text-neutral-300 leading-relaxed">{DOCUMENTATION_CONTENT.overview}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {DOCUMENTATION_CONTENT.architecture.map((arch, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 flex flex-col">
                    <h4 className="font-semibold text-white mb-1 text-sm">{arch.title}</h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">{arch.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'tests' && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                  <span className="text-xs text-neutral-400">Total Tests</span>
                  <p className="text-2xl font-bold text-white mt-1">{DOCUMENTATION_CONTENT.testingReport.totalTests}</p>
                </div>
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <span className="text-xs text-emerald-400">Passed</span>
                  <p className="text-2xl font-bold text-emerald-400 mt-1">{DOCUMENTATION_CONTENT.testingReport.passed}</p>
                </div>
                <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                  <span className="text-xs text-neutral-400">Failed</span>
                  <p className="text-2xl font-bold text-white mt-1">{DOCUMENTATION_CONTENT.testingReport.failed}</p>
                </div>
                <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                  <span className="text-xs text-neutral-400">Test Coverage</span>
                  <p className="text-2xl font-bold text-emerald-400 mt-1">{DOCUMENTATION_CONTENT.testingReport.coverage}</p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider">Test Suite Execution Results</h4>
                {DOCUMENTATION_CONTENT.testingReport.suites.map((suite, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-900 border border-neutral-800">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                      <span className="text-sm font-medium text-white">{suite.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-neutral-400">{suite.time}</span>
                      <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 text-xs font-bold">{suite.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'api' && (
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider">REST Endpoints & Server Middleware</h4>
              <div className="space-y-3">
                {DOCUMENTATION_CONTENT.apiEndpoints.map((ep, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div className="flex items-center gap-3 font-mono text-sm">
                      <span className={`px-2 py-1 rounded text-xs font-bold ${
                        ep.method === 'POST' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {ep.method}
                      </span>
                      <span className="text-white">{ep.path}</span>
                    </div>
                    <span className="text-xs text-neutral-400">{ep.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'cicd' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider">GitHub Actions Workflow (.github/workflows/deploy.yml)</h4>
                <span className="text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded">Vercel Ready</span>
              </div>
              <pre className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 font-mono text-xs text-emerald-300 overflow-x-auto leading-relaxed">
                {DOCUMENTATION_CONTENT.cicdWorkflow}
              </pre>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-neutral-800 bg-neutral-900/50 flex items-center justify-between text-xs text-neutral-400">
          <span>Production Build: Optimized via Vite & Tailwind CSS</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl transition-colors font-medium"
          >
            Close Hub
          </button>
        </div>

      </div>
    </div>
  );
};
