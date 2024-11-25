


// add finally 
// add apps in an array

async function getApps() {
    const url = `https://api.jsonbin.io/v3/qs/67442680e41b4d34e45a2441`;

    let records = [];

    try {
        let response = await fetch(url);
        if (response.ok) {
            let result = await response.json();
            records = result.record || [];

        } else {
            throw new Error('Response Error.');
        }
    } catch (error) {
        throw error;
    } finally {
        setTimeout(() => {
            console.log('spinner');
        }, 3000);
    }

    return records
}

getApps()
    .then((records) => {
        let gridContainer = document.querySelector('.apps-grid-container');

        records.forEach((app, index, array) => {
            let card = document.createElement('div');
            card.classList.add('card', `card-${app.name}`);

            gridContainer.appendChild(card);

            card.setAttribute('card-identifier', `identifier-${app.abbreviation}`);

            let appAbbreviation = document.createElement('h3');
            let abbreviationTxtNode = document.createTextNode(app.abbreviation);
            appAbbreviation.appendChild(abbreviationTxtNode);

            let appName = document.createElement('h4');
            let nameTxtNode = document.createTextNode(`${app.name}`);
            appName.appendChild(nameTxtNode);

            let appImage = document.createElement('img'); // Whar are other neccessary things for image
            appImage.src = `${app.imgpath}`

            let appDescription = document.createElement('h5');
            let appDescriptionTxtNode = document.createTextNode(`${app.description}`);
            appDescription.appendChild(appDescriptionTxtNode);

            card.appendChild(appAbbreviation);
            card.appendChild(appName);
            card.appendChild(appImage);
            card.appendChild(appDescription);
        });
    })
    .catch(error => console.log('Error:', error.message)); // Error handler



function navigateToApp(identifier) {
    switch (identifier) {
        case 'identifier-T.T':
            window.open(./TradeTally.html);
            break;
        case 'identifier-B.B':
            window.open('file:///C:/Users/lbmah/Documents/v/Dell/VS%20Code%20Projects%20CSS/JavaScript/Practices/Import%20Export%20Products/BlinkBill/BlinkBill.html', '_blank');
            break;

        case 'identifier-N.N':
            window.open('file:///C:/Users/lbmah/Documents/v/Dell/VS%20Code%20Projects%20CSS/JavaScript/Practices/Import%20Export%20Products/NumNation/NumNation.html', '_blank');
            break;
        case 'identifier-F.F':
            window.open('file:///C:/Users/lbmah/Documents/v/Dell/VS%20Code%20Projects%20CSS/JavaScript/Practices/Import%20Export%20Products/FolioForge/FolioForge.html', '_blank');
            break;
        case 'identifier-S.S':
            window.open('file:///C:/Users/lbmah/Documents/v/Dell/VS%20Code%20Projects%20CSS/JavaScript/Practices/Import%20Export%20Products/SpeakSync/SpeakSync.html', '_blank');
            break;

        case 'identifier-C.C':
            window.open('file:///C:/Users/lbmah/Documents/v/Dell/VS%20Code%20Projects%20CSS/JavaScript/Practices/Import%20Export%20Products/CraftCove/CraftCove.html', '_blank');
            break;
        case 'identifier-D.D':
            window.open('file:///C:/Users/lbmah/Documents/v/Dell/VS%20Code%20Projects%20CSS/JavaScript/Practices/Import%20Export%20Products/DineDeck/DineDeck.html', '_blank');
            break;
        default:
            break;
    }
}

document.addEventListener('click', (event) => {
    let targetCard = event.target;

    let classListLength = targetCard.classList.length;

    let isCard = targetCard.hasAttribute("card-identifier");

    let isCardComponent = targetCard.parentNode.hasAttribute("card-identifier");    // In an advanced way: console.log(event.target.closest('.card'));

    let identifier = '';



    if (isCard) {
        identifier = targetCard.getAttribute('card-identifier');
    } else if (isCardComponent) {
        identifier = targetCard.parentNode.getAttribute('card-identifier');
    }
    navigateToApp(identifier);

});
