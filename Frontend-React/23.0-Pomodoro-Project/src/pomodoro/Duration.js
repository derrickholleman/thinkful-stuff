import React from "react";
import { minutesToDuration } from "../utils/duration";

const Duration = ({
  focusDuration,
  setFocusDuration,
  breakDuration,
  setBreakDuration,
  isTimerRunning
}) => {
  const handleFocusIncrease = () => {
    setFocusDuration((focusDuration) => focusDuration + 5);
  };
  const handleBreakIncrease = () => {
    setBreakDuration((breakDuration) => breakDuration + 1);
  };
  const handleFocusDecrease = () => {
    setFocusDuration((focusDuration) => focusDuration - 5);
  };
  const handleBreakDecrease = () => {
    setBreakDuration((breakDuration) => breakDuration - 1);
  };

  return (
    <div className="row">
      <div className="col">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-focus">
            Focus Duration: {minutesToDuration(focusDuration)}
          </span>
          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-focus"
              onClick={handleFocusDecrease}
              disabled={focusDuration < 6 || isTimerRunning}
            >
              <span className="oi oi-minus" />
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="increase-focus"
              onClick={handleFocusIncrease}
              disabled={focusDuration > 59 || isTimerRunning}
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="float-right">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-break">
              Break Duration: {minutesToDuration(breakDuration)}
            </span>
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-break"
                onClick={handleBreakDecrease}
                disabled={breakDuration < 2 || isTimerRunning}
              >
                <span className="oi oi-minus" />
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-break"
                onClick={handleBreakIncrease}
                disabled={breakDuration > 14 || isTimerRunning}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Duration;
