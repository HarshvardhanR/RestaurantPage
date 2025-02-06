import "./styles/contact.css"

function loadContact(){
    const div1 = document.querySelector('.maincontent');
    div1.innerHTML = "";

    const contactHeading = document.createElement('div');
    contactHeading.classList.add('contactHeading');
    contactHeading.textContent = "Contact Us!";
    div1.appendChild(contactHeading);

    const contactInsideDiv1 = document.createElement('div');
    contactInsideDiv1.classList.add('contactFirstSection');
    div1.appendChild(contactInsideDiv1);

    const contact1 = document.createElement('div');
    contact1.classList.add('contact1');
    contact1.textContent = "Mama Bear";
    contactInsideDiv1.appendChild(contact1);

    const contactInfo1 = document.createElement('div');
    contactInfo1.classList.add('contactInfo1');
    contactInsideDiv1.appendChild(contactInfo1);

    const position1 = document.createElement('p');
    position1.textContent = "Chef";

    const no1 = document.createElement('p');
    no1.textContent = "555-555-5554";

    const email1 = document.createElement('p');
    email1.textContent = "totallyRealEmail@notFake.com";

    contactInfo1.appendChild(position1);
    contactInfo1.appendChild(no1);
    contactInfo1.appendChild(email1);

    const contactInsideDiv2 = document.createElement('div');
    contactInsideDiv2.classList.add('contactFirstSection');
    div1.appendChild(contactInsideDiv2);

    const contact2 = document.createElement('div');
    contact2.classList.add('contact1');
    contact2.textContent = "Papa Bear";
    contactInsideDiv2.appendChild(contact2);

    const contactInfo2 = document.createElement('div');
    contactInfo2.classList.add('contactInfo1');
    contactInsideDiv2.appendChild(contactInfo2);

    const position2 = document.createElement('p');
    position2.textContent = "Manager";

    const no2 = document.createElement('p');
    no2.textContent = "555-555-5555";

    const email2 = document.createElement('p');
    email2.textContent = "perfectlyRealEmail@notFake.com";

    contactInfo2.appendChild(position2);
    contactInfo2.appendChild(no2);
    contactInfo2.appendChild(email2);

    const contactInsideDiv3 = document.createElement('div');
    contactInsideDiv3.classList.add('contactFirstSection');
    div1.appendChild(contactInsideDiv3);

    const contact3 = document.createElement('div');
    contact3.classList.add('contact1');
    contact3.textContent = "Baby Bear";
    contactInsideDiv3.appendChild(contact3);

    const contactInfo3 = document.createElement('div');
    contactInfo3.classList.add('contactInfo1');
    contactInsideDiv3.appendChild(contactInfo3);

    const position3 = document.createElement('p');
    position3.textContent = "Waiter";

    const no3 = document.createElement('p');
    no3.textContent = "555-555-5556";

    const email3 = document.createElement('p');
    email3.textContent = "totallyRealEmail@notFake.com";

    contactInfo3.appendChild(position3);
    contactInfo3.appendChild(no3);
    contactInfo3.appendChild(email3);

}

export default loadContact;