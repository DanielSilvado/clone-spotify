import React from 'react';

import { Container, Title, Playlist, List } from './styles';

const Browse = () => (
    <Container>
        <Title>
            Navegar
        </Title>

        <List>
            <Playlist href="">
                <img src="https://studiosol-a.akamaihd.net/letras/272x272/albuns/e/a/c/3/782891568926534.jpg" alt="Playlist" />
                <strong>Gospel</strong>
                <p>A palavra do Senhor na voz dos grandes adoradores do Brasil. </p>
            </Playlist>
            <Playlist href="">
                <img src="https://www.hypeness.com.br/wp-content/uploads/2018/03/Capas-29.jpg" alt="Playlist" />
                <strong>Roxk</strong>
                <p>As melhores do rock Brasil. </p>
            </Playlist>
            <Playlist href="">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRb3TXZt_lLc62Iz_k4TlXbJttA-o09UnQwUscJ_MU8INd2Kr1x&usqp=CAU" alt="Playlist" />
                <strong>Rock</strong>
                <p>As melhores do Queen.</p>
            </Playlist>
            <Playlist href="">
                <img src="https://www.hypeness.com.br/wp-content/uploads/2018/03/Capas-28.jpg" alt="Playlist" />
                <strong>Rock</strong>
                <p>As mais tocadas de Jonny Cash.</p>
            </Playlist>
            <Playlist href="">
                <img src="data:image/jpeg;base64,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" alt="Playlist" />
                <strong>Top Brasil</strong>
                <p>Veja aqui os clipes dos hits Te Prometo de Dennis DJ com Mc Don Juan e BRABA, de Luísa Sonza!</p>
            </Playlist>
            <Playlist href="">
                <img src="https://i.scdn.co/image/ab67616d0000b2731dbb1b499f1782685cb89cec" alt="Playlist" />
                <strong>Lofi hip hop music</strong>
                <p>Chill lofi music to relax and study to. Perfect background music for your cozy evenings. Just sit back, relax and enjoy.</p>
            </Playlist>
        </List>
    </Container>
)

export default Browse;