import styled from 'styled-components';

export const RatingSectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    min-width: fit-content;
    font-size: 16px;
`;

export const RatingElementWrapper = styled.div`
    display: flex;
    align-items: center;
    &:not(:last-child) {
        margin-bottom: 22px;
    }
`;

export const Amount = styled.span`
    margin-left: 14px;
    font-weight: bold;
`;