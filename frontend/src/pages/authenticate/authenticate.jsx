import React, { useState } from "react";
import StepOtp from "../../components/authenticate/step-otp/step-otp";
import StepEmail from "../../components/authenticate/step-email/step-email";

const steps = {
	1: StepEmail,
	2: StepOtp,
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
