import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button danger outline>Button 1</Button>
      </div>
      <div>
        <Button secondary rounded>Another great button</Button>
      </div>
      <div>
        <Button primary>Click me!</Button>
      </div>
      <div>
        <Button success>Remove from cart</Button>
      </div>
      <div>
        <Button warning outline rounded>Exit</Button>
      </div>
    </div>
  );
}

export default App;
