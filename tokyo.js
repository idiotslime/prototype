const isEnglish = new URLSearchParams(window.location.search).get("lang") === "en";

const pageText = {
    navHome: "Home",
    navSpots: "Spots",
    navFood: "Food",
    navTransport: "Transport",
    heroLead: "Tokyo brings together energetic streets, old neighborhoods, and delicious nights that continue long after sunset.",
    viewSpots: "Explore recommended spots <span>↓</span>",
    backDiagnosis: "Back to the quiz",
    moodTitle: "Vibrant,<br>always open.",
    moodText: "A city short trip<br>for 1 or 2 nights",
    spotsTitle: "Meet the many sides of Tokyo<br><span>Four areas to explore</span>",
    spotsLead: "From classic sights to neon nights, choose a Tokyo neighborhood that matches your mood.",
    asakusaName: "Asakusa",
    asakusaText: "Walk from Kaminarimon through Nakamise and discover old Tokyo alongside new views.",
    asakusaTag: "History / Streets",
    shibuyaName: "Shibuya",
    shibuyaText: "See Tokyo in motion from the scramble crossing, shops, and city viewpoints.",
    shibuyaTag: "Shopping / Views",
    akihabaraName: "Akihabara",
    akihabaraText: "Explore anime, games, and electronics in Tokyo's center of pop culture.",
    akihabaraTag: "Anime / Games",
    towerName: "Tokyo Tower",
    towerText: "Arrive around sunset and watch Tokyo's lights spread across the city.",
    towerTag: "Night Views / Photos",
    foodTitle: "Choose your craving<br><span>A Tokyo night out</span>",
    sushiName: "Sushi",
    sushiText: "From casual standing sushi to a special omakase, there is an option for every budget.",
    ramenName: "Ramen",
    ramenText: "Compare bowls of shoyu, shio, and rich tonkotsu ramen across the city.",
    monjaName: "Monjayaki",
    monjaText: "Gather around a hot plate in Tsukishima for Tokyo's distinctive comfort food.",
    transportTitle: "From your starting point<br><span>Getting to Tokyo</span>",
    transportLead: "Approximate one-way fare for one adult. Prices vary by season, booking time, and seat type.",
    originRegion: "Starting region",
    japan: "Japan",
    overseas: "Overseas",
    originPlace: "Choose your starting point",
    transportNote: "Approximate one-way fare for one adult in a typical season. Check the transport operator's official site for current fares and availability.",
    videoTitle: "A Tokyo short film will be<br>placed here in the future.",
    videoText: "A space for regional short videos that capture the sounds and atmosphere of the journey.",
    footerText: "Find the Japan trip that suits you."
};

const transportOptions = {
    tokyo: {
        title: "東京周辺から東京へ",
        route: "在来線・地下鉄",
        price: "¥200〜¥600",
        time: "約15〜60分"
    },
    yokohama: {
        title: "横浜から東京へ",
        route: "JR東海道線・京急線など",
        price: "¥310〜¥500",
        time: "約25〜45分"
    },
    nagoya: {
        title: "名古屋から東京へ",
        route: "東海道新幹線（のぞみ・自由席の目安）",
        price: "約¥10,560〜",
        time: "約1時間40分"
    },
    osaka: {
        title: "大阪から東京へ",
        route: "東海道新幹線（のぞみ・自由席の目安）",
        price: "約¥13,870〜",
        time: "約2時間30分"
    },
    sendai: {
        title: "仙台から東京へ",
        route: "東北新幹線（やまびこ・自由席の目安）",
        price: "約¥11,000〜",
        time: "約2時間"
    },
    sapporo: {
        title: "札幌から東京へ",
        route: "飛行機（新千歳空港〜羽田空港）",
        price: "約¥10,000〜",
        time: "飛行約1時間40分 + 空港アクセス"
    },
    naha: {
        title: "那覇から東京へ",
        route: "飛行機（那覇空港〜羽田空港）",
        price: "約¥12,000〜",
        time: "飛行約2時間30分"
    }
};

