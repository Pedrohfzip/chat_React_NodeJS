import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    "643ed617-c99b-43f4-9ec2-db0632f012a1",
    props.user.username,
    props.user.secret
  );
  return (
    <>
      <div style={{ height: "100vh" }}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{ height: "100%" }} />
      </div>
    </>
  );
};

export default ChatsPage;
