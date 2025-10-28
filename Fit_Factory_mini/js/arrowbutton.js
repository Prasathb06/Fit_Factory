let calcScrollValue = () =>
{
    let scrollProgress = document.getElementById("scrollbar");
    let progressValue = document.getElementById("scrollbar-1");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if(pos > 100)
    {
        scrollProgress.style.display = "grid";
    }
    else
    {
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click",() => 
    {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#8B0000 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};


window.onscroll = calcScrollValue;
window.onload = calcScrollValue;