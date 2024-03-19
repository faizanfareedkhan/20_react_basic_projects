import { useRef } from "react";
import useFetch from "../use-fetch";

const ScrollToTopAndBottom = () => {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  //   const bottomRef = useRef(null);

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  function handleScrollToBottom() {
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
    // bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }

  if (error) {
    return <h1>Error Occured ! Please Try Again</h1>;
  }

  if (pending) {
    return <h1>Loading ! Please Wate</h1>;
  }

  return (
    <div>
      <h1>Scroll To Top and Bottom Feature</h1>
      <h1>This is the top section</h1>
      <button onClick={handleScrollToBottom}>Scroll To Bottom</button>
      <ul style={{ listStyle: "none" }}>
        {data && data.products && data.products.length
          ? data.products.map((item) => <li key={item.id}>{item.title}</li>)
          : null}
      </ul>
      <button onClick={handleScrollToTop}>Scroll To Top</button>
      {/* <div ref={bottomRef}></div> */}
      <h1>This is the bottom section</h1>
    </div>
  );
};

export default ScrollToTopAndBottom;
