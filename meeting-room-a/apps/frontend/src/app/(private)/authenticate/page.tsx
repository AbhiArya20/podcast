"use client";
import StepEmail from "@/components/authenticate/step-email/step-email";
import StepOTP from "@/components/authenticate/step-otp/step-otp";
import React, { useState } from "react";

const steps = {
  1: StepEmail,
  2: StepOTP,
};

const Authenticate = () => {
  const [step, setStep] = useState(1);
  const Step = steps[step];

  function onNext() {
    setStep(step + 1);
  }

  return <Step onNext={onNext} />;
};

export default Authenticate;
