import {
  ArrowPathIcon,
  CpuChipIcon,
  UserIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  DocumentTextIcon,
  SpeakerWaveIcon,
  VideoCameraIcon,
  PlayIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import React, { useState, useEffect, useRef } from "react";
import { AnimatedBeam } from "./animated-beam";

interface WorkflowCodeExampleProps {
  isVisible: boolean;
}

// Component states for interactive feedback
type ComponentState = "idle" | "loading" | "success" | "error";

interface ComponentStates {
  textAnalysis: ComponentState;
  audioSynthesis: ComponentState;
  videoSynthesis: ComponentState;
  ttsModel: ComponentState;
  avatarModel: ComponentState;
  finalOutput: ComponentState;
}

export function WorkflowAvatarPipeline({
  isVisible,
}: WorkflowCodeExampleProps) {
  const [animationStep, setAnimationStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentProcessing, setCurrentProcessing] = useState<string | null>(
    null
  );

  // State management for component states
  const [componentStates, setComponentStates] = useState<ComponentStates>({
    textAnalysis: "idle",
    audioSynthesis: "idle",
    videoSynthesis: "idle",
    ttsModel: "idle",
    avatarModel: "idle",
    finalOutput: "idle",
  });

  // Color scheme for different stages
  const stageColors = {
    input: {
      border: "border-blue-300",
      text: "text-blue-700",
      bg: "bg-blue-50",
      beam: "#60a5fa",
    },
    analysis: {
      border: "border-purple-300",
      text: "text-purple-700",
      bg: "bg-purple-50",
      beam: "#a855f7",
    },
    synthesis: {
      border: "border-emerald-300",
      text: "text-emerald-700",
      bg: "bg-emerald-50",
      beam: "#10b981",
    },
    model: {
      border: "border-orange-300",
      text: "text-orange-700",
      bg: "bg-orange-50",
      beam: "#f59e0b",
    },
    output: {
      border: "border-pink-300",
      text: "text-pink-700",
      bg: "bg-pink-50",
      beam: "#ec4899",
    },
  };

  // Helper function to get state icon
  // Helper function to get state icon
  const getStateIcon = (state: ComponentState, size = "w-4 h-4") => {
    switch (state) {
      case "loading":
        return (
          <ArrowPathIcon className={`${size} animate-spin text-blue-500`} />
        );
      case "success":
        return <CheckCircleIcon className={`${size} text-green-500`} />;
      case "error":
        return <ExclamationCircleIcon className={`${size} text-red-500`} />;
      default:
        return null;
    }
  };

  // Helper function to update component state
  const updateComponentState = (
    component: keyof ComponentStates,
    state: ComponentState
  ) => {
    setComponentStates((prev) => ({
      ...prev,
      [component]: state,
    }));
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const diagramRef = useRef<HTMLDivElement>(null);

  // Refs for workflow components
  const textInputRef = useRef<HTMLDivElement>(null);
  const textAnalysisRef = useRef<HTMLDivElement>(null);
  const audioSynthesisRef = useRef<HTMLDivElement>(null);
  const videoSynthesisRef = useRef<HTMLDivElement>(null);
  const finalOutputRef = useRef<HTMLDivElement>(null);
  const ttsModelRef = useRef<HTMLDivElement>(null);
  const avatarModelRef = useRef<HTMLDivElement>(null);

  // Animation steps
  const totalSteps = 7;

  // Intersection Observer to start animation when element is in view
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !isAnimating && animationStep === 0) {
          startAnimation();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isAnimating, animationStep]);

  const startAnimation = () => {
    setAnimationStep(0);
    setIsAnimating(true);
    setCurrentProcessing(null);

    // Reset all component states
    setComponentStates({
      textAnalysis: "idle",
      audioSynthesis: "idle",
      videoSynthesis: "idle",
      ttsModel: "idle",
      avatarModel: "idle",
      finalOutput: "idle",
    });

    const stepDurations = [
      2000, // Step 1: Text Input to Text Analysis
      2000, // Step 2: Text Analysis to TTS Audio Synthesis
      2000, // Step 3: TTS Model processing
      2000, // Step 4: Audio to TTS Avatar Video Synthesis
      2000, // Step 5: Avatar Model processing
      2000, // Step 6: Video Synthesis to Final Output
      2000, // Step 7: Complete
    ];

    let currentStep = 0;
    const animateNextStep = () => {
      if (currentStep < totalSteps) {
        setTimeout(() => {
          setAnimationStep(currentStep + 1);

          // State management for each step
          if (currentStep === 0) {
            // Text Input to Text Analysis
            setCurrentProcessing("textAnalysis");
            updateComponentState("textAnalysis", "loading");
          } else if (currentStep === 1) {
            // Text Analysis complete, start Audio Synthesis
            updateComponentState("textAnalysis", "success");
            setCurrentProcessing("audioSynthesis");
            updateComponentState("audioSynthesis", "loading");
            updateComponentState("ttsModel", "loading");
          } else if (currentStep === 2) {
            // TTS Model processing
            updateComponentState("ttsModel", "success");
            updateComponentState("audioSynthesis", "success");
          } else if (currentStep === 3) {
            // Audio to Video Synthesis
            setCurrentProcessing("videoSynthesis");
            updateComponentState("videoSynthesis", "loading");
            updateComponentState("avatarModel", "loading");
          } else if (currentStep === 4) {
            // Avatar Model processing
            updateComponentState("avatarModel", "success");
          } else if (currentStep === 5) {
            // Video Synthesis complete, final output
            updateComponentState("videoSynthesis", "success");
            setCurrentProcessing("finalOutput");
            updateComponentState("finalOutput", "loading");
          } else if (currentStep === 6) {
            // Complete
            updateComponentState("finalOutput", "success");
            setCurrentProcessing(null);
          }

          currentStep++;
          if (currentStep < totalSteps) {
            animateNextStep();
          } else {
            setTimeout(() => {
              setIsAnimating(false);
            }, 1000);
          }
        }, stepDurations[currentStep]);
      }
    };

    setTimeout(animateNextStep, 500);
  };

  // Auto-replay animation
  useEffect(() => {
    if (animationStep === totalSteps && !isAnimating) {
      const timer = setTimeout(() => {
        startAnimation();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [animationStep, isAnimating]);

  // Reset animation when isVisible changes
  useEffect(() => {
    if (isVisible) {
      startAnimation();
    }
  }, [isVisible]);

  return (
    <div className="relative w-full" ref={containerRef}>
      <div className="w-full border border-gray-200 rounded-lg bg-gradient-to-br from-gray-50 to-white p-6">
        <div className="relative w-full" ref={diagramRef}>
          {/* Main Workflow - Horizontal Flow */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8">
            {/* Text/SSML Input */}
            <div className="flex flex-col items-center">
              <div
                ref={textInputRef}
                className={`p-6 rounded-lg border-2 ${stageColors.input.border} ${stageColors.input.bg} transition-all duration-500 ${
                  animationStep >= 1 ? "shadow-lg scale-105" : ""
                }`}
              >
                <DocumentTextIcon
                  className={`w-12 h-12 ${stageColors.input.text} mb-3 mx-auto`}
                />
                <h3 className="text-sm font-semibold text-center text-gray-800">
                  TEXT/SSML
                </h3>
                <h3 className="text-sm font-semibold text-center text-gray-800">
                  INPUT
                </h3>
              </div>
            </div>

            <ArrowPathIcon className="w-6 h-6 text-gray-400 rotate-90 lg:rotate-0" />

            {/* Text Analysis */}
            <div className="flex flex-col items-center">
              <div
                ref={textAnalysisRef}
                className={`p-6 rounded-lg border-2 transition-all duration-500 ${
                  componentStates.textAnalysis === "loading"
                    ? `${stageColors.analysis.border} ${stageColors.analysis.bg} shadow-lg scale-105`
                    : componentStates.textAnalysis === "success"
                      ? `border-green-300 bg-green-50 shadow-lg scale-105`
                      : `${stageColors.analysis.border} ${stageColors.analysis.bg}`
                }`}
              >
                <div className="flex items-center justify-center mb-3">
                  <CpuChipIcon
                    className={`w-12 h-12 ${stageColors.analysis.text}`}
                  />
                  {getStateIcon(componentStates.textAnalysis, "w-6 h-6 ml-2")}
                </div>
                <h3 className="text-sm font-semibold text-center text-gray-800">
                  TEXT ANALYSIS
                </h3>
                {componentStates.textAnalysis === "loading" && (
                  <p className="text-xs text-center text-gray-600 mt-2">
                    Parsing content...
                  </p>
                )}
              </div>
            </div>

            <ArrowPathIcon className="w-6 h-6 text-gray-400 rotate-90 lg:rotate-0" />

            {/* TTS Audio Synthesis */}
            <div className="flex flex-col items-center">
              <div
                ref={audioSynthesisRef}
                className={`p-6 rounded-lg border-2 transition-all duration-500 ${
                  componentStates.audioSynthesis === "loading"
                    ? `${stageColors.synthesis.border} ${stageColors.synthesis.bg} shadow-lg scale-105`
                    : componentStates.audioSynthesis === "success"
                      ? `border-green-300 bg-green-50 shadow-lg scale-105`
                      : `${stageColors.synthesis.border} ${stageColors.synthesis.bg}`
                }`}
              >
                <div className="flex items-center justify-center mb-3">
                  <SpeakerWaveIcon
                    className={`w-12 h-12 ${stageColors.synthesis.text}`}
                  />
                  {getStateIcon(componentStates.audioSynthesis, "w-6 h-6 ml-2")}
                </div>
                <h3 className="text-sm font-semibold text-center text-gray-800">
                  TTS AUDIO
                </h3>
                <h3 className="text-sm font-semibold text-center text-gray-800">
                  SYNTHESIS
                </h3>
                {componentStates.audioSynthesis === "loading" && (
                  <p className="text-xs text-center text-gray-600 mt-2">
                    Generating speech...
                  </p>
                )}
              </div>
            </div>

            <ArrowPathIcon className="w-6 h-6 text-gray-400 rotate-90 lg:rotate-0" />

            {/* TTS Avatar Video Synthesis */}
            <div className="flex flex-col items-center">
              <div
                ref={videoSynthesisRef}
                className={`p-6 rounded-lg border-2 transition-all duration-500 ${
                  componentStates.videoSynthesis === "loading"
                    ? `${stageColors.synthesis.border} ${stageColors.synthesis.bg} shadow-lg scale-105`
                    : componentStates.videoSynthesis === "success"
                      ? `border-green-300 bg-green-50 shadow-lg scale-105`
                      : `${stageColors.synthesis.border} ${stageColors.synthesis.bg}`
                }`}
              >
                <div className="flex items-center justify-center mb-3">
                  <VideoCameraIcon
                    className={`w-12 h-12 ${stageColors.synthesis.text}`}
                  />
                  {getStateIcon(componentStates.videoSynthesis, "w-6 h-6 ml-2")}
                </div>
                <h3 className="text-sm font-semibold text-center text-gray-800">
                  TTS AVATAR
                </h3>
                <h3 className="text-sm font-semibold text-center text-gray-800">
                  VIDEO SYNTHESIS
                </h3>
                {componentStates.videoSynthesis === "loading" && (
                  <p className="text-xs text-center text-gray-600 mt-2">
                    Creating avatar video...
                  </p>
                )}
              </div>
            </div>

            <ArrowPathIcon className="w-6 h-6 text-gray-400 rotate-90 lg:rotate-0" />

            {/* Final Output */}
            <div className="flex flex-col items-center">
              <div
                ref={finalOutputRef}
                className={`p-6 rounded-lg border-2 transition-all duration-500 ${
                  componentStates.finalOutput === "loading"
                    ? `${stageColors.output.border} ${stageColors.output.bg} shadow-lg scale-105`
                    : componentStates.finalOutput === "success"
                      ? `border-green-300 bg-green-50 shadow-lg scale-105`
                      : `${stageColors.output.border} ${stageColors.output.bg}`
                }`}
              >
                <div className="flex items-center justify-center mb-3">
                  <UserIcon
                    className={`w-12 h-12 ${stageColors.output.text}`}
                  />
                  {getStateIcon(componentStates.finalOutput, "w-6 h-6 ml-2")}
                </div>
                <h3 className="text-sm font-semibold text-center text-gray-800">
                  PHOTO REALISTIC
                </h3>
                <h3 className="text-sm font-semibold text-center text-gray-800">
                  AVATAR VIDEO
                </h3>
                <h3 className="text-sm font-semibold text-center text-gray-800">
                  FILE/STREAM
                </h3>
                {componentStates.finalOutput === "loading" && (
                  <p className="text-xs text-center text-gray-600 mt-2">
                    Finalizing output...
                  </p>
                )}
                {componentStates.finalOutput === "success" && (
                  <div className="flex items-center justify-center mt-2">
                    <PlayIcon className="w-4 h-4 text-green-600 mr-1" />
                    <p className="text-xs text-green-600">Ready to play</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* AI Models Section */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mt-8">
            {/* TTS/CNV Model */}
            <div className="flex flex-col items-center">
              <div
                ref={ttsModelRef}
                className={`p-6 rounded-lg border-2 transition-all duration-500 ${
                  componentStates.ttsModel === "loading"
                    ? `${stageColors.model.border} ${stageColors.model.bg} shadow-xl scale-110 animate-pulse`
                    : componentStates.ttsModel === "success"
                      ? `border-green-300 bg-green-50 shadow-xl scale-110`
                      : `${stageColors.model.border} ${stageColors.model.bg}`
                }`}
              >
                <div className="flex items-center justify-center mb-3">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                      <CpuChipIcon className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  {getStateIcon(componentStates.ttsModel, "w-6 h-6 ml-3")}
                </div>
                <h3 className="text-lg font-bold text-center text-gray-800">
                  TTS/CNV MODEL
                </h3>
                {componentStates.ttsModel === "loading" && (
                  <p className="text-sm text-center text-gray-600 mt-2">
                    Processing speech conversion...
                  </p>
                )}
              </div>
            </div>

            {/* Avatar Model */}
            <div className="flex flex-col items-center">
              <div
                ref={avatarModelRef}
                className={`p-6 rounded-lg border-2 transition-all duration-500 ${
                  componentStates.avatarModel === "loading"
                    ? `${stageColors.model.border} ${stageColors.model.bg} shadow-xl scale-110 animate-pulse`
                    : componentStates.avatarModel === "success"
                      ? `border-green-300 bg-green-50 shadow-xl scale-110`
                      : `${stageColors.model.border} ${stageColors.model.bg}`
                }`}
              >
                <div className="flex items-center justify-center mb-3">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                      <EyeIcon className="w-8 h-8 text-purple-600" />
                    </div>
                  </div>
                  {getStateIcon(componentStates.avatarModel, "w-6 h-6 ml-3")}
                </div>
                <h3 className="text-lg font-bold text-center text-gray-800">
                  AVATAR MODEL
                </h3>
                {componentStates.avatarModel === "loading" && (
                  <p className="text-sm text-center text-gray-600 mt-2">
                    Generating avatar visuals...
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Animated Connections */}
          <AnimatedBeam
            containerRef={diagramRef}
            fromRef={textInputRef}
            toRef={textAnalysisRef}
            isActive={animationStep >= 1}
            color={stageColors.input.beam}
          />

          <AnimatedBeam
            containerRef={diagramRef}
            fromRef={textAnalysisRef}
            toRef={audioSynthesisRef}
            isActive={animationStep >= 2}
            color={stageColors.analysis.beam}
          />

          <AnimatedBeam
            containerRef={diagramRef}
            fromRef={audioSynthesisRef}
            toRef={ttsModelRef}
            isActive={animationStep >= 2}
            color={stageColors.synthesis.beam}
          />

          <AnimatedBeam
            containerRef={diagramRef}
            fromRef={ttsModelRef}
            toRef={audioSynthesisRef}
            isActive={animationStep >= 3}
            color={stageColors.model.beam}
          />

          <AnimatedBeam
            containerRef={diagramRef}
            fromRef={audioSynthesisRef}
            toRef={videoSynthesisRef}
            isActive={animationStep >= 4}
            color={stageColors.synthesis.beam}
          />

          <AnimatedBeam
            containerRef={diagramRef}
            fromRef={videoSynthesisRef}
            toRef={avatarModelRef}
            isActive={animationStep >= 4}
            color={stageColors.synthesis.beam}
          />

          <AnimatedBeam
            containerRef={diagramRef}
            fromRef={avatarModelRef}
            toRef={videoSynthesisRef}
            isActive={animationStep >= 5}
            color={stageColors.model.beam}
          />

          <AnimatedBeam
            containerRef={diagramRef}
            fromRef={videoSynthesisRef}
            toRef={finalOutputRef}
            isActive={animationStep >= 6}
            color={stageColors.output.beam}
          />
        </div>

        {/* Progress Indicator */}
        <div className="mt-6 flex justify-center">
          <div className="flex space-x-2">
            {Array.from({ length: totalSteps }, (_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i < animationStep
                    ? "bg-green-500"
                    : i === animationStep
                      ? "bg-blue-500 animate-pulse"
                      : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Status Display */}
        <div className="mt-4 text-center">
          {currentProcessing && (
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg">
              <ArrowPathIcon className="w-5 h-5 animate-spin text-blue-500 mr-2" />
              <span className="text-sm font-medium text-blue-700">
                {currentProcessing === "textAnalysis" &&
                  "Analyzing input text..."}
                {currentProcessing === "audioSynthesis" &&
                  "Synthesizing speech audio..."}
                {currentProcessing === "videoSynthesis" &&
                  "Creating avatar video..."}
                {currentProcessing === "finalOutput" &&
                  "Preparing final output..."}
              </span>
            </div>
          )}
          {animationStep === totalSteps && !isAnimating && (
            <div className="inline-flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-lg">
              <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-sm font-medium text-green-700">
                Avatar video synthesis complete!
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
