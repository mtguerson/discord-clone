import React, { useRef, useEffect } from "react";

import ChannelMessage, { Mention } from "../ChannelMessage";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  
  }, [messagesRef]);

  return (
    <Container >
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage 
            key={n}
            author="Jonas Kleber"
            date="11/03/2024"
            content="Hoje é meu aniversário!"
          />
        ))}
        
        <ChannelMessage 
          author="Jamilton"
          date="11/03/2024"
          content={
            <>
              <Mention>@Jonas Kleber</Mention>, parabéns! 🎉
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="texto" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;