const englishTransportOptions = {
    tokyo: ["Around Tokyo to Tokyo", "Local train / subway", "¥200–¥600", "about 15–60 min"],
    yokohama: ["Yokohama to Tokyo", "JR Tokaido Line / Keikyu Line", "¥310–¥500", "about 25–45 min"],
    nagoya: ["Nagoya to Tokyo", "Tokaido Shinkansen (Nozomi, unreserved seat estimate)", "from about ¥10,560", "about 1 hr 40 min"],
    osaka: ["Osaka to Tokyo", "Tokaido Shinkansen (Nozomi, unreserved seat estimate)", "from about ¥13,870", "about 2 hr 30 min"],
    sendai: ["Sendai to Tokyo", "Tohoku Shinkansen (Yamabiko, unreserved seat estimate)", "from about ¥11,000", "about 2 hr"],
    sapporo: ["Sapporo to Tokyo", "Flight (New Chitose to Haneda)", "from about ¥10,000", "about 1 hr 40 min flight + airport access"],
    naha: ["Naha to Tokyo", "Flight (Naha to Haneda)", "from about ¥12,000", "about 2 hr 30 min flight"],
    seoul: ["Seoul to Tokyo", "Flight (Incheon / Gimpo to Narita / Haneda)", "from about ¥15,000", "about 2 hr 30 min flight + airport access"],
    taipei: ["Taipei to Tokyo", "Flight (Taoyuan to Narita / Haneda)", "from about ¥25,000", "about 3 hr 30 min flight"],
    hongkong: ["Hong Kong to Tokyo", "Flight (Hong Kong International to Narita / Haneda)", "from about ¥35,000", "about 4 hr 30 min flight"],
    singapore: ["Singapore to Tokyo", "Flight (Changi to Narita / Haneda)", "from about ¥45,000", "about 7 hr flight"],
    bangkok: ["Bangkok to Tokyo", "Flight (Suvarnabhumi to Narita / Haneda)", "from about ¥35,000", "about 6 hr flight"],
    losangeles: ["Los Angeles to Tokyo", "Flight (LAX to Narita / Haneda)", "from about ¥70,000", "about 11 hr flight"],
    london: ["London to Tokyo", "Flight (Heathrow to Narita / Haneda)", "from about ¥100,000", "about 14 hr flight"],
    sydney: ["Sydney to Tokyo", "Flight (Sydney to Narita / Haneda)", "from about ¥70,000", "about 10 hr flight"]
};

const overseasTransportOptions = {
    seoul: {
        title: "ソウルから東京へ",
        route: "飛行機（仁川・金浦空港〜成田・羽田空港）",
        price: "約¥15,000〜",
        time: "飛行約2時間30分 + 空港アクセス"
    },
    taipei: {
        title: "台北から東京へ",
        route: "飛行機（桃園空港〜成田・羽田空港）",
        price: "約¥25,000〜",
        time: "飛行約3時間30分"
    },
    hongkong: {
        title: "香港から東京へ",
        route: "飛行機（香港国際空港〜成田・羽田空港）",
        price: "約¥35,000〜",
        time: "飛行約4時間30分"
    },
    singapore: {
        title: "シンガポールから東京へ",
        route: "飛行機（チャンギ空港〜成田・羽田空港）",
        price: "約¥45,000〜",
        time: "飛行約7時間"
    },
    bangkok: {
        title: "バンコクから東京へ",
        route: "飛行機（スワンナプーム空港〜成田・羽田空港）",
        price: "約¥35,000〜",
        time: "飛行約6時間"
    },
    losangeles: {
        title: "ロサンゼルスから東京へ",
        route: "飛行機（LAX〜成田・羽田空港）",
        price: "約¥70,000〜",
        time: "飛行約11時間"
    },
    london: {
        title: "ロンドンから東京へ",
        route: "飛行機（ヒースロー空港〜成田・羽田空港）",
        price: "約¥100,000〜",
        time: "飛行約14時間"
    },
    sydney: {
        title: "シドニーから東京へ",
        route: "飛行機（シドニー空港〜成田・羽田空港）",
        price: "約¥70,000〜",
        time: "飛行約10時間"
    }
};

const originGroups = {
    japan: [
        ["tokyo", "東京周辺"],
        ["yokohama", "横浜"],
        ["nagoya", "名古屋"],
        ["osaka", "大阪"],
        ["sendai", "仙台"],
        ["sapporo", "札幌"],
        ["naha", "那覇"]
    ],
    overseas: [
        ["seoul", "ソウル"],
        ["taipei", "台北"],
        ["hongkong", "香港"],
        ["singapore", "シンガポール"],
        ["bangkok", "バンコク"],
        ["losangeles", "ロサンゼルス"],
        ["london", "ロンドン"],
        ["sydney", "シドニー"]
    ]
};

