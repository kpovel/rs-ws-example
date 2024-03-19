const client1Form = document.getElementById("client1");
const connectClient1 = document.getElementById("connect1");
const client1Messages = document.getElementById("client1Messages");

connectClient1.addEventListener("click", () => {
  const client1WS = new WebSocket("ws://localhost:42069/ws");
  client1WS.addEventListener("open", () => {
    client1WS.send("Hello from client 1");
  });

  client1WS.addEventListener("message", (e) => {
    const liElement = document.createElement("li");
    liElement.textContent = e.data;

    client1Messages.append(liElement);
  });

  client1Form.addEventListener("submit", (e) => {
    e.preventDefault();
    const sendValue = e.target[0].value;
    client1WS.send(sendValue);

    // const liElement = document.createElement("li");
    // liElement.textContent = sendValue;
    //
    // client1Messages.append(liElement);
  });
});

const client2Form = document.getElementById("client2");
const connectClient2 = document.getElementById("connect2");
const client2Messages = document.getElementById("client2Messages");

connectClient2.addEventListener("click", () => {
  const client2WS = new WebSocket("ws://localhost:42069/ws");
  client2WS.addEventListener("open", () => {
    client2WS.send("Hello from client 2");
  });

  client2WS.addEventListener("message", (e) => {
    const liElement = document.createElement("li");
    liElement.textContent = e.data;

    client2Messages.append(liElement);
  });

  client2Form.addEventListener("submit", (e) => {
    e.preventDefault();
    const sendValue = e.target[0].value;
    client2WS.send(sendValue);
  });
});

