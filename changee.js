var btn = document.getElementById("theme-button");
var link2 = document.getElementById("theme-link");

btn.addEventListener("click", function () { ChangeTheme(); });

function ChangeTheme()
{
    let lightTheme = "resources/light.css";
    let darkTheme = "resources/dark.css";

    var currTheme = link2.getAttribute("href");
    var theme = "";

    if(currTheme == lightTheme)
    {
   	 currTheme = darkTheme;
   	 theme = "dark";
    }
    else
    {    
   	 currTheme = lightTheme;
   	 theme = "light";
    }

    link2.setAttribute("href", currTheme);

    Save(theme);
}
