(async function () {
    if (CSS["paintWorklet"] === undefined)
      await import("https://unpkg.com/css-paint-polyfill");
    CSS.paintWorklet.addModule(
      "https://rawcdn.githack.com/CSSHoudini/css-houdini/6979b873e80f9120f52bd481fbdf2d4c60db6b19/src/connections/dist/connections.js"
    );
  })();

function inserir() {
    let num = window.document.getElementById('txtn')
    let tab = window.document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value) 
        tab.innerHTML = ''
        
            let item = document.createElement('option')
            item.text = `${n}`
            item.value = `tab${n}`
            tab.appendChild(item)
        
    }
}