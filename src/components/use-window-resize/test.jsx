import useWindowResize from ".";

const UseWindowResizeTest = () => {
  const { width, height } = useWindowResize();

  return (
    <div>
      <h1>Use Window Resize Hook</h1>
      <p>width is {width}</p>
      <p>height is {height}</p>
    </div>
  );
};

export default UseWindowResizeTest;
