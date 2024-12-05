import React from "react";

const Chatbot = () => {
  let styles={
    marginLeft:"1100px",
     
    borderRadius:"10px",
    overflow:"hidden",
    
    opacity:"0.8",
    zIndex:"100",
    
  }
  return (
    <div style={styles}>
      <iframe
        width="350"
        height="430"
        allow="microphone;"
        src="https://console.dialogflow.com/api-client/demo/embedded/af7e29ba-8b3c-49fe-b22b-5052e147e0f5"
      ></iframe>
    </div>
  );
};

export default Chatbot;