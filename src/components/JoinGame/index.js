import React from "react";

const JoinGame = () => {
  return (
    <form>
      <label htmlFor="username"> Enter username</label>
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Please enter a username"
      />
      <input type="submit" value="SUBMIT" />
    </form>
  );
};
