/* ==========================================
   日本旅行診断
========================================== */


/* ------------------------------------------
   地域データ
------------------------------------------ */

const regions = {

    hokkaido: {
        name: "北海道",

        catch: "広大な自然と美味しい食を楽しむ旅へ。",

        description:
            "雄大な自然、美しい景色、新鮮なグルメを楽しみたい人におすすめ。都会の喧騒から離れて、のびのびとした旅を楽しめます。",

        tags: [
            "自然",
            "絶景",
            "グルメ",
            "のんびり"
        ],

        spots:
            "美瑛・富良野 / 小樽 / 札幌 / 函館",

        food:
            "海鮮丼 / ジンギスカン / スープカレー",

        season:
            "夏・冬",

        budget:
            "5万円～10万円程度"
    },


    tokyo: {
        name: "東京",

        catch: "大都会だからこそできる、刺激的な旅へ。",

        description:
            "ショッピング、グルメ、アニメ・ゲーム、夜の街など、とにかく色々なことを楽しみたい人におすすめです。",

        tags: [
            "都会",
            "ショッピング",
            "サブカル",
            "夜遊び"
        ],

        spots:
            "浅草 / 渋谷 / 新宿 / 秋葉原 / 東京タワー",

        food:
            "寿司 / ラーメン / もんじゃ焼き",

        season:
            "春・秋",

        budget:
            "3万円～8万円程度"
    },


    kyoto: {
        name: "京都",

        catch: "昔ながらの日本文化に触れる旅へ。",

        description:
            "寺社仏閣、伝統文化、美しい街並みなど、日本らしい雰囲気を味わいたい人にぴったりです。",

        tags: [
            "歴史",
            "伝統文化",
            "寺社",
            "写真"
        ],

        spots:
            "清水寺 / 伏見稲荷大社 / 嵐山 / 祇園",

        food:
            "湯豆腐 / 抹茶スイーツ / 京料理",

        season:
            "春・秋",

        budget:
            "3万円～8万円程度"
    },


    osaka: {
        name: "大阪",

        catch: "食べて、遊んで、笑う。にぎやかな旅へ。",

        description:
            "ご当地グルメや食べ歩き、活気のある街を楽しみたい人におすすめ。友達との旅行にも向いています。",

        tags: [
            "グルメ",
            "食べ歩き",
            "にぎやか",
            "友達旅行"
        ],

        spots:
            "道頓堀 / 新世界 / 大阪城 / USJ",

        food:
            "たこ焼き / お好み焼き / 串カツ",

        season:
            "春・秋",

        budget:
            "3万円～7万円程度"
    },


    fukuoka: {
        name: "福岡",

        catch: "美味しいものと街歩きを気軽に楽しむ旅へ。",

        description:
            "グルメ、屋台、都市観光をバランスよく楽しみたい人におすすめ。比較的コンパクトに観光できます。",

        tags: [
            "グルメ",
            "屋台",
            "街歩き",
            "コンパクト"
        ],

        spots:
            "博多 / 天神 / 中洲 / 太宰府天満宮",

        food:
            "博多ラーメン / もつ鍋 / 明太子",

        season:
            "春・秋",

        budget:
            "2万円～6万円程度"
    },


    miyagi: {
        name: "宮城",

        catch: "海と自然の美しさと、食の彩りが揃う旅へ。",

        description:
            "松島の景色や仙台のグルメ、温かい街の雰囲気を楽しみたい人におすすめ。自然と都会のバランスがちょうど良い地域です。",

        tags: [
            "海",
            "絶景",
            "グルメ",
            "温かみ"
        ],

        spots:
            "松島 / 仙台 / 気仙沼 / 日本三景",

        food:
            "牛たん / 牡蠣 / 仙台味噌ラーメン",

        season:
            "春・秋",

        budget:
            "3万円～7万円程度"
    },


    nagano: {
        name: "長野",

        catch: "山と温泉の癒しを満喫する、上質な旅へ。",

        description:
            "豊かな自然、山の景色、温泉、地元の味をじっくり楽しみたい人にぴったりです。リラックスしたい旅行におすすめの地域です。",

        tags: [
            "自然",
            "温泉",
            "山岳",
            "リラックス"
        ],

        spots:
            "軽井沢 / 白馬 / 上高地 / 小布施",

        food:
            "信州そば / おやき / 地酒",

        season:
            "春・夏・秋",

        budget:
            "3万円～8万円程度"
    },


    ehime: {
        name: "愛媛",

        catch: "四国の海と温泉で、ゆったりとした時間を過ごす旅へ。",

        description:
            "海、島、温泉、和菓子など、落ち着いた旅をしたい人におすすめ。自然と食の魅力をじっくり味わえます。",

        tags: [
            "海",
            "温泉",
            "静かな旅",
            "グルメ"
        ],

        spots:
            "道後温泉 / 松山 / 宇和島 / 小豆島",

        food:
            "しまなみ料理 / うどん / かまぼこ",

        season:
            "春・秋",

        budget:
            "2万円～6万円程度"
    },


    kumamoto: {
        name: "熊本",

        catch: "温泉とご当地グルメで満足できる、安心感のある旅へ。",

        description:
            "美しい自然、温泉、歴史ある城と、親しみやすい食文化が揃う地域です。ゆったりしたい人や温泉好きにおすすめです。",

        tags: [
            "温泉",
            "城",
            "食べ歩き",
            "癒し"
        ],

        spots:
            "熊本城 / 阿蘇 / 菊池 / 由布院",

        food:
            "熊本ラーメン / 馬刺し / 水前寺成趣園の食事",

        season:
            "春・秋",

        budget:
            "3万円～7万円程度"
    },


    okinawa: {
        name: "沖縄",

        catch: "青い海とゆったりした時間を楽しむ旅へ。",

        description:
            "海、自然、リゾート、リラックスを重視する人におすすめ。日常を忘れて非日常を味わいたい人にぴったりです。",

        tags: [
            "海",
            "自然",
            "リゾート",
            "リラックス"
        ],

        spots:
            "美ら海水族館 / 国際通り / 古宇利島 / 石垣島",

        food:
            "沖縄そば / タコライス / 海ぶどう",

        season:
            "春・夏・秋",

        budget:
            "4万円～10万円程度"
    }

};


