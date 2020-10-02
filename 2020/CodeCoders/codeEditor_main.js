// /**
//  * @license
//  * Copyright 2017 Google LLC
//  * SPDX-License-Identifier: Apache-2.0
//  */
//  (function() {

//   let currentButton;

//   function handlePlay(event) {
//     loadWorkspace(event.target);
//     let code = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace());
//     code += 'MusicMaker.play();';
//     // Eval can be dangerous. For more controlled execution, check
//     // https://github.com/NeilFraser/JS-Interpreter.
//     try {
//       eval(code);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   function loadWorkspace(button) {
//     let workspace = Blockly.getMainWorkspace();
//     workspace.clear();
//     if (button.blocklyXml) {
//       Blockly.Xml.domToWorkspace(button.blocklyXml, workspace);
//     }
//   }

//   function save(button) {
//     button.blocklyXml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
//   }

//   function handleSave() {
//     document.body.setAttribute('mode', 'edit');
//     save(currentButton);
//   }

//   function enableEditMode() {
//     document.body.setAttribute('mode', 'edit');
//     document.querySelectorAll('.button').forEach(btn => {
//       btn.removeEventListener('click', handlePlay);
//       btn.addEventListener('click', enableBlocklyMode);
//     });
//   }

//   function enableMakerMode() {
//     document.body.setAttribute('mode', 'maker');
//     document.querySelectorAll('.button').forEach(btn => {
//       btn.addEventListener('click', handlePlay);
//       btn.removeEventListener('click', enableBlocklyMode);
//     });
//   }

//   function enableBlocklyMode(e) {
//     document.body.setAttribute('mode', 'blockly');
//     currentButton = e.target;
//     loadWorkspace(currentButton);
//   }

//   // document.querySelector('#edit').addEventListener('click', enableEditMode);
//   // document.querySelector('#done').addEventListener('click', enableMakerMode);
//   // document.querySelector('#save').addEventListener('click', handleSave);

//   enableEditMode();

//   Blockly.inject('blocklyDiv', {
//     toolbox: document.getElementById('toolbox'),
//     scrollbars: false,
//   });
// })();

Blockly.JavaScript['setup_'] = {}

localStorage.setItem('if_else_low', '<block type="controls_if" id="Zwj:ieue1qsdN~vWzKjI"><value name="IF0"><block type="logic_compare" id="~O0t~x:8V/?/O25`wPKp"><field name="OP">GT</field><value name="A"><block type="analog_read" id="5]V17sBD#{hg4mi84BbP"><field name="analog-pin">A0</field></block></value><value name="B"></value></block></value><statement name="DO0"></statement></block>');
localStorage.setItem('blinkLED', '<block type="digital_write" id="t!PAGgk7g8W{6``r]@V`"><field name="pin-status">HIGH</field><field name="digital-pin">13</field><next><block type="delay" id="#efYHL(*UVL+{D{LG5Zv"><value name="delay_time"><block type="time" id="6JR*U(K36T0lmyNB%!/#"><field name="time-length">350</field><field name="time-form">time_milliseconds</field></block></value><next><block type="digital_write" id="V:!jAYIC~Cgt1Zia(]0l"><field name="pin-status">LOW</field><field name="digital-pin">13</field><next><block type="delay" id="IoGQBT9fM5V/$27V3g2W"><value name="delay_time"><block type="time" id="woveK7b|V(o^~+_HN%vg"><field name="time-length">350</field><field name="time-form">time_milliseconds</field></block></value></block></next></block></next></block></next></block>');
localStorage.setItem('blinkLED-high', '<next><block type="block_on_off" id="Tf?Q5#;L}v+Q7,AaHn#F"><field name="NAME">Blink LED</field><value name="repeat_times"><block type="number_of_times" id="ClG!6r7dvN[jZ~=)z8CV"><field name="times-number">1</field></block></value></block></next>')

function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      loadHigherXML(this)
    }
  };
  xmlhttp.open("GET", "test.xml", true);
  xmlhttp.send();
}

