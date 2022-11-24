const all_Titles = [
    "Gameification",
    "Emerging Technology",
    "Whistle Blowing",
];

const all_Overviews = [
    "",
    "",
    "Whistle blowing is when an employee working at an organisation exposes their bad practises, particually when that information is in the public intrest, such as a company hurting the health of their customers or defrauding consumers.",
]

const all_Header1 = [
    "",
    "",
    "Why blow the whistle?",
]

const all_Para1 = [
    "",
    "",
    "",
]

const all_Header2 = [
    "",
    "",
    "Case Studies",
]

const all_Para2 = [
    "",
    "",
    "<ul><li>" + "Coffee" + "</li><li>" + "Tea" + "</li><li>" + "Milk" + "</li></ul>",
]

function update_Content(instance) {
    let title = all_Titles[instance];
    let overview = all_Overviews[instance];
    let left_Header = all_Header1[instance];
    let left_Para = all_Para1[instance];
    let right_Header = all_Header2[instance];
    let right_Para = all_Para2[instance];

    document.getElementById("title").innerHTML = title;
    document.getElementById("overview").innerHTML = overview;
    document.getElementById("left_Header").innerHTML = left_Header;
    document.getElementById("left_Para").innerHTML = left_Para;
    document.getElementById("right_Header").innerHTML = right_Header;
    document.getElementById("right_Para").innerHTML = right_Para;
}

update_Content(0);