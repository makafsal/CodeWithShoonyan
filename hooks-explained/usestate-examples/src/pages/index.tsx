import { useState } from "react";

export default function Home() {
  const [name, setName] = useState();
  const [age, setAge] = useState(0);
  const [like, setLike] = useState(false);

  const handleInput = (ev) => {
    setName(ev.target.value)
  }

  const handleAge = () => {
    setAge(age + 1);
  }

  const handleLike = (ev) => {
    setLike(ev.target.checked);
  }

  return (
    <>
      <h1>useState Hook</h1>
      <input onChange={handleInput} />
      <p>Hello {name}! I {like ? 'liked' : "don't like"} this.</p>
      <button onClick={handleAge}>Increment Age</button>
      <p>Age: {age}</p>
      <label>
        <input type="checkbox" checked={like} onChange={handleLike}/>
        Do you like this?
      </label>
    </>
  );
}
