import { useState } from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import google from "../../../public/google.png";
import { Eye, EyeOff } from "@geist-ui/icons";
import { Spinner } from "@geist-ui/core";
import Link from "next/link";

export default function SignUp() {
  // React States
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [formData, setFormData] = useState({
    school_id: "",
    password: "",
    email: "",
  });

  // Toggle between see and unsee password
  function toggleSelection() {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }

  // Form Validation
  function validateForm() {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email. Please check and try again.";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@_])[A-Za-z\d@_]/.test(
        formData.password
      )
    ) {
      newErrors.password =
        "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character (_ or @)";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  // Form Validate Email
  const validateEmail = (value) => {
    if (!value.trim()) {
      return "Email is required";
    } else if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(value)) {
      return "Invalid email. Please check and try again.";
    }

    // Additional check for a valid provider
    const [, provider] = value.split("@");

    const validProviders = [
      "gmail.com",
      "yahoo.com",
      "yahoo.co.uk",
      "hotmail.com",
      "icloud.com",
      "nextie.com",
    ];

    if (!validProviders.includes(provider)) {
      return "Please check email provider (e.g. @nextie.com, @gmail.com, @yahoo.co.uk, @icloud.com, etc).";
    }

    return "";
  };

  // Form Submit
  function handleValidationOfForm(e) {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      setLoading(true);
      //   setTimeout(() => {
      //     navigate("/dashboard");
      //   }, 2000);
    } else {
      console.log("Form validation error!");
    }
  }

  // Form Input Check
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear the error when the field is not empty
    if (value.trim() !== "") {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: name === "email" ? validateEmail(value) : undefined,
    }));
  };

  const handleCheckBoxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  return (
    <div className="right-column">
      <div className="right-column-header">
        <Image
          src={logo}
          alt="nextie-logo"
          width={150}
          height={40}
          className="logo"
        />

        <h3 className="">Sign Up For Nextie</h3>
      </div>

      <form className="form" onSubmit={handleValidationOfForm}>
        <div className="form-details">
          <label htmlFor="name" className="">
            Full Name
          </label>
          <input
            type="name"
            name="name"
            id="name"
            autoComplete="false"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className={`${!fullName ? "error-style" : ""}`}
          />
          {!fullName ? (
            <div className="form-error-message">This field is required!</div>
          ) : (
            <div className="hidden-text form-error-message">Hidden</div>
          )}
        </div>

        <div className="form-details">
          <label htmlFor="email" className="">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="false"
            placeholder="name@example.com"
            value={formData.email || ""}
            onChange={handleInputChange}
            className={`${errors.email ? "error-style" : ""}`}
          />
          {errors.email ? (
            <div className="form-error-message">{errors.email}</div>
          ) : (
            <div className="hidden-text form-error-message">Hidden</div>
          )}
        </div>

        <div className="form-details">
          <label htmlFor="password" className="d-block fw-bold">
            Password
          </label>
          <div
            className={`form-password-toggle ${
              errors.password ? "error-style" : ""
            }`}
          >
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              name="password"
              id="password"
              value={formData.password || ""}
              onChange={handleInputChange}
            />
            {showPassword ? (
              <Eye
                size={20}
                color="#4f5662"
                className="eye-icon"
                onClick={toggleSelection}
              />
            ) : (
              <EyeOff
                size={20}
                color="#4f5662"
                className="eye-icon"
                onClick={toggleSelection}
              />
            )}
          </div>

          {errors.password ? (
            <div className="form-error-message">{errors.password}</div>
          ) : (
            <div className="form-warning">
              Use 8 or more characters with a mix of letters, numbers & symbols
            </div>
          )}
        </div>

        <div className="form-foot mt-4">
          <div className="remember">
            <input
              type="checkbox"
              id="agreeTerms"
              name="agreeTerms"
              checked={formData.rememberMe}
              onChange={handleCheckBoxChange}
            />
            <label htmlFor="agreeTerms">
              By creating an account, I agree to Nextie's{" "}
              <strong>Terms of use and Privacy policy</strong>
            </label>
          </div>
        </div>

        <button
          className={` ${
            errors.email || errors.password || !fullName
              ? "login-btn-error"
              : "login-btn"
          }`}
          onClick={(e) => handleValidationOfForm(e)}
        >
          {loading ? (
            <span className="spinner">
              <Spinner color="#fff" />
              Creating account
            </span>
          ) : (
            "Create account"
          )}
        </button>

        <p className="no-account">
          Already have an account?{" "}
          <span>
            <Link href={"/"}>Sign In</Link>
          </span>
        </p>

        <div className="or">
          <div className="line"></div>
          <div>OR</div>
          <div className="line"></div>
        </div>

        <button className="login-google">
          <span>
            <Image src={google} />
          </span>
          <span>Sign up with Google</span>
        </button>
      </form>
    </div>
  );
}
