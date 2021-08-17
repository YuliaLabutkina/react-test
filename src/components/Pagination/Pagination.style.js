import styled, { css } from 'styled-components';

const getActiveStyle = ({isActive}) => {
    return isActive && css`
    font-weight: bold;
    &::after {
        display: block;
        content: "";
        position: absolute;
        background-color: #65B79A;
        width: calc(100% + 16px);
        height: 3px;
        bottom: -10px;
        right: -8px;
    }`
};

const getFixedStyle = ({isLoading}) => {
    return isLoading && ({
        'position': 'fixed',
        'bottom': '0',
        'right': '0',
        'left': '0',
        'z-index': '2'
    });
};

export const PaginationWrapper = styled.div`
    display: flex;
    align-items: center;
    width: fit-content;
    margin: 0 auto;
    padding: 10px 0 20px;
    font-size: 18px;
    line-height: 20px;
    font-weight: 600;
    ${getFixedStyle}
`;

export const PrevButton = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: none;
    margin-right: 30px;
`;

export const NextButton = styled(PrevButton)`
    margin-right: 0;
    margin-left: 30px;
`;

export const PaginationPage = styled.span`
    position: relative;
    margin-right: 36px;
    cursor: pointer;
    &:last-of-type {
        margin-right: 0;
    }
    ${getActiveStyle}
`;