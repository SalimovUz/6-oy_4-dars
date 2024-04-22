import React, { useState, useEffect } from "react";

function App() {
  const [description, setDescription] = useState("Choose title content");
  const [title, setTitle] = useState("Submit title");
  const [next, setNext] = useState("");
  const [opacityState, setOpacityState] = useState({
    one: 0.5,
    two: 1,
    three: 0.5,
  });

  useEffect(() => {
    updateOpacity();
  }, [description]); // Call updateOpacity whenever description changes

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const updateOpacity = () => {
    // Update opacity state based on description
    if (description === "Choose title content") {
      setOpacityState({ one: 1, two: 0.5, three: 0.5 });
    } else if (description === "Choose description content") {
      setOpacityState({ one: 1, two: 1, three: 0.5 });
    } else {
      setOpacityState({ one: 1, two: 1, three: 1 });
    }
  };

  const handleBackClick = () => {
    if (title === "Submit title") {
      setDescription("Choose description content");
      setTitle("Back");
      setNext("Submit description");
    } else if (title === "Back") {
      setDescription("Choose title content");
      setTitle("Submit title");
      setNext("");
    } else if (title === "No, go back") {
      setDescription("Choose description content");
      setNext("Submit description");
      setTitle("Back");
    }
  };

  const handleNextClick = () => {
    if (next === "Submit description") {
      setDescription("Are you happy now?");
      setTitle("No, go back");
      setNext("Yes, go ahead");
    } else if (next === "Yes, go ahead") {
      setDescription("Ok, we're done. Thanks for sending us your data!");
      setTitle("");
      setNext("");
    }
  };

  return (
    <>
      <div className="container mx-auto items-center">
        <div className="agree__part flex mx-auto w-4/5 h-48 mt-40 bg-white rounded-lg border py-4 gap-32">
          <div className="left flex flex-col gap-3 ml-20">
            <div
              onClick={() => {
                if (description === "Choose description content") {
                  setDescription("Choose title content");
                  setTitle("Submit title");
                  setNext("");
                } else if (description === "Are you happy now?") {
                  setDescription("Choose title content");
                  setTitle("Submit title");
                  setNext("");
                } else if (
                  description ===
                  "Ok, we're done. Thanks for sending us your data!"
                ) {
                  setDescription("Choose title content");
                  setTitle("Submit title");
                  setNext("");
                }
              }}
              className="first flex items-center gap-3 cursor-pointer"
              style={{ opacity: opacityState.one }}
            >
              <h1 className="rounded-full bg-blue-700 w-10 h-10 items-center justify-center text-center p-1 text-white font-bold text-xl">
                1
              </h1>
              <h3 className="text-2xl font-semibold">Choose title</h3>
            </div>
            <div
              onClick={() => {
                if (description === "Choose title content") {
                  setDescription("Choose description content");
                  setTitle("Back");
                  setNext("Submit description");
                } else if (
                  description ===
                  "Ok, we're done. Thanks for sending us your data!"
                ) {
                  setDescription("Choose description content");
                  setTitle("Back");
                  setNext("Submit description");
                }
              }}
              className="second flex items-center gap-3 cursor-pointer"
              style={{ opacity: opacityState.two }}
            >
              <h1 className="rounded-full bg-blue-700 w-10 h-10 items-center justify-center text-center p-1 text-white font-bold text-xl">
                2
              </h1>
              <h3 className="text-2xl font-semibold">Choose description</h3>
            </div>
            <div
              onClick={() => {
                if (description === "Choose description content") {
                  setDescription("Are you happy now?");
                  setTitle("No, go back");
                  setNext("Yes, go ahead");
                }
              }}
              className="third flex items-center gap-3 cursor-pointer"
              style={{ opacity: opacityState.three }}
            >
              <h1 className="rounded-full bg-blue-700 w-10 h-10 items-center justify-center text-center p-1 text-white font-bold text-xl">
                3
              </h1>
              <h3 className="text-2xl font-semibold">Confirm data</h3>
            </div>
          </div>

          <div className="right flex flex-col gap-6 ">
            <div className="top ">
              <h1 className="text-2xl font-semibold">{description}</h1>
            </div>

            <div className="center flex gap-4">
              <button
                onClick={handleBackClick}
                className="rounded-md bg-gray-300 px-3 py-2 text-xl"
              >
                {title}
              </button>
              <button
                onClick={handleNextClick}
                className="bir rounded-md bg-gray-300 px-3 py-2 text-xl"
              >
                {next}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
