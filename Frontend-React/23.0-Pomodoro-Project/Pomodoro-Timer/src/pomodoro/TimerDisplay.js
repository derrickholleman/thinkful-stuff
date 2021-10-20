import React from "react";
import { secondsToDuration, minutesToDuration } from "../utils/duration";

const TimerDisplay = ({
  session,
  focusDuration,
  breakDuration,
  isTimerRunning,
}) => {
  return (
    <div>
      {session && (
        <div className="row mb-2">
          <div className="col">
            <h2 data-testid="session-title">
              {session?.label === "Focusing" && (
                <p>
                  {session?.label} for {minutesToDuration(focusDuration)}{" "}
                  minutes
                </p>
              )}
              {session?.label === "On Break" && (
                <p>
                  {session?.label} for {minutesToDuration(breakDuration)}{" "}
                  minutes
                </p>
              )}
            </h2>
            <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(session?.timeRemaining)} remaining
            </p>
            {!isTimerRunning && <h3>PAUSED</h3>}
          </div>
        </div>
      )}
      {session && <div className="row mb-2">
        <div className="col">
          <div className="progress" style={{ height: "20px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={
                100 -
                (100 * session?.timeRemaining) /
                  (session?.label === "Focusing"
                    ? focusDuration * 60
                    : breakDuration * 60)
              }
              style={{
                width: `${
                  100 -
                  (100 * session?.timeRemaining) /
                    (session?.label === "Focusing"
                      ? focusDuration * 60
                      : breakDuration * 60)
                }%`,
              }}
            />
          </div>
        </div>
      </div>}
    </div>
  );
};

export default TimerDisplay;
