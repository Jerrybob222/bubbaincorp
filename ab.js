

document.getElementById("opt1").addEventListener("click", () => {
  const win = window.open("about:blank", "_blank");

  win.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Loading...</title>
        <style>
          html, body {
            margin: 0;
            padding: 0;
            height: 100%;
            overflow: hidden;
            background: black;
          }

          iframe {
            border: none;
            width: 100%;
            height: 100%;
          }
        </style>
        <script>

  alert("this is using domain 3. use A:B converter and type the domain you have if you dont use this one.")
        </script>


      </head>
      <body>
        <iframe src="https://3.bubbaincorp.workers.dev"></iframe>
      </body>
    </html>
  `);
});






document.getElementById("op2").addEventListener("click", () => {
  const url = prompt("Enter a website URL:");

  if (!url) return;

  const win = window.open("about:blank", "_blank");

  win.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Loading...</title>
        <style>
          html, body {
            margin: 0;
            height: 100%;
            overflow: hidden;
          }
          iframe {
            border: none;
            width: 100%;
            height: 100%;
          }
        </style>
      </head>
      <body>
        <iframe src="${url}"></iframe>
      </body>
    </html>
  `);
});
