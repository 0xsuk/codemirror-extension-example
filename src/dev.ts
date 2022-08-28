import { EditorState } from "@codemirror/state";
import { basicSetup, EditorView } from "codemirror";
import { javascript } from ".";

new EditorView({
  state: EditorState.create({
    doc: "const a = a",
    extensions: [basicSetup, javascript()],
  }),
  parent: document.getElementById("codemirror") as HTMLElement,
});
