const iframe = document.createElement("iframe");
const url = window.location.href;
const id = url.split("/")[4];
iframe.src = `https://www.2embed.cc/embed/${id}`;
iframe.width = "100%";
iframe.height = "600px";
iframe.frameborder = "0";
iframe.scrolling = "no";
iframe.allowfullscreen = true;

const wrapper = document.getElementById('ipc-wrap-background-id');
wrapper.style.display = "none";
const parentElement = document.getElementsByClassName("NeSef")[0];
parentElement.insertBefore(iframe, parentElement.childNodes[1]);
