function createFooter()
{
    let footerdiv = document.getElementById("footerdiv");

    footerdiv.innerHTML = "&copy;Perth2Go 2024 - Created and owned by Luka Stjepanovic (s224682444)<br>Contact: contact@perth2go.au<br>Last Updated: 07/05/2024";

    footerdiv.classList.add("container-fluid", "p-1", "bg-dark", "text-white", "text-center");
}

function createHeader()
{
    let headerdiv = document.getElementById("headerdiv");
    let topnav = document.createElement("nav");
    topnav.classList.add("nav", "nav-fill", "bg-success");

    let link1 = document.createElement("a");
    link1.innerHTML = "&#x2190;";
    link1.classList.add("nav-link", "text-white");
    link1.href = "javascript:window.history.back();";
    topnav.appendChild(link1);

    let link2 = document.createElement("a");
    link2.innerHTML = "<small>Login</small>";
    link2.classList.add("nav-link", "text-white", "text-center");
    link2.href = "#";
    topnav.appendChild(link2);

    let link3 = document.createElement("a");
    link3.innerHTML = "<small>Sign Up</small>";
    link3.classList.add("nav-link", "text-white", "align-right");
    link3.href = "#";
    topnav.appendChild(link3);

    let link4 = document.createElement("a");
    link4.innerHTML = "<small>Search</small>";
    link4.classList.add("nav-link", "text-white", "align-right");
    link4.href = "#";
    topnav.appendChild(link4);

    let banner = document.createElement("div");
    banner.classList.add("container-fluid", "bg-success-subtle",  "mx-auto", "text-center", "py-4");
    let homepagelink = document.createElement("a");
    homepagelink.href = "/";
    let image = document.createElement("img");
    image.classList.add("img-fluid");
    image.src = "/images/logo.png";
    image.alt = "The Perth2Go Logo";
    image.width=350;

    homepagelink.appendChild(image);
    banner.appendChild(homepagelink);
    topnav.appendChild(banner);

    let bottomnav = document.createElement("ul");
    bottomnav.classList.add("nav", "nav-fill", "bg-success");

    let bli1 = document.createElement("li");
    bli1.classList.add("nav-item");
    let blink1 = document.createElement("a");
    blink1.innerHTML = "<small>About Us</small>";
    blink1.classList.add("nav-link", "text-white");
    blink1.href="/aboutus.html";
    bli1.appendChild(blink1);
    bottomnav.appendChild(bli1);

    let bli2 = document.createElement("li");
    bli2.classList.add("nav-item");
    let blink2 = document.createElement("a");
    blink2.innerHTML = "<small>Contact Us</small>";
    blink2.classList.add("nav-link", "text-white");
    blink2.href="/contactus.html";
    bli2.appendChild(blink2);
    bottomnav.appendChild(bli2);

    let bli3 = document.createElement("li");
    bli3.classList.add("nav-item");
    let blink3 = document.createElement("a");
    blink3.innerHTML = "<small>|</small>";
    blink3.classList.add("nav-link", "text-white");
    bli3.appendChild(blink3);
    bottomnav.appendChild(bli3);

    let bli4 = document.createElement("li");
    bli4.classList.add("nav-item");
    let blink4 = document.createElement("a");
    blink4.innerHTML = "<small>Reviews</small>";
    blink4.classList.add("nav-link", "text-white");
    blink4.href="/reviews/";
    bli4.appendChild(blink4);
    bottomnav.appendChild(bli4);

    let bli5 = document.createElement("li");
    bli5.classList.add("nav-item");
    let blink5 = document.createElement("a");
    blink5.innerHTML = "<small>Rankings</small>";
    blink5.classList.add("nav-link", "text-white");
    blink5.href="/rankings/";
    bli5.appendChild(blink5);
    bottomnav.appendChild(bli5);

    let bli6 = document.createElement("li");
    bli6.classList.add("nav-item");
    let blink6 = document.createElement("a");
    blink6.innerHTML = "<small>News</small>";
    blink6.classList.add("nav-link", "text-white");
    blink6.href="/news/";
    bli6.appendChild(blink6);
    bottomnav.appendChild(bli6);

    let bli7 = document.createElement("li");
    bli7.classList.add("nav-item");
    let blink7 = document.createElement("a");
    blink7.innerHTML = "<small>Discussion Board</small>";
    blink7.classList.add("nav-link", "text-white");
    blink7.href="/discussionboard.html";
    bli7.appendChild(blink7);
    bottomnav.appendChild(bli7);

    headerdiv.appendChild(topnav);
    headerdiv.appendChild(bottomnav);

}

window.onload=function()
    {
    createFooter();
    createHeader();
    }
