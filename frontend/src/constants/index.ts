const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const;

const BUTTON_TYPE = {
  SUBMIT: 'submit',
  BUTTON: 'button',
} as const;

const INPUT_TYPE = {
  TEXT: 'text',
  NUMBER: 'number',
  PASSWORD: 'password',
} as const;

const ALIGN = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right',
} as const;

export { SIZE, BUTTON_TYPE, INPUT_TYPE, ALIGN };
