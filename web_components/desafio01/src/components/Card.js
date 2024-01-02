class CardNews extends HTMLElement 
{
    constructor() 
    {
        super(); 
            const shadow = this.attachShadow({mode:'open'});
            shadow.appendChild(this.build());
            shadow.appendChild(this.styles());
    }

    // buildando os elementos
    build() 
    {
       // Criando as variaveis e setando as classes por meio do metodo setAttribute
       const componentRoot = document.createElement("div");
       componentRoot.setAttribute("class", "card") 

       const left = document.createElement("div");
       left.setAttribute("class", "left");

       const autor = document.createElement("span");
       autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

       const title = document.createElement("h1");
       title.textContent = this.getAttribute("title");

       const news = document.createElement("p");
       news.textContent = this.getAttribute("content");

       const right = document.createElement("div");
       right.setAttribute("class", "right") ;

       const img = document.createElement("img");
       img.src = this.getAttribute("img") || "assets/default.jpg";
       
        // Criando os filhos, left e right onde são dependendes do component ou  div maior, componentRoot
       componentRoot.appendChild(left);
       componentRoot.appendChild(right);

       right.appendChild(img);

       left.appendChild(autor);
       left.appendChild(title);
       left.appendChild(news);


       //Sempre retornar no final
       return componentRoot
    }
 
    // Definindo estilos
    styles()
    {
        const style = document.createElement("style");

        style.textContent = `
        .card {
            width: 90%;
            heigth: 90%;
            display: flex;
            flex-direction: row;
            -webkit-box-shadow: 23px 20px 31px -18px rgba(0,0,0,0.43);
            -moz-box-shadow: 23px 20px 31px -18px rgba(0,0,0,0.43);
            box-shadow: 23px 20px 31px -18px rgba(0,0,0,0.43);
            justify-content: space-between;
            border-radius: 4%;
        }
        
        a {
            text-decoration: none;
            color: black;
        }
        
        .left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-left: 4%;
            margin-right: 3%;
        }
        
        .left span {
            font-weight: 300;
            font-style: italic;
            display: flex;
            flex-direction: row;
        }
        
        .left img {
            border-radius: 60%;
            margin-top: 1%;
            display: flex;
            flex-direction: row;
        }
        
        .left h1 {
            font-size: 2rem;
            margin-top: 4%;
        }
        
        .left p {
            font-size: 0.9rem;
            color: rgb(95, 95, 95);
            padding-bottom: 4%;
        }
        
        .left, .right {
            border: 1px red;
        }
        
        .right img {
            position: relative;
            border-radius: 3%;
            box-sizing: border-box;
        }
            `
        return style;
    }
}

customElements.define('card-news', CardNews);