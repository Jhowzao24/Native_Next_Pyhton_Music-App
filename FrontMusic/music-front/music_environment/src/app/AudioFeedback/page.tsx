"use client";
import React from "react";
import { FeedbackProvider } from "@/app/Boddy_Components/Feed_Audio_Register/FeedbackContext";
import HomePage from "@/app/AudioFeedback/FeedAudio";

export default function App() {
  return (
    <FeedbackProvider>
      <HomePage />
    </FeedbackProvider>
  );
}