/* ------------------------------------------
   質問データ
------------------------------------------ */

const questions = [

    {
        category: "TRAVEL STYLE",

        question:
            "誰と旅行しますか？",

        choices: [

            {
                text: "一人",
                description: "自分のペースで旅をしたい",
                scores: {
                    tokyo: 2,
                    kyoto: 3,
                    fukuoka: 3,
                    hokkaido: 2,
                    nagano: 2,
                    ehime: 2,
                    kumamoto: 2,
                    miyagi: 2
                }
            },

            {
                text: "友達",
                description: "みんなで楽しく旅行したい",
                scores: {
                    osaka: 3,
                    tokyo: 3,
                    okinawa: 2,
                    fukuoka: 2,
                    miyagi: 3,
                    ehime: 2,
                    kumamoto: 2,
                    nagano: 1
                }
            },

            {
                text: "家族",
                description: "家族とゆっくり楽しみたい",
                scores: {
                    hokkaido: 3,
                    okinawa: 3,
                    kyoto: 2,
                    miyagi: 2,
                    kumamoto: 2,
                    nagano: 3,
                    ehime: 3
                }
            },

            {
                text: "恋人",
                description: "二人だけの思い出を作りたい",
                scores: {
                    kyoto: 3,
                    okinawa: 3,
                    tokyo: 2,
                    nagano: 3,
                    ehime: 3,
                    miyagi: 2,
                    kumamoto: 1
                }
            }

        ]
    },


    {
        category: "WHAT DO YOU WANT?",

        question:
            "旅行で一番楽しみたいことは？",

        choices: [

            {
                text: "自然",
                description: "美しい景色や大自然",
                scores: {
                    hokkaido: 4,
                    okinawa: 2,
                    nagano: 5,
                    miyagi: 3,
                    ehime: 2,
                    kyoto: 2
                }
            },

            {
                text: "歴史・文化",
                description: "日本の伝統や歴史",
                scores: {
                    kyoto: 5,
                    kumamoto: 2,
                    ehime: 2,
                    miyagi: 1
                }
            },

            {
                text: "グルメ",
                description: "美味しいものを食べたい",
                scores: {
                    osaka: 4,
                    fukuoka: 4,
                    hokkaido: 2,
                    miyagi: 3,
                    ehime: 3,
                    kumamoto: 3
                }
            },

            {
                text: "ショッピング・都会",
                description: "街で遊びたい",
                scores: {
                    tokyo: 5,
                    osaka: 2,
                    fukuoka: 2,
                    miyagi: 1
                }
            },

            {
                text: "温泉",
                description: "ゆっくり癒されたい",
                scores: {
                    hokkaido: 2,
                    kyoto: 2,
                    nagano: 4,
                    kumamoto: 4,
                    ehime: 3
                }
            },

            {
                text: "アニメ・ゲーム",
                description: "日本のサブカルを楽しみたい",
                scores: {
                    tokyo: 5
                }
            },

            {
                text: "海・リゾート",
                description: "海でゆっくりしたい",
                scores: {
                    okinawa: 5,
                    ehime: 3,
                    miyagi: 2
                }
            }

        ]
    },


    {
        category: "ATMOSPHERE",

        question:
            "どんな場所へ行きたい？",

        choices: [

            {
                text: "有名な観光地",
                description: "定番スポットを巡りたい",
                scores: {
                    tokyo: 2,
                    kyoto: 3,
                    osaka: 2,
                    miyagi: 2,
                    ehime: 2
                }
            },

            {
                text: "穴場",
                description: "人とは違う場所へ行きたい",
                scores: {
                    fukuoka: 3,
                    hokkaido: 3,
                    nagano: 3,
                    ehime: 3,
                    miyagi: 2
                }
            },

            {
                text: "人の少ない場所",
                description: "静かに旅行したい",
                scores: {
                    hokkaido: 4,
                    kyoto: 2,
                    nagano: 3,
                    ehime: 3,
                    kumamoto: 2
                }
            },

            {
                text: "にぎやかな都市",
                description: "活気のある街が好き",
                scores: {
                    tokyo: 4,
                    osaka: 4,
                    fukuoka: 3,
                    miyagi: 2
                }
            }

        ]
    },


    {
        category: "TRAVEL MOOD",

        question:
            "どんな旅行がしたい？",

        choices: [

            {
                text: "ゆっくりしたい",
                description: "予定を詰め込みたくない",
                scores: {
                    okinawa: 4,
                    hokkaido: 3,
                    nagano: 4,
                    ehime: 4,
                    kumamoto: 4
                }
            },

            {
                text: "色々な場所を巡りたい",
                description: "できるだけ多く観光したい",
                scores: {
                    tokyo: 3,
                    osaka: 3,
                    fukuoka: 3,
                    miyagi: 2,
                    ehime: 2
                }
            },

            {
                text: "写真を撮りたい",
                description: "美しい景色を残したい",
                scores: {
                    kyoto: 4,
                    hokkaido: 4,
                    okinawa: 4,
                    miyagi: 3,
                    ehime: 3,
                    nagano: 3
                }
            },

            {
                text: "食べ歩きしたい",
                description: "旅行の目的は食！",
                scores: {
                    osaka: 5,
                    fukuoka: 4,
                    miyagi: 3,
                    ehime: 2,
                    kumamoto: 2
                }
            },

            {
                text: "非日常を味わいたい",
                description: "普段と違う体験をしたい",
                scores: {
                    okinawa: 4,
                    hokkaido: 3,
                    nagano: 4,
                    ehime: 3,
                    kumamoto: 3
                }
            }

        ]
    },


    {
        category: "JAPAN",

        question:
            "日本の何を見てみたい？",

        choices: [

            {
                text: "伝統文化",
                description: "着物・寺社・古い街並みなど",
                scores: {
                    kyoto: 5,
                    kumamoto: 2,
                    ehime: 2
                }
            },

            {
                text: "大都会",
                description: "高層ビルや繁華街",
                scores: {
                    tokyo: 5
                }
            },

            {
                text: "美しい自然",
                description: "山・湖・花・雪など",
                scores: {
                    hokkaido: 5,
                    nagano: 5,
                    miyagi: 4,
                    ehime: 3
                }
            },

            {
                text: "海",
                description: "青い海や南国の景色",
                scores: {
                    okinawa: 5,
                    ehime: 4,
                    miyagi: 3
                }
            },

            {
                text: "食文化",
                description: "その土地ならではの料理",
                scores: {
                    osaka: 4,
                    fukuoka: 4,
                    miyagi: 3,
                    kumamoto: 3,
                    ehime: 2
                }
            }

        ]
    },


    {
        category: "FOOD",

        question:
            "食事について一番近いのは？",

        choices: [

            {
                text: "ご当地グルメ最優先",
                description: "食べるために旅行する！",
                scores: {
                    osaka: 4,
                    fukuoka: 4,
                    hokkaido: 3,
                    miyagi: 4,
                    kumamoto: 3,
                    ehime: 3
                }
            },

            {
                text: "有名店に行きたい",
                description: "評判のお店を探したい",
                scores: {
                    tokyo: 3,
                    kyoto: 3,
                    osaka: 2,
                    miyagi: 2
                }
            },

            {
                text: "食べ歩きたい",
                description: "色々なものを少しずつ",
                scores: {
                    osaka: 5,
                    fukuoka: 3,
                    miyagi: 3,
                    ehime: 3,
                    kumamoto: 2
                }
            },

            {
                text: "食事より観光重視",
                description: "色々な場所を見たい",
                scores: {
                    kyoto: 2,
                    tokyo: 2,
                    hokkaido: 2,
                    nagano: 2,
                    ehime: 2
                }
            }

        ]
    },


    {
        category: "JAPANESE ATMOSPHERE",

        question:
            "どんな雰囲気が好き？",

        choices: [

            {
                text: "活気のある場所",
                description: "人が多くても楽しい場所",
                scores: {
                    osaka: 4,
                    tokyo: 4,
                    fukuoka: 2,
                    miyagi: 2
                }
            },

            {
                text: "落ち着いた場所",
                description: "ゆったり過ごしたい",
                scores: {
                    kyoto: 3,
                    hokkaido: 3,
                    nagano: 4,
                    ehime: 4,
                    kumamoto: 3
                }
            },

            {
                text: "神秘的な場所",
                description: "幻想的な景色が好き",
                scores: {
                    kyoto: 3,
                    okinawa: 3,
                    nagano: 3,
                    ehime: 2,
                    kumamoto: 2
                }
            },

            {
                text: "おしゃれな場所",
                description: "写真映えする場所が好き",
                scores: {
                    tokyo: 4,
                    kyoto: 3,
                    miyagi: 2,
                    ehime: 2
                }
            },

            {
                text: "昔ながらの日本",
                description: "日本らしさを感じたい",
                scores: {
                    kyoto: 5,
                    kumamoto: 2,
                    ehime: 2
                }
            }

        ]
    },


    {
        category: "MEMORIES",

        question:
            "旅行で一番大切なことは？",

        choices: [

            {
                text: "思い出に残る景色",
                description: "絶景を見たい",
                scores: {
                    hokkaido: 4,
                    okinawa: 4,
                    kyoto: 3,
                    miyagi: 4,
                    nagano: 3,
                    ehime: 3
                }
            },

            {
                text: "美味しい食べ物",
                description: "食事も大切な思い出",
                scores: {
                    osaka: 4,
                    fukuoka: 4,
                    miyagi: 3,
                    kumamoto: 3,
                    ehime: 2
                }
            },

            {
                text: "日本文化",
                description: "日本ならではの経験",
                scores: {
                    kyoto: 5,
                    kumamoto: 2,
                    ehime: 2,
                    miyagi: 1
                }
            },

            {
                text: "アクティビティ",
                description: "色々なことを体験したい",
                scores: {
                    okinawa: 4,
                    tokyo: 3,
                    miyagi: 3,
                    nagano: 3,
                    ehime: 2
                }
            },

            {
                text: "リラックス",
                description: "日常を忘れたい",
                scores: {
                    okinawa: 5,
                    hokkaido: 3,
                    nagano: 4,
                    ehime: 4,
                    kumamoto: 4
                }
            }

        ]
    }

];


