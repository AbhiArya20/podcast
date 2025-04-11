import statesData from "../utils/states.json";
import countryData from "../utils/countries.json";
import cityData from "../utils/cities.json";

// TODO: Change all appearance of jainsons

export const states = statesData.map((state) => state.name);
const countries = countryData.map((country) => country.name);
const cities = cityData.map((city) => city.name);
const countryCode = countryData.map((country) => country.phone_code);

class Constants {
  static readonly SERVER_ERROR_MESSAGE = "Something unexpected occurred.";
  static readonly ROUTE_NOT_FOUND_MESSAGE =
    "The requested URL was not found on this server. That’s all we know.";

  // Auth Controller
  static readonly EMAIL_NOT_REGISTER =
    "We couldn't find an account associated with this email. Please make sure you've entered the correct address or create a new account.";
  static readonly INCORRECT_PASSWORD =
    "The password you entered is incorrect. Please try again.";
  static readonly INVALID_CREDENTIALS_MESSAGE =
    "The email or password you entered is incorrect";
  static readonly UNVERIFIED_USER_MESSAGE =
    "Your email address has not been verified yet. Please check your inbox for the verification link";
  static readonly ACCOUNT_DELETED_MESSAGE =
    "We couldn't find the account you're trying to access. It may have been deleted or never existed.";
  static readonly ACCOUNT_BLOCKED_MESSAGE =
    "Your account has been blocked. Please contact support for assistance.";
  static readonly LOGIN_SUCCESS_MESSAGE = "Login successful. Welcome back!";
  static readonly INVALID_REFRESH_TOKEN_MESSAGE =
    "The refresh token has expired. Please log in again.";
  static readonly INVALID_ACCESS_TOKEN_MESSAGE =
    "The access token has expired. Please log in again.";
  static readonly USER_NOT_FOUND_MESSAGE =
    "We couldn't find an account with the provided information";
  static readonly USER_REGISTERED_MESSAGE =
    "This email is already registered. Please use a different one or log in.";
  static readonly REGISTRATION_SUCCESS_MESSAGE =
    "Registration successful. Welcome to jainsons. Please verify your email address to complete the setup.";
  static readonly VERIFICATION_LINK_SEND_MESSAGE =
    "A verification link has been sent to your email. Please check your inbox to complete the verification.";
  static readonly EXPIRE_VERIFICATION_LINK_MESSAGE =
    "The verification link has expired. Please request a new one.";
  static readonly OTP_EXPIRED_MESSAGE =
    "The OTP has expired. Please request a new one to continue.";
  static readonly OTP_INVALID_MESSAGE =
    "The OTP you entered is not valid. Please ensure the code is correct and try again.";
  static readonly INVALID_VERIFICATION_LINK_MESSAGE =
    "The link you provided is invalid. Please check the URL and try again.";
  static readonly ALREADY_VERIFIED_MESSAGE =
    "Your account has already been verified. Please log in to proceed.";
  static readonly OTP_SENT_MESSAGE =
    "An OTP has been sent to your email. Please check and enter it to proceed.";
  static readonly OTP_USED_MESSAGE =
    "Whoops! Looks like that OTP has already been used. Request a fresh one and try again";
  static readonly UNAUTHORIZED_USER_MESSAGE =
    "You are not authorized to access this resource.";
  static readonly VERIFICATION_SUCCESSFUL_MESSAGE =
    "Your account has been verified successfully";

  // Address Controllers
  static readonly ADDRESS_NOT_FOUND =
    "Invalid address ID format. Please provide a valid address ID.";
  static readonly ADDRESS_COUNT_EXCEEDED_MESSAGE =
    "You cannot add more than 6 addresses. Please remove an existing address to add a new one.";

  // Product Controller
  static PRODUCT_NOT_FOUND_MESSAGE(_id?: string) {
    return `No product found with ID: ${_id}`;
  }

  // Collection Controller
  static COLLECTION_NOT_FOUND_MESSAGE(_id?: string) {
    return `No collection found with ID: ${_id}`;
  }
  // Category Controller
  static CATEGORY_NOT_FOUND_MESSAGE(_id?: string) {
    return `No collection found with ID: ${_id}`;
  }

  // Vendor Controller
  static VENDOR_NOT_FOUND_MESSAGE(_id?: string) {
    return `No vendor found with ID: ${_id}`;
  }

  // Error Codes
  static readonly SERVER_ERROR = "SERVER_ERROR";
  static readonly INVALID_OTP = "INVALID_OTP";
  static readonly VALIDATION_ERROR = "VALIDATION_ERROR";
  static readonly INVALID_CREDENTIALS = "INVALID_CREDENTIALS";
  static readonly UNVERIFIED_USER = "UNVERIFIED_USER";
  static readonly ACCOUNT_DELETED = "ACCOUNT_DELETED";
  static readonly ACCOUNT_BLOCKED = "ACCOUNT_BLOCKED";
  static readonly INVALID_TOKEN = "INVALID_TOKEN";
  static readonly NOT_FOUND = "NOT_FOUND";
  static readonly USER_ALREADY_REGISTERED = "USER_ALREADY_REGISTERED";
  static readonly REQUEST_TIMEOUT = "REQUEST_TIMEOUT";
  static readonly INVALID_LINK = "INVALID_LINK";
  static readonly ALREADY_VERIFIED = "ALREADY_VERIFIED";
  static readonly OTP_SENT = "OTP_SENT";
  static readonly OTP_USED = "OTP_USED";
  static readonly ADDRESS_COUNT_EXCEEDED = "ADDRESS_COUNT_EXCEEDED";
  static readonly UNAUTHORIZED_USER = "UNAUTHORIZED_USER";

  // Success Code
  static readonly LOGIN_SUCCESS = "LOGIN_SUCCESS";
  static readonly REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
  static readonly VERIFICATION_LINK_SEND = "VERIFICATION_LINK_SEND";
  static readonly VERIFICATION_SUCCESSFUL = "VERIFICATION_SUCCESSFUL";

  // Validation
  static readonly STATES = states;
  static readonly COUNTRIES = countries;
  static readonly COUNTRY_CODES = countryCode;
  static readonly CITIES = cities;
}

export default Constants;
