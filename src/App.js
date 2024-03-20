import React, {useState, useEffect, useCallback, useRef}  from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./mainpage_components/MainPage";
import LandingPage from "./landpage_components/LandingPage.jsx";

const URL = "wss://qx2ley4a6d.execute-api.us-east-2.amazonaws.com/production/";

function App() {
  const socket = useRef(null);

  const [isConnected, setIsConnected] = useState(false);
  const [users, setUsers] = useState([]);
  const [chatRows, setChatRows] = useState([]);
  const [name, setName] = useState('');

  const onSocketOpen = useCallback (() => {
    setIsConnected(true);
    socket.current?.send(JSON.stringify({
      action: 'setUsername',
      name,
    }));
  }, [name]);

  const onSocketClose = useCallback (() => {
    setIsConnected(false);
  })

  const onSocketMessage = useCallback ((rawdata) => {
    const data = JSON.parse(rawdata);
    if (data.members) {
      setUsers(data.members);
    } 
    else if (data.message) {
      setChatRows(oldArray => [...oldArray, data.message])
    }
    else if (data.sys_message) {
      setChatRows(oldArray => [...oldArray, data.sys_message])
    }
  })

  const onConnect = useCallback(() => {
    if (socket.current?.readyState !== WebSocket.OPEN) {
      socket.current = new WebSocket(URL);
      socket.current.addEventListener('open', onSocketOpen);
      socket.current.addEventListener('close', onSocketClose);
      socket.current.addEventListener('message', (event) => {
        onSocketMessage(event.data);
      });
    }
  }, [onSocketOpen]);

  useEffect(() => {
    return () => {
      socket.current?.close();
    };
  }, []);

  const onSendPublicMsg = useCallback((message) => {
    socket.current?.send(JSON.stringify({
      action: 'sendPublicMsg',
      message,
    }));
  }, []);

  const onDisconnect = useCallback(() => {
    socket.current?.close();
    setUsers([]);
    setChatRows([]);
  }, [isConnected])

  return (
    <BrowserRouter>
        <Routes>

          <Route path="/"
                element = { 
                <LandingPage
                  isConnected={isConnected}
                  setName = {setName}
                  onConnect={onConnect}/> 
                }>
          </Route>

          <Route path="/chat"
              element = {<MainPage
                        isConnected={isConnected}
                        users={users}
                        chatRows={chatRows}
                        onPublicMessage={onSendPublicMsg}
                        onDisconnect={onDisconnect}
                        />}>
          </Route>

        </Routes>
      </BrowserRouter>
  )
}

export default App;
