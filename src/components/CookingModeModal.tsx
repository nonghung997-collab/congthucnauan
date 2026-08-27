import React, { useState, useEffect } from 'react';
import { Recipe } from '../types';
import { X, ChevronLeft, ChevronRight, CheckCircle2, Play, Pause, RotateCcw, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CookingModeModalProps {
  recipe: Recipe;
  onClose: () => void;
}

export const CookingModeModal: React.FC<CookingModeModalProps> = ({ recipe, onClose }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Timer states for current step
  const currentStep = recipe.instructions[currentStepIndex];
  const initialDurationSeconds = (currentStep?.durationMinutes || 2) * 60;
  const [timerSeconds, setTimerSeconds] = useState(initialDurationSeconds);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Reset timer when step changes
  useEffect(() => {
    if (currentStep?.durationMinutes) {
      setTimerSeconds(currentStep.durationMinutes * 60);
      setIsTimerRunning(false);
    }
  }, [currentStepIndex, currentStep]);

  // Countdown effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0 && isTimerRunning) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentStepIndex, isFinished]);

  const handleNext = () => {
    if (currentStepIndex < recipe.instructions.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      setIsFinished(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  };

  const handlePrev = () => {
    if (isFinished) {
      setIsFinished(false);
    } else if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const progressPercent = Math.round(
    ((currentStepIndex + 1) / recipe.instructions.length) * 100
  );

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/95 text-stone-100 flex flex-col justify-between p-4 sm:p-8 backdrop-blur-md">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-stone-800 pb-4 max-w-4xl w-full mx-auto">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400">
            Cooking Mode • {recipe.name}
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-white mt-0.5">
            Step {currentStepIndex + 1} of {recipe.instructions.length}
          </h2>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Exit Cooking Mode"
          className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-4xl mx-auto my-3 bg-stone-800 rounded-full h-2 overflow-hidden">
        <div
          className="bg-emerald-500 h-full transition-all duration-300 rounded-full"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Main Instruction Display */}
      <div className="max-w-3xl w-full mx-auto my-auto flex flex-col items-center text-center px-4 py-8">
        {!isFinished ? (
          <>
            <span className="text-6xl sm:text-7xl font-extrabold text-emerald-500/20 mb-4 select-none">
              0{currentStepIndex + 1}
            </span>
            <p className="text-xl sm:text-3xl font-semibold leading-relaxed text-stone-100 max-w-2xl">
              {currentStep.instruction}
            </p>

            {currentStep.tip && (
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-sm text-left">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>Chef Tip: {currentStep.tip}</span>
              </div>
            )}

            {/* Step Timer if duration present */}
            {currentStep.durationMinutes && (
              <div className="mt-8 flex items-center gap-3 px-5 py-3 rounded-2xl bg-stone-900 border border-stone-800">
                <span className="font-mono text-2xl sm:text-3xl font-bold text-emerald-400">
                  {formatTime(timerSeconds)}
                </span>
                <button
                  type="button"
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  className={`p-2.5 rounded-xl cursor-pointer transition-colors ${
                    isTimerRunning
                      ? 'bg-amber-500 text-stone-950'
                      : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                  }`}
                >
                  {isTimerRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsTimerRunning(false);
                    setTimerSeconds((currentStep.durationMinutes || 2) * 60);
                  }}
                  className="p-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="animate-in zoom-in-95 duration-200">
            <div className="w-20 h-20 bg-emerald-500 text-stone-950 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
              Bon Appétit! 🍽️
            </h3>
            <p className="text-stone-300 text-lg max-w-md mx-auto mb-8">
              You just cooked {recipe.name}! Take a moment to enjoy your delicious homemade creation.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-lg transition-transform active:scale-95 cursor-pointer"
            >
              Finish & Return to Recipe
            </button>
          </div>
        )}
      </div>

      {/* Bottom Navigation Controls */}
      <div className="max-w-4xl w-full mx-auto flex items-center justify-between border-t border-stone-800 pt-4">
        <button
          type="button"
          onClick={handlePrev}
          disabled={currentStepIndex === 0 && !isFinished}
          className="flex items-center gap-2 px-5 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 disabled:opacity-30 disabled:pointer-events-none text-white font-semibold text-sm cursor-pointer transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Previous</span>
        </button>

        <span className="hidden sm:inline text-xs text-stone-500">
          Tip: Use Left & Right Arrow keys on your keyboard
        </span>

        {!isFinished && (
          <button
            type="button"
            onClick={handleNext}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-transform active:scale-95 cursor-pointer"
          >
            <span>{currentStepIndex === recipe.instructions.length - 1 ? 'Finish!' : 'Next Step'}</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};
