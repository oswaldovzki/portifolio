const aboutNav = document.querySelector('.lista-menu__item:nth-child(2)');
const resumeNav = document.querySelector('.lista-menu__item:nth-child(3)');
const title = document.querySelector('.main__conteudo__titulo');
const text = document.querySelector('.main__conteudo__texto');
const socialLinks = document.querySelector('.main__links');

aboutNav.addEventListener ('click', () => {
    title.innerHTML = `
    <h1 class="about__conteudo__titulo">Sobre mim</h1>
    `
    text.innerHTML = `
    <p class="about__conteudo__texto">
                Olá! Sou Filipe, Casado, Mineiro, curto Heavy Metal e Video Games.
                <br>
                <br>
                Me Graduei em Ciências Biológicas, com Bacharelado e Licenciatura, pela Universidade Federal de Ouro Preto, onde também conquistei meu mestrado em Ensino de Ciências.
                <br>
                <br>
                Há alguns anos realizei uma transição de carreira, integrando a Stilingue, uma empresa que destaca-se pela NLP brasileira e Social Listening. Inicialmente, contribuí para o Atendimento ao Cliente antes de transitar para a área de Quality Assurance. Desempenhei um papel significativo na criação do time de Atendimento N2, responsável pela gestão de tickets de suporte técnico e relatórios de bugs, assegurando a manutenção e aderência aos processos internos para garantir um atendimento ao cliente ágil e eficaz.
            </p>
    `
})

resumeNav.addEventListener ('click', () => {
    title.innerHTML = `
    Curriculo
    `
    text.innerHTML = `
    <section class="cv__conteudo">
        <h1 class="cv__conteudo__titulo">
            Desenvolvedor Front-end<br>
            HTML | CSS | JS
        </h1>
        <h2 class="cv__conteudo__subtitulo exp">Experiências</h2>
        <ul class="cv__conteudo__experiência">
            <li> Blip (2023 - Atual)
                <p>Analista de Suporte Técnico (N2)</p>
            </li>
            <li> Stilingue (2019 - 2023)
                <p>Analista de Suporte Técnico (2021 - 2023)</p>
                <p>Analista de Quality Assurance (2020 - 2021)</p>
                <p>Analista de Atendimento ao Cliente (2019 - 2020)</p>
            </li>
        </ul>
        <h2 class="cv__conteudo__subtitulo certificados">Certificações</h2>
        <div class="cv__conteudo__certificados">
            <ul class="cv__conteudo__cursos">
                <li>HTML<br>
                    <a rel="noopener" target="_blank" href="https://cursos.alura.com.br/user/oswaldovzki/degree-html-css-v527396-527396/certificate">Alura Cursos com certificado</a>
                </li>
                <li>CSS<br>
                    <a rel="noopener" target="_blank" href="https://cursos.alura.com.br/user/oswaldovzki/degree-css-estilos-v671897-671897/certificate">Alura Cursos com certificado</a>
                </li>
                <li>JavaScript<br>
                    <a rel="noopener" target="_blank" href="linkdocertificado">Alura Cursos com certificado</a>
                </li>
                <br>
                <li class="certification_full">
                    <a rel="noopener" target="_blank" href="https://cursos.alura.com.br/user/oswaldovzki/fullCertificate/70c35dea02b345e12c388fc9730cc015">🎓 Certificação completa 🎓</a>
                </li>
            </ul>
        </div>
    </section>
    `

    socialLinks.innerHTML = ''
})