const englishOriginGroups = {
    japan: [["tokyo", "Around Tokyo"], ["yokohama", "Yokohama"], ["nagoya", "Nagoya"], ["osaka", "Osaka"], ["sendai", "Sendai"], ["sapporo", "Sapporo"], ["naha", "Naha"]],
    overseas: [["seoul", "Seoul"], ["taipei", "Taipei"], ["hongkong", "Hong Kong"], ["singapore", "Singapore"], ["bangkok", "Bangkok"], ["losangeles", "Los Angeles"], ["london", "London"], ["sydney", "Sydney"]]
};

const originType = document.getElementById("originType");
const originSelect = document.getElementById("originSelect");
const transportResult = document.getElementById("transportResult");

function updateOriginOptions() {
    const groups = isEnglish ? englishOriginGroups : originGroups;
    const options = groups[originType.value];
    originSelect.innerHTML = options.map(function([value, label]) {
        return `<option value="${value}">${label}</option>`;
    }).join("");
    renderTransport();
}

function renderTransport() {
    if (!originSelect.value) {
        return;
    }

    if (isEnglish) {
        const option = englishTransportOptions[originSelect.value];
        transportResult.innerHTML = `
            <h3>${option[0]}</h3>
            <p class="transport-route">${option[1]}</p>
            <strong class="transport-price">${option[2]}</strong>
            <span class="transport-time">Estimated travel time: ${option[3]}</span>
        `;
        return;
    }

    const data = originType.value === "overseas"
        ? overseasTransportOptions
        : transportOptions;
    const option = data[originSelect.value];
    transportResult.innerHTML = `
        <h3>${option.title}</h3>
        <p class="transport-route">${option.route}</p>
        <strong class="transport-price">${option.price}</strong>
        <span class="transport-time">所要時間の目安：${option.time}</span>
    `;
}

originType.addEventListener("change", updateOriginOptions);
originSelect.addEventListener("change", renderTransport);
updateOriginOptions();

function applyLanguage() {
    if (!isEnglish) {
        document.getElementById("japaneseLink").setAttribute("aria-current", "page");
        return;
    }

    document.documentElement.lang = "en";
    document.title = "Tokyo Travel Guide | Tabishirube";
    document.querySelector(".logo").setAttribute("aria-label", "Tabishirube home");
    document.querySelector(".logo").href = "index.html?lang=en";
    document.querySelector(".logo small").textContent = "Find your perfect Japan trip";
    document.querySelector(".tokyo-hero .eyebrow").textContent = "TOKYO / CITY GUIDE";
    document.querySelector(".tokyo-hero h1").innerHTML = "Tokyo, where you can<br><span>follow your interests.</span>";
    document.querySelectorAll(".eyebrow")[1].textContent = "RECOMMENDED SPOTS";
    document.querySelector(".tokyo-hero-note span").textContent = "TRIP MOOD";
    document.querySelector(".transport-section .eyebrow").textContent = "GETTING TO TOKYO";
    document.querySelector(".video-placeholder .eyebrow").textContent = "COMING SOON / TOKYO SHORT FILM";
    document.querySelector(".video-status").textContent = "VIDEO AREA";
    document.querySelector("footer .footer-logo").textContent = "Tabishirube";
    document.querySelector("footer small").textContent = "© 2026 Tabishirube";

    document.querySelectorAll("[data-i18n]").forEach(function(element) {
        const translation = pageText[element.dataset.i18n];
        if (translation) {
            element.innerHTML = translation;
        }
    });

    document.querySelector(".nav a").href = "index.html?lang=en";
    document.querySelector(".tokyo-hero-actions .sub-button").href = "index.html?lang=en#diagnosis";
    document.getElementById("japaneseLink").removeAttribute("aria-current");
    document.getElementById("englishLink").setAttribute("aria-current", "page");
}

document.getElementById("japaneseLink").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "tokyo.html?lang=ja";
});

document.getElementById("englishLink").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "tokyo.html?lang=en";
});

applyLanguage();
updateOriginOptions();
