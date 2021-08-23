import React, { useState } from "react";
import { Splitter } from "@progress/kendo-react-layout";
import ToolBar from "./Layout/ToolBar";
import ComponseForm from "./Modals/ComponseForm";
import Collapse from "./Collapse/Collapse";
import MessagesList from "../Componets/Mail/MessagesList/MessagesList";
import MessageDetails from "../Componets/Mail/MessageDetails/MessageDetails";
import SettingMail from "../Componets/Settings/SettingMail";
import MessageData from "../data/MessageData";
import { IMessage } from "./mail.interface";
import WarningDialog from "./Modals/WarningDialog";
import "../Styles/App.css";
import Autocomplete from "@material-ui/lab/Autocomplete";
import AutoCompletado from "./AutoCompletado";

const Inbox = () => {
  const initMessageState = {
    id: 0,
    importance: "",
    attached: false,
    personfor: "",
    email: "",
    subject: "",
    sent: "",
    size: "",
    read: false,
    marked: false,
    isdelete: false,
    body: "",
  };

  const [allMessages, setAllMessages] = useState<IMessage[]>(MessageData);
  const [viewCompose, setViewCompose] = useState(false);
  const [itemSelectState, setItemSelectState] = useState<IMessage[]>([
    initMessageState,
  ]);
  const [tituloModal, setTituloModal] = useState("Nuevo Mensaje");
  const [response, setResponse] = useState(false);
  const [viewDialog, setViewDialog] = useState(false);
  const [warningBody, setWarningBody] = useState("");
  const [warningTitle, setWarningTitle] = useState("Confirmación");
  const [viewSetting, SetViewSetting] = useState(false);
  const [countSelect, SetCountSelect] = useState(0);
  const [listId, setListId] = useState<number[]>([]);

  const openComposeDialog = (n: boolean, titulo: string, f: boolean) => {
    setViewCompose(n);
    setResponse(f);
    setTituloModal(titulo);
  };

  const openWarningDialog = (w: boolean, title: string, body: string) => {
    setViewDialog(w);
    setWarningBody(body);
    setWarningTitle(title === "" ? warningTitle : title);
  };

  const openSettingModel = (s: boolean) => {
    SetViewSetting(s);
  };

  //const CountMsg = MessageData.length;

  const [panes, setPanes] = useState([
    { size: "15%", min: "150px", collapsible: false },
    {},
    { size: "40%", min: "20px", collapsible: true },
  ]);

  const onChange = (event: any) => {
    setPanes(event.newState);
  };

  const handleClickSelectMsg = (
    event: React.MouseEvent<unknown>,
    id: number
  ) => {
    console.log("id del mensaje marcado " + id);

    const idmsg = id;

    setListId([...listId, idmsg]);

    if (id !== 0) {
      SetCountSelect(countSelect + 1);
    } else {
      SetCountSelect(countSelect - 1);
    }
    console.log(listId);
  };

  const handleSelectAllMsg = (
    countSelectMsg: number,
    listIdMsg: Array<number[]>
  ) => {
    SetCountSelect(countSelectMsg);
    console.log(listIdMsg);
  };

  const handleClickRead = (event: React.MouseEvent<unknown>, id: number) => {
    const msg = MessageData.filter((item) => item.id === id);

    setItemSelectState(msg);

    const newAllMessages = allMessages.map((m) => {
      if (m.id === id) {
        m.read = true;
        return m;
      }
      return m;
    });

    setAllMessages(newAllMessages);
  };

  return (
    <>
      <ToolBar
        openCompose={openComposeDialog}
        openSetting={openSettingModel}
        openWarning={openWarningDialog}
      />

      <Splitter style={{ height: 500 }} panes={panes} onChange={onChange}>
        <div className="pane-content">
          <Collapse />
        </div>
        <div className="pane-content">
          <MessagesList
            dataList={allMessages}
            onSelectItem={handleClickSelectMsg}
            onClickRead={handleClickRead}
            onSelectAll={handleSelectAllMsg}
          />
        </div>
        <div className="pane-content">
          <MessageDetails
            countSelect={countSelect}
            msg={itemSelectState}
            openCompose={openComposeDialog}
            openWarning={openWarningDialog}
          />
        </div>
      </Splitter>

      <div>
        {viewCompose && (
          <ComponseForm
            openCompose={openComposeDialog}
            titulo={tituloModal}
            flag={response}
            msg={itemSelectState}
          />
        )}
      </div>
      <div>
        {viewDialog && (
          <WarningDialog
            titleDialog={warningTitle}
            BodyDialog={warningBody}
            closeWarning={openWarningDialog}
          />
        )}
      </div>
      <div>
        {viewSetting && <SettingMail closeSetting={openSettingModel} />}
      </div>
    </>
  );
};

export default Inbox;
