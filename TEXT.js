const all_Titles = [
    "Gameification",
    "Emerging Technology",
    "Whistle Blowing"
];

const all_Overviews = [
    "",
    "",
    "Whistle blowing a way of bringing forth information about a company that is in the public interest.",
    ]


let instance = 2;
let title = all_Titles[instance];
let overview = all_Overviews[instance]


document.getElementById("title").innerHTML = title;
document.getElementById("overview").innerHTML = title;