export default class App {

    static async requisicao() {

        const arrayNotices = await fetch('https://kenzie-news-api.herokuapp.com/api/news')
        .then(response => response.json())
        .then((data) => data)

        return arrayNotices;
    }

    static async template() {

        const array = await App.requisicao();
        const notices = document.querySelector('.notices');
        const noticePrimary = document.querySelector('.notice-primary');

        
        for(let i = 0; i < array.length; i++) {
            
            const containerSec = document.createElement('li');
            const imgLi = document.createElement('img');
            const block = document.createElement('div');
            const category = document.createElement('span');
            const title = document.createElement('h3');
            const summary = document.createElement('p');
            const reference = document.createElement('h5');

            containerSec.addEventListener('click', event => {

                noticePrimary.textContent = '';

                const primaryContainer = document.createElement('li');
                const primaryImg = document.createElement('img');
                const primaryBlock = document.createElement('div');
                primaryBlock.className = 'primary-block'
                const primaryCategory = document.createElement('span');
                const primaryTitle = document.createElement('h3');
                const primarySummary = document.createElement('p');
                const primaryReference = document.createElement('h5');

                primaryImg.src = array[i].imagem;
                primaryCategory.innerText = array[i].categoria;
                primaryTitle.innerText = array[i].titulo;
                primarySummary.innerText = array[i].resumo;
                primaryReference.innerText = `fonte: ${array[i].fonte}`;                

                primaryBlock.append(primaryCategory, primaryTitle, primarySummary, primaryReference);
                primaryContainer.append(primaryBlock, primaryImg);
                noticePrimary.appendChild(primaryContainer);
            })

            imgLi.src = array[i].imagem;
            category.innerText = array[i].categoria;
            title.innerText = array[i].titulo;
            summary.innerText = array[i].resumo;
            reference.innerText = `fonte: ${array[i].fonte}`;

            block.append(category, title, summary, reference);
            containerSec.append(imgLi, block);
            notices.appendChild(containerSec);
        }

        const container = document.createElement('li');
        const img = document.createElement('img');
        const box = document.createElement('div');
        const fixCategory = document.createElement('span');
        const fixTitle = document.createElement('h3');
        const fixSummary = document.createElement('p');
        const fixReference = document.createElement('h5');

        img.src = array[0].imagem;
        fixCategory.innerText = array[0].categoria;
        fixTitle.innerText = array[0].titulo;
        fixSummary.innerText = array[0].resumo;
        fixReference.innerText = `fonte: ${array[0].fonte}`;

        box.append(fixCategory, fixTitle, fixSummary, fixReference);
        container.append(box, img);
        noticePrimary.appendChild(container);
    }
}