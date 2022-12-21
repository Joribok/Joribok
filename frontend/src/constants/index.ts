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

const REGEX = {
  // eslint-disable-next-line no-useless-escape
  ID: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{2,19}$/,
  // eslint-disable-next-line no-useless-escape
  PASSWORD: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,19}$/,
};

export { SIZE, BUTTON_TYPE, INPUT_TYPE, ALIGN, REGEX };
