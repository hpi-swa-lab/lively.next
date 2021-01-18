
//const puppeteer = require("puppeteer");
import L2LTracker from "../lively.2lively/tracker.js";
import L2LClient from "../lively.2lively/client.js";

import LivelyServer from "../lively.server/server.js";
import CorsPlugin from "../lively.server/plugins/cors.js";
import SocketioPlugin from "../lively.server/plugins/socketio.js";
import L2lPlugin from "../lively.server/plugins/l2l.js";


let hostname = "localhost",
    port = 9009,
    namespace = "l2l-test";

async function orchestrate() {
  // const browser = await puppeteer.launch();
  // const page = await browser.newPage();
  // await page.goto('http://127.0.0.1:9011/worlds/load?name=__newWorld__');
  // await new Promise(r => { setTimeout(r, 200000)})
  // await page.keyboard.press('f');
  // await page.keyboard.press('Enter'); // Enter Key
  // await new Promise(r => { setTimeout(r, 5000)})
  // await page.screenshot({path: 'example.png'});
  // await browser.close();
  await startServer();
  tracker = await startTracker(testServer);
    client1 = await L2LClient.ensure({url, namespace,});
    await client1.register()
    await client1.whenRegistered(300);
    console.log("...START");
}

async function startServer() {
  let server = LivelyServer.ensure({port, hostname});
  await server.addPlugins([new CorsPlugin(), new SocketioPlugin(), new L2lPlugin()]);
  let result = await server.whenStarted();
  console.log('Second server started');
  console.log(result);
  return result;
}

async function startTracker(server) {
  await server.whenStarted();
  io = server.findPlugin("socketio").io;
  url = `http://${hostname}:${port}${io.path()}`;
  console.log(url);
  let tracker = await L2LTracker.ensure({namespace, hostname, port, io});
  server.findPlugin('l2l').setOptions({l2lNamespace: namespace, l2lTracker: tracker})
  await server.whenStarted();
  return tracker;
}

orchestrate();
