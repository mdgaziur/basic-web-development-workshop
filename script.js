let ide = document.getElementById("code-area");
let preview = document.getElementById("preview");

let template = `
<h1>Hello World!</h1>
<style>
h1 {
 color: #5a5a5a;
 font-size: 4rem;
 letter-spacing: -4.5px;
 font-family: 'Inter';
}
body {
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>`;
ide.value = template;
updateIframe();

function updateIframe() {
    let code = ide.value;
    console.log(code);
    preview.src = URL.createObjectURL(new Blob([code], { type: "text/html" }));
}