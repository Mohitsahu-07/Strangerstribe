'use client';

import { useState, useTransition } from 'react';
import { useSignIn } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignInPage() {
  const { signIn, errors, fetchStatus } = useSignIn();
  const router = useRouter();

  // Mode: 'send_otp' | 'verify_otp'
  const [mode, setMode] = useState<'send_otp' | 'verify_otp'>('send_otp');

  const [emailAddress, setEmailAddress] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  
  const [isPending, startTransition] = useTransition();

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!signIn) return;
    setErrorMsg('');

    startTransition(async () => {
      try {
        const cleanEmail = emailAddress.trim().toLowerCase();

        // Trigger email OTP dispatch
        const { error } = await signIn.emailCode.sendCode({
          emailAddress: cleanEmail,
        });

        if (error) {
          throw error;
        }

        setMode('verify_otp');
      } catch (err: any) {
        console.error(err);
        const code = err.code;
        if (code === 'form_identifier_not_found') {
          setErrorMsg(
            'We couldn\'t find a traveler profile with this email address. Please check your email or explore our trips!'
          );
        } else {
          setErrorMsg(err.longMessage || err.message || 'Failed to send OTP. Please try again.');
        }
      }
    });
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!signIn) return;
    setErrorMsg('');

    startTransition(async () => {
      try {
        const verifyResult = await signIn.emailCode.verifyCode({
          code: otpCode.trim(),
        });

        if (verifyResult.error) {
          throw verifyResult.error;
        }

        if (signIn.status === 'complete') {
          await signIn.finalize({
            navigate: ({ session, decorateUrl }) => {
              if (session?.currentTask) {
                console.log(session.currentTask);
                return;
              }
              const url = decorateUrl('/');
              if (url.startsWith('http')) {
                window.location.href = url;
              } else {
                router.push(url);
              }
            },
          });
        } else {
          console.error('Sign-in status incomplete:', signIn.status);
          setErrorMsg('Verification completed, but additional sign-in steps are required.');
        }
      } catch (err: any) {
        console.error(err);
        setErrorMsg(err.longMessage || err.message || 'Incorrect verification code. Please check and try again.');
      }
    });
  };

  const resetFlow = () => {
    setMode('send_otp');
    setOtpCode('');
    setErrorMsg('');
  };

  // Render a loading state if Clerk SDK is not yet ready
  if (!signIn) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-[#0B0806]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#FF4B38] border-t-transparent rounded-full animate-spin" />
          <p className="text-white/60 font-semibold text-sm">Loading Customer Portal...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#0B0806] px-4 py-16 relative overflow-hidden font-sans">
      
      {/* Decorative background gradients */}
      <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] rounded-full bg-[#FF4B38]/10 blur-[120px] pointer-events-none select-none" />
      <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] rounded-full bg-[#FF4B38]/5 blur-[120px] pointer-events-none select-none" />

      {/* Back Link */}
      <Link 
        href="/" 
        className="absolute top-8 left-8 flex items-center gap-2 text-sm font-bold text-white/50 hover:text-white transition-colors"
      >
        ← Back to Home
      </Link>

      {/* Main Login Card */}
      <div className="w-full max-w-[440px] bg-[#131110] border border-white/10 rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.8)] p-8 md:p-10 relative z-10 space-y-8">
        
        {/* Branding Header */}
        <div className="flex items-center gap-3 justify-center">
          <img 
            src="/logo.jpg" 
            alt="Strangers Tribe Logo" 
            className="w-10 h-10 rounded-full object-cover border border-white/20 shadow-[0_0_15px_rgba(255,75,56,0.2)]" 
          />
          <div>
            <p className="font-extrabold text-sm text-white tracking-wide uppercase leading-tight">Strangers Tribe</p>
            <p className="text-[10px] text-white/50 font-bold uppercase tracking-widest">Customer Portal</p>
          </div>
        </div>

        {/* Form Title & Subtitle */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-black text-white leading-tight tracking-tight">
            {mode === 'send_otp' ? 'Sign In' : 'Verify OTP'}
          </h2>
          <p className="text-sm text-white/50 font-medium leading-relaxed">
            {mode === 'send_otp'
              ? 'Enter your email address to receive a secure login code'
              : 'Enter the 6-digit code sent to your email inbox'}
          </p>
        </div>

        {/* Error Alert Display */}
        {errorMsg && (
          <div className="p-4 bg-red-950/50 border border-red-800/80 rounded-xl text-xs font-bold text-red-200 leading-relaxed text-center animate-shake">
            ⚠️ {errorMsg}
          </div>
        )}

        {/* Form Content */}
        {mode === 'send_otp' ? (
          <form onSubmit={handleSendOTP} className="space-y-6">
            
            <div className="space-y-2">
              <label className="text-[10px] text-white/40 font-extrabold tracking-widest uppercase block">
                Email Address
              </label>
              <input
                type="email"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                placeholder="traveler@safari.com"
                required
                className="w-full px-4 py-3.5 bg-[#1C1917] border-2 border-white/5 rounded-xl text-base text-white placeholder-white/20 font-semibold focus:outline-none focus:border-[#FF4B38] focus:ring-1 focus:ring-[#FF4B38] transition-all"
              />
              <p className="text-[10px] text-white/40 font-medium">
                Use the email registered with your trip booking.
              </p>
            </div>

            {/* Send Button */}
            <button
              type="submit"
              disabled={isPending || fetchStatus === 'fetching'}
              className="w-full bg-[#FF4B38] hover:bg-[#e0432f] text-white font-extrabold text-sm py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_4px_24px_rgba(255,75,56,0.3)] disabled:opacity-60 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-95 duration-200"
            >
              {isPending || fetchStatus === 'fetching' ? 'Sending OTP...' : 'Send OTP →'}
            </button>

          </form>
        ) : (
          <form onSubmit={handleVerifyOTP} className="space-y-6">
            
            {/* OTP Input Field */}
            <div className="space-y-2">
              <label className="text-[10px] text-white/40 font-extrabold tracking-widest uppercase block">
                6-Digit Verification Code
              </label>
              <input
                type="text"
                maxLength={6}
                value={otpCode}
                onChange={(e) => setOtpCode(e.target.value)}
                placeholder="000000"
                required
                className="w-full px-4 py-3.5 bg-[#1C1917] border-2 border-white/5 rounded-xl text-center text-2xl tracking-[0.4em] font-black text-white placeholder-white/10 focus:outline-none focus:border-[#FF4B38] focus:ring-1 focus:ring-[#FF4B38] transition-all"
              />
            </div>

            {/* Verify & Resend Buttons */}
            <div className="space-y-3">
              <button
                type="submit"
                disabled={isPending || fetchStatus === 'fetching'}
                className="w-full bg-[#FF4B38] hover:bg-[#e0432f] text-white font-extrabold text-sm py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_4px_24px_rgba(255,75,56,0.3)] disabled:opacity-60 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-95 duration-200"
              >
                {isPending || fetchStatus === 'fetching' ? 'Verifying...' : 'Verify Code →'}
              </button>
              
              <button
                type="button"
                onClick={resetFlow}
                className="w-full bg-[#1C1917] border border-white/5 hover:bg-[#26211E] text-white/80 font-bold text-sm py-3 px-6 rounded-xl transition-all flex items-center justify-center"
              >
                Change Email
              </button>
            </div>

          </form>
        )}

        {/* Footer Navigation Link */}
        <div className="text-center text-sm font-semibold text-white/40 pt-2">
          Not a customer yet?{' '}
          <Link href="/destinations" className="text-[#FF4B38] hover:underline font-extrabold">
            Explore Trips
          </Link>
        </div>

      </div>

    </div>
  );
}
