import React, { useState } from 'react';
import { X, Shield, Lock, Mail, CheckCircle2, AlertCircle, KeyRound, Loader2 } from 'lucide-react';

export const AuthModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const [step, setStep] = useState('method');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mfaCode, setMfaCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleGoogleAuth = () => {
    setLoading(true);
    setError('');
    setTimeout(() => {
      setLoading(false);
      setStep('mfa');
    }, 1200);
  };

  const handleEmailAuth = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    setLoading(true);
    setError('');
    setTimeout(() => {
      setLoading(false);
      setStep('mfa');
    }, 1200);
  };

  const handleVerifyMfa = (e) => {
    e.preventDefault();
    if (mfaCode.length < 6) {
      setError('Please enter a valid 6-digit MFA code (e.g. 123456).');
      return;
    }
    setLoading(true);
    setError('');
    setTimeout(() => {
      setLoading(false);
      setStep('success');
      const newUser = {
        uid: 'usr_' + Math.random().toString(36).substring(2, 9),
        name: email ? email.split('@')[0] : 'Alex Morgan',
        email: email || 'alex.morgan@collective.co',
        role: 'Founder & Creator',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
        mfaEnabled: true,
        tier: 'Founder Forge',
        createdAt: new Date().toISOString()
      };
      setTimeout(() => {
        onLoginSuccess(newUser);
        onClose();
        setStep('method');
        setEmail('');
        setPassword('');
        setMfaCode('');
      }, 1000);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn" role="dialog" aria-modal="true" aria-labelledby="auth-modal-title">
      <div className="relative w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-2xl text-white">
        <button
          onClick={onClose}
          aria-label="Close authentication modal"
          className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-neutral-800"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'method' && (
          <div>
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 mb-3 border border-emerald-500/20">
                <Shield className="w-6 h-6" />
              </div>
              <h3 id="auth-modal-title" className="text-2xl font-bold font-serif">Secure Sign In</h3>
              <p className="text-sm text-neutral-400 mt-1">OAuth 2.0 & Multi-Factor Authentication (MFA)</p>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div className="space-y-3">
              <button
                onClick={handleGoogleAuth}
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl bg-white text-neutral-900 font-medium hover:bg-neutral-100 transition-all shadow-md focus:ring-2 focus:ring-emerald-400 focus:outline-none"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin text-neutral-900" />
                ) : (
                  <>
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                    </svg>
                    <span>Continue with Google OAuth 2.0</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setStep('email')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-neutral-800 text-white font-medium hover:bg-neutral-700 transition-all border border-neutral-700"
              >
                <Mail className="w-5 h-5 text-neutral-400" />
                <span>Continue with Email & Password</span>
              </button>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-center gap-2 text-xs text-neutral-400">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Secured by Firebase Authentication & 256-bit SSL</span>
            </div>
          </div>
        )}

        {step === 'email' && (
          <form onSubmit={handleEmailAuth}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold font-serif">Sign in with Email</h3>
              <button type="button" onClick={() => setStep('method')} className="text-xs text-neutral-400 hover:text-white">Back</button>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@collective.co"
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">Password</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold transition-all flex items-center justify-center gap-2 mt-2"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <span>Proceed to MFA Verification</span>}
              </button>
            </div>
          </form>
        )}

        {step === 'mfa' && (
          <form onSubmit={handleVerifyMfa}>
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-500/10 text-amber-400 mb-3 border border-amber-500/20">
                <KeyRound className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif">Multi-Factor Authentication</h3>
              <p className="text-xs text-neutral-400 mt-1">Enter the 6-digit code from your authenticator app or SMS.</p>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div className="mb-4">
              <div className="flex justify-center gap-2">
                <input
                  type="text"
                  maxLength={6}
                  value={mfaCode}
                  onChange={(e) => setMfaCode(e.target.value)}
                  placeholder="123456"
                  className="w-full text-center tracking-widest text-2xl font-mono bg-neutral-800 border border-neutral-700 rounded-xl py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </div>
              <p className="text-[11px] text-neutral-400 text-center mt-2">Tip: For testing simulation, any 6 digits (e.g. 123456) will pass.</p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold transition-all flex items-center justify-center gap-2"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <span>Verify & Access Portal</span>}
            </button>
          </form>
        )}

        {step === 'success' && (
          <div className="text-center py-6 animate-fadeIn">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mb-4 border border-emerald-500/30">
              <CheckCircle2 className="w-8 h-8 animate-bounce" />
            </div>
            <h3 className="text-2xl font-bold font-serif text-white">Authentication Successful</h3>
            <p className="text-sm text-neutral-400 mt-1">MFA verified. Welcome to The Collective.co member portal!</p>
          </div>
        )}
      </div>
    </div>
  );
};
