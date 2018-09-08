window.onload = () => {
  const sheet = document.createElement('style')
  sheet.innerHTML = `
@import url('https://fonts.googleapis.com/css?family=Nunito');

  body, input, button { font-family:'Nunito','Roboto',"proxima-nova","Proxima Nova", sans-serif; }

  .by-a {right: 0; bottom: 0;border-top-left-radius: 5px; padding: 0.5em; border-top: 1px solid #efefef; border-left: 1px solid #efefef; background:#fff;color:#6f6f6f;z-index:8;position:fixed;font-family:'Nunito','Roboto',"proxima-nova","Proxima Nova", sans-serif;text-decoration:none}
  .by-a:hover {color:#ff4742}
  .by-a img { border-radius:2em;width:1.5em;vertical-align:middle; border:none; }
  .by-a p { margin:0; vertical-align:middle; display: inline; margin-left: 0.5em; font-weight: 400; }
  `;
  document.body.appendChild(sheet);

  const a = document.createElement('a');
  a.className = 'by-a';
  a.href = 'https://twitter.com/gunar'
  a.target = '_top';
  a.innerHTML = '<img src="https://gunar.github.io/by/pic.png" /><p>by gunar</p>';
  document.body.appendChild(a);
}
