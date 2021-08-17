import styled, {css} from 'styled-components';

const getCssTruncateLines = truncateLines => css`
display: block; 
display: -webkit-box;
-webkit-line-clamp: ${ truncateLines };
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;
word-break: break-word;
`;

export const InfoSectionWrapper = styled.div`
    width: 100%;
    padding: 0 32px;
    font-size: 16px;
    line-height: 25px;
`;

export const RepoName = styled.h2`
    font-size: 22px;
`;

export const NameWrapper = styled.span`
    color: ${({color}) => color ? color : '#A5ADBB'};
    font-weight: bold;
`;

export const Author = styled.p`
    ${getCssTruncateLines(1)}
`;

export const Language = styled.p`
${getCssTruncateLines(1)}
`;

export const Description = styled.span`
    ${getCssTruncateLines(3)}
`;