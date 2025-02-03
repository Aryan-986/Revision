function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let viewStr = ""; // Declare viewStr outside to avoid scope issues

    if (views < 100000) {
        viewStr = (views / 1000).toFixed(1) + "k"; // Add .toFixed(1) for better formatting
    } else if (views > 1000000) {
        viewStr = (views / 1000000).toFixed(1) + "M";
    } else {
        viewStr = (views / 1000).toFixed(1) + "k";
    }

    let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} • ${viewStr} views • ${monthsOld} months ago</p>
            </div>
        </div>`;
    
    document.querySelector(".container").innerHTML += html; // Use += for efficiency
}

createCard("Introduction to Backend | Sigma Web developer Video #2",
    "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/an_webp/zZKgfWLPZ-I/mqdefault_6s.webp?du=3000&sqp=CPjBg70G&rs=AOn4CLCfTYS32LdVWjySCAkubuBrodOZzw"
);
