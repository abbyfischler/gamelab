import { html } from "../uhtml.js";

const toggleDocs = () => {
  const docs = document.querySelector(".docs");
  docs.classList.toggle("hide-docs");
};

export const renderDocs = (state) => html`
  <style>
    .docs {
      position: absolute;
      box-sizing: border-box;
      height: 100%;
      width: 60%;
      right: 0px;
      top: 0px;
      background: white;
      z-index: 10;
      padding: 10px;
      overflow: scroll;
      transition: right 1s ease-in-out;
    }

    .hide-docs {
      right: -60%;
    }

    .close-docs {
      position: fixed;
      right: 10px;
      top: 10px;
    }

    .hide-docs .close-docs {
      display: none;
    }

    .docs pre,
    .docs code {
      background: lightgrey;
      border-radius: 3px;
      padding: 5px;
      overflow: scroll;
    }

    .notification-container {
      border: 1px solid black;
      padding: 10px;
      border-radius: 1em;
      max-height: 30%;
      overflow-y: scroll;
    }

    .shared-modal {
      color: var(--text-color);
      background: var(--background-2);
      margin-bottom: 5px;
      padding: 10px;
      border: 2px solid black;
      border-radius: 5px;
    }
  </style>
  <div class="docs hide-docs">
    <h3>Notifications:</h3>
    <div class="notification-container">
      ${Object.values(state.notifications).map(
        (x) => html` <div class="shared-modal">${x}</div> `
      )}
    </div>
    <h3>Documentation</h3>
    <b>Create Engine</b>
    <pre>const e = createEngine(gameCanvas, width, height);</pre>
    Example:
    <pre>const e = createEngine(gameCanvas, 300, 300);</pre>
    <code>gameCanvas</code> is automatically injected into your game script.
    <br /><br />

    <b>Start Engine</b>
    <pre>e.start()</pre>

    <b>End Engine</b>
    <pre>e.end()</pre>

    <b>Engine Properties</b>
    <pre>
e.width
e.height
</pre
    >

    <b>Add Object</b>
    <pre>
e.add({
  tags: ["name"],
  x: number, // the x position
  y: number, // the y position
  vx: number, // the x velocity
  vy: number, // the y velocity
  solid: false, // or true, makes the object collide with other solid objects
  sprite: sprite_name,
  scale: number,
  rotate: number,
  bounce: number, // how much velocity is lost on collisions
  origin: [0, 0], // 0 - 1
  collides: (me, them) => {

  },
  update: (me) => { // runs every frame

  }
})</pre
    >

    <b>Add Text</b>
    <pre>
e.addText(
    "string",  
    x, 
    y, 
    { // optional parameters
      color: "string", 
      size: number,
      rotate: number,
    }
)</pre
    >
    Example of adding text:
    <pre>const greetingText = e.addText("hello world", 150, 150);</pre>
    Example of updating text:
    <pre>greetingText.text = "new greeting";</pre>

    <b>Remove Object</b>
    <pre>e.remove(obj)</pre>
    or
    <pre>e.remove("tag-name")</pre>

    <b>Key Inputs</b>
    <pre>e.pressedKey(keyCode)</pre>
    <pre>e.heldKey(keyCode)</pre>

    <b>Object Properties</b>
    <br /><br />
    On each object you can access:
    <pre>
obj.x
obj.y
obj.vx
obj.vy
obj.width
obj.height
obj.hasTag("tag-name")
</pre
    >

    <b>Playing Tunes</b>
    <br /><br />
    To play a tune once:
    <pre>
playTune(tune_asset_name);

// or play multiple tunes

playTune(tune_0, tune_1, tune_2);
</pre
    >
    To play a tune on repeat:
    <pre>
loopTune(tune_asset_name);

// or loop multiple tunes

loopTune(tune_0, tune_1, tune_2);
</pre
    >
    To stop a tune on repeat:
    <pre>
const tuneToStop = loopTune(tune_asset_name);
tuneToStop.end();
</pre
    >

    <b>Examples</b>
    <br /><br />
    <div>
      Examples can be found in the
      <a href="https://github.com/hackclub/gamelab#readme" target="_blank"
        >GitHub repository README</a
      >, check out the "Tiny Games".
    </div>

    <button class="close-docs" @click=${toggleDocs}>close</button>
  </div>
`;