/* ------------------------------------------
   変数
------------------------------------------ */

let currentQuestion = 0;

let selectedChoice = null;

let answers = [];

let isDiagnosisResult = false;

let scores = {
    hokkaido: 0,
    tokyo: 0,
    kyoto: 0,
    osaka: 0,
    fukuoka: 0,
    miyagi: 0,
    nagano: 0,
    ehime: 0,
    kumamoto: 0,
    okinawa: 0
};


/* ------------------------------------------
   HTML要素
------------------------------------------ */

const startButton =
    document.getElementById("startButton");

const nextButton =
    document.getElementById("nextButton");

const backButton =
    document.getElementById("backButton");

const retryButton =
    document.getElementById("retryButton");

const detailsButton =
    document.getElementById("detailsButton");

const questionText =
    document.getElementById("questionText");

const questionCategory =
    document.getElementById("questionCategory");

const choices =
    document.getElementById("choices");

const questionNumber =
    document.getElementById("questionNumber");

const progressPercent =
    document.getElementById("progressPercent");

const progressFill =
    document.getElementById("progressFill");

const resultSection =
    document.getElementById("resultSection");

const resultRegion =
    document.getElementById("resultRegion");

const resultCatch =
    document.getElementById("resultCatch");

const resultDescription =
    document.getElementById("resultDescription");

