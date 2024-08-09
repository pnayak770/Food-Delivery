import { useState } from "react";
import "./Ai.css";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function Ai() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  async function generateAnswer(e) {
    setGeneratingAnswer(true);
    e.preventDefault();
    setAnswer("Loading your answer... \n It might take upto 10 seconds");
    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyAK2xrjdvl7C_wERJ_Ueq3wOFGw7b9G6qE",
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      let responseArray=response["data"]["candidates"][0]["content"]["parts"][0]["text"].split("**");

      let newRespone="";

      for(let i=0;i<responseArray.length;i++){
        if(i===0||i%2!==1){
            newRespone+=responseArray[i];
        }else{
            newRespone+="<b>"+responseArray[i]+"</b>";
        }
      }
      let newRespone2=newRespone.split("*").join("</br>")

      setAnswer(
        newRespone2
      );
    } catch (error) {
      console.log(error);
      setAnswer("Sorry - Something went wrong. Please try again!");
    }

    setGeneratingAnswer(false);
    setQuestion("")
  }

  return (
    <>
    <div className="ai">
    <h1 >FOOD AI</h1>
    <form
      onSubmit={generateAnswer}
      className="form"
    >  
      <textarea
        required
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask anything"
      ></textarea>
      <button
        type="submit"
        className="btn"
        disabled={generatingAnswer}
      >
       FlavorFetch
      </button>
    </form>
    <div className="ans">
        {
            answer&& <p dangerouslySetInnerHTML={{ __html: answer }}>
            
           </p>
        }
    </div>
  </div>
    </>
  );
}

export default Ai;