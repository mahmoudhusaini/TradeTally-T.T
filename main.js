
/*
    1.
   records = result.record | []; // Ensures that if record is missing in the response, records defaults to an empty array.
            
   2.
   
   throw new Error('Response Error');
            vs
   return Error('Response Error');   

   Summary
Use throw new Error(...) in try...catch blocks to handle errors properly. This will interrupt the function and ensure errors are caught in a catch block.
Avoid using return Error(...) if you want to handle errors with try...catch, as it simply returns an Error object without actually throwing it, which doesn’t trigger any catch block and requires manual checking of the returned value.

   3. 

   getApps()
.then(records => console.log(records))
.catch(error => console.error('Error:', error.message));
 vs

 async function initializeData() {
    x = await getApps();
}
initializeData().then(() => {
  
    console.log(x); // You can log it or access elements whenever needed
    console.log(x[0]); // Access the first element, for example
});





function processData() {
    try {
        throw new Error("Something went wrong!"); // This error is thrown
    } catch (error) {
        console.log("Caught error:", error.message); // Catch block catches the error
        // Optional: re-throw the error if you want it handled elsewhere
        throw error; // This would pass the error to the outer scope
    }
}

// Calling processData
try {
    processData();
} catch (error) {
    console.log("Handled error outside processData:", error.message); // Catches re-thrown error
}












*/



// add each record to an Application class
class Application {

}



// add finally 
// add apps in an array

async function getApps() {
    const url = `https://api.jsonbin.io/v3/qs/6735f17aacd3cb34a8a88664`;

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

// let allApps = [];
// async function fetchApps() {
//     try {
//         allApps = await getApps(); 
//     } catch (error) {
//         console.error("Error fetching apps:", error);
//     }
// }



// fetchApps();

// getApps() is it good to call it on the flow like that?

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
            window.open('file:///C:/Users/lbmah/Documents/v/Dell/VS%20Code%20Projects%20CSS/JavaScript/Practices/Import%20Export%20Products/TradeTally/TradeTally.html', '_blank');
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