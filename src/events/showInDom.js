import getPromises from "../handlers/getPromises.js";
import extractValues from "../handlers/extractValues.js";
import dom from "../dom.js";
import createCard from "../components/createCard.js";


const showInDom = () => {
    
    dom.searchButton.addEventListener('click', () => {
        const ids = extractValues();
        dom.container.innerHTML = '';
        getPromises(ids)
            .then((response) => {
                response.forEach((data) => {
                    const newCard = createCard(data);
                    dom.container.appendChild(newCard);  
                }); 
            })
            .catch((error) => {
                console.error("Error fetching promises:", error);
            });
    });
};

export default showInDom;

