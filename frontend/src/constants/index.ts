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
  ROW: 'row',
  ROW_REVERSE: 'row-reverse',
} as const;

const REGEX = {
  ID: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{2,19}$/,
  PASSWORD: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,19}$/,
};

const ANIMATION_DELAY = {
  LUCKY_BOX: 5,
} as const;

export { SIZE, BUTTON_TYPE, INPUT_TYPE, ALIGN, REGEX, ANIMATION_DELAY };
