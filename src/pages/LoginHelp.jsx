import React, { useState } from "react";
import {
  CssBaseline,
  GeistProvider,
  Text,
  Input,
  Button,
  Checkbox,
  Spacer,
  Card,
} from "@geist-ui/react";
import { useMediaQuery } from "@geist-ui/react";

export default function LoginHelp() {
  const isMobile = useMediaQuery("mobile");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

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
      // Perform login action here
    }
  };

  return (
    <GeistProvider>
      <CssBaseline />
      <div className="container">
        <div className="right-container">
          <Card shadow width={isMobile ? "100%" : "400px"}>
            <Text h3>Sign In to Evently</Text>
            <Spacer />
            <Input
              clearable
              label="Email"
              width="100%"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errorMail && (
              <Text span type="error">
                {errorMail}
              </Text>
            )}
            <Spacer />
            <Input.Password
              clearable
              label="Password"
              width="100%"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errorPassword && (
              <Text span type="error">
                {errorPassword}
              </Text>
            )}
            <Spacer />
            <Checkbox>Remember me</Checkbox>
            <Spacer />
            <Button type="success-light" width="100%" onClick={validateLogin}>
              Sign In
            </Button>

            <Spacer />
            <Text p>
              Don't have an account? <a href="#"> Sign Up</a>
            </Text>
            <Spacer />
            <Button type="success-light" width="100%" icon={<span>🌐</span>}>
              Sign in with Google
            </Button>
          </Card>
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 50px;
          height: 100vh;
          background-color: #fff;
        }
        .right-container {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </GeistProvider>
  );
}