function copyToClipboard(text) {
  var dummy = document.createElement("textarea");
  // to avoid breaking orgain page when copying more words
  // cant copy when adding below this code
  // dummy.style.display = 'none'
  document.body.appendChild(dummy);
  //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}

function loadLowerXML(xml) {
  let xmlDoc = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
  var valueDom = xmlDoc.getElementsByTagName("value");
  var logicDom = xmlDoc.getElementsByTagName('statement');
  var blockDom = xmlDoc.getElementsByTagName('block');
  var nextDom = xmlDoc.getElementsByTagName('next');
  let childValueDom = [], blinkDomCount = 0;
  for (let dom of valueDom) {
    if (dom.getAttributeNode('name').nodeValue == 'condition') {
      childValueDom.push(dom.childNodes[0]);
    }
  }

  // count number of blink LED. 
  for (let dom of blockDom) {
    if (dom.getAttributeNode('type').nodeValue == 'block_on_off') {
      let fieldDom = dom.getElementsByTagName('field')
      for (let innerDom of fieldDom) {
        if (innerDom.getAttributeNode('name').nodeValue == "times-number") {
          blinkDomCount += Number(innerDom.childNodes[0].nodeValue)
        }
      }
    }
  }

  // replacing DOMs...
  for (let dom of blockDom) {
    if (dom.getAttributeNode('type').nodeValue == "if_else_high") {
      let newDom = Blockly.Xml.textToDom(localStorage.getItem('if_else_low'));
      let parentDom = dom.parentNode;
      let nextDom = dom.childNodes[0];
      while (nextDom) {
        if (nextDom.nodeName == "next") break
        nextDom = nextDom.nextSibling; //iterate until the sibiling node which is <next>
      }
      let logicDom = dom.getElementsByTagName('statement')[0].childNodes[0];
      parentDom.replaceChild(newDom, dom);
      if (nextDom && nextDom.length !== 0) parentDom.childNodes[0].appendChild(nextDom);
      if (logicDom && logicDom.length !== 0) parentDom.childNodes[0].getElementsByTagName('statement')[0].appendChild(logicDom); // assume append all to if statement (no else statement)
    }
  }

  // this is supposed to allow the (x) number of times to replicate. will fix soon. 
  // for (let dom of blockDom) {
  //   if (dom.getAttributeNode('type').nodeValue == 'block_on_off') {
  //     let fieldDom = dom.getElementsByTagName('field')
  //     console.log(fieldDom)
  //     for (let innerDom of fieldDom) {
  //       if (innerDom.getAttributeNode('name').nodeValue == "times-number") {
  //         blinkDomCount = Number(innerDom.childNodes[0].nodeValue) - 1
  //         console.log(blinkDomCount)
  //         // add in extra blinkLED dom.
  //         for (let idx=0; idx<blinkDomCount; idx++) {
  //           let newDom = Blockly.Xml.textToDom(localStorage.getItem('blinkLED-high'));
  //           let nextDom = dom.getElementsByTagName('next')[0];
  //           console.log(nextDom, dom)
  //           if (nextDom) {
  //             dom.replaceChild(newDom, nextDom);
  //             dom.getElementsByTagName('next')[0].appendChild(nextDom);
  //           } else {
  //             dom.appendChild(newDom);
  //           }
  //           console.log(nextDom, dom)
  //           dom = dom.getElementsByTagName('next')[0];
  //         }
  //       }
  //     }
  //   }
  // }

  blockDom = xmlDoc.getElementsByTagName('block');
  for (let dom of blockDom) {
    if (dom.getAttributeNode('type').nodeValue == "block_on_off") {
      let newDom = Blockly.Xml.textToDom(localStorage.getItem('blinkLED'));
      let parentDom = dom.parentNode;
      let nextDom = dom.getElementsByTagName('next')[0];
      parentDom.replaceChild(newDom, dom)
      let findNextDom = parentDom.childNodes[0];
      while (findNextDom.getElementsByTagName('next')[0]) {
        findNextDom = findNextDom.getElementsByTagName('next')[0];
      }
      if (nextDom && nextDom.length !== 0) findNextDom.childNodes[0].appendChild(nextDom)
    } 
  }

  // update conditions...
  valueDom = xmlDoc.getElementsByTagName('value');
  let bDomCount = 0;
  for (let dom of valueDom) {
    if (dom.getAttributeNode('name').nodeValue == "B") {
      console.log(childValueDom[bDomCount], dom)
      dom.appendChild(childValueDom[bDomCount]);
      bDomCount += 1;
    }
  }

  Blockly.Xml.clearWorkspaceAndLoadFromXml(xmlDoc, Blockly.getMainWorkspace());
}

Blockly.inject('blocklyDiv', {
  toolbox: document.getElementById('toolbox'),
  scrollbars: true
});


document.getElementById('button').addEventListener('click', () => {
  //let code = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace());
  let code = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());  
  localStorage.setItem('codecoders-code', code)
  loadLowerXML();
})

