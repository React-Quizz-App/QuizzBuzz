import React from "react";

const JoinGame = () => {
  const [username, setUsername] = useState("");
  const [quizUrl, setQuizUrl] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDeafult();
    setUsername("");
  };

  const updateInput = (e) => {
    const input = e.target.value;
    setUsername(input);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="username"> Enter username</label>
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Please enter a username"
        onChange={updateInput}
      />
      <input
        type="text"
        id="quizUrl"
        name="quizUrl"
        placeholder="Please enter the URL for the Quiz you would like to join."
        onChange={updateInput}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default JoinGame;
