import "./styles/home.css"; // Import Home styles

function loadHome() {
    const div1 = document.querySelector('.maincontent');
    div1.innerHTML = "";

    const insideDiv1 = document.createElement('div');
    insideDiv1.classList.add('home-firstSection');

    const mainHeading = document.createElement('div');
    mainHeading.textContent = "Isle Of Skye Restaurant";
    mainHeading.classList.add('home-titleHeading');
    div1.appendChild(mainHeading);

    const para1 = document.createElement('p');
    para1.classList.add('home-firstSectionpara');
    para1.textContent = "Located in the heart of the Isle of Skye, our restaurant offers a truly unique dining experience with locally sourced ingredients and stunning views.";

    insideDiv1.appendChild(para1);
    div1.appendChild(insideDiv1);

    const insideDiv2 = document.createElement('div');
    insideDiv2.classList.add('home-secondSection');

    const div1insideDiv2 = document.createElement('div');
    div1insideDiv2.classList.add('home-hrs');

    const heading1 = document.createElement('h2');
    heading1.textContent = "Hours";

    div1insideDiv2.appendChild(heading1);

    const div2insideDiv2 = document.createElement('div');
    div2insideDiv2.classList.add('home-times');

    const par1 = document.createElement('p');
    par1.textContent = "Sunday: 8am - 8pm";

    const par2 = document.createElement('p');
    par2.textContent = "Monday: 6am - 6pm";

    const par3 = document.createElement('p');
    par3.textContent = "Tuesday: 6am - 6pm";

    const par4 = document.createElement('p');
    par4.textContent = "Wednesday: 6am - 6pm";

    const par5 = document.createElement('p');
    par5.textContent = "Thursday: 6am - 10pm";

    const par6 = document.createElement('p');
    par6.textContent = "Friday: 6am - 10pm";

    const par7 = document.createElement('p');
    par7.textContent = "Saturday: 8am - 10pm";

    div2insideDiv2.appendChild(par1);
    div2insideDiv2.appendChild(par2);
    div2insideDiv2.appendChild(par3);
    div2insideDiv2.appendChild(par4);
    div2insideDiv2.appendChild(par5);
    div2insideDiv2.appendChild(par6);
    div2insideDiv2.appendChild(par7);

    insideDiv2.appendChild(div1insideDiv2);
    insideDiv2.appendChild(div2insideDiv2);

    div1.appendChild(insideDiv2);

    const insideDiv3 = document.createElement('div');
    insideDiv3.classList.add('home-thirdSection');

    const div1insideDiv3 = document.createElement('div')
    div1insideDiv3.classList.add('home-hrs');

    const heading2 = document.createElement('h2');
    heading2.textContent = "Location";

    const div2insideDiv3 = document.createElement('div');
    div2insideDiv3.classList.add("home-address");

    const pa1 = document.createElement('p');
    pa1.textContent = "Isle of Skye Candle Co. Visitor centre, Portree IV51 9EU, United Kingdom";

    div2insideDiv3.appendChild(pa1);
    div1insideDiv3.appendChild(heading2);

    insideDiv3.appendChild(div1insideDiv3);
    insideDiv3.appendChild(div2insideDiv3);

    div1.appendChild(insideDiv3);
}

export default loadHome;