document.addEventListener('DOMContentLoaded', () => {
  let dom = Blockly.Xml.textToDom('<xml><block type="start" id="59l}?Xg,Wpv:5sz/.6.d" x="137" y="54"><statement name="start-logic"><block type="if_else_high" id="1uE2p(}9_4$k{xx5pNSJ"><field name="pre-text">dial value is</field><field name="comparison">GT</field><value name="condition"><block type="math_number" id="Kh4I7w}lv}=q-06-wa(."><field name="NUM">500</field></block></value><statement name="logic"><block type="block_on_off" id="U[s;=:K#gkK$FBT^KRWM"><field name="NAME">Blink LED</field><value name="repeat_times"><block type="number_of_times" id="p|SbWWEAO%ic7*ctSS/#"><field name="times-number">1</field></block></value></block></statement></block></statement></block></xml>');
  //let dom = Blockly.Xml.textToDom('<xml><block type="start" id="59l}?Xg,Wpv:5sz/.6.d" x="137" y="54"><statement name="start-logic"><block type="controls_if" id="Zwj:ieue1qsdN~vWzKjI"><value name="IF0"><block type="logic_compare" id="~O0t~x:8V/?/O25`wPKp"><field name="OP">GT</field><value name="A"><block type="analog_read" id="5]V17sBD#{hg4mi84BbP"><field name="analog-pin">A0</field></block></value><value name="B"><block type="math_number" id="w4tv:XHPKulSkNkry.!%"><field name="NUM">500</field></block></value></block></value><statement name="DO0"><block type="digital_write" id="t!PAGgk7g8W{6``r]@V`"><field name="pin-status">HIGH</field><field name="digital-pin">13</field></block></statement><next><block type="delay" id="#efYHL(*UVL+{D{LG5Zv"><value name="delay_time"><block type="time" id="6JR*U(K36T0lmyNB%!/#"><field name="time-length">350</field><field name="time-form">time_milliseconds</field></block></value><next><block type="digital_write" id="V:!jAYIC~Cgt1Zia(]0l"><field name="pin-status">LOW</field><field name="digital-pin">13</field><next><block type="delay" id="IoGQBT9fM5V/$27V3g2W"><value name="delay_time"><block type="time" id="woveK7b|V(o^~+_HN%vg"><field name="time-length">350</field><field name="time-form">time_milliseconds</field></block></value></block></next></block></next></block></next></block></statement></block></xml>')
  Blockly.Xml.domToWorkspace(dom, Blockly.getMainWorkspace());
  //Blockly.Xml.domT(, Blockly.getMainWorkspace())
})

document.getElementById('button1').addEventListener('click', () => {
  let code = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace());
  document.getElementById('codeToBeDisplayed').innerHTML = code;
  copyToClipboard(code);
  $('#finalPopOver').modal({
    focus: true,
    show: true
  });
})
