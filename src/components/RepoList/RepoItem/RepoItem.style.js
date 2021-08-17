import styled from 'styled-components';

export const RepoItemWrapper = styled.li`
    display: flex;
    justify-content: space-between;
    background: #FFFFFF;
    border-radius: 16px;
    padding: 40px;
    &:not(:last-child) {
        margin-bottom: 36px;
    }
`;