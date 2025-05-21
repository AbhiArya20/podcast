import FormLeft from "@/components/form-left/form-left";
import FormRight from "@/components/form-right/form-right";
import FormWrapper from "@/components/form-wrapper/form-wrapper";
import useOTPStep from "@/hooks/auth-hooks/use-otp-Step";
import useRedux from "@/hooks/use-redux";
import ResendOtp from "@/components/authenticate/step-otp/resend-otp/resend-otp";

const StepOTP = () => {
	const { useTypedSelector } = useRedux();
	const { email } = useTypedSelector((state) => state.auth.otp);

	const { otp, setOtp, error, isLoading, update, handleEnterClickEvent } = useOTPStep();

	return (
		<FormWrapper isLoading={isLoading}>
			<FormLeft title='Check Your Email' subTitle={email} description="An OTP has been sent to your email. Please check your inbox, and if you don't see it, Don’t forget to check your spam folder" />
			<FormRight inputPlaceholder='000000' inputValue={otp} setInputValue={setOtp} error={error} isLoading={isLoading} update={update} handleEnterClickEvent={handleEnterClickEvent}>
				<ResendOtp />
			</FormRight>
		</FormWrapper>
	);
};

export default StepOTP;
