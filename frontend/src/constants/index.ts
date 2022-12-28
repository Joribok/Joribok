const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const;

const BUTTON_TYPE = {
  SUBMIT: 'submit',
  BUTTON: 'button',
} as const;

const ALIGN = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right',
  ROW: 'row',
  ROW_REVERSE: 'row-reverse',
} as const;

export { SIZE, BUTTON_TYPE, ALIGN };
