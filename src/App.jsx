import { useState } from "react";

import MainHeader from "./components/MainHeader";
import PostsList from "./components/PostsList";

function App() {
  const [modalIsVisible, setModelIsVisible] = useState(false);

  function hideModalHandler() {
    setModelIsVisible(false);
  }

  function showModalHandler() {
    setModelIsVisible(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList isPosting={modalIsVisible} onStopPosting={hideModalHandler} />
      </main>
    </>
  );
}

export default App;
