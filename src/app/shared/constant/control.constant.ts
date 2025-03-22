import {CONTROL_TYPE} from '../interfaces/control.type';

export const CONTROL_DESCRIPTION = {
    input: {
        type: CONTROL_TYPE.INPUT,
        minLength: 3,
        maxLength: 250,
        pattern: '^[a-zA-Z0-9_ ]*$',
        patternKey: 'app.regxPatterns.input',
        tooltip: 'app.general.tooltip.general'
    },
    inputSpecial: {
        type: CONTROL_TYPE.INPUT_SPECIAL,
        minLength: 3,
        maxLength: 250,
        pattern: '^[a-zA-Z0-9_, ./-]*$',
        patternKey: 'app.regxPatterns.inputSpecial',
        tooltip: 'app.general.tooltip.general'
    },
    numeric: {
        type: CONTROL_TYPE.NUMERIC,
        isNumeric: true,
        minLength: 1,
        maxLength: 9,
        pattern: '^[0-9]*$',
        patternKey: 'app.regxPatterns.numeric',
        tooltip: 'app.general.tooltip.general'
    },
    password: {
        type: CONTROL_TYPE.PASSWORD,
        minLength: 1,
        maxLength: 16,
        pattern: '^[a-zA-Z0-9@$#]*$',
        patternKey: 'app.regxPatterns.password',
        tooltip: 'app.general.tooltip.general'
    },
    email: {
        type: CONTROL_TYPE.EMAIL,
        tooltip: 'app.general.tooltip.general'
    },
    selectOne: {
        type: CONTROL_TYPE.SELECT_ONE
    },
};
