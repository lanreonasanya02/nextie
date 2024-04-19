import { useState } from "react";
import { CheckInCircleFill, Circle, StopCircle } from "@geist-ui/icons";
import BasicInfo from "./BasicInfo";

export default function CreateSteps() {
  return (
    <div>
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  //   const [isOpen, setIsOpen] = useState(true);

  const messages = [
    <BasicInfo />,
    "Apply for jobs 💼",
    "Invest your new income 🤑",
    "Come home and play",
  ];

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 4) {
      setStep((s) => s + 1);
    }
  }

  return (
    <div>
      <div className="steps">
        <div className="numbers">
          {/* Step 1 */}
          <div className="step">
            <span className={step >= 2 ? "active item-number" : "item-number"}>
              {step >= 2 ? (
                <CheckInCircleFill size={35} />
              ) : (
                <StopCircle
                  size={35}
                  color={step === 1 ? "#4c4e50" : "#9CA3AF"}
                />
              )}
            </span>
            <span
              className={
                step >= 2 ? "text-active" : step === 1 ? "text-bold" : ""
              }
            >
              Basic Information
            </span>
          </div>

          {/* Step 2 */}

          <div className="step">
            <span className={step >= 3 ? "active item-number" : "item-number"}>
              {step >= 3 ? (
                <CheckInCircleFill size={35} />
              ) : (
                <StopCircle
                  size={35}
                  color={step === 2 ? "#4c4e50" : "#9CA3AF"}
                />
              )}
            </span>
            <span
              className={
                step >= 3 ? "text-active" : step === 2 ? "text-bold" : ""
              }
            >
              Additional Information
            </span>
          </div>

          {/* Step 3 */}

          <div className="step">
            <span className={step >= 4 ? "active item-number" : "item-number"}>
              {step >= 4 ? (
                <CheckInCircleFill size={35} />
              ) : (
                <StopCircle
                  size={35}
                  color={step === 3 ? "#4c4e50" : "#9CA3AF"}
                />
              )}
            </span>
            <span
              className={
                step >= 4 ? "text-active" : step === 3 ? "text-bold" : ""
              }
            >
              Ticketing (Optional)
            </span>
          </div>

          {/* Step 4 */}

          <div className="step">
            <span className={step >= 5 ? "active item-number" : "item-number"}>
              {step >= 5 ? (
                <CheckInCircleFill size={35} />
              ) : (
                <StopCircle
                  size={35}
                  color={step === 4 ? "#4c4e50" : "#9CA3AF"}
                />
              )}
            </span>
            <span className={step === 4 ? "text-bold" : ""}>
              Confirm & Review
            </span>
          </div>
        </div>

        <div className="message">{messages[step - 1]}</div>

        <div className="buttons">
          <button
            className={step === 1 ? "hidden-btn left-btn" : "left-btn"}
            onClick={handlePrevious}
          >
            Previous
          </button>
          <button onClick={handleNext} className="right-btn">
            {step === 4 ? "Submit" : "Save & Continue"}
          </button>
        </div>
      </div>
    </div>
  );
}