const resultTags =
    document.getElementById("resultTags");

const resultSpots =
    document.getElementById("resultSpots");

const resultFood =
    document.getElementById("resultFood");

const resultSeason =
    document.getElementById("resultSeason");

const resultBudget =
    document.getElementById("resultBudget");

const resultAlternatives =
    document.getElementById("resultAlternatives");

const regionGrid =
    document.getElementById("regionGrid");


/* ------------------------------------------
   診断開始
------------------------------------------ */

startButton.addEventListener("click", function() {

    document.getElementById("diagnosis")
        .scrollIntoView({
            behavior: "smooth"
        });

    setTimeout(function() {
        showQuestion();
    }, 400);

});


/* ------------------------------------------
   質問を表示
------------------------------------------ */

function showQuestion() {

    const question =
        questions[currentQuestion];

    questionText.textContent =
        question.question;

    questionCategory.textContent =
        question.category;

    questionNumber.textContent =
        `QUESTION ${currentQuestion + 1}`;

    const percentage =
        Math.round(
            ((currentQuestion) /
            questions.length) * 100
        );

    progressPercent.textContent =
        `${percentage}%`;

    progressFill.style.width =
        `${percentage}%`;


    choices.innerHTML = "";

    selectedChoice =
        answers[currentQuestion] ?? null;


    question.choices.forEach(
        function(choice, index) {

            const button =
                document.createElement("button");

            button.type = "button";

            button.className = "choice";

            if (
                selectedChoice === index
            ) {
                button.classList.add("selected");
            }


            button.innerHTML = `
                <span class="choice-title">
                    ${choice.text}
                </span>

                <span class="choice-description">
                    ${choice.description}
                </span>
            `;


            button.addEventListener(
                "click",
                function() {

                    document
                        .querySelectorAll(".choice")
                        .forEach(
                            function(item) {
                                item.classList.remove(
                                    "selected"
                                );
                            }
                        );

                    button.classList.add(
                        "selected"
                    );

                    selectedChoice = index;

                    nextButton.disabled = false;
                }
            );


            choices.appendChild(button);

        }
    );


    nextButton.disabled =
        selectedChoice === null;


    if (currentQuestion === 0) {

        backButton.style.visibility =
            "hidden";

    } else {

        backButton.style.visibility =
            "visible";

    }


    if (
        currentQuestion ===
        questions.length - 1
    ) {

        nextButton.textContent =
            "診断結果を見る →";

    } else {

        nextButton.textContent =
            "次へ →";

    }

}


