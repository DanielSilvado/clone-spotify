import styled from 'styled-components';

import { Link } from 'react-router-dom'

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;

    margin-top: 110px;
`;

export const Title = styled.h1`
    font-size: 48px;
`;

export const List = styled.div`
    display: flex;
    margin-top: 20px;
`;

export const Playlist = styled(Link)`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    width: 250px;
    text-decoration: none;

    img {
        height: 250px;
    }

    strong {
        font-size: 13px;
        margin-top: 10px;
        color: #fff;
    }

    p {
        line-height: 22px;
        margin-top: 5px;
        font-size: 13px;
        color: #b3b3b3;
    }

    &:hover img {
        opacity: 0.4;
    }

    &:first-child {
        margin: 0;
    }
`;
