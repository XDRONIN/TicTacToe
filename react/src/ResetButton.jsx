import React from "react";
function ResetButton() {
  const handleReset = () => {
    window.location.reload();
  };
  return (
    <button onClick={handleReset} className="reset">
      Reset
    </button>
  );
}
export default ResetButton;