/* ------------------------------------------
   次へ
------------------------------------------ */

nextButton.addEventListener(
    "click",
    function() {

        if (selectedChoice === null) {
            return;
        }


        answers[currentQuestion] =
            selectedChoice;


        if (
            currentQuestion <
            questions.length - 1
        ) {

            currentQuestion++;

            showQuestion();

        } else {

            isDiagnosisResult = true;
            calculateResult();

        }

    }
);


/* ------------------------------------------
   戻る
------------------------------------------ */

backButton.addEventListener(
    "click",
    function() {

        if (currentQuestion > 0) {

            answers[currentQuestion] =
                selectedChoice;

            currentQuestion--;

            showQuestion();

        }

    }
);


/* ------------------------------------------
   診断結果を計算
------------------------------------------ */

function calculateResult() {

    // スコアをリセット

    scores = {
        hokkaido: 0,
        tokyo: 0,
        kyoto: 0,
        osaka: 0,
        fukuoka: 0,
        miyagi: 0,
        nagano: 0,
        ehime: 0,
        kumamoto: 0,
        okinawa: 0
    };


    // 回答を集計

    answers.forEach(
        function(answer, questionIndex) {

            if (answer === undefined) {
                return;
            }

            const selected =
                questions[
                    questionIndex
                ].choices[answer];


            for (
                const region in selected.scores
            ) {

                scores[region] +=
                    selected.scores[region];

            }

        }
    );


    // 一番点数の高い地域を取得

    let bestRegion = "kyoto";

    let highestScore =
        scores[bestRegion];


    for (
        const region in scores
    ) {

        if (
            scores[region] >
            highestScore
        ) {

            highestScore =
                scores[region];

            bestRegion =
                region;

        }

    }


    showResult(bestRegion);

}


