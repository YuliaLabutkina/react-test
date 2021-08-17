import React from 'react';

import { IconWrapper } from './SvgIcon.style';

const SvgIcon = ({ children, ...props }) => <IconWrapper { ...props }>{children}</IconWrapper>;

export default SvgIcon;