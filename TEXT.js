const all_Titles = [
    "Gameification",
    "Emerging Technology",
    "Whistle Blowing",
];

const all_Overviews = [
    "TEMP MOVE TEXT HERE",
    "TEMP MOVE TEXT HERE",
    "Whistle blowing is when an employee working at an organisation exposes their bad practises, particually when that information is in the public intrest, such as a company hurting the health of their customers or defrauding consumers.",
]

const all_Header1 = [
    "TEMP MOVE TEXT HERE",
    "TEMP MOVE TEXT HERE",
    "What counts as whistleblowing?",
]

const all_Para1 = [
    "TEMP MOVE TEXT HERE",
    "TEMP MOVE TEXT HERE",
    "The term 'whistleblowing' is used when a worker reports wrongdoing. According to the government: 'As a whistleblower you're protected by law - you should not be treated unfairly or lose your job because you 'blow the whistle'."
    + " Valid complaints that constitute as whisteblowing are: "
    + "<ul><li>" +
    "Criminal offences such as fraud" +
    "</li><li>" +
    "Damage to the environment or people's health" +
    "</li><li>" +
    "Coverups" + "</li></ul>"
    + "Some grievances such as bullying or discrimination are not covered under whistleblowing law and you will not be protected. <strong>Whistleblowing law is only applicable when your case is in the public interest</strong>",
,
]

const all_Header2 = [
    "",
    "",
    "Case Studies",
]

const all_Para2 = [
    "",
    "",
    "<ul><li>" +
    "Frances Haugen - Former Facebook employee who blew the whistle, believing that Facebook was misleading the public on 'how it handles issues such as climate change, misinformation and hate speech'. " +
    "</li><li>" +
    "Tyler Schultz - Former Theranos employee who exposed their fraudulent blood testing" +
    "</li><li>" +
    "Cher Scarlett - A software engineer who worked at organisation such as apple and blizzard who advocated for fair labour practices.'" + "</li></ul>",
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