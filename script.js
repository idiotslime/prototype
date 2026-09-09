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

const englishQuestionContent = [
    ["TRAVEL STYLE", "Who are you traveling with?", [["Solo", "I want to travel at my own pace"], ["Friends", "I want to have fun with everyone"], ["Family", "I want to relax and enjoy time with my family"], ["Partner", "I want to make memories together"]]],
    ["WHAT DO YOU WANT?", "What are you most excited about?", [["Nature", "Beautiful scenery and the great outdoors"], ["History and culture", "Japanese traditions and history"], ["Food", "I want to enjoy delicious food"], ["Shopping and city life", "I want to have fun in the city"], ["Hot springs", "I want to relax and recharge"], ["Anime and games", "I want to enjoy Japanese pop culture"], ["Sea and resorts", "I want to relax by the sea"]]],
    ["ATMOSPHERE", "What kind of place do you want to visit?", [["Famous sights", "I want to visit classic attractions"], ["Hidden gems", "I want to discover somewhere different"], ["Quiet places", "I want a peaceful trip"], ["Lively cities", "I enjoy energetic streets"]]],
    ["TRAVEL MOOD", "What kind of trip do you want?", [["Take it easy", "I do not want to pack my schedule"], ["Visit many places", "I want to see as much as possible"], ["Take photos", "I want to capture beautiful scenery"], ["Eat my way around", "Food is the main reason for my trip!"], ["Something extraordinary", "I want an experience unlike everyday life"]]],
    ["JAPAN", "What do you want to see in Japan?", [["Traditional culture", "Kimono, temples, shrines, and old streets"], ["A big city", "Skyscrapers and busy downtown streets"], ["Beautiful nature", "Mountains, lakes, flowers, and snow"], ["The sea", "Blue water and tropical scenery"], ["Food culture", "Local dishes unique to each region"]]],
    ["FOOD", "Which best describes your approach to food?", [["Local food comes first", "I travel to eat!"], ["I want to visit famous restaurants", "I want to find well-reviewed places"], ["I want to try many things", "A little bit of everything"], ["Sightseeing over food", "I want to see lots of places"]]],
    ["JAPANESE ATMOSPHERE", "What kind of atmosphere do you like?", [["Lively places", "Crowds are fine if the place is fun"], ["Peaceful places", "I want to take things slowly"], ["Mysterious places", "I love atmospheric scenery"], ["Stylish places", "I want photogenic places"], ["Old Japan", "I want to feel the spirit of Japan"]]],
    ["MEMORIES", "What matters most on a trip?", [["Unforgettable scenery", "I want to see spectacular views"], ["Delicious food", "Meals are an important part of memories"], ["Japanese culture", "I want an experience unique to Japan"], ["Activities", "I want to try many things"], ["Relaxation", "I want to forget everyday life"]]]
];

