import React from "react";

export const Application = () => {
  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label htmlFor="job-location">Job location</label>
        <select id="job-location">
          <option value="">Select country</option>
          <option value="US">USA</option>
          <option value="AU">Australia</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="IT">Italy</option>
        </select>
      </div>
      <div>
        <label>
          <input type="checkbox" id="terms" /> I agree to the terms and
          conditions
        </label>
      </div>
      <button>Submit</button>
    </form>
  );
};
