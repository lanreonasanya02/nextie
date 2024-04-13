import React, { useState } from "react";
import { Text, Input, Button, Checkbox, Spacer, Card } from "@geist-ui/core";
import { Lock, Mail } from "@geist-ui/icons";
import { useRouter } from "next/router";
import { useMediaQuery } from "@geist-ui/react";
import Link from "next/link";
import Image from "next/image";
import login from "../../public/left-image.gif";
import google from "../../public/google.png";
import logo from "../../public/logo.png";

export default function LoginPage({ onChanged }) {
  const isMobile = useMediaQuery("mobile");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const router = useRouter();

  const validateLogin = () => {
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*]/;

    if (!email.includes("@") || !email.includes(".")) {
      setErrorMail("Invalid email address");
    } else if (password.length < 8) {
      setErrorPassword("Password must be at least 8 characters long");
    } else if (
      !uppercaseRegex.test(password) ||
      !lowercaseRegex.test(password) ||
      !numberRegex.test(password) ||
      !specialCharRegex.test(password)
    ) {
      setErrorPassword(
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      );
    } else {
      console.error("Could not validate user");
    }
  };

  // function handleLogin() {
  //   const isValid = validateLogin();

  //   if (isValid) {
  //     router.push("./components/Layout");
  //   } else {
  //     console.log("Error");
  //   }
  // }

  function switchAuth() {
    onChanged((prev) => !prev);
  }

  return (
    <>
      <div className="container">
        <div className="left-container">
          {/* Content here will be for the left side with the image and welcome text */}
          <Image
            src={login}
            priority={true}
            unoptimized={true}
            alt="events.svg"
            width={700}
            height={700}
          />
        </div>

        <div className="right-container">
          <Image
            src={logo}
            width={100}
            height={40}
            alt="logo"
            className="logo"
          />
          <div className="right-container-card">
            {/* <Card width={isMobile ? "100%" : "600px"}> */}
            <div className="card">
              <Text h3>Sign In to Nextie</Text>

              <Spacer />

              <Input
                clearable
                label={<Mail color="#30D667" />}
                width="100%"
                placeholder="mail@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errorMail && (
                <Text span small type="error">
                  {errorMail}
                </Text>
              )}

              <Spacer />

              <Input.Password
                clearable
                label={<Lock color="#30D667" />}
                width="100%"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errorPassword && (
                <Text span small type="error">
                  {errorPassword}
                </Text>
              )}
              <Spacer />

              <div className="remember-forgot">
                <Checkbox checked={true}>Remember me</Checkbox>
                <Link href="#" className="forgot">
                  Forgot Password
                </Link>
              </div>

              <Spacer />

              <button className="btn" onClick={() => router.push("./events")}>
                Sign In
              </button>

              <Spacer />
              <Text p>
                Don&apos;t have an account?{" "}
                <Link href="#" onClick={switchAuth}>
                  Sign Up
                </Link>
              </Text>

              <div className="or">
                <div className="line"></div>
                <div>OR</div>
                <div className="line"></div>
              </div>

              <Spacer />

              <button
                width="100%"
                className="btn-nobg"
                // onClick={switchAuth}
              >
                <span>
                  <Image src={google} alt="Google icon" />
                </span>
                <span>Sign in with Google</span>
              </button>
            </div>
            {/* </Card> */}
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 50px;
          padding: 50px;
          height: 90lvh;
          background-color: #fff;
        }

        .right-container {
          text-align: center;
        }

        .right-container-card {
          /* flex: 1; */
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .card {
          padding: 30px 0;
          width: 600px;
          /* text-align: left; */
        }

        a {
          color: #000;
          border: 1px solid red;
        }

        .btn {
          background-color: #30d667;
          width: 95%;
          padding: 12px;
          border-style: none;
          border: 1px solid #30d667;
          border-radius: 10px;
          color: #fff;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
        }

        .btn-nobg {
          background: none;
          width: 95%;
          padding: 12px;
          border-style: none;
          border: 1px solid #30d667;
          border-radius: 10px;
          color: #30d667;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          justify-content: center;
          gap: 10px;
        }

        button:hover {
          color: #fff;
          background-color: #99ecb4;
        }

        .remember-forgot {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 14px;
        }

        .forgot {
          color: #30d667;
          border: 1px solid red;
        }

        .or {
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 15px;
          margin: 15px 0;
        }

        .line {
          border-bottom: 1px solid #b4afaf;
          width: 100%;
        }
      `}</style>
    </>
  );
}
