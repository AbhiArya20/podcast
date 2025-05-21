import FormLeft from "@/components/form-left/form-left";
import FormRight from "@/components/form-right/form-right";
import FormWrapper from "@/components/form-wrapper/form-wrapper";
import { Link } from "react-router-dom";
import React from "react";
import useEmailStep from "@/hooks/auth-hooks/use-email-step";

type StepEmailProps = {
	onNext: () => void;
};

const StepEmail: React.FC<StepEmailProps> = ({ onNext }) => {
	const { email, setEmail, error, isLoading, update, handleEnterClickEvent } = useEmailStep(onNext);
	return (
		<FormWrapper isLoading={isLoading}>
			<FormLeft
				title='Sign In'
				description={
					<span>
						By signing in or signing up, you agree to our <Link to='/privacy-policy'>Terms of Service</Link>&nbsp;and&nbsp;<Link to='/privacy-policy'>Privacy Policy</Link>.
					</span>
				}
			/>
			<FormRight inputPlaceholder='abhiarya.2.0@gmail.com' inputValue={email} setInputValue={setEmail} error={error} isLoading={isLoading} update={update} handleEnterClickEvent={handleEnterClickEvent} />
		</FormWrapper>
	);
};

export default StepEmail;