const englishRegions = {
    hokkaido: { name: "Hokkaido", catch: "A journey filled with vast nature and delicious food.", description: "Perfect for travelers who want grand landscapes, fresh food, and time away from the bustle of the city.", tags: ["Nature", "Scenery", "Food", "Relaxation"], spots: "Biei and Furano / Otaru / Sapporo / Hakodate", food: "Seafood bowls / Jingisukan / Soup curry", season: "Summer and winter", budget: "About ¥50,000–¥100,000" },
    tokyo: { name: "Tokyo", catch: "An exciting journey made possible by the big city.", description: "Enjoy shopping, food, anime, games, and nightlife all in one vibrant city.", tags: ["City", "Shopping", "Pop culture", "Nightlife"], spots: "Asakusa / Shibuya / Shinjuku / Akihabara / Tokyo Tower", food: "Sushi / Ramen / Monjayaki", season: "Spring and autumn", budget: "About ¥30,000–¥80,000" },
    kyoto: { name: "Kyoto", catch: "A journey into traditional Japanese culture.", description: "Perfect for travelers who want temples, traditional culture, and beautiful historic streets.", tags: ["History", "Tradition", "Temples", "Photography"], spots: "Kiyomizu-dera / Fushimi Inari / Arashiyama / Gion", food: "Yudofu / Matcha sweets / Kyoto cuisine", season: "Spring and autumn", budget: "About ¥30,000–¥80,000" },
    osaka: { name: "Osaka", catch: "Eat, play, and laugh on a lively journey.", description: "Enjoy local food, street dining, and an energetic city that is perfect for trips with friends.", tags: ["Food", "Street dining", "Lively", "Friends"], spots: "Dotonbori / Shinsekai / Osaka Castle / USJ", food: "Takoyaki / Okonomiyaki / Kushikatsu", season: "Spring and autumn", budget: "About ¥30,000–¥70,000" },
    fukuoka: { name: "Fukuoka", catch: "Enjoy great food and city walks with ease.", description: "A compact city where you can balance food, street stalls, and sightseeing.", tags: ["Food", "Street stalls", "City walks", "Compact"], spots: "Hakata / Tenjin / Nakasu / Dazaifu Tenmangu", food: "Hakata ramen / Motsunabe / Mentaiko", season: "Spring and autumn", budget: "About ¥20,000–¥60,000" },
    miyagi: { name: "Miyagi", catch: "A journey filled with sea views, nature, and delicious food.", description: "Enjoy Matsushima, Sendai food, and a comfortable balance of nature and city life.", tags: ["Sea", "Scenery", "Food", "Warmth"], spots: "Matsushima / Sendai / Kesennuma / Japan's Three Views", food: "Beef tongue / Oysters / Sendai miso ramen", season: "Spring and autumn", budget: "About ¥30,000–¥70,000" },
    nagano: { name: "Nagano", catch: "A refined journey of mountains and hot springs.", description: "Take your time with mountain scenery, hot springs, nature, and local flavors.", tags: ["Nature", "Hot springs", "Mountains", "Relaxation"], spots: "Karuizawa / Hakuba / Kamikochi / Obuse", food: "Shinshu soba / Oyaki / Local sake", season: "Spring, summer, and autumn", budget: "About ¥30,000–¥80,000" },
    ehime: { name: "Ehime", catch: "A relaxing journey through Shikoku's sea and hot springs.", description: "A calm destination where you can enjoy the sea, islands, hot springs, and local sweets.", tags: ["Sea", "Hot springs", "Quiet", "Food"], spots: "Dogo Onsen / Matsuyama / Uwajima / Shimanami Kaido", food: "Shimanami cuisine / Udon / Kamaboko", season: "Spring and autumn", budget: "About ¥20,000–¥60,000" },
    kumamoto: { name: "Kumamoto", catch: "A satisfying journey of hot springs and local food.", description: "A welcoming region with beautiful nature, hot springs, a historic castle, and approachable food culture.", tags: ["Hot springs", "Castle", "Street food", "Healing"], spots: "Kumamoto Castle / Aso / Kikuchi / Yufuin", food: "Kumamoto ramen / Horse sashimi / Local cuisine", season: "Spring and autumn", budget: "About ¥30,000–¥70,000" },
    okinawa: { name: "Okinawa", catch: "Enjoy blue seas and a slower pace of life.", description: "Perfect for travelers who want beaches, nature, resorts, and a break from everyday life.", tags: ["Sea", "Nature", "Resort", "Relaxation"], spots: "Churaumi Aquarium / Kokusai Street / Kouri Island / Ishigaki Island", food: "Okinawa soba / Taco rice / Sea grapes", season: "Spring, summer, and autumn", budget: "About ¥40,000–¥100,000" }
};


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

const englishLink =
    document.getElementById("englishLink");

const japaneseLink =
    document.getElementById("japaneseLink");

const isEnglish =
    new URLSearchParams(window.location.search).get("lang") === "en";

function updateLanguageSelection() {
    const activeLink = isEnglish ? englishLink : japaneseLink;
    const inactiveLink = isEnglish ? japaneseLink : englishLink;

    activeLink.setAttribute("aria-current", "page");
    inactiveLink.removeAttribute("aria-current");
}

updateLanguageSelection();

function getQuestions() {
    if (!isEnglish) {
        return questions;
    }

    return questions.map(function(question, questionIndex) {
        const translation = englishQuestionContent[questionIndex];

        return {
            ...question,
            category: translation[0],
            question: translation[1],
            choices: question.choices.map(function(choice, choiceIndex) {
                return {
                    ...choice,
                    text: translation[2][choiceIndex][0],
                    description: translation[2][choiceIndex][1]
                };
            })
        };
    });
}

function getRegions() {
    return isEnglish ? englishRegions : regions;
}