/* ------------------------------------------
   結果を表示
------------------------------------------ */

function showResult(regionKey) {

    const region =
        regions[regionKey];

    const resultAlternativesWrap =
        document.querySelector(".result-alternatives");

    const rankedRegions =
        Object.entries(scores)
            .sort(function(a, b) {
                return b[1] - a[1];
            })
            .slice(0, 3);


    resultRegion.textContent =
        region.name;

    resultCatch.textContent =
        region.catch;

    resultDescription.textContent =
        region.description;

    resultSpots.textContent =
        region.spots;

    resultFood.textContent =
        region.food;

    resultSeason.textContent =
        region.season;

    resultBudget.textContent =
        region.budget;


    resultTags.innerHTML = "";


    region.tags.forEach(
        function(tag) {

            const span =
                document.createElement("span");

            span.className =
                "result-tag";

            span.textContent =
                `# ${tag}`;

            resultTags.appendChild(
                span
            );

        }
    );


    resultAlternatives.innerHTML = "";

    if (isDiagnosisResult && resultAlternativesWrap) {

        resultAlternativesWrap.style.display = "block";

        rankedRegions.forEach(
            function([key, point], index) {

                const item =
                    document.createElement("div");

                item.className =
                    "result-alternative-item";

                const rankLabel =
                    document.createElement("span");

                rankLabel.className =
                    "result-alternative-rank";

                rankLabel.textContent =
                    `${index + 1}位`;

                const name =
                    document.createElement("strong");

                name.textContent =
                    regions[key].name;

                const score =
                    document.createElement("small");

                score.textContent =
                    `(${point}pt)`;

                item.appendChild(rankLabel);
                item.appendChild(name);
                item.appendChild(score);

                resultAlternatives.appendChild(
                    item
                );

            }
        );

    } else if (resultAlternativesWrap) {

        resultAlternativesWrap.style.display = "none";

    }


    // 詳細ページ用に地域を保存

    detailsButton.dataset.region =
        regionKey;


    resultSection.classList.add(
        "show"
    );


    resultSection.scrollIntoView({
        behavior: "smooth"
    });

}


/* ------------------------------------------
   詳細ページボタン
------------------------------------------ */

detailsButton.addEventListener(
    "click",
    function() {

        const region =
            detailsButton.dataset.region;

        /*
         * 現段階では詳細ページがまだないため、
         * 仮の案内を表示します。
         *
         * 後から
         * kyoto.html
         * tokyo.html
         * などに変更できます。
         */

        alert(
            `${regions[region].name}の詳細ページは、これから作成できます！`
        );

    }
);


/* ------------------------------------------
   もう一度診断
------------------------------------------ */

retryButton.addEventListener(
    "click",
    function() {

        currentQuestion = 0;

        selectedChoice = null;

        answers = [];


        scores = {
            hokkaido: 0,
            tokyo: 0,
            kyoto: 0,
            osaka: 0,
            fukuoka: 0,
            miyagi: 0,
            nagano: 0,
            ehime: 0,
            kumamoto: 0,
            okinawa: 0
        };


        resultSection.classList.remove(
            "show"
        );


        document
            .getElementById("diagnosis")
            .scrollIntoView({
                behavior: "smooth"
            });


        setTimeout(
            showQuestion,
            400
        );

    }
);


/* ------------------------------------------
   地域一覧
------------------------------------------ */

function createRegionCards() {

    regionGrid.innerHTML = "";


    for (
        const key in regions
    ) {

        const region =
            regions[key];


        const card =
            document.createElement("div");

        card.className =
            "region-card";


        card.innerHTML = `
            <h3>${region.name}</h3>

            <p>
                ${region.catch}
            </p>

            <button type="button">
                この地域を診断結果にする →
            </button>
        `;


        const button =
            card.querySelector("button");


        button.addEventListener(
            "click",
            function() {

                isDiagnosisResult = false;
                showResult(key);

            }
        );


        regionGrid.appendChild(
            card
        );

    }

}


/* ------------------------------------------
   初期化
------------------------------------------ */

createRegionCards();

showQuestion();
