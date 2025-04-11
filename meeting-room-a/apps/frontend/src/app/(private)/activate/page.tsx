import StepAvatar from "@/components/activate/step-avatar/step-avatar";
import StepName from "@/components/activate/step-name/step-name";
import React, { useState } from "react";

const steps = {
  1: StepName,
  2: StepAvatar,
};

const Activate = () => {
  const [step, setStep] = useState(1);
  const Step = steps[step];

  function onNext() {
    setStep(step + 1);
  }
  return <Step onNext={onNext} />;
};

export default Activate;
