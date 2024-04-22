import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
function App() {
  const [description, setDescription] = useState("Choose title content")
  const [title, setTitle] = useState("Submit title")
  const [next, setNext] = useState("")

  const backbtn = document.getElementById("back")
  const nextbtn = document.getElementById("next")

  return (
    <>
      <div className="container mx-auto items-center">
        <div className="agree__part flex mx-auto  w-4/5 h-48 mt-40 bg-white rounded-lg border py-4 gap-32">
          <div className="left flex flex-col gap-3 ml-20">
            <div
              onClick={() => {
                if (description === "Choose description content") {
                  setDescription("Choose title content");
                  setTitle("Submit title");
                  setNext("");
                }
                if(description === "Are you happy now?"){
                  setDescription("Choose title content");
                  setTitle("Submit title");
                  setNext("");
                }

                if(description === "Ok, we're done. Thanks for sending us your data!"){
                  setDescription("Choose title content");
                  setTitle("Submit title");
                  setNext("");
                }
              }}
              className="first flex items-center gap-3 cursor-pointer"
            >
              <h1 className="rounded-full bg-blue-700 w-10 h-10 items-center justify-center text-center p-1 text-white font-bold text-xl">
                1
              </h1>
              <h3 className="text-2xl font-semibold">Choose title</h3>
            </div>
            <div onClick={() => {
              if (description === "Choose title content") {
                setDescription("Choose description content");
                setTitle("Back");
                setNext("Submit description");
              }
              // if(description === "Are you happy now?"){
              //   setDescription("Choose description content");
              //   setTitle("No, go back");
              //   setNext("Yes, go ahead");
              // }

              if(description === "Ok, we're done. Thanks for sending us your data!"){
                setDescription("Choose description content");
                setTitle("Back");
                setNext("Submit description");
              }
            }} className="second flex items-center gap-3 cursor-pointer">
              <h1 className="rounded-full bg-blue-700 w-10 h-10 items-center justify-center text-center p-1 text-white font-bold text-xl">
                2
              </h1>
              <h3 className="text-2xl font-semibold">Choose description</h3>
            </div>
            <div onClick={() => {
              if(description === "Choose description content") {
                setDescription("Are you happy now?");
                setTitle("No, go back");
                setNext("Yes, go ahead");
              }
            }} className="third flex items-center gap-3 cursor-pointer">
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
              <button id='back'
                onClick={() => {
                  if (title === "Submit title") {
                    setDescription("Choose description content");
                    setTitle("Back");
                    setNext("Submit description");
                  }

                  if (title === "Back") {
                    setDescription("Choose title content");
                    setTitle("Submit title");
                    setNext("");
                  }
                  if (title === "No, go back") {
                    setDescription("Choose description content");
                    setNext("Submit description");
                    setTitle("Back");
                  }
                }}
                className="rounded-md bg-gray-300 px-3 py-2 text-xl"
              >
                {title}
              </button>
              <button id='next'
                onClick={() => {
                  if (next === "Submit description") {
                    setDescription("Are you happy now?");
                    setTitle("No, go back");
                    setNext("Yes, go ahead");
                  }
                  if (next === "Yes, go ahead") {
                    setDescription(
                      "Ok, we're done. Thanks for sending us your data!"
                    );
                    setTitle("");
                    setNext("");
                  }
                }}
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

export default App
