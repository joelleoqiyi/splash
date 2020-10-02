/**
 * @license
 * Copyright 2020 CodeCoders Inc
 * SPDX-License-Identifier: Apache-2.0
 */

Blockly.defineBlocksWithJsonArray([
  // Block for colour picker.
  {
    "type": "block_on_off",
    "message0": "%1 %2",
    "args0": [
      {
        "type": "field_label_serializable",
        "name": "NAME",
        "text": "Blink LED"
      },
      {
        "type": "input_value",
        "name": "repeat_times",
        "check": "number_of_times"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "Turns on and off certain digital pin for (x) amount of time. Please insert a time block as arguement",
    "helpUrl": "https://google.com"
  },
  {
    "type": "time",
    "message0": "for  %1 %2",
    "args0": [
      {
        "type": "field_number",
        "name": "time-length",
        "value": 0
      },
      {
        "type": "field_dropdown",
        "name": "time-form",
        "options": [
          [
            "seconds",
            "time_seconds"
          ],
          [
            "milliseconds",
            "time_milliseconds"
          ]
        ]
      }
    ],
    "output": null,
    "colour": 45,
    "tooltip": "Sets time duration for (x) amount of time.",
    "helpUrl": "https://google.com"
  },
  {
    "type": "number_of_times",
    "message0": "for %1 number of times",
    "args0": [
      {
        "type": "field_number",
        "name": "times-number",
        "value": 0,
        "min": 0
      }
    ],
    "output": null,
    "colour": 90,
    "tooltip": "Run command (x) amounts of time",
    "helpUrl": "https://google.com"
  },
  {
    "type": "digital_write",
    "message0": "Turn %1 %2 Digital Pin %3",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "pin-status",
        "options": [
          [
            "ON",
            "HIGH"
          ],
          [
            "OFF",
            "LOW"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "digital-pin",
        "options": [
          [
            "1",
            "1"
          ],
          [
            "2",
            "2"
          ],
          [
            "3",
            "3"
          ],
          [
            "4",
            "4"
          ],
          [
            "5",
            "5"
          ],
          [
            "6",
            "6"
          ],
          [
            "7",
            "7"
          ],
          [
            "8",
            "8"
          ],
          [
            "9",
            "9"
          ],
          [
            "10",
            "10"
          ],
          [
            "11",
            "11"
          ],
          [
            "12",
            "12"
          ],
          [
            "13",
            "13"
          ]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 90,
    "tooltip": "Sets digital write of specific pin to HIGH/LOW.",
    "helpUrl": "https://google.com"
  },
  {
    "type": "delay",
    "message0": "Delay %1",
    "args0": [
      {
        "type": "input_value",
        "name": "delay_time",
        "check": "time"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 45,
    "tooltip": "Sets delay time to (x) amount of time",
    "helpUrl": "https://google.com"
  },
  {
    "type": "start",
    "message0": "Start %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "start-logic"
      }
    ],
    "colour": 90,
    "tooltip": "Boilerplate template for Arduino \n (NOTE YOU CAN ONLY HAVE 1 OF THESE BLOCKS)",
    "helpUrl": "https://google.com"
  },
  {
    "type": "setup",
    "message0": "Setup %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "setup-logic"
      }
    ],
    "colour": 90,
    "tooltip": "Boilerplate setup template for Arduino \n (NOTE YOU CAN ONLY HAVE 1 OF THESE BLOCKS)",
    "helpUrl": "https://google.com"
  },
  {
    "type": "analog_read",
    "message0": "Read value from %1 Analog Pin %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "analog-pin",
        "options": [
          [
            "A0",
            "A0"
          ],
          [
            "A1",
            "A1"
          ],
          [
            "A2",
            "A2"
          ],
          [
            "A3",
            "A3"
          ],
          [
            "A4",
            "A4"
          ],
          [
            "A5",
            "A5"
          ]
        ]
      }
    ],
    "output": null,
    "colour": 90,
    "tooltip": "Read value from specific analog pin",
    "helpUrl": "https://google.com"
  },
  {
    "type": "analog_write",
    "message0": "Set value to %1 %2 Analog Pin %3",
    "args0": [
      {
        "type": "field_number",
        "name": "pin-value",
        "value": 0,
        "min": 0,
        "max": 255
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "analog-pin",
        "options": [
          [
            "A0",
            "A0"
          ],
          [
            "A1",
            "A1"
          ],
          [
            "A2",
            "A2"
          ],
          [
            "A3",
            "A3"
          ],
          [
            "A4",
            "A4"
          ],
          [
            "A5",
            "A5"
          ]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 90,
    "tooltip": "Set value of specific analog pin",
    "helpUrl": "https://google.com"
  },
  {
    "type": "digital_read",
    "message0": "Read value from %1 Digital Pin %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "digital-pin",
        "options": [
          [
            "1",
            "1"
          ],
          [
            "2",
            "2"
          ],
          [
            "3",
            "3"
          ],
          [
            "4",
            "4"
          ],
          [
            "5",
            "5"
          ],
          [
            "6",
            "6"
          ],
          [
            "7",
            "7"
          ],
          [
            "8",
            "8"
          ],
          [
            "9",
            "9"
          ],
          [
            "10",
            "10"
          ],
          [
            "11",
            "11"
          ],
          [
            "12",
            "12"
          ],
          [
            "13",
            "13"
          ]
        ]
      }
    ],
    "output": null,
    "colour": 90,
    "tooltip": "Read value from specific digital pin",
    "helpUrl": "https://google.com"
  },
  {
    "type": "if_else_high",
    "message0": "when %1 %2 %3 , %4 do the following (in order): %5",
    "args0": [
      {
        "type": "field_label_serializable",
        "name": "pre-text",
        "text": "dial value is"
      },
      {
        "type": "field_dropdown",
        "name": "comparison",
        "options": [
          [
            "greater than",
            "GT"
          ],
          [
            "smaller than",
            "LT"
          ],
          [
            "equal to",
            "EQ"
          ]
        ]
      },
      {
        "type": "input_value",
        "name": "condition",
        "check": "Number"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "logic"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 90,
    "tooltip": "When condition is met, run inline statements",
    "helpUrl": "https://google.com"
  }
]);

Blockly.JavaScript['time'] = function(block) {
  let time_length = block.getFieldValue('time-length');
  let time_unit = block.getFieldValue('time-form');
  let code = time_unit == "time_seconds" ? time_length * 1000 : time_length;
  return [code, Blockly.JavaScript.ORDER_ADDITION];
};

Blockly.JavaScript['number_of_times'] = function(block) {
  let times_number = block.getFieldValue('times-number');
  return [times_number, Blockly.JavaScript.ORDER_ADDITION];
}

Blockly.JavaScript['digital_write'] = function (block) {
  let pin_status = block.getFieldValue('pin-status');
  let digital_pin = block.getFieldValue('digital-pin');
  let code = 'digitalWrite( ' + digital_pin+ ' , ' + pin_status + ' );\n';
  let setup_code = 'pinMode( ' + digital_pin + ' , OUTPUT);';
  Blockly.JavaScript.setup_['setup_output_' + digital_pin] = setup_code;
  return code;
}

Blockly.JavaScript['digital_read'] = function (block) {
  let digital_pin = block.getFieldValue('digital-pin');
  let code = 'digitalRead( ' + digital_pin+ ' )';
  let setup_code = 'pinMode( ' + digital_pin + ' , INPUT);';
  Blockly.JavaScript.setup_['setup_input_' + digital_pin] = setup_code;
  return code;
}

Blockly.JavaScript['analog_read'] = function (block) {
  let analog_pin = block.getFieldValue('analog-pin');
  let code = 'analogRead( ' + analog_pin+ ' )';
  let setup_code = 'pinMode( ' + analog_pin + ' , INPUT);';
  Blockly.JavaScript.setup_['setup_input_' + analog_pin] = setup_code;
  return [code, Blockly.JavaScript.ORDER_ADDITION];
}

Blockly.JavaScript['analog_write'] = function (block) {
  let pin_value = block.getFieldValue('pin-value');
  let analog_pin = block.getFieldValue('analog-pin');
  let code = 'analogWrite( ' + analog_pin+ ', ' + pin_value+ ');\n';
  let setup_code = 'pinMode( ' + analog_pin + ' , OUTPUT);';
  Blockly.JavaScript.setup_['setup_output_' + analog_pin] = setup_code;
  return [code, Blockly.JavaScript.ORDER_ADDITION];
}

Blockly.JavaScript['delay'] = function (block) {
  let time = Blockly.JavaScript.valueToCode(block, 'delay_time', Blockly.JavaScript.ORDER_ADDITION) || '0'; // default to 0 milliseconds
  let code = 'delay( ' + String(time) + ' );\n';
  return code;
}

Blockly.JavaScript['start'] = function (block) {
  let logic = Blockly.JavaScript.statementToCode(block, 'start-logic');
  return logic
}

Blockly.JavaScript['setup'] = function (block) {
  let logic = Blockly.JavaScript.statementToCode(block, 'setup-logic');
  Blockly.JavaScript.setup_['setup_block'] = logic // this essentially allows only one setup block to exist
  return null;
}

Blockly.JavaScript['if_else_high'] = function(block) {
  let comparison = block.getFieldValue('comparison');
  let condition = block.getFieldValue('condition');
  
  time_length = time_unit == "time_seconds" ? time_length * 1000 : time_length;
  var code = time_length;
  alert(code)
  return [code, Blockly.JavaScript.ORDER_ADDITION];
};

Blockly.JavaScript['block_on_off'] = function(block) {
  let repeat = Blockly.JavaScript.valueToCode(block, 'repeat_times', Blockly.JavaScript.ORDER_ADDITION) || '1'; // default to 1 time
  let time_length = time_unit == "time_seconds" ? time_length * 1000 : time_length;
  var code = time_length;
  alert(code)
  return [code, Blockly.JavaScript.ORDER_ADDITION];
};

Blockly.JavaScript.finish = function(code) {
  // Indent every line.
  code = '  ' + code.replace(/\n/g, '\n  ');
  code = code.replace(/\n\s+$/, '\n');
  code = 'void loop() \n{\n' + code + '\n}';

  // // Convert the definitions dictionary into a list.
  // var imports = [];
  // var definitions = [];
  // for (var name in Blockly.Arduino.definitions_) {
  //   var def = Blockly.Arduino.definitions_[name];
  //   if (def.match(/^#include/)) {
  //     imports.push(def);
  //   } else {
  //     definitions.push(def);
  //   }
  // }

  // Convert the setups dictionary into a list.
  var setups = [];
  for (var name in Blockly.JavaScript.setup_) {
    setups.push(Blockly.JavaScript.setup_[name]);
  }

  var allDefs = '\nvoid setup() \n{\n  '+setups.join('\n  ') + '\n}'+ '\n\n';
  Blockly.JavaScript.setup_ = {}
  return allDefs.replace(/\n\n+/g, '\n\n').replace(/\n*$/, '\n\n\n') + code ;
};