function applyLanguage() {
    if (!isEnglish) {
        return;
    }

    document.documentElement.lang = "en";
    document.title = "Tabishirube | Find Your Perfect Japan Trip";

    document.querySelector(".logo small").textContent =
        "Find your perfect Japan trip";

    document.querySelectorAll(".nav a")[0].textContent = "Home";
    document.querySelectorAll(".nav a")[1].textContent = "Travel Quiz";
    document.querySelectorAll(".nav a")[2].textContent = "Destinations";
    document.querySelectorAll(".nav a")[3].textContent = "About";

    document.querySelector(".hero h1").innerHTML =
        "Where do you<br><span>want to go?</span>";
    document.querySelector(".hero-description").innerHTML =
        "Answer a few questions and find<br>the perfect Japan trip for you.";
    startButton.innerHTML = "Start the travel quiz <span>→</span>";

    document.querySelector("#diagnosis h2").innerHTML =
        "Find a travel plan<br><span>made for you</span>";
    document.querySelector("#diagnosis .section-heading > p:last-child").innerHTML =
        "Answer 8 questions.<br>We will find a destination that matches your style.";
    backButton.textContent = "← Back";

    document.querySelector("#resultSection h2").innerHTML =
        "Your recommended<br><span>destination is...</span>";
    document.querySelectorAll(".result-info span")[0].textContent = "🏯 Recommended spots";
    document.querySelectorAll(".result-info span")[1].textContent = "🍴 Recommended food";
    document.querySelectorAll(".result-info span")[2].textContent = "🌸 Best season";
    document.querySelectorAll(".result-info span")[3].textContent = "💰 Estimated budget";
    document.querySelector(".result-alternatives-title").textContent =
        "You may also like these destinations";
    detailsButton.textContent = "Explore this region →";
    retryButton.textContent = "Take the quiz again";

    document.querySelector("#regions h2").innerHTML =
        "Explore by<br><span>destination</span>";
    document.querySelector("#regions .section-heading > p:last-child").textContent =
        "You can also explore Japan by choosing a region.";

    document.querySelector("#about h2").innerHTML =
        "Not because it is famous,<br><span>but because it suits you</span>";
    document.querySelector("#about .about-inner > p").innerHTML =
        "Tabishirube is a personal travel guide for people who are not sure where to go.<br><br>Answer a few questions and we will suggest a region of Japan that matches your preferences and travel style.<br><br>We hope this helps you discover a side of Japan you did not know.";

    document.querySelector("footer p").textContent =
        "Find the Japan trip that suits you.";
    document.querySelector(".language-switcher span").textContent = "Language";
    japaneseLink.textContent = "日本語";
    englishLink.textContent = "English";
    document.querySelector("footer small").textContent = "© 2026 Tabishirube";
}

applyLanguage();

if (englishLink) {
    englishLink.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "index.html?lang=en";
    });
}

if (japaneseLink) {
    japaneseLink.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "index.html?lang=ja";
    });
}


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

    const localizedQuestions = getQuestions();

    const question =
        localizedQuestions[currentQuestion];

    questionText.textContent =
        question.question;

    questionCategory.textContent =
        question.category;

    questionNumber.textContent =
        isEnglish
            ? `QUESTION ${currentQuestion + 1}`
            : `QUESTION ${currentQuestion + 1}`;

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
        localizedQuestions.length - 1
    ) {

        nextButton.textContent =
            isEnglish ? "See my results →" : "診断結果を見る →";

    } else {

        nextButton.textContent =
            isEnglish ? "Next →" : "次へ →";

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

    const localizedRegions = getRegions();

    const region =
        localizedRegions[regionKey];

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
                    isEnglish ? `#${index + 1}` : `${index + 1}位`;

                const name =
                    document.createElement("strong");

                name.textContent =
                    localizedRegions[key].name;

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

        if (region === "tokyo") {
            window.location.href = "tokyo.html";
            return;
        }

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
            isEnglish
                ? `A detailed page for ${getRegions()[region].name} can be added here.`
                : `${getRegions()[region].name}の詳細ページは、これから作成できます！`
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

    const localizedRegions = getRegions();

    regionGrid.innerHTML = "";


    for (
        const key in regions
    ) {

        const region =
            localizedRegions[key];


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
                ${isEnglish ? "Choose this destination →" : "この地域を診断結果にする →"}